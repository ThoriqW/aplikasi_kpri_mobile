'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Banners', [
      {
        url_photo: '/images/banners/banner1.jpg',
        title: 'Peringatan ulang tahun koperasi indonesia',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url_photo: '/images/banners/banner2.jpg',
        title: 'Penyambutan Bupati',
        is_active: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url_photo: '/images/banners/banner3.jpg',
        title: 'Promo Jasa KPRI KD',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url_photo: '/images/banners/banner4.jpg',
        title: 'Peringatan Kemerdekaan Indonesia',
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
