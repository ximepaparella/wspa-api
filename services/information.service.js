const boom = require ('@hapi/boom');
const {models}  = require('../libs/sequelize');
class InformationService {
  constructor() {

  }

  async create(data) {
    const newInformation = {
      ...data,
    }
    this.information.push(newInformation);
    return newInformation;
  }

  async find() {
    const rta = await models.Information.findAll();
    return rta;
  }

  async findOne(id) {
    const information = this.information.find((info) => info.id === id);
    if(!information) {
      throw boom.notFound('Information not found');
    }
    return information;
  }

  async update(changes) {
   const information = this.information[0];
   const informationUpdated = {
      ...information,
      ...changes
   }
   return informationUpdated;
  }

  delete() {}
}

module.exports = InformationService;
