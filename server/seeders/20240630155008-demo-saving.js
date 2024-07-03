'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Savings', [
      {
        user_id: 1,
        principal: 10000, 
        mandatory: 3450500, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        principal: 10000, 
        mandatory: 2570000, 
        voluntary: 500000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Savings', null, {});
  }
};