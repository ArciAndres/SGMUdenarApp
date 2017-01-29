var Sequelize = require('sequelize');

//connection object

var sequelize = new Sequelize('sgmudenar','root','1q2w3e4R',{
  host: 'localhost',
  dialect: 'mysql',
  define: {
        timestamps: false
    },
  
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

var Measurement = sequelize.import(__dirname + "/measurement")
var DigitalControl = sequelize.import(__dirname + "/digitalcontrol")
var Location = sequelize.import(__dirname + "/location")
var Measure = sequelize.import(__dirname + "/measure")
var Meter = sequelize.import(__dirname + "/meter")
var Quantity = sequelize.import(__dirname + "/quantity")

module.exports = {
    sequelize,
    Measurement,
    DigitalControl,
    Location,
    Measure,
    Meter,
    Quantity
}