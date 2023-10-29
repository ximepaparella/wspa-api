const boom = require ('@hapi/boom');
const {models}  = require('../libs/sequelize');
class InformationService {
  constructor() {

  }

  async create(data) {
   const newInformation = await models.Information.create(data);
    return newInformation;
  }

  async find() {
    const rta = await models.Information.findAll();
    return rta;
  }

 async findOne(id) {
    const information = await models.Information.findByPk(id);
    if (!information) {
      throw boom.notFound('Information not found');
    }
    return information;
  }

  async update(id, changes) {
    const information = await this.findOne(id);
    const rta = await information.update(changes);
    return rta;
  }

 async delete(id) {
    const information = await this.findOne(id);
    await information.destroy();
    return {id};
  }
}

module.exports = InformationService;
