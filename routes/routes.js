var express = require('express');
var router = express.Router();

var controllers = require('.././controllers')
/* GET home page. */
router.get('/', controllers.home.index);
router.get('/measurement/index', controllers.measurement.index);
router.get('/measure/index', controllers.measure.index);
router.get('/measure/index2', controllers.measure.index2);

module.exports = router;

