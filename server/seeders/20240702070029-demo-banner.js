'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Banners', [
      {
        url_photo: '/banners/banner-1720027848969-901148953.jpg',
        title: 'Peringatan ulang tahun koperasi indonesia',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url_photo: '/banners/banner-1720027870854-517272287.jpg',
        title: 'Promo Jasa KPRI KD',
        is_active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url_photo: '/banners/banner-1720027893039-142028365.png',
        title: 'Penyambutan Bupati',
        is_active: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url_photo: '/banners/banner-1720027918691-976113242.jpg',
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
