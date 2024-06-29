'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        code: 'A1',
        name: 'Dinas Perpustakaan',
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
        code: 'A1',
        name: 'Kecamatan Baolan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
