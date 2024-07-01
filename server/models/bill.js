'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bill.init({
    user_member_id: DataTypes.INTEGER,
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