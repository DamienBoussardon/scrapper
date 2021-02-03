const postList = require('../Core/Classes/API')

module.exports = function(server) {
    server.route({
        method: 'GET',
        path : '/post',
        handler: postList.list_announces,
        config: {
            cors: {
                origin : ['*'],
                additionalHeaders : ['cache-control', 'x-requested-with']
            }
        }
    })
};
