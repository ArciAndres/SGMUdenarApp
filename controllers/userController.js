
var bcrypt = require('bcryptjs');
var models = require('../models');

module.exports = {
    
    getSignUp : function(req,res,next){
        return res.render('auth/signup');
    },

    getUsers : function(req,res,next){
        return res.render('systools/users',{title : 'Usuarios'});
    },

    postNewUser: function (req, res, next) {
        var salt = bcrypt.genSaltSync(10);
        var password = bcrypt.hashSync(req.body.password, salt);

        var user = models.user.build({
            email: req.body.email,
            name: req.body.name,
            password: password
        })
        user.save().catch(function userCreated(err, rows,fields) {
            console.log('Hubo un error al crear el usuario');
        });
        return res.render('systools/users',{title : 'Usuarios'});     
    }
};