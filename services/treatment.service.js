const boom = require ('@hapi/boom');

const {models}  = require('../libs/sequelize');

class TreatmentService {
constructor() {

}

create(data) {
  const newTreatment = {
    id: Math.random().toString(36).substr(2, 9),
    ...data
   }
   this.treatments.push(newTreatment);
   return newTreatment;
}

async find() {
  const rta = await models.Treatment.findAll();
  return rta;
}

async findOne(id){
  const treatment = this.treatments.find(treatment => treatment.id === id);
  if(!treatment) {
    throw boom.notFound('Treatment not found');
  }
  return treatment;
}

async update(id, changes) {
  const index = this.treatments.findIndex(treatment => treatment.id === id);
  if(index === -1) {
    throw boom.notFound('Treatment not found');
  }
    const treatment = this.treatments[index];
    this.treatments[index] = {
      ...treatment,
      ...changes
    }
    return this.treatments[index];
}

async delete(id) {
  const index = this.treatments.findIndex(treatment => treatment.id === id);
  if(index === -1) {
    throw boom.notFound('Treatment not found');
  }
  this.treatments.splice(index, 1)
  return {
    message: 'Producto Eliminado',
    id
  }
}

}

module.exports = TreatmentService;
