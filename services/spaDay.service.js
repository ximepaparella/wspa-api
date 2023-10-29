const boom = require ('@hapi/boom');

const {models}  = require('../libs/sequelize');

class SpaDaysService {
  constructor() {

  }

  async create(data) {
   const newSpaDay = await models.SpaDay.create(data);
   return newSpaDay
  }

  async find() {
    const rta = await models.SpaDay.findAll();
    return rta;
  }

  async findOne(id){
    const spaDay = await models.SpaDay.findByPk(id);
    if (!spaDay) {
      throw boom.notFound('SpaDay not found');
    }
    return spaDay;
  }

  async update(id, changes) {
    const spaDay = await this.findOne(id);
    const rta = await spaDay.update(changes);
    return rta;
  }

  async delete(id) {
    const spaDay = await this.findOne(id);
    await spaDay.destroy();
    return {id};
  }

}

module.exports = SpaDaysService;
