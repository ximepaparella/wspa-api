'use strict';

const { query } = require('express');
const { informationSchema, INFORMATION_TABLE } = require ('../models/information.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn(INFORMATION_TABLE, 'policesText', {
      type: Sequelize.TEXT,
  }),
  await queryInterface.changeColumn(INFORMATION_TABLE, 'bookingsText', {
    type: Sequelize.TEXT,
  }),
  await queryInterface.changeColumn(INFORMATION_TABLE, 'cancelingText', {
    type: Sequelize.TEXT,
  }),
  await queryInterface.changeColumn(INFORMATION_TABLE, 'pricesText', {
    type: Sequelize.TEXT,
  }),
  await queryInterface.changeColumn(INFORMATION_TABLE, 'circuitText', {
    type: Sequelize.TEXT,
  }),
  await queryInterface.changeColumn(INFORMATION_TABLE, 'paymentText', {
    type: Sequelize.TEXT,
  }),
  await queryInterface.changeColumn(INFORMATION_TABLE, 'giftText', {
    type: Sequelize.TEXT,
  }),
  await queryInterface.changeColumn(INFORMATION_TABLE, 'personalCareText', {
    type: Sequelize.TEXT,
  }),
  await queryInterface.changeColumn(INFORMATION_TABLE, 'pregnantText', {
    type: Sequelize.TEXT,
  })
  },



  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(INFORMATION_TABLE, 'policesText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    }),
    await queryInterface.changeColumn(INFORMATION_TABLE, 'bookingsText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    }),
    await queryInterface.changeColumn(INFORMATION_TABLE, 'cancelingText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    }),

    await queryInterface.changeColumn(INFORMATION_TABLE, 'pricesText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    }),

    await queryInterface.changeColumn(INFORMATION_TABLE, 'circuitText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    }),

    await queryInterface.changeColumn(INFORMATION_TABLE, 'paymentText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    }),

    await queryInterface.changeColumn(INFORMATION_TABLE, 'giftText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    }),

    await queryInterface.changeColumn(INFORMATION_TABLE, 'personalCareText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    }),

    await queryInterface.changeColumn(INFORMATION_TABLE, 'pregnantText', {
      type: Sequelize.STRING(50),
      defaultValue: 'customer'
    })

  }
};
