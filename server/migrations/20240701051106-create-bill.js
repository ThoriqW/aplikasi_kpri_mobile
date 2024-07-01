'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_member_id: {
        type: Sequelize.INTEGER
      },
      month: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      time_period: {
        type: Sequelize.INTEGER
      },
      installment_number: {
        type: Sequelize.INTEGER
      },
      arrears: {
        type: Sequelize.DECIMAL
      },
      principal: {
        type: Sequelize.DECIMAL
      },
      interest: {
        type: Sequelize.DECIMAL
      },
      mandatory: {
        type: Sequelize.DECIMAL
      },
      total_bill: {
        type: Sequelize.DECIMAL
      },
      payment_amount: {
        type: Sequelize.DECIMAL
      },
      remaining_arrears: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bills');
  }
};