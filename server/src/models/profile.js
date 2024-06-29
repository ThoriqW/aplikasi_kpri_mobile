'use strict';
const {
  Model
} = require('sequelize');
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

      // Jika Anda memiliki model WorkUnit, Anda bisa menambahkan asosiasi seperti ini:
      // Profile.belongsTo(models.WorkUnit, {
      //   foreignKey: 'work_unit_id',
      //   as: 'workUnit'
      // });
    }
  }
  Profile.init({
    user_id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    position: DataTypes.STRING,
    work_unit_id: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    photo_url: DataTypes.STRING,
    join_date: DataTypes.DATE,
    status: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};
