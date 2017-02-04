var models = require('../models');
var sgmudenarstring = " - SGM Udenar";
module.exports = {
    //funciones del controlador
    estado : function(req, res, next) {
        res.render('info/estado', {title: 'Información' + sgmudenarstring});
    },
    
    lecturas : function(req, res, next) {
        models.measurement.findAll().then(function (measurements) {
            res.render('info/lecturas', {title: 'Lecturas' + sgmudenarstring, measurements: measurements});
        })
        
    },
}