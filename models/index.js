var Sequelize = require('sequelize');
var fs        = require("fs");
var path      = require("path");
var env       = process.env.NODE_ENV || "development";

//connection object

var sequelize = new Sequelize('sgmudenar', 'root', '1q2w3e4R', {
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
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;