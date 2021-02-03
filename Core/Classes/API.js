let request = require('request')
let cheerio = require('cheerio')
let faker = require('faker')

let Announce_Model = require('./../../Models/Announce')
let Site_Model = require('./../../Models/Site')
let Snapshot_Model = require('./../../Models/Snapshot')

module.exports.getExternalDatas = async function() {
    await Announce_Model.insertAnnounce({
        id_site: 1,
        url_announce: faker.internet.url(),
        type: "Agence",
        address: "224 Welch Extension",
        city: "North Delfina",
        price: faker.random.number({
            min: 10000,
            max: 500000
        }),
        surface: 80,
        pieces: 7,
        telephone: faker.phone.phoneNumber(),
        url_image: null,
        dpe: faker.random.arrayElement(["A", "B", "C", "D", "E"])
    })
    console.log("Finish")
    // requestHTMLDatas()
}

function requestHTMLDatas() {
    Site_Model.getAllSites().then((result) => {
        if (result.length !== 0) {
            result.forEach((site) => {
                request(site.link, (error, response, body) => {
                    if (error) {
                        console.log("Error while requesting " + site.name + " : impossible to get datas !")
                        Snapshot_Model.insertSnapshot({
                            id_site: site.id,
                            content: "",
                            date: new Date(),
                            status: 0
                        }, (error) => {
                            if (error) throw error
                        })
                    } else {
                        console.log("Requesting " + site.name + " : success to get datas !")
                        Snapshot_Model.insertSnapshot({
                            id_site: site.id,
                            content: "",
                            date: new Date(),
                            status: 0
                        }, (error) => {
                            if (error) throw error
                        }).then((result) => {
                            if (result) {
                                console.log("New snapshot created !");
                                scrapSite(site)
                            }
                        })
                    }
                })
            })
        } else {
            console.log("No website in the table !");
        }
    })
}

function scrapSite(site) {
    switch (site.name) {
        case "PAP":
            Snapshot_Model.getLastSnapshotContentFromSite(site, (result, error) => {
                if (error) throw error
                scrappingFromPap(site, result[0].content)
            })
            break
        default:
            console.log("No method for the site : " + site.name + ".")
            break
    }
}

function scrappingFromPap(site, body) {
    let $ = cheerio.load(body);
    $('div.search-list-item').each(function () {
        let lien = $(this).find('div.col-left').find('a').attr('href');
        let URL = site.link + lien

        let price = $(this).find('span.item-price').text();
        let pieces = $(this).find('div.col-right').find('a.item-title').find('ul.item-tags').find('li').first().text();
        let surface = $(this).find('div.col-right').find('a.item-title').find('ul.item-tags').find('li').last().text();

        request(URL, (error, response, body) => {
            if (error) throw error

            let $ = cheerio.load(body);
            let image = $('div.owl-thumbs.sm-hidden').find('a').first().find('img').attr('src')

            let address = $('div.item-description.margin-bottom-30').find('h2').text();

            let telephone = $('div.contact-proprietaire-box').find('div').find('div.btn-telephone').find('p').text()
            telephone = telephone.replace(/\s/g, '')
            // var dpe = $(this).find('div.info-letter').text()

            address = address.replace(/\s/g, '')

            if (address.includes(" ")) {
                address = address.replace(/\s/g, '')
            }

            Announce_Model.announceAlreadyExist(URL, (result, error) => {
                if (error) throw error
                let announce = result[0]
                let modifications = {}
                if (announce !== undefined) {
                    if (address !== undefined && address !== "" && announce.address !== address)
                        modifications.address = address
                    if (price !== undefined && price !== "" && announce.price !== price)
                        modifications.price = price
                    if (surface !== undefined && surface !== "" && announce.surface !== surface)
                        modifications.surface = surface
                    if (pieces !== undefined && pieces !== "" && announce.pieces !== pieces)
                        modifications.pieces = pieces
                    if (telephone !== undefined && telephone !== "" && announce.telephone !== telephone)
                        modifications.telephone = telephone
                    if (image !== undefined && image !== "" && announce.url_image !== image)
                        modifications.url_image = image

                    if (!isEmpty(modifications)) {
                        Announce_Model.updateAnnounce(modifications, URL, (error) => {
                            if (error) throw error
                        })
                    }
                } else {
                    Announce_Model.insertAnnounce({
                        id_site: site.id,
                        url_announce: URL,
                        type: "particulier",
                        address: address,
                        price: price,
                        surface: surface,
                        pieces: pieces,
                        telephone: telephone,
                        url_image: image
                        // dpe: dpe
                    }, (error) => {
                        if (error) throw error
                    })
                }
            })
        })
    })
    console.log("Announces inserted/updated with success !")
}

module.exports.list_announces = async (request, h) => {
    try {
        var postArray = []
        await Site_Model.getAllSites().then((result) => {
            result.forEach(function (value) {
                postArray.push(value)
            })
        })
        return postArray
    } catch(err) {
        throw err
    }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

async function generationAnnounces(max = 100) {
    for (let i = 0; i < max; i++) {
        let announce = {
            id_site: 1,
            url_announce: faker.internet.url(),
            type: faker.random.arrayElement(["Particulier", "Agence"]),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            price: faker.random.number({
                min: 10000,
                max: 500000
            }),
            surface: faker.random.number({
                min: 15.0,
                max: 150.0,
                precision: 5
            }),
            pieces: faker.random.number({
                min: 1,
                max: 10
            }),
            telephone: faker.phone.phoneNumber(),
            url_image: null,
            dpe: faker.random.arrayElement(["A", "B", "C", "D", "E"])
        }

        if (announce.type === "Agence")
            announce.agency_name = faker.company.companyName()

        let exist = await Announce_Model.announceAlreadyExist(announce.url_announce)
        if (exist.length === 0)
            await Announce_Model.insertAnnounce(announce)
        else
            await Announce_Model.updateAnnounce(announce, announce.url_announce)
    }
}
