const {User, UserSchema} = require('./user.model');
const {Treatment, TreatmentSchema} = require('./treatments.model');
const {Membership, MembershipSchema} = require('./membership.model');
const {Information, InformationSchema} = require('./information.model');
const {SpaDay, SpaDaySchema} = require('./spaDay.model');
const {WatterCircuit, WatterCircuitSchema} = require('./watterCircuit.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Treatment.init(TreatmentSchema, Treatment.config(sequelize));
  Membership.init(MembershipSchema, Membership.config(sequelize));
  Information.init(InformationSchema, Information.config(sequelize));
  SpaDay.init(SpaDaySchema, SpaDay.config(sequelize));
  WatterCircuit.init(WatterCircuitSchema, WatterCircuit.config(sequelize));
}

module.exports = setupModels;
