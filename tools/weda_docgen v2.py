# tools/weda_docgen.py
# 功能：
#   1) 扫描 WeDa 导出的小程序目录（--src miniapp），识别每个页面 handlers、云函数调用、集合引用
#   2) 为每个页面生成 docs/pages/<pageId>/spec.md（含 auto+keep 区块）；二次运行仅更新 auto 区块
#   3) 为每个云函数生成 cloudfunctions/<fn>/README.md 草稿（含 auto+keep）；二次运行仅更新 auto 区块
#   4) 生成 docs/INVENTORY.md、docs/_chatgpt-index.yml（覆盖写入）
#
# “不覆盖手写段落”的规则：
#   - 你手写的内容请放在 keep 区块内：
#       <!--doc:keep--> ... <!--/doc:keep-->
#     或带标签：
#       <!--doc:keep:component-tree--> ... <!--/doc:keep:component-tree-->
#   - 本脚本生成的“机器区块”都包在 auto 区块里：
#       <!--doc:auto:handlers--> ... <!--/doc:auto:handlers-->
#     二次运行时，仅替换 auto 区块内容；其它内容（含 keep）不动。
#
# 依赖：pip install pyyaml
#
# 用法示例：
#   python tools/weda_docgen.py --src miniapp --out . --entry u_shou_hu_home
#
# 目录约定（保持你导出的目录结构不动）：
#   miniapp/<pageId>/index.js
#   miniapp/<pageId>/lowcode/handler/*.js

import argparse, os, re, json, pathlib, sys
from collections import defaultdict

try:
    import yaml  # type: ignore
except ImportError:
    print("缺少依赖：pyyaml。请先运行：pip install pyyaml")
    sys.exit(1)

# --------- 正则与常量 ---------
CF_RE = re.compile(r"callFunction\(\s*{\s*name\s*:\s*['\"]([^'\"]+)['\"]")
DB_RE = re.compile(r"db\.collection\(\s*['\"]([^'\"]+)['\"]\s*\)")
HANDLER_DIR = "lowcode/handler"

# keep / auto 区块正则
KEEP_START = re.compile(r"<!--\s*doc:keep(?::([a-zA-Z0-9_\-]+))?\s*-->", re.I)
KEEP_END   = re.compile(r"<!--\s*/doc:keep(?::([a-zA-Z0-9_\-]+))?\s*-->", re.I)
AUTO_START = re.compile(r"<!--\s*doc:auto:([a-zA-Z0-9_\-]+)\s*-->", re.I)
AUTO_END   = re.compile(r"<!--\s*/doc:auto:([a-zA-Z0-9_\-]+)\s*-->", re.I)

