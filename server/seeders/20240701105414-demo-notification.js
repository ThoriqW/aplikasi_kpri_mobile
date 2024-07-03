'use strict';

const faker = require('@faker-js/faker').fakerID_ID;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const notifications = [];

    const addNotification = (userId, type, title, body, status = 'unread') => {
      notifications.push({
        user_id: userId,
        type: type,
        title: title,
        body: body,
        status: status,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    };

    for (let userId = 1; userId <= 32; userId++) {
      const numNotifications = faker.datatype.number({ min: 1, max: 5 });

      for (let i = 0; i < numNotifications; i++) {
        const notificationType = faker.helpers.randomize(['success', 'warning', 'complaint']);
        let notificationTitle = '';
        let notificationBody = '';

        switch (notificationType) {
          case 'success':
            notificationTitle = `Tagihan ${faker.date.month()} ${faker.datatype.number({ min: 2020, max: 2024 })}`;
            notificationBody = `Tagihan ${faker.date.month()} ${faker.datatype.number({ min: 2020, max: 2024 })} telah berhasil dibayarkan dengan total Rp. ${faker.finance.amount(100000, 500000, 0)}`;
            break;
          case 'warning':
            notificationTitle = `Tagihan ${faker.date.month()} ${faker.datatype.number({ min: 2020, max: 2024 })}`;
            notificationBody = `Tagihan ${faker.date.month()} ${faker.datatype.number({ min: 2020, max: 2024 })} belum dibayarkan dengan total Rp. ${faker.finance.amount(100000, 500000, 0)}. Segera lakukan pembayaran`;
            break;
          case 'complaint':
            notificationTitle = `Aduan Potong ${faker.date.month()} ${faker.datatype.number({ min: 2020, max: 2024 })}`;
            notificationBody = `Aduan anda mengenai tagihan bulan ${faker.date.month()} ${faker.datatype.number({ min: 2020, max: 2024 })} yang terkena potongan dua kali telah berhasil ditangani oleh admin`;
            break;
          default:
            break;
        }

        addNotification(userId, notificationType, notificationTitle, notificationBody);
      }
    }

    await queryInterface.bulkInsert('Notifications', notifications);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notifications', null, {});
  }
};
