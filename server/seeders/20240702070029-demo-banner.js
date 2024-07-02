'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Banners', [
      {
        url_photo: 'https./sd.asdas.jpg',
        title: 'sambutan blabla',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url_photo: 'https./sd.as3232.jpg',
        title: 'anggota keluarga',
        is_active: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url_photo: 'https./sd.vvvv.jpg',
        title: 'peresmian bla bla',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Banners', null, {});
  }
};
