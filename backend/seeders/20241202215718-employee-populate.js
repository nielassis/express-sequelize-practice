"use strict";

const position = require("../models/position");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("employees", [
      {
        username: "Marcus Smith",
        position_Id: 1,
        hire_date: new Date("2021-02-01"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Kaitlin Boyle",
        position_Id: 2,
        hire_date: new Date("2021-02-10"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Cleora Wilderman",
        position_Id: 2,
        hire_date: new Date("2021-02-10"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
