/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meter', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
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
    tableName: 'meter'
  });
};
