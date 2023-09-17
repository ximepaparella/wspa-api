'use strict';

const { query } = require('express');
const { UserSchema, USER_TABLE } = require ('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn(USER_TABLE, 'role', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(USER_TABLE, 'role', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    })
  }
};
