'use strict';

const { query } = require('express');
const { informationSchema, INFORMATION_TABLE } = require ('../models/information.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn(INFORMATION_TABLE, 'policesText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
  }),
  await queryInterface.addColumn(INFORMATION_TABLE, 'bookingsText', {
    type: Sequelize.STRING(250),
    defaultValue: 'text'
  }),
  await queryInterface.addColumn(INFORMATION_TABLE, 'cancelingText', {
    type: Sequelize.STRING(250),
    defaultValue: 'text'
  }),
  await queryInterface.addColumn(INFORMATION_TABLE, 'pricesText', {
    type: Sequelize.STRING(250),
    defaultValue: 'text'
  }),
  await queryInterface.addColumn(INFORMATION_TABLE, 'circuitText', {
    type: Sequelize.STRING(250),
    defaultValue: 'text'
  }),
  await queryInterface.addColumn(INFORMATION_TABLE, 'paymentText', {
    type: Sequelize.STRING(250),
    defaultValue: 'text'
  }),
  await queryInterface.addColumn(INFORMATION_TABLE, 'giftText', {
    type: Sequelize.STRING(250),
    defaultValue: 'text'
  }),
  await queryInterface.addColumn(INFORMATION_TABLE, 'personalCareText', {
    type: Sequelize.STRING(250),
    defaultValue: 'text'
  }),
  await queryInterface.addColumn(INFORMATION_TABLE, 'pregnantText', {
    type: Sequelize.STRING(250),
    defaultValue: 'text'
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn(INFORMATION_TABLE, 'policesText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    }),
    await queryInterface.addColumn(INFORMATION_TABLE, 'bookingsText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    }),
    await queryInterface.addColumn(INFORMATION_TABLE, 'cancelingText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    }),
    await queryInterface.addColumn(INFORMATION_TABLE, 'pricesText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    }),
    await queryInterface.addColumn(INFORMATION_TABLE, 'circuitText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    }),
    await queryInterface.addColumn(INFORMATION_TABLE, 'paymentText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    }),
    await queryInterface.addColumn(INFORMATION_TABLE, 'giftText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    }),
    await queryInterface.addColumn(INFORMATION_TABLE, 'personalCareText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    }),
    await queryInterface.addColumn(INFORMATION_TABLE, 'pregnantText', {
      type: Sequelize.STRING(250),
      defaultValue: 'text'
    })

  }
};
