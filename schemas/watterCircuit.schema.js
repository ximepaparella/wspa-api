const Joi = require('joi');

const id = Joi.string().min(1);
const name = Joi.string().min(1).max(30);
const clientPrice = Joi.number().min(3);
const visitorPrice = Joi.number().min(3);
const includes = Joi.string();
const times = Joi.string();
const createdAt = Joi.date();
const updatedAt = Joi.date();

const createWatterCircuitSchema = Joi.object({
  name: name.required(),
  clientPrice: clientPrice.required(),
  visitorPrice: visitorPrice.required(),
  times,
  includes,
  createdAt: createdAt.required(),
});

const updateWatterCircuitSchema = Joi.object({
name,
clientPrice,
visitorPrice,
times,
includes,
updatedAt
});

const getWatterCircuitSchema = Joi.object({
  id: id.required(),
});

module.exports = {createWatterCircuitSchema, updateWatterCircuitSchema, getWatterCircuitSchema};

