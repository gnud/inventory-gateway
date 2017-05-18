/**
 * Created by gnu_d on 18.5.17.
 */

// load the things we need
let mongoose = require('mongoose');
let bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
let userSchema = mongoose.Schema({
    local : {
        username  : String,
        password  : String,
        firstname : String,
        lastname  : String
    }
});

// generate hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// check for valid passwords
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Users', userSchema);