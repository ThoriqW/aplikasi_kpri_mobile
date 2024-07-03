'use strict';

const faker = require('@faker-js/faker').fakerID_ID;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const savings = [];

    for (let i = 1; i <= 32; i++) {
      savings.push({
        user_id: i,
        principal: faker.datatype.number({ min: 10000, max: 10000 }),
        mandatory: faker.datatype.number({ min: 1200000, max: 7000000 }),
        voluntary: faker.datatype.boolean() ? faker.datatype.number({ min: 50000, max: 2000000 }) : null,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Savings', savings, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Savings', null, {});
  }
};
