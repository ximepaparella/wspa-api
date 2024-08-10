const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TreatmentService {
  constructor() {}

  async createTreatment(data) {
    const newTreatment = models.Treatment.create(data);
    return newTreatment;
  }

  async find(query) {
    const options = {};
    if (query.limit) {
      options.limit = parseInt(query.limit, 10);
    }
    if (query.offset) {
      options.offset = parseInt(query.offset, 10);
    }
    if (query.category) {
      options.where = { category: query.category }; // Filter by category
    }
    const rta = await models.Treatment.findAll(options);
    return rta;
  }

  async findOne(id) {
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
    return { id };
  }
}

module.exports = TreatmentService;
