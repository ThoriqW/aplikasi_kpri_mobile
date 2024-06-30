'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, {
        foreignKey: 'user_id',
        as: 'profile'
      });
      User.hasOne(models.Saving, {
        foreignKey: 'user_id',
        as: 'saving'
      });
    }
  }
  
  User.init({
    nip: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'NIP is required'
        },
        notEmpty: {
          msg: 'NIP cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password cannot be empty'
        },
        len: {
          args: [6, 128],
          msg: 'Password should be between 6 and 128 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
