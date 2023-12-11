const Joi = require('joi');

const id = Joi.string().min(1);
const name = Joi.string().min(1).max(30);
const aditionals = Joi.string().min(3).max(100).allow('').empty('');
const duration = Joi.number().min(3).max(100);
const description = Joi.string();
const price = Joi.number().min(10);
const salePrice = Joi.number();
const giftLinkId = Joi.number();
const category = Joi.string().min(3).max(50);
const createdAt = Joi.date();
const updatedAt = Joi.date();

const limit = Joi.number();
const offset = Joi.number();

const createTreatmentSchema = Joi.object({
  name: name.required(),
  aditionals,
  duration: duration.required(),
  description: description.required(),
  price: price.required(),
  salePrice,
  giftLinkId,
  category: category.required(),
  createdAt: createdAt.required(),
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
  updatedAt,
});

const getTreatmentSchema = Joi.object({
  id: id.required(),
});

const queryTreatmentSchema = Joi.object({
  limit,
  offset
});

module.exports = {createTreatmentSchema, updateTreatmentSchema, getTreatmentSchema, queryTreatmentSchema};
