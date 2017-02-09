/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'location'
  });
};
