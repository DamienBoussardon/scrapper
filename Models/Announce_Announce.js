module.exports.makeLink = function(announce_une, announce_deux) {
    let db = require('./../Core/db')
    return db('announce_announce').insert({
        id_announce_une: announce_une.id,
        id_announce_deux: announce_deux.id
    })
}
