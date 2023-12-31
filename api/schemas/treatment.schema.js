const Joi = require('joi');

const id = Joi.string().min(1);
const name = Joi.string().min(1).max(30);
const aditionals = Joi.string().min(3).max(100);
const duration = Joi.number().min(3).max(100);
const description = Joi.string().min(3).max(500);
const price = Joi.number().min(10);
const salePrice = Joi.number().min(10);
const giftLinkId = Joi.number().min(1);
const category = Joi.string().min(3).max(50);

const createTreatmentSchema = Joi.object({
  name: name.required(),
  aditionals,
  duration: duration.required(),
  description: description.required(),
  price: price.required(),
  salePrice,
  giftLinkId,
  category: category.required(),
});

const updateTreatmentSchema = Joi.object({
  name,
  aditionals,
  duration,
  description,
  price,
  salePrice,
  giftLinkId,
  category,
});

const getTreatmentSchema = Joi.object({
  id: id.required(),
});

module.exports = {createTreatmentSchema, updateTreatmentSchema, getTreatmentSchema};
