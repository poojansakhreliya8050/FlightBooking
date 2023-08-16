'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: "kempegowda international airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "mysuru  airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "mengaluru international airport",
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "indira gandhi international airport",
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
