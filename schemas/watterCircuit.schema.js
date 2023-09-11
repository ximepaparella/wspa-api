const Joi = require('joi');

const id = Joi.string().min(1);
const name = Joi.string().min(1).max(30);
const includes = Joi.string().min(3);
const clientPrice = Joi.number().min(3);
const visitorPrice = Joi.number().min(3);
const createdAt = Joi.date();
const updatedAt = Joi.date();

const createWatterCircuitSchema = Joi.object({
  name: name.required(),
  includes,
  clientPrice: clientPrice.required(),
  visitorPrice: visitorPrice.required(),
  createdAt: createdAt.required(),
});

const updateWatterCircuitSchema = Joi.object({
name,
includes,
clientPrice,
visitorPrice,
updatedAt
});

const getWatterCircuitSchema = Joi.object({
  id: id.required(),
});

module.exports = {createWatterCircuitSchema, updateWatterCircuitSchema, getWatterCircuitSchema};

