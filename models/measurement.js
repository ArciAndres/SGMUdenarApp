/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('measurement', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_meter: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'meter',
        key: 'id'
      }
    },
    phase: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'measurement'
  });
};
