var express = require('express');
var router = express.Router();

var controllers = require('.././controllers')
/* GET home page. */
router.get('/', controllers.home.index);
router.get('/measurement/index', controllers.measurement.index);

module.exports = router;

