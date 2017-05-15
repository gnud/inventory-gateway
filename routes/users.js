var express = require('express');
var router = express.Router();

var getUsers = require('./users/getUsers');

router.get('/', getUsers);

module.exports = router;
