module.exports ={
    //funciones del controlador
    index : function(req, res, next) {
        res.render('measurement/index', {title: 'SGM Udenar'});
    }
}