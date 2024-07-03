'use strict';

const faker = require('@faker-js/faker').fakerID_ID;

module.exports = {
  async up(queryInterface, Sequelize) {
    const profiles = [
      {
        user_id: 1,
        full_name: 'Moh Dwi Ramdhani',
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
        position: 'Frontend Developer',
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
    ];

    for (let i = 3; i <= 27; i++) {
      profiles.push({
        user_id: i,
        full_name: faker.name.fullName(),
        position: faker.name.jobTitle(),
        work_unit_id: faker.datatype.number({ min: 1, max: 14 }),
        address: faker.address.streetAddress(),
        photo_url: faker.image.avatar(),
        join_date: faker.date.past().toISOString().split('T')[0],
        status: 'Active',
        gender: faker.helpers.arrayElement(['male', 'female']),
        birth_date: faker.date.past(30, new Date(1990, 0, 1)).toISOString().split('T')[0],
        phone_number: faker.phone.number(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Profiles', profiles, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
