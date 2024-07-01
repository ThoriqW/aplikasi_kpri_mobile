'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Saving extends Model {
    static associate(models) {
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
        model: 'Users',
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
