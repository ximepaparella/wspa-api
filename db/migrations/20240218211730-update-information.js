'use strict';
const { query } = require('express');
const {InformationSchema, INFORMATION_TABLE} = require ('../models/information.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(INFORMATION_TABLE, 'times', {
       type: Sequelize.STRING(150),
       defaultValue: 'times'
   })
   },

   async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(INFORMATION_TABLE, 'times', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    })
  }
};
