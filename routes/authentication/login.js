/**
 * Created by gnu_d on 15.5.17.
 */

var jwt = require('jsonwebtoken');

/* POST login */
function authenticate(req, res) {
// find the user
//     User.findOne({
//         name: req.body.name
//     }, function(err, user) {

        // if (err) throw err;

        // Simulate user without db
        var user = {
            name: 'Damjan Dimitrioski',
            password: 'password',
            admin: true
        };

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password !== req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, req.app.get('superSecret'), {
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

    // });
}

module.exports = authenticate;