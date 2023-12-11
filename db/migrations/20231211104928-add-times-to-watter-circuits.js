'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('watter_circuits', 'times', {
      type: Sequelize.STRING(150),
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('watter_circuits', 'times');
  }
};
