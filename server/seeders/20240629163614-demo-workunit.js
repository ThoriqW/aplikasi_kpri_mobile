'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WorkUnits', [
      {
        code: 'A1',
        name: 'BA Creative ID',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A2',
        name: 'Dinas Bina Marga',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A3',
        name: 'Kecamatan Baolan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A4',
        name: 'Dinas Perpustakaan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WorkUnits', null, {});
  }
};
