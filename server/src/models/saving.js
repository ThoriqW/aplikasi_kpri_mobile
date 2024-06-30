'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Saving extends Model {
    static associate(models) {
      // Define association here
      Saving.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  Saving.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Assumes there is a User model with a table name 'Users'
        key: 'id'
      }
    },
    principal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    mandatory: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    voluntary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Saving',
  });

  return Saving;
};
