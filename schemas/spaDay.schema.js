const Joi  = require('joi');

const id = Joi.string().min(1);
const featuredHome = Joi.boolean();
const featuredImage = Joi.string().uri.min(1).max(300);
const discount = Joi.string().min(1).max(100);
const name = Joi.string().min(1).max(30);
const duration = Joi.string().min(1).max(30);
const priceOnly = Joi.number().min(1);
const priceDouble = Joi.number().min(1);
const coffeeBreak = Joi.boolean();
const giftVoucherOnlyId = Joi.number().min(1);
const giftVoucherDoubleId = Joi.number().min(1);
const services = Joi.array().items(Joi.object({
  id: Joi.number().min(1),
  name: Joi.string().min(1).max(100),
}));
const treatments = Joi.array().items(Joi.object({
  id: Joi.number().min(1),
  name: Joi.string().min(1).max(100),
  duration: Joi.number().min(1),
}));

const createSpaDaySchema = Joi.object({
  featuredHome,
  featuredImage: featuredImage.required(),
  discount,
  name: name.required(),
  duration: duration.required(),
  priceOnly: priceOnly.required(),
  priceDouble: priceDouble.required(),
  coffeeBreak,
  giftVoucherOnlyId: giftVoucherOnlyId.required(),
  giftVoucherDoubleId: giftVoucherDoubleId.required(),
  services: services.required(),
  treatments: treatments.required()
});

const updateSpaDaySchema = Joi.object({
  featuredHome,
  featuredImage,
  discount,
  name,
  duration,
  priceOnly,
  priceDouble,
  coffeeBreak,
  giftVoucherOnlyId,
  giftVoucherDoubleId,
  services,
  treatments
});

const getSpaDaySchema = Joi.object({
  id: id.required(),
});

module.exports = {createSpaDaySchema, updateSpaDaySchema, getSpaDaySchema};
