'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Profile.belongsTo(models.WorkUnit, {
        foreignKey: 'work_unit_id',
        as: 'workUnit'
      });
    }
  }
  Profile.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'User ID is required' },
        isInt: { msg: 'User ID must be an integer' }
      }
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Full name is required' },
        notEmpty: { msg: 'Full name cannot be empty' }
      }
    },
    position: DataTypes.STRING,
    work_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: { msg: 'Work unit ID must be an integer' }
      }
    },
    address: DataTypes.TEXT,
    photo_url: DataTypes.STRING,
    join_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: 'Join date is required' },
        isDate: { msg: 'Join date must be a valid date' }
      }
    },
    status: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Gender is required' },
        notEmpty: { msg: 'Gender cannot be empty' }
      }
    },
    birth_date: DataTypes.DATE,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};
