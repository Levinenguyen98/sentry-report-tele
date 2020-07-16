require('dotenv').config();

let {
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_RECEIVER,
    ORGANIZATIONS,
    PROJECT,
    PERIOD,
    AUTHORIZATION
} = process.env;

module.exports = {
    TELEGRAM_BOT_TOKEN,
    TELEGRAM_RECEIVER,
    ORGANIZATIONS,
    PROJECT,
    PERIOD,
    AUTHORIZATION
}