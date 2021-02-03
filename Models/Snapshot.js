module.exports.getLastSnapshotContentFromSite = function(site, callback) {
    let db = require('./../Core/db')
    db.select('content')
        .from('snapshot')
        .where({
            id_site: site.id
        })
        .orderBy('date', 'desc')
        .limit(1)
        .then(callback)
}

module.exports.insertSnapshot = function(snapshot, callback) {
    let db = require('./../Core/db')
    return db('snapshot')
        .insert(snapshot)
        .catch(callback)
}
