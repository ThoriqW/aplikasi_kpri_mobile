'use strict';

const models = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {

    await models.Profile.bulkCreate([
      {
        user_id: 1,
        full_name: 'Moh Dwi Ramdhani',
        position: 'Backend Developer',
        work_unit_id: 4,
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
        work_unit_id: 4,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
