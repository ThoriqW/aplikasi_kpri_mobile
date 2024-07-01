'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    static associate(models) {
      Saving.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  Bill.init({
    user_id: DataTypes.INTEGER,
    month: DataTypes.STRING,
    year: DataTypes.INTEGER,
    time_period: DataTypes.INTEGER,
    installment_number: DataTypes.INTEGER,
    arrears: DataTypes.DECIMAL,
    principal: DataTypes.DECIMAL,
    interest: DataTypes.DECIMAL,
    mandatory: DataTypes.DECIMAL,
    total_bill: DataTypes.DECIMAL,
    payment_amount: DataTypes.DECIMAL,
    remaining_arrears: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};