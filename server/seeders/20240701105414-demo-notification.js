'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notifications', [
      {
        user_id: 1,
        type: 'success',
        title: "Tagihan Mei 2024",
        body: 'Tagihan Mei 2024 telah berhasil dibayarkan dengan total Rp. 395,000',
        status: 'read',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        type: 'success',
        title: "Tagihan Juni 2024",
        body: 'Tagihan Juni 2024 telah berhasil dibayarkan dengan total Rp. 395,000',
        status: 'unread',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        type: 'warning',
        title: "Tagihan Juli 2024",
        body: 'Tagihan Juli 2024 belum dibayarkan dengan total Rp. 395,000. Segera lakukan pembayaran',
        status: 'unread',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        type: 'complaint',
        title: "Aduan Potong Juli 2024",
        body: 'Aduan anda mengenai tagihan bulan Juli 2024 yang terkena potongan dua kali telah berhasil ditangani oleh admin',
        status: 'unread',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notifications', null, {});
  }
};