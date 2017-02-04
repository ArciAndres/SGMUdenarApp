module.exports = {
    //funciones del controlador
    index : function(req, res) {
        var data = {
            y : Math.floor(Math.random()*10),
            x : (new Date()).getTime()
        }
        res.send(data);
    },

    DB : function(req, res) {
        var data = {
            time : (new Date()).getTime(),
            y :[Math.floor(Math.random()*10),
                Math.floor(Math.random()*10),
                Math.floor(Math.random()*10)],
        }
        res.send(data);
    },
}