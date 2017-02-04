var express = require('express');
var router = express.Router();

var controllers = require('.././controllers')
/* GET home page. */
router.get('/', controllers.info.estado);
router.get('/info/estado', controllers.info.estado);
router.get('/info/lecturas', controllers.info.lecturas);
router.get('/measurement/index', controllers.measurement.index);
router.get('/measure/index', controllers.measure.index);
router.get('/measure/index2', controllers.measure.index2);
router.get('/livedata', controllers.livedata.index);
router.get('/livedata/DB', controllers.livedata.DB);

module.exports = router;

