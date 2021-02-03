module.exports = function(CRON) {
    let API = require('./Classes/API');
    CRON.schedule(
        '* * * * *',
        API.getExternalDatas,
        null
    )
}