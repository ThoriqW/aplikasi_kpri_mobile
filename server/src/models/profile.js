'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: DataTypes.STRING,
    work_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: DataTypes.TEXT,
    photo_url: DataTypes.STRING,
    join_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      allowNull: false
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
