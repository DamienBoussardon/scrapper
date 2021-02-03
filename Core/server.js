(async function() {
    // Import libraries
    const Hapi = require('hapi')

    // Set environment variables
    if (process.env.NODE_ENV !== 'production') {
        console.log("Initialisation des variables d'environnement...")
        require('dotenv').load()
    }

    // Set the database configuration
    console.log("Initialisation de la base de données...")
    require('./db')

    // Set the CRON tasks up
    console.log("Initialisation des CRON Tasks...")
    require('./cron_tasks')(require('node-cron'))

    console.log("Initialisation du serveur...")
    const server = Hapi.server({
        host: '127.0.0.1',
        port: 8000
    })
    await server.start()
    console.log('Serveur en écoute sur :', server.info.uri)

    console.log("Mise en place de la table de routage...")
    require('./router')(server)

    await server.start()
    console.log('Serveur en écoute sur :', server.info.uri)
})()
