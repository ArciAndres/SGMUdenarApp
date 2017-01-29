/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('measure', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    value: {
      type: "DOUBLE",
      allowNull: false
    },
    id_quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'quantity',
        key: 'id'
      }
    },
    id_measurement: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'measurement',
        key: 'id'
      }
    }
  }, {
    tableName: 'measure'
  });
};
