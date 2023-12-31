'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedule', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        doctorId: {
            type: Sequelize.STRING
        },
        priceId: {
            type: Sequelize.STRING
        },
        provinceId: {
            type: Sequelize.DATE
        },
        paymentId: {
            type: Sequelize.STRING
        },
        addressClinic: {
            type: Sequelize.STRING
        },
        nameClinic: {
            type: Sequelize.STRING
        },
        note: {
            type: Sequelize.STRING
        },
        count: {
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
    await queryInterface.dropTable('Schedule');
  }
};