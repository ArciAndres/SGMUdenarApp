/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_meter: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'meter',
        key: 'id'
      }
    },
    id_location: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'location',
        key: 'id'
      }
    }
  }, {
    tableName: 'log'
  });
};
