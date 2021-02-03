(async function() {
    // Import libraries
    const Knex = require('knex')

    // Connection to the database
    let connection = Knex({
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PSWD,
            database: process.env.DB_NAME
        },
        pool: { min: 0, max: 7 }
    })

    // Database's tables
    let tables = {
        site: (table) => {
            table.increments('id').primary()
            table.string('name')
            table.string('link')
        },
        announce: (table) => {
            table.increments('id').primary()
            table.integer('id_site')
            table.foreign('id_site').references('site.id')
            table.string('url_announce').unique()
            table.string('type')
            table.string('address')
            table.string('city')
            table.string('price')
            table.string('surface')
            table.string('pieces')
            table.string('dpe')
            table.string('url_image')
            table.string('agency_name')
            table.string('user_mail')
            table.string('telephone')
        },
        snapshot: (table) => {
            table.increments('id').primary()
            table.integer('id_site')
            table.foreign('id_site').references('site.id')
            table.text('content')
            table.date('date')
            table.integer('status')
        },
        method: (table) => {
            table.increments('id').primary()
            table.integer('id_site')
            table.foreign('id_site').references('site.id')
            table.string('selector')
        },
        snapshot_method: (table) => {
            table.increments('id').primary()
            table.integer('id_snapshot')
            table.foreign('id_snapshot').references('snapshot.id')
            table.integer('id_method')
            table.foreign('id_method').references('method.id')
            table.string('content')
            table.boolean('status')
        },
        announce_announce: (table) => {
            table.integer('id_announce_une').references('announce.id')
            table.integer('id_announce_deux').references('announce.id')
            table.primary('id_announce_une', 'id_announce_deux')
        }
    }

    let numberOfTables = await connection('information_schema.tables').count().where({
        table_schema: 'public'
    })
    if (parseInt(numberOfTables[0].count) === 0) {
        for (const table of Object.entries(tables)) {
            await connection.schema.createTable(table[0], table[1])
            console.log("Table '" + table[0] + "' créée avec succès !")
        }

        await connection('site').insert({
            name: 'Fake',
            link: 'http://www.fake.fr'
        })
    }

    module.exports = connection
})()
