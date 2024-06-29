'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Nama tabel yang di-referensi
          key: 'id'      // Kolom yang di-referensi
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      position: {
        type: Sequelize.STRING
      },
      work_unit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'WorkUnits',
          key: 'id' 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      address: {
        type: Sequelize.TEXT
      },
      photo_url: {
        type: Sequelize.STRING
      },
      join_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      phone_number: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
  }
};
