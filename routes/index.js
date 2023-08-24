const treatmentsRouter = require('./treatment.router')

function routerApi(app) {
  app.use('/treatments', treatmentsRouter)
}

module.exports = routerApi;
