const boom = require ('@hapi/boom');

const {models}  = require('../libs/sequelize');

class TreatmentService {
constructor() {

}

create(data) {
 const newTreatment = models.Treatment.create(data);
  return newTreatment;
}

async find() {
  const rta = await models.Treatment.findAll();
  return rta;
}

async findOne(id){
  const treatment = await models.Treatment.findByPk(id);
  if (!treatment) {
    throw boom.notFound('Treatment not found');
  }
  return treatment;
}

async update(id, changes) {
  const treatment = await this.findOne(id);
  const rta = await treatment.update(changes);
  return rta;
}

async delete(id) {
  const treatment = await this.findOne(id);
  await treatment.destroy();
  return {id};
}

}

module.exports = TreatmentService;
