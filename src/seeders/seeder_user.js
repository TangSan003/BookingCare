'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@example.com',
      password: '123456',
      firstName: 'John',
      lastName: 'Doe',
      address: 'used address',
      phonenumber:'0123456789',
      gender: 1,
      image: "wqeqwewq", 
      roleId: 'ROLe',
      positionId: "R1",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
