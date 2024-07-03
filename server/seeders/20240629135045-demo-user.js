'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123123', saltRounds);
    const defaultPassword = await bcrypt.hash('kprikd', saltRounds);

    // Pengguna tetap
    const users = [
      {
        nip: '190302029',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: '190302021',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const generateRandomNIP = () => {
      const yearOfBirth = '1985';
      const monthOfBirth = '07';
      const dayOfBirth = '23';
      const yearOfPNS = '2005';
      const monthOfPNS = '02';
      const gender = Math.floor(Math.random() * 2) + 1;
      const orderNumber = String(Math.floor(Math.random() * 900) + 100).padStart(3, '0');

      return `${yearOfBirth}${monthOfBirth}${dayOfBirth}${yearOfPNS}${monthOfPNS}${gender}${orderNumber}`;
    };

    for (let i = 0; i < 30; i++) {
      users.push({
        nip: generateRandomNIP(),
        password: defaultPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
