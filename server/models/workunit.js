'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WorkUnit extends Model {
    static associate(models) {
      WorkUnit.hasMany(models.Profile, {
        foreignKey: 'work_unit_id',
        as: 'profiles'
      });
    }
  }
  WorkUnit.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'WorkUnit',
  });
  return WorkUnit;
};
