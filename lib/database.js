/**
 * Created by gnu_d on 18.5.17.
 */

let config = require("./config");
let mongoose = require('mongoose');

// TODO: put the database name in a config file
mongoose.connect(config.databaseConnection);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Mongo db summoned...");
});