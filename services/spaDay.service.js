const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { uploadFile } = require('../services/s3.service');

class SpaDaysService {
  constructor() {}

  async create(data, file) {
    if (file) {
      const folder = 'spa-days';
      const fileUrl = await uploadFile(file, folder);
      data.featuredImage = fileUrl;
    }
    const newSpaDay = await models.SpaDay.create(data);
    return newSpaDay;
  }

  async find() {
    const rta = await models.SpaDay.findAll();
    return rta;
  }

  async findOne(id) {
    const spaDay = await models.SpaDay.findByPk(id);
    if (!spaDay) {
      throw boom.notFound('SpaDay not found');
    }
    return spaDay;
  }

  async update(id, changes, file) {
    const spaDay = await this.findOne(id);
    if (file) {
      const folder = 'spa-days'; // Define the folder where images will be stored
      const fileUrl = await uploadFile(file, folder);
      changes.featuredImage = fileUrl;
    }
    const rta = await spaDay.update(changes);
    return rta;
  }

  async delete(id) {
    const spaDay = await this.findOne(id);
    await spaDay.destroy();
    return { id };
  }
}

module.exports = SpaDaysService;
