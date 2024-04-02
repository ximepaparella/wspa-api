'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('spa_days', 'featured_image', {
      type: Sequelize.STRING(900), // Update the type to a longer length
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('spa_days', 'featured_image', {
      type: Sequelize.STRING(50), // Revert back to the original length if needed
    });
  },
};
