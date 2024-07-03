'use strict';

const faker = require('@faker-js/faker').fakerID_ID;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const bills = [];

    const addBill = (userId, month, year, mandatory, principal = 0, interest = 0, timePeriod = 0, installmentNumber = 0, arrears = 0, paymentAmount = 25000, status = 'Sudah Terbayar') => {
      const totalBill = principal + interest + mandatory + arrears;
      bills.push({
        user_id: userId,
        month: month,
        year: year.toString(),
        mandatory: mandatory,
        principal: principal,
        interest: interest,
        time_period: timePeriod,
        installment_number: installmentNumber,
        arrears: arrears,
        total_bill: totalBill,
        payment_amount: paymentAmount,
        status: status,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    };

    for (let userId = 1; userId <= 32; userId++) {
      const startYear = faker.datatype.number({ min: 2019, max: 2023 });
      const endYear = 2024;

      let installmentNumber = 0;

      for (let year = startYear; year <= endYear; year++) {
        const startMonth = (year === startYear) ? faker.datatype.number({ min: 1, max: 12 }) : 1;
        const endMonth = (year === endYear) ? 7 : 12;

        for (let month = startMonth; month <= endMonth; month++) {
          let principal = 0;
          let interest = 0;
          let timePeriod = 0;
          let status = 'Sudah Terbayar';
          let paymentAmount = 25000;

          if (year === 2024 && month >= 4) {
            timePeriod = 12;
            installmentNumber++;
            principal = faker.datatype.number({ min: 120000, max: 300000 });
            interest = faker.datatype.number({ min: 50000, max: 150000 });

            if (installmentNumber === 2) {
              status = 'Belum Terbayar';
              paymentAmount = 25000;
            } else if (installmentNumber === 3) {
              status = 'Sudah Terbayar';
            }
          }

          addBill(userId, new Date(year, month - 1, 1).toLocaleString('id-ID', { month: 'long' }), year, 25000, principal, interest, timePeriod, installmentNumber, 0, paymentAmount, status);
        }
      }
    }

    await queryInterface.bulkInsert('Bills', bills);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bills', null, {});
  }
};
