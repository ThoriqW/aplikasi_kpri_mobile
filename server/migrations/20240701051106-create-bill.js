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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      month: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      time_period: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      installment_number: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      arrears: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      principal: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      interest: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      mandatory: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      total_bill: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      payment_amount: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      remaining_arrears: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bills');
  }
};
