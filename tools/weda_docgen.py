# tools/weda_docgen.py  (v3.1)
# 变更要点：
#  - 修复 Python 3.10+ 下 list | set 报错 → 使用 set(...) | set(...)
#  - 新增 --collect-bindings：解析 miniapp/<pageId>/index.json 的绑定表达式，写入 spec.md 的 <!--doc:auto:bindings-->
#  - 继续支持：只替换 auto 区块，保留 keep 段落；扫描页面/云函数的集合引用；生成 INVENTORY/_chatgpt-index.yml/DISCOVERED.md
#
# 依赖：pip install pyyaml
#
# 用法（推荐）：
#   python tools/weda_docgen.py --src miniapp --cfs cloudfunctions --out . --entry u_shou_hu_home --seed-collections --collect-bindings
#

import argparse, os, re, json, pathlib, sys
from collections import defaultdict

try:
    import yaml  # type: ignore
except ImportError:
    print("缺少依赖：pyyaml。请先运行：pip install pyyaml")
    sys.exit(1)

# --------- 正则与常量 ---------
CF_RE_PAGE = re.compile(r"callFunction\(\s*{\s*name\s*:\s*['\"]([^'\"]+)['\"]")
CF_RE_FUNC = re.compile(r"cloud\.callFunction\(\s*{\s*name\s*:\s*['\"]([^'\"]+)['\"]", re.I)
DB_RE = re.compile(r"db\.collection\(\s*['\"]([^'\"]+)['\"]\s*\)")
HANDLER_DIR = "lowcode/handler"

KEEP_START = re.compile(r"<!--\s*doc:keep(?::([a-zA-Z0-9_\-]+))?\s*-->", re.I)
KEEP_END   = re.compile(r"<!--\s*/doc:keep(?::([a-zA-Z0-9_\-]+))?\s*-->", re.I)
AUTO_START = re.compile(r"<!--\s*doc:auto:([a-zA-Z0-9_\-]+)\s*-->", re.I)
AUTO_END   = re.compile(r"<!--\s*/doc:auto:([a-zA-Z0-9_\-]+)\s*-->", re.I)

# 事件属性常见命名（WeDa/小程序）
EVENT_KEYS = {
    "onTap","onClick","onChange","onInput","onSubmit","onScroll","onLoad","onShow","onHide",
    "bindtap","bindchange","bindinput","bindsubmit","bindscroll"
}

