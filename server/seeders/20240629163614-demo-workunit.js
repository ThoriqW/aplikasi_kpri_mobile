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
        name: 'BKP SDM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A4',
        name: 'Dinas Perpustakaan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A5',
        name: 'Dinas Sosial',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A6',
        name: 'CAPIL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A7',
        name: 'Dinas Kesehatan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A8',
        name: 'Dinas Pendidikan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A9',
        name: 'Dinas Lingkungan Hidup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A10',
        name: 'Dinas Perhubungan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A11',
        name: 'Dinas Pertanian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'A12',
        name: 'Dinas Ketahanan Pangan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'B1',
        name: 'Kecamatan Baolan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'B2',
        name: 'Kecamatan Galang',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WorkUnits', null, {});
  }
};
