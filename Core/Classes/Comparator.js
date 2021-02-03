let Announce_Model = require('./../../Models/Announce')
let Announce_Announce_Model = require('./../../Models/Announce_Announce')

module.exports.makeAnnouncesLinks = async function(announce) {
    let fullAnnounce = (await Announce_Model.getAnnounceWithUrl(announce.url_announce))[0]
    let stockedAnnounces = await Announce_Model.getAllAnnounces()
    stockedAnnounces.forEach((stockedAnnounce) => {
        if (stockedAnnounce.type === "Agence" && stockedAnnounce.url_announce !== fullAnnounce.url_announce) {
            if (
                stockedAnnounce.surface === fullAnnounce.surface
                && stockedAnnounce.pieces === fullAnnounce.pieces
                && stockedAnnounce.address === fullAnnounce.address
                && stockedAnnounce.city === fullAnnounce.city
            ) {
                Announce_Announce_Model.makeLink(stockedAnnounce, fullAnnounce)
            }
        }
    })
}
