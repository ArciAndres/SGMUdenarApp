/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quantity', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unit_symbol: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'quantity'
  });
};
