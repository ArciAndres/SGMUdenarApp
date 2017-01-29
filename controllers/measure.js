var models = require('../models')

module.exports = {
    //funciones del controlador
    index : function(req, res, next) {
        res.render('measure/index', {title: 'Medidas - SGM Udenar'});
    },
    index2 : function(req, res, next) {
        res.render('measure/index2', {title: 'Medidas - SGM Udenar'});
    }
}