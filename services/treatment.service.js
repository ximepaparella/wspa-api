const boom = require('@hapi/boom');
const cloudinary = require('cloudinary').v2; // Import Cloudinary
const { config } = require('../config/config');
const { models } = require('../libs/sequelize');

// Configure Cloudinary using values from your config
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

class TreatmentService {
  constructor() {}

  async createTreatmentWithImage(data, imageFile) {
    if (!imageFile) {
      throw boom.badRequest('Image file is required');
    }

    // Upload the image to Cloudinary
    const imageUploadResult = await cloudinary.uploader.upload(imageFile.path);

    // Create the treatment record with the image URL
    const newTreatment = await models.Treatment.create({
      ...data,
      imageUrl: imageUploadResult.secure_url, // Save the image URL in your database
    });

    return newTreatment;
  }

  create(data) {
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
