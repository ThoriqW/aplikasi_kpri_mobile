'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const bills = [];

    // Helper function to add bill
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

    // Create bills for user_id: 1
    const startYear1 = 2022;
    const endYear1 = 2024;
    let installmentNumber = 0;

    for (let year = startYear1; year <= endYear1; year++) {
      const startMonth = (year === startYear1) ? 2 : 1;
      const endMonth = (year === endYear1) ? 7 : 12;

      for (let month = startMonth; month <= endMonth; month++) {
        let principal = 0;
        let interest = 0;
        let timePeriod = 0;
        let status = 'Sudah Terbayar';
        let paymentAmount = 25000;

        if (year === 2024 && month >= 4) {
          timePeriod = 12;
          installmentNumber++;
          principal = 250000;
          interest = 120000;
          if (installmentNumber === 2) {
            status = 'Belum Terbayar';
            paymentAmount = 25000;
          } else if (installmentNumber === 3) {
            status = 'Sudah Terbayar';
          }
        }

        addBill(1, new Date(2024, month - 1, 1).toLocaleString('id-ID', { month: 'long' }), year, 25000, principal, interest, timePeriod, installmentNumber, 0, paymentAmount, status);
      }
    }

    // Create bills for user_id: 2
    const startYear2 = 2021;
    const endYear2 = 2024;

    for (let year = startYear2; year <= endYear2; year++) {
      const startMonth = (year === startYear2) ? 1 : 1;
      const endMonth = (year === endYear2) ? 7 : 12;

      for (let month = startMonth; month <= endMonth; month++) {
        addBill(2, new Date(year, month - 1, 1).toLocaleString('id-ID', { month: 'long' }), year, 25000);
      }
    }

    await queryInterface.bulkInsert('Bills', bills);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bills', null, {});
  }
};
