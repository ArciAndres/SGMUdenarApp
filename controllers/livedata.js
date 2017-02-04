module.exports = {
    //funciones del controlador
    index : function(req, res) {
        var data = {
            y : Math.floor(Math.random()*10),
            x : (new Date()).getTime()
        }
        res.send(data);
    },
}