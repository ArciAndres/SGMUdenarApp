/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('digitalcontrol', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_meter: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'meter',
        key: 'id'
      }
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    board_pin: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'digitalcontrol'
  });
};
