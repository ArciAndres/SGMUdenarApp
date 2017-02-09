var models = require('../models')
module.exports = {
    //funciones del controlador
    index : function(req, res, next) {
        models.measurement.findAll().then(function (measurements) {
            res.render('measurement/index', {title: 'SGM Udenar', measurements: measurements});
        })
    }
}