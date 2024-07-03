'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Profiles', [
      {
        user_id: 1,
        full_name: 'Moh Dwi Ramdhani',
        position: 'Backend Developer',
        work_unit_id: 1,
        address: 'Jl. Veteran No.36',
        photo_url: '/profiles/photo-1720028092603-796375468.JPG',
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
        position: 'Frontend Developer',
        work_unit_id: 1,
        address: 'Tuweley',
        // photo_url: '/images/users/190302021.jpg',
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};