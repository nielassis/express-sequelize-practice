"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("positions", [
      {
        title: "Manager",
        salary: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Developer",
        salary: 40000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("positions", null, {});
  },
};
