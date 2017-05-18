/**
 * Created by gnu_d on 15.5.17.
 */

var jwt = require('jsonwebtoken');
var User = require('../../models/user');
let config = require("../../lib/config");

/* POST login */
function authenticate(req, res) {
// find the user
    User.findOne({
        "local.username": req.body.username
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.local.password !== req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                delete user.password;
                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, config.JWTSecret, {
                    expiresIn : 60*60*24// expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });
}

module.exports = authenticate;