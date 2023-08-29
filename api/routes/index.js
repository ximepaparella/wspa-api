const express = require('express');
const treatmentsRouter = require('./treatment.router');
const usersRouter = require('./user.router');
const spaDaysRouter = require('./spaDay.router');
const informationRouter = require('./information.router');
const membershipRouter = require('./membership.router');
const watterCircuitRouter = require('./watterCircuit.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/treatments', treatmentsRouter);
  router.use('/users', usersRouter);
  router.use('/spa-days', spaDaysRouter);
  router.use('/information', informationRouter);
  router.use('/memberships', membershipRouter);
  router.use('/watter-circuit', watterCircuitRouter);
}

module.exports = routerApi;
