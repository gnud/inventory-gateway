/**
 * Created by gnu_d on 15.5.17.
 */
var express = require('express');
var router = express.Router();

var authenticate = require('./authentication/login');

router.post('/', authenticate);

module.exports = router;
