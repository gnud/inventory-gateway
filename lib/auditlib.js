/**
 * Created by gnu_d on 18.5.17.
 */

let log4js = require("log4js");
let mongoAppender = require("log4js-node-mongodb");
let config = require("./config");

log4js.configure({
    appenders: [
        {
            type: 'log4js-node-mongodb',
            connectionString: config.databaseConnection,
            collectionName: 'audit',
            write: 'fast'
        }
    ]
});

let logger = log4js.getLogger('audit');

module.exports = logger;