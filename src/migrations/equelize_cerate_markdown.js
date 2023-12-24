'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Markdown', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.STRING
      },
      clinicId: {
        type: Sequelize.STRING
      },
      specialtyid: {
        type: Sequelize.STRING
      },
      contentHTML: {
        type: Sequelize.STRING
      },
      contentMarkdown: {
        type: Sequelize.STRING
      },
      description: {
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
    await queryInterface.dropTable('Markdown');
  }
};