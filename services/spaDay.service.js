const boom = require ('@hapi/boom');

const {models}  = require('../libs/sequelize');

class SpaDaysService {
  constructor() {

  }

  async create(data) {
    const newSpaDay = {
      id: Math.random().toString(36).substr(2, 9),
      ...data
    }
    this.spaDays.push(newSpaDay);
    return newSpaDay;
  }

  async find() {
    const rta = await models.SpaDay.findAll();
    return rta;
  }

  async findOne(id){
    const spaDay = this.spaDays.find(spaDay => spaDay.id === id);
    if(!spaDay) {
      throw boom.notFound('Spa Day not found');
    }
    return spaDay;
  }

  async update(id, changes) {
    const index = this.spaDays.findIndex(spaDay => spaDay.id === id);
    if(index === -1) {
      throw boom.notFound('SpaDay not found');
    }
    const spaDay = this.spaDays[index];
    this.spaDays[index] = {
      ...spaDay,
      ...changes
    }
    return this.spaDays[index];
  }

  async delete(id) {
    const index = this.spaDays.findIndex(spaDay => spaDay.id === id);
    if(index === -1) {
      throw boom.notFound('SpaDay not found');
    }
    this.spaDays.splice(index, 1)
    return {
      message: 'SpaDay Eliminado',
      id
    }
  }

}

module.exports = SpaDaysService;