def read_text(path: pathlib.Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except Exception:
        return ""

def read_json(path: pathlib.Path):
    try:
        return json.loads(read_text(path))
    except Exception:
        return None

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
    handlers = []
    cfs = set()
    cols = set()
    hdir = page_dir / HANDLER_DIR
    if hdir.exists():
        for js in sorted(hdir.glob("*.js")):
            handlers.append(js.stem)
            txt = read_text(js)
            for m in CF_RE_PAGE.finditer(txt): cfs.add(m.group(1))
            for m in DB_RE.finditer(txt): cols.add(m.group(1))
    return handlers, sorted(cfs), sorted(cols)

def scan_function(func_dir: pathlib.Path):
    """扫描云函数 index.js：返回 collections, calls"""
    idx = func_dir / "index.js"
    if not idx.exists(): return set(), set()
    txt = read_text(idx)
    cols = set(m.group(1) for m in DB_RE.finditer(txt))
    calls = set(m.group(1) for m in CF_RE_FUNC.finditer(txt))
    return cols, calls

# --------- 绑定解析（index.json） ---------
BINDING_VAL_RE = re.compile(r"(\$page\.state|\$page\.handler|\$w\.app|\$w\.cloud|\$w\.utils)")
def is_binding_value(v: str, key_hint: str = "") -> bool:
    if not isinstance(v, str): return False
    if BINDING_VAL_RE.search(v): return True
    if key_hint in EVENT_KEYS and re.match(r"^[A-Za-z_]\w*$", v):  # 极简容错：onTap: onXxx
        return True
    return False

def collect_bindings_from_json(obj, base=""):
    """深度遍历 JSON，收集字符串绑定；返回 [(path, value)]"""
    results = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{base}.{k}" if base else k
            if isinstance(v, (dict, list)):
                results.extend(collect_bindings_from_json(v, p))
            else:
                if isinstance(v, str) and is_binding_value(v, k):
                    results.append((p, v))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            p = f"{base}[{i}]"
            if isinstance(v, (dict, list)):
                results.extend(collect_bindings_from_json(v, p))
            else:
                if isinstance(v, str) and is_binding_value(v):
                    results.append((p, v))
    return results

def load_page_bindings(page_dir: pathlib.Path):
    """尝试读取 miniapp/<pageId>/index.json；返回 Markdown 文本（列表）"""
    idx_json = page_dir / "index.json"
    if not idx_json.exists():
        return "- （未检测到 index.json 或未发现绑定表达式）"
    data = read_json(idx_json)
    if data is None:
        return "- （index.json 解析失败）"
    items = collect_bindings_from_json(data)
    if not items:
        return "- （未发现绑定表达式）"
    # 渲染为 Markdown 列表
    lines = []
    for path, val in items:
        # 仅截断太长的值
        v = val if len(val) <= 160 else (val[:157] + "…")
        lines.append(f"- `{path}` → `{v}`")
    return "\n".join(lines)

# --------- 模板：auto/keep ---------
def auto_block(label: str, body: str) -> str:
    return f"<!--doc:auto:{label}-->\n{body}\n<!--/doc:auto:{label}-->"

def keep_placeholder(label: str, hint: str = "") -> str:
    inner = (hint + "\n") if hint else ""
    return f"<!--doc:keep:{label}-->\n{inner}<!--/doc:keep:{label}-->"

def render_spec_seed(pageId: str, handlers_md: str, cfs_md: str, cols_md: str, bindings_md: str) -> str:
    return f"""# 页面规范：{pageId}

## 1. Meta
- 页面 ID：{pageId}
- 作用/目标：<TODO>
- 权限：<TODO>

## 2. 组件树 / 绑定
{keep_placeholder("component-tree", "在这里补充组件树、关键绑定表达式（可暂留空）")}
{auto_block("bindings", bindings_md or "- （生成器目前仅列事件→handler，详细绑定请在上方 keep 段补充）")}

## 3. 事件与 handlers
{auto_block("handlers", handlers_md)}
{keep_placeholder("handlers-notes", "在这里补充 handlers 之间的协作与副作用说明（可暂留空）")}

## 4. 依赖云函数（自动扫描）
{auto_block("cloudfunctions", cfs_md)}
{keep_placeholder("cf-notes", "在这里备注云函数的入参/出参差异、错误码等（可暂留空）")}

## 5. 可能用到的数据集合（页面端静态分析猜测）
{auto_block("collections-guess", cols_md)}
{keep_placeholder("collections-notes", "在这里说明字段意义/索引/唯一约束（可暂留空）")}

## 6. 状态（State）
{keep_placeholder("state", "描述 $page.state / $w.app.state 与派生状态（可暂留空）")}

## 7. UX / 校验 / 导航
{keep_placeholder("ux", "正常/异常流、校验规则、跳转路径（可暂留空）")}

## 8. 变更记录
{keep_placeholder("changelog", "- 2025-08-xx: 初稿")}
"""

def render_cf_readme_seed(fn: str, ref_pages_md: str, cols_md: str, calls_md: str) -> str:
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

## 使用到的数据集合（从 index.js 扫描）
{auto_block("collections-used", cols_md)}

## 该函数在代码中调用过的其他云函数（从 index.js 扫描）
{auto_block("calls", calls_md)}

## 参考页面
{auto_block("refs", ref_pages_md)}
"""

# --------- 区块替换 ---------
def find_blocks(text: str, start_re: re.Pattern, end_re: re.Pattern):
    blocks = defaultdict(list)
    pos = 0
    while True:
        s = start_re.search(text, pos)
        if not s: break
        label = s.group(1) or "__default__"
        e = end_re.search(text, s.end())
        if not e: break
        blocks[label].append((s.start(), e.end(), s.end(), e.start()))
        pos = e.end()
    return blocks

def replace_blocks(existing: str, new_auto: str, label: str):
    ex_blocks = find_blocks(existing, AUTO_START, AUTO_END)
    new_blocks = find_blocks(new_auto, AUTO_START, AUTO_END)
    if label not in new_blocks:
        return existing
    s, e, _, _ = new_blocks[label][0]
    new_full = new_auto[s:e]
    if label in ex_blocks and ex_blocks[label]:
        fs, fe, _, _ = ex_blocks[label][0]
        return existing[:fs] + new_full + existing[fe:]
    else:
        sep = "\n\n---\n"
        return existing + sep + new_full + "\n"

def merge_with_keep_and_auto(path: pathlib.Path, new_content: str):
    if not path.exists():
        write_text(path, new_content); return
    existing = read_text(path)
    merged = existing
    labels = []
    for m in AUTO_START.finditer(new_content):
        labels.append(m.group(1))
    labels = list(dict.fromkeys(labels))
    for lb in labels:
        merged = replace_blocks(merged, new_content, lb)
    write_text(path, merged)

# --------- 生成最小 Schema/Sample ---------
SCHEMA_SEED = lambda name: json.dumps({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": name,
    "type": "object",
    "required": ["_id"],
    "properties": { "_id": { "type": "string" } }
}, ensure_ascii=False, indent=2)

SAMPLE_SEED = "[]\n"

# --------- 主流程 ---------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True, help="WeDa 导出根目录，如 miniapp")
    ap.add_argument("--cfs", default="cloudfunctions", help="云函数根目录，如 cloudfunctions")
    ap.add_argument("--out", default=".", help="仓库根目录")
    ap.add_argument("--entry", default="", help="入口页 pageId（选填）")
    ap.add_argument("--seed-collections", action="store_true", help="为新发现的集合创建最小 schema/sample（不覆盖已有）")
    ap.add_argument("--collect-bindings", action="store_true", help="解析 index.json 的组件绑定表达式，写入 spec.md")
    args = ap.parse_args()

    src = pathlib.Path(args.src).resolve()
    cfs_root = pathlib.Path(args.cfs).resolve()
    out = pathlib.Path(args.out).resolve()

    # 1) 扫描页面
    page_ids = list_pages(src)
    handlers_map = {}
    cf_usage_by_page = defaultdict(set)
    col_usage_by_page = defaultdict(set)
    bindings_by_page = {}

    for pid in page_ids:
        handlers, cfs, cols = scan_page(src / pid)
        handlers_map[pid] = handlers
        for fn in cfs: cf_usage_by_page[pid].add(fn)
        for c in cols: col_usage_by_page[pid].add(c)
        if args.collect_bindings:
            bindings_by_page[pid] = load_page_bindings(src / pid)
        else:
            bindings_by_page[pid] = "- （未启用 --collect-bindings；如需采集 index.json 绑定，请加此参数）"

    # 2) 扫描云函数
    cf_dirs = []
    if cfs_root.exists():
        cf_dirs = [d for d in cfs_root.iterdir() if d.is_dir()]
    cols_by_fn = defaultdict(set)
    calls_by_fn = defaultdict(set)
    for d in cf_dirs:
        fn = d.name
        cols, calls = scan_function(d)
        if cols: cols_by_fn[fn].update(cols)
        if calls: calls_by_fn[fn].update(calls)

    # 3) 每页 spec.md（merge）
    for pid in page_ids:
        handlers_md = "\n".join([f"- `{h}(e)`" for h in handlers_map[pid]]) or "- （未检测到 handler）"
        cfs_md = "\n".join([f"- `{fn}`" for fn in sorted(cf_usage_by_page[pid])]) or "- （未检测到云函数调用）"
        cols_md = "\n".join([f"- `{c}`" for c in sorted(col_usage_by_page[pid])]) or "- （未检测到集合引用）"
        bindings_md = bindings_by_page.get(pid) or "- （未发现绑定表达式）"
        spec_new = render_spec_seed(pid, handlers_md, cfs_md, cols_md, bindings_md)
        spec_path = out / "docs" / "pages" / pid / "spec.md"
        merge_with_keep_and_auto(spec_path, spec_new)

    # 4) 云函数 README（merge）
    fn_to_pages = defaultdict(set)
    for pid, fns in cf_usage_by_page.items():
        for fn in fns:
            fn_to_pages[fn].add(pid)

    for fn in sorted(set(list(fn_to_pages.keys()) + list(cols_by_fn.keys()) + list(calls_by_fn.keys()))):
        ref_pages_md = "\n".join([f"- docs/pages/{p}/spec.md" for p in sorted(fn_to_pages.get(fn, []))]) or "- （暂无页面直接引用，可能为内部调用）"
        cols_md = "\n".join([f"- `{c}`" for c in sorted(cols_by_fn.get(fn, []))]) or "- （未检测到集合引用）"
        calls_md = "\n".join([f"- `{c}`" for c in sorted(calls_by_fn.get(fn, []))]) or "- （未检测到云函数调用）"
        readme_new = render_cf_readme_seed(fn, ref_pages_md, cols_md, calls_md)
        readme_path = out / "cloudfunctions" / fn / "README.md"
        merge_with_keep_and_auto(readme_path, readme_new)

    # 5) 发现集合：页面 + 函数
    discovered_cols = defaultdict(lambda: {"pages": set(), "functions": set()})
    for pid, cols in col_usage_by_page.items():
        for c in cols:
            discovered_cols[c]["pages"].add(pid)
    for fn, cols in cols_by_fn.items():
        for c in cols:
            discovered_cols[c]["functions"].add(fn)

    # 6) DISCOVERED.md（覆盖）
    lines = ["# DISCOVERED Collections（自动汇总）\n",
             "| Collection | Pages | Functions |\n|---|---|---|"]
    for c in sorted(discovered_cols.keys()):
        ps = ", ".join(sorted(discovered_cols[c]["pages"])) or "-"
        fs = ", ".join(sorted(discovered_cols[c]["functions"])) or "-"
        lines.append(f"| `{c}` | {ps} | {fs} |")
    write_text(out / "docs" / "collections" / "DISCOVERED.md", "\n".join(lines) + "\n")

    # 7) 可选：为新发现的集合 seed schema/sample
    if args.seed_collections:
        for c in sorted(discovered_cols.keys()):
            schema_path = out / "docs" / "collections" / f"{c}.schema.json"
            sample_path = out / "docs" / "collections" / "samples" / f"{c}.sample.json"
            if not schema_path.exists():
                write_text(schema_path, SCHEMA_SEED(c))
            if not sample_path.exists():
                write_text(sample_path, SAMPLE_SEED)

    # 8) INVENTORY（覆盖）
    inv_lines = [
        "# INVENTORY（现有资产盘点，自动生成草稿）\n",
        "## 小程序 Pages\n",
        "| pageId | handlers数 | 云函数数 | 页面端集合数 |\n|---|---:|---:|---:|"
    ]
    for pid in page_ids:
        inv_lines.append(f"| {pid} | {len(handlers_map[pid])} | {len(cf_usage_by_page[pid])} | {len(col_usage_by_page[pid])} |")

    inv_lines.append("\n## Cloud Functions（扫描 index.js 得出）\n")
    for fn in sorted(set(list(fn_to_pages.keys()) + list(cols_by_fn.keys()))):
        inv_lines.append(f"- `{fn}` | 集合：{', '.join(sorted(cols_by_fn.get(fn, []))) or '-'} | 调用云函数：{', '.join(sorted(calls_by_fn.get(fn, []))) or '-'}")

    write_text(out / "docs" / "INVENTORY.md", "\n".join(inv_lines) + "\n")

    # 9) _chatgpt-index.yml（覆盖）：只登记已存在的 schema/sample
    idx = {
        "project": "yihu-repo",
        "version": 1,
        "entry": ["README.md", "docs/OVERVIEW.md", "docs/INVENTORY.md"],
        "pages": {},
        "functions": [],
        "collections": {}
    }
    for pid in page_ids:
        idx["pages"][pid] = {
            "spec": f"docs/pages/{pid}/spec.md",
            "handlers": f"miniapp/{pid}/lowcode/handler/",
            "contracts": sorted([f"cloudfunctions/{fn}/README.md" for fn in cf_usage_by_page[pid]])
        }
    for fn in sorted(set(list(fn_to_pages.keys()) + list(cols_by_fn.keys()))):
        idx["functions"].append({"name": fn, "path": f"cloudfunctions/{fn}/README.md"})

    cols_root = out / "docs" / "collections"
    samples_root = cols_root / "samples"
    existing_schemas = {p.stem: p for p in cols_root.glob("*.json")}
    existing_samples = {p.stem: p for p in samples_root.glob("*.json")}
    # 修复：两边都转 set 再并集
    for name in sorted(set(existing_schemas.keys()) | set(existing_samples.keys())):
        entry = {}
        if name in existing_schemas: entry["schema"] = str(existing_schemas[name].as_posix())
        if name in existing_samples: entry["sample"] = str(existing_samples[name].as_posix())
        idx["collections"][name] = entry

    write_text(out / "docs" / "_chatgpt-index.yml", yaml.safe_dump(idx, allow_unicode=True, sort_keys=False))

    # 10) 提示
    if args.entry:
        print(f"[OK] 扫描完成：{len(page_ids)} 个页面。入口：{args.entry}")
    else:
        print(f"[OK] 扫描完成：{len(page_ids)} 个页面。")
    print("已更新：")
    print("  - docs/pages/*/spec.md（仅替换 auto 区块；bindings 由 --collect-bindings 控制）")
    print("  - cloudfunctions/*/README.md（仅替换 auto 区块，含 collections-used/calls）")
    print("  - docs/collections/DISCOVERED.md（集合使用关系）")
    print("  - docs/INVENTORY.md / docs/_chatgpt-index.yml")
    if args.seed_collections:
        print("  - 新发现集合的最小 schema/sample 已 seed（不覆盖已有）")

if __name__ == "__main__":
    main()
