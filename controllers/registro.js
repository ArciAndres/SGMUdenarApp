var models = require('../models');
var sgmudenarstring = " - SGM Udenar";
module.exports = {
    //funciones del controlador
    medidas : function(req, res, next) {
        res.render('registro/medidas', {title: 'Medidas' + sgmudenarstring});
    },

    pedirRegistro : function(req, res, next) {
        console.log(req.body);
        res.render('registro/medidas', {title: 'Medidas' + sgmudenarstring});        
    },
}