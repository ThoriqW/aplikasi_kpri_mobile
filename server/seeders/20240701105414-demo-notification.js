'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notifications', [
      {
        user_id: 1,
        source: 'public',
        position: 'Backend Developer',
        work_unit_id: 1,
        address: 'Jl. Veteran No.36',
        photo_url: 'https://example.com/photo_rama.jpg',
        join_date: "2023-09-09",
        status: 'Active',
        gender: 'male',
        birth_date: '1999-01-05',
        phone_number: '082296064822',
        email: 'ramabmp1@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        full_name: 'Moh Thoriq Wajedi',
        position: 'Frontened Developer',
        work_unit_id: 1,
        address: 'Tuweley',
        photo_url: 'https://example.com/photo_thoriq.jpg',
        join_date: "2023-09-10",
        status: 'Active',
        gender: 'male',
        birth_date: '1999-01-04',
        phone_number: '082296709235',
        email: 'thoriqwajedi88@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notifications', null, {});
  }
};
