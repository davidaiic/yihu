// tools/codemods/geo-to-location.js
const fs = require('fs');
const path = require('path');

const roots = [
    path.join(process.cwd(), 'docs'),
    path.join(process.cwd(), 'cloudfunctions'),
];

const exts = new Set(['.md', '.js', '.ts']);

const safeReplace = (text) => {
    let out = text;

    // 1) JSON/JS 对象属性： "geo": -> "location":
    out = out.replace(/(["'\s])geo(["'\s]*:)/g, '$1location$2');

    // 2) new db.Geo.Point(...) 之前的 geo: -> location:
    out = out.replace(/geo\s*:\s*new\s+db\.Geo\.Point\(/g, 'location: new db.Geo.Point(');

    // 3) .geo 访问（避免 geolocation）
    out = out.replace(/([^a-zA-Z])geo\b/g, '$1location');

    // 4) 代码注释/文案中的“字段名为 geo” -> “字段名为 location”
    out = out.replace(/字段名为\s*geo/g, '字段名为 location');

    // 不替换 geolocation / geography 等
    out = out.replace(/geolocation/g, 'geolocation');

    return out;
};

function walk(dir, files = []) {
    for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f);
        const st = fs.statSync(full);
        if (st.isDirectory()) walk(full, files);
        else if (exts.has(path.extname(full))) files.push(full);
    }
    return files;
}

let changed = 0;
for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    const files = walk(root);
    for (const file of files) {
        const orig = fs.readFileSync(file, 'utf8');
        const next = safeReplace(orig);
        if (next !== orig) {
            fs.writeFileSync(file + '.bak', orig);
            fs.writeFileSync(file, next);
            console.log('UPDATED', path.relative(process.cwd(), file));
            changed++;
        }
    }
}
console.log(`Done. ${changed} file(s) updated. Backups: *.bak`);
