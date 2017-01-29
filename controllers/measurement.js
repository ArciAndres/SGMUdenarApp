var model = require('../models/config')

module.exports = {
    //funciones del controlador
    index : function(req, res, next) {
        model.Measurement.findAll().then(function (measurements) {
            res.render('measurement/index', {title: 'SGM Udenar', measurements: measurements});
        })
    }
}