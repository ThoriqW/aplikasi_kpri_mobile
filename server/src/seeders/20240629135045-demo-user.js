'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10; // Jumlah rounds untuk hashing

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash('123123', saltRounds);
    const hashedPassword2 = await bcrypt.hash('123123', saltRounds);
    const hashedPassword3 = await bcrypt.hash('199', saltRounds);

    return queryInterface.bulkInsert('Users', [
      {
        nip: '190302029',
        password: hashedPassword1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: '1903021',
        password: hashedPassword2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: '199',
        password: hashedPassword3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