def read_text(path: pathlib.Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except Exception:
        return ""

def write_text(path: pathlib.Path, content: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")

def ensure_dir(p: pathlib.Path):
    p.mkdir(parents=True, exist_ok=True)

def list_pages(src_root: pathlib.Path):
    pages = []
    for d in sorted([x for x in src_root.iterdir() if x.is_dir()]):
        if (d/"index.js").exists():
            pages.append(d.name)
    return pages

def scan_page(page_dir: pathlib.Path):
    """返回 handlers 列表、云函数集合、集合名集合"""
    handlers = []
    cfs = set()
    cols = set()
    hdir = page_dir / HANDLER_DIR
    if hdir.exists():
        for js in sorted(hdir.glob("*.js")):
            handlers.append(js.stem)
            txt = read_text(js)
            for m in CF_RE.finditer(txt):
                cfs.add(m.group(1))
            for m in DB_RE.finditer(txt):
                cols.add(m.group(1))
    return handlers, sorted(cfs), sorted(cols)

# --------- 模板：包含 auto 区块与 keep 占位 ---------
def auto_block(label: str, body: str) -> str:
    return f"<!--doc:auto:{label}-->\n{body}\n<!--/doc:auto:{label}-->"

def keep_placeholder(label: str, hint: str = "") -> str:
    inner = (hint + "\n") if hint else ""
    return f"<!--doc:keep:{label}-->\n{inner}<!--/doc:keep:{label}-->"

def render_spec_seed(pageId: str, handlers_md: str, cfs_md: str, cols_md: str) -> str:
    return f"""# 页面规范：{pageId}

## 1. Meta
- 页面 ID：{pageId}
- 作用/目标：<TODO>
- 权限：<TODO>

## 2. 组件树 / 绑定
{keep_placeholder("component-tree", "在这里补充组件树、关键绑定表达式（可暂时留空）")}
{auto_block("bindings", "- （生成器目前仅列事件→handler，详细绑定请在上方 keep 段补充）")}

## 3. 事件与 handlers
{auto_block("handlers", handlers_md)}
{keep_placeholder("handlers-notes", "在这里补充 handlers 之间的协作与副作用说明（可暂时留空）")}

## 4. 依赖云函数（自动扫描）
{auto_block("cloudfunctions", cfs_md)}
{keep_placeholder("cf-notes", "在这里备注云函数的入参/出参差异、错误码等（可暂时留空）")}

## 5. 可能用到的数据集合（静态分析猜测）
{auto_block("collections-guess", cols_md)}
{keep_placeholder("collections-notes", "在这里说明字段意义/索引/唯一约束（可暂时留空）")}

## 6. 状态（State）
{keep_placeholder("state", "在这里描述 $page.state / $w.app.state，派生状态计算规则（可暂时留空）")}

## 7. UX / 校验 / 导航
{keep_placeholder("ux", "在这里描述正常/异常流、校验规则、跳转路径（可暂时留空）")}

## 8. 变更记录
{keep_placeholder("changelog", "- 2025-08-xx: 初稿")}
"""

def render_cf_readme_seed(fn: str, ref_pages_md: str) -> str:
    return f"""# {fn}

**职责**：<TODO — 从以下页面引用而来，完善后作为契约基准>

## 入参（data）
{keep_placeholder("request", "示例请求体（JSON），必要字段请用注释说明")}

## 出参（result）
{keep_placeholder("response", "示例返回体（JSON），包含 code/data/message 等")}

## 错误码
{keep_placeholder("errors", "- 1001: <说明>\n- 2001: <说明>")}

## 副作用
{keep_placeholder("effects", "- 写：<集合名>\n- 读：<集合名>")}

## 参考页面
{auto_block("refs", ref_pages_md)}
"""

# --------- 区块解析与合并 ---------
def find_blocks(text: str, start_re: re.Pattern, end_re: re.Pattern):
    """返回 {label: [(full_start, full_end, inner_start, inner_end)]}"""
    blocks = defaultdict(list)
    for s in start_re.finditer(text):
        label = s.group(1) or "__default__"
        # 从 start 位置向后找 end
        e = end_re.search(text, s.end())
        if not e:
            continue
        blocks[label].append((s.start(), e.end(), s.end(), e.start()))
    return blocks

def extract_block_inner(text: str, start_re: re.Pattern, end_re: re.Pattern):
    """返回 {label: [inner_text, ...]}"""
    res = defaultdict(list)
    for label, regions in find_blocks(text, start_re, end_re).items():
        for (fs, fe, is_, ie) in regions:
            res[label].append(text[is_:ie])
    return res

def replace_blocks(existing: str, new_auto: str, label: str):
    """
    在 existing 中把某个 auto:label 的区块替换成 new_auto 中对应区块的内容；
    如果 existing 没有该 auto 区块，则在末尾追加 new_auto 的该区块。
    """
    ex_blocks = find_blocks(existing, AUTO_START, AUTO_END)
    new_blocks = find_blocks(new_auto, AUTO_START, AUTO_END)
    if label not in new_blocks:
        return existing  # new 里都没有该区块，跳过

    # 取 new 的第一个该 label 区块的完整文本
    s, e, _, _ = new_blocks[label][0]
    new_full = new_auto[s:e]

    if label in ex_blocks and ex_blocks[label]:
        # 用 new_full 替换 existing 的第一个该标签区块
        fs, fe, _, _ = ex_blocks[label][0]
        return existing[:fs] + new_full + existing[fe:]
    else:
        # existing 里没有该区块：直接在末尾追加一个分隔与 new_full
        sep = "\n\n---\n"
        return existing + sep + new_full + "\n"

def merge_with_keep_and_auto(path: pathlib.Path, new_content: str):
    """
    如果文件不存在：直接写入 new_content
    如果存在：
      - 保留所有 keep 区块原文
      - 仅替换/追加 new_content 中的 auto 区块
      - 其它非 auto/keep 文本以 existing 为准（避免覆盖手写）
    """
    if not path.exists():
        write_text(path, new_content)
        return

    existing = read_text(path)

    # 1) 先把 existing 作为基底；我们只对 auto 区块做“选择性替换”
    merged = existing

    # 2) 找出 new_content 里有哪些 auto 标签
    labels = []
    for m in AUTO_START.finditer(new_content):
        labels.append(m.group(1))
    labels = list(dict.fromkeys(labels))  # 去重保序

    # 3) 逐个标签替换/追加
    for lb in labels:
        merged = replace_blocks(merged, new_content, lb)

    # 4) 保留 keep：我们没有动 existing 的 keep，因此天然保留
    write_text(path, merged)

# --------- 主流程 ---------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True, help="WeDa 导出根目录，如 miniapp")
    ap.add_argument("--out", default=".", help="仓库根目录（写 docs/ cloudfunctions/ ）")
    ap.add_argument("--entry", default="", help="入口页 pageId（选填）")
    args = ap.parse_args()

    src = pathlib.Path(args.src).resolve()
    out = pathlib.Path(args.out).resolve()

    # 1) 扫描页面
    page_ids = list_pages(src)
    cf_usage = defaultdict(set)
    col_usage = defaultdict(set)
    handlers_map = {}

    for pid in page_ids:
        handlers, cfs, cols = scan_page(src / pid)
        handlers_map[pid] = handlers
        for fn in cfs:
            cf_usage[pid].add(fn)
        for c in cols:
            col_usage[pid].add(c)

    # 2) 生成/合并每个页面的 spec.md
    for pid in page_ids:
        handlers_md = "\n".join([f"- `{h}(e)`" for h in handlers_map[pid]]) or "- （未检测到 handler）"
        cfs_md = "\n".join([f"- `{fn}`" for fn in sorted(cf_usage[pid])]) or "- （未检测到云函数调用）"
        cols_md = "\n".join([f"- `{c}`" for c in sorted(col_usage[pid])]) or "- （未检测到集合引用）"

        spec_new = render_spec_seed(pid, handlers_md, cfs_md, cols_md)
        spec_path = out / "docs" / "pages" / pid / "spec.md"
        merge_with_keep_and_auto(spec_path, spec_new)

    # 3) 生成/合并云函数 README 草稿
    fn_to_pages = defaultdict(set)
    for pid, fns in cf_usage.items():
        for fn in fns:
            fn_to_pages[fn].add(pid)

    for fn, pages in sorted(fn_to_pages.items()):
        ref_pages_md = "\n".join([f"- docs/pages/{p}/spec.md" for p in sorted(pages)])
        readme_new = render_cf_readme_seed(fn, ref_pages_md)
        readme_path = out / "cloudfunctions" / fn / "README.md"
        merge_with_keep_and_auto(readme_path, readme_new)

    # 4) 生成 INVENTORY（覆盖写）
    inv_lines = [
        "# INVENTORY（现有资产盘点，自动生成草稿）\n",
        "## 小程序 Pages\n",
        "| pageId | handlers数 | 云函数数 | 集合数 |\n|---|---:|---:|---:|"
    ]
    for pid in page_ids:
        inv_lines.append(f"| {pid} | {len(handlers_map[pid])} | {len(cf_usage[pid])} | {len(col_usage[pid])} |")

    inv_lines.append("\n## Cloud Functions（从页面扫描得出）\n")
    for fn, used_pages in sorted(fn_to_pages.items()):
        inv_lines.append(f"- `{fn}` ← {', '.join(sorted(used_pages))}")

    write_text(out / "docs" / "INVENTORY.md", "\n".join(inv_lines) + "\n")

    # 5) 生成 _chatgpt-index.yml（覆盖写）
    idx = {
        "project": "yihu-repo",
        "version": 1,
        "entry": ["README.md", "docs/OVERVIEW.md", "docs/INVENTORY.md"],
        "pages": {},
        "functions": [],
    }
    for pid in page_ids:
        idx["pages"][pid] = {
            "spec": f"docs/pages/{pid}/spec.md",
            "handlers": f"miniapp/{pid}/lowcode/handler/",
            "contracts": sorted([f"cloudfunctions/{fn}/README.md" for fn in cf_usage[pid]])
        }
    for fn in sorted(fn_to_pages.keys()):
        idx["functions"].append({"name": fn, "path": f"cloudfunctions/{fn}/README.md"})

    write_text(out / "docs" / "_chatgpt-index.yml", yaml.safe_dump(idx, allow_unicode=True, sort_keys=False))

    if args.entry:
        print(f"[OK] 扫描完成：{len(page_ids)} 个页面。入口：{args.entry}")
    else:
        print(f"[OK] 扫描完成：{len(page_ids)} 个页面。")
    print("已更新：docs/pages/*/spec.md（仅替换 auto 区块） / cloudfunctions/*/README.md（仅替换 auto 区块） / docs/INVENTORY.md / docs/_chatgpt-index.yml")

if __name__ == "__main__":
    main()
