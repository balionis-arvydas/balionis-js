const winston = require('winston');

const config = require('config');

const c = require('./constants');

const logLevel = config.get(c.CONFIG_SERVER_LOG_LEVEL) || 'debug';

const logger = new winston.createLogger({
    level: logLevel,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
        })
    ],
    colorize: false,
});

module.exports = logger;
