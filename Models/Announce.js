let Comparator = require('./../Core/Classes/Comparator')

module.exports.announceAlreadyExist = function(URL) {
    let db = require('./../Core/db')
    return db.select()
        .from('announce')
        .where({
            url_announce: URL
        })
}

module.exports.insertAnnounce = async function(announce) {
    let db = require('./../Core/db')
    await db('announce').insert(announce)
    await Comparator.makeAnnouncesLinks(announce)
}

module.exports.updateAnnounce = function(modifications, url_announce) {
    let db = require('./../Core/db')
    return db('announce')
        .update(modifications)
        .where({
            url_announce: url_announce
        })
}

module.exports.getAllAnnounces = function() {
    let db = require('./../Core/db')
    return db('announce').select()
}

module.exports.getAnnounceWithUrl = function(url_announce) {
    let db = require('./../Core/db')
    return db('announce').select()
        .where({
            url_announce: url_announce
        })
}
