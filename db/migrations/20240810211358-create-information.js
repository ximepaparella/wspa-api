'use strict';

const { UserSchema, USER_TABLE } = require ('../models/user.model');
const { TreatmentSchema, TREATMENTS_TABLE} = require('./../models/treatments.model');
const { WatterCircuitSchema, WATTER_CIRCUIT_TABLE } = require('./../models/watterCircuit.model');
const {SpaDaySchema, SPA_DAY_TABLE} = require('../models/spaDay.model');
const {MembershipSchema, MEMBERSHIP_TABLE} = require('../models/membership.model');
const {InformationSchema, INFORMATION_TABLE} = require('../models/information.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(TREATMENTS_TABLE, TreatmentSchema);
    await queryInterface.createTable(WATTER_CIRCUIT_TABLE, WatterCircuitSchema);
    await queryInterface.createTable(SPA_DAY_TABLE, SpaDaySchema);
    await queryInterface.createTable(MEMBERSHIP_TABLE, MembershipSchema);
    await queryInterface.createTable(INFORMATION_TABLE, InformationSchema);
  },

  async down (queryInterface) {
   await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(TREATMENTS_TABLE);
    await queryInterface.dropTable(WATTER_CIRCUIT_TABLE);
    await queryInterface.dropTable(SPA_DAY_TABLE);
    await queryInterface.dropTable(MEMBERSHIP_TABLE);
    await queryInterface.dropTable(INFORMATION_TABLE);
  }
};
