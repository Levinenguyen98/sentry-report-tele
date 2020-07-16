
const cron = require('node-cron');
const telegramClient = require('./lib/telegram-client')
const axios = require('axios')
const config = require('./config')
function run() {
    cron.schedule(`*${config.PERIOD} * * * *`, () => {
        axios.get(`https://sentry.io/api/0/organizations/${config.ORGANIZATIONS}/issues/?limit=25&project=${config.PROJECT}&query=is%3Aunresolved&shortIdLookup=1&statsPeriod=60m`, { params: {}, headers: { 'Authorization': config.AUTHORIZATION } }).then(response => {
            let listSendData = ''
            if(response.data.length > 0){
                response.data.forEach(data => {
                    listSendData = listSendData+ `\n\n Title : ${data.title}\n Link: ${data.permalink}`
                })
                telegramClient.send(listSendData)
            } else {
            }
            
        }).catch(err => { console.log(err) })
    });
}
run()

