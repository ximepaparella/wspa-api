const Joi = require('joi');

const id = Joi.string().min(1);
const featuredHome = Joi.boolean();
const featuredImage = Joi.string().min(1).max(900).allow(null); // Allow null for updates
const discount = Joi.string().min(1).max(100);
const name = Joi.string().min(1).max(30);
const duration = Joi.string().min(1).max(30);
const priceOnly = Joi.number().min(1);
const priceDouble = Joi.number().min(1);
const coffeeBreak = Joi.boolean();
const giftVoucherOnlyId = Joi.number().min(1);
const giftVoucherDoubleId = Joi.number().min(1);
const description = Joi.string().min(1).max(30);
const createdAt = Joi.date();
const updatedAt = Joi.date();

const createSpaDaySchema = Joi.object({
  featuredHome,
  featuredImage: featuredImage.required(), // Required for creation
  discount,
  name: name.required(),
  duration: duration.required(),
  priceOnly: priceOnly.required(),
  priceDouble: priceDouble.required(),
  coffeeBreak,
  giftVoucherOnlyId: giftVoucherOnlyId.required(),
  giftVoucherDoubleId: giftVoucherDoubleId.required(),
  description,
  createdAt: createdAt.required(),
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
  description,
  updatedAt,
});

const getSpaDaySchema = Joi.object({
  id: id.required(),
});

module.exports = { createSpaDaySchema, updateSpaDaySchema, getSpaDaySchema };
