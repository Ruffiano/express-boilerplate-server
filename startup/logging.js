require('express-async-errors');
require('winston-mongodb');
const winston = require('winston');
var options = {
    file: {
        level: 'silly',
        filename: `${__dirname}/logs/app.log`,
        handleExceptions: true,
        json: false,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'silly',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
    LogDB: {
        db: 'mongodb://localhost/onlineClassDB-logs',
        level: 'silly',
        handleExceptions: true,
    }
};

const logger = winston.createLogger({
    transports: [
        new winston.transports.MongoDB(options.LogDB),
        new winston.transports.File(options.file),
        // new winston.transports.Console(options.console),
    ],
    exitOnError: false
});

logger.info("Hello there!")
logger.error("Testing errors too!")


process.on('uncaughtException', ex => {
    logger.error('>> uncaughtException: ', ex.message,  ex);
})

module.exports = {logger}