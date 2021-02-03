module.exports.getAllSites = function() {
    let db = require('./../Core/db')
    return db.select('id', 'name', 'link').from('site')
}

