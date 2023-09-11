const boom = require ('@hapi/boom');
const {models}  = require('../libs/sequelize');

class WatterCircuitService {
  constructor() {

  }

  async create(data) {
    const newWatterCircuit = await models.WatterCircuit.create(data);
    return newWatterCircuit;
  }

  async find() {
   const rta = await models.WatterCircuit.findAll();
    return rta;
  }

  async findOne(id){
    const watterCircuit = await models.WatterCircuit.findByPk(id);
    if (!watterCircuit) {
      throw boom.notFound('Watter Circuit not found');
    }
    return watterCircuit;
  }

  async update(id, changes) {
    const watterCircuit = await this.findOne(id);
    const rta = await watterCircuit.update(changes);
    return rta;
  }

  async delete(id) {
    const watterCircuit = await this.findOne(id);
    await watterCircuit.destroy();
    return {id};
  }
}

module.exports = WatterCircuitService;
