// cloudfunctions/migrate-geo-to-location/index.js
const tcb = require('@cloudbase/node-sdk');
const app = tcb.init({ env: process.env.TCB_ENV || process.env.SCF_NAMESPACE });
const db = app.database();
const _ = db.command;

function pickCoords(obj) {
    if (!obj) return null;
    // TCB GeoPoint 常见形态：{ type:'Point', coordinates:[lng,lat] }
    if (Array.isArray(obj.coordinates)) return obj.coordinates;
    // 有些文档可能直接存了数组
    if (Array.isArray(obj)) return obj;
    // 保险：若是 {longitude, latitude}
    if (typeof obj.longitude === 'number' && typeof obj.latitude === 'number') {
        return [obj.longitude, obj.latitude];
    }
    return null;
}

async function migrateCollection(col, fallbackById = {}) {
    const BATCH = 200;
    let page = 0, updated = 0, scanned = 0;
    while (true) {
        const { data } = await db.collection(col)
            .orderBy('_id', 'asc')
            .skip(page * BATCH)
            .limit(BATCH)
            .get();
        if (!data.length) break;
        scanned += data.length;

        for (const doc of data) {
            const hasLocation = !!doc.location;
            const geoCoords = pickCoords(doc.geo);
            const locCoords = pickCoords(doc.location);
            let coords = null;

            if (hasLocation && locCoords) {
                // 已有合法 location，跳过；若想顺手删除 geo，可打开下一句
                if (doc.geo) {
                    await db.collection(col).doc(doc._id).update({ geo: _.remove(), updatedAt: Date.now() });
                }
                continue;
            }

            if (geoCoords) coords = geoCoords;
            else if (!hasLocation && fallbackById[doc._id]) coords = fallbackById[doc._id];

            if (coords && Array.isArray(coords) && coords.length === 2) {
                await db.collection(col).doc(doc._id).update({
                    location: new db.Geo.Point(coords[0], coords[1]),
                    geo: _.remove(),
                    updatedAt: Date.now()
                });
                updated++;
            }
        }
        page++;
    }
    return { collection: col, scanned, updated };
}

exports.main = async () => {
    // 如需给老站点兜底坐标（只在该文档没有 geo/location 时才会用）
    const fallbackStations = {
        'home_station_1753533327784_2639': [116.26549220734684, 39.92329522049079],
        'home_station_1753533342853_7444': [121.45577802231169, 31.25913998308513]
    };

    try {
        const out = {};
        out.Departments = await migrateCollection('Departments', fallbackStations);
        out.HospitalServiceItems = await migrateCollection('HospitalServiceItems');
        out.CaregiverSearchIndex = await migrateCollection('CaregiverSearchIndex');
        return { code: 'OK', data: out };
    } catch (e) {
        return { code: 'SYS_ERR', message: e.message, stack: String(e.stack || e) };
    }
};
