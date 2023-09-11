const Joi = require('joi');

const id = Joi.string().min(1);
const validationText = Joi.string().min(1);
const featuredImage = Joi.string().min(1);
const name = Joi.string().min(1);
const price = Joi.number().min(1);
const giftVoucherLink = Joi.string().min(1);
// const services = Joi.array().items(Joi.object({
//   id: Joi.number().min(1),
//   name: Joi.string().min(1),
// }));
// const treatments = Joi.array().items(Joi.object({
//   id: Joi.number().min(1),
//   name: Joi.string().min(1),
//   duration: Joi.number().min(1),
// }));
const createdAt = Joi.date();
const updatedAt = Joi.date();

const createMembershipSchema = Joi.object({
  validationText: validationText.required(),
  featuredImage: featuredImage.required(),
  name: name.required(),
  price: price.required(),
  giftVoucherLink: giftVoucherLink.required(),
  // services: services.required(),
  // treatments: treatments.required(),
  createdAt: createdAt.required(),
});

const updateMembershipSchema = Joi.object({
  validationText,
  featuredImage,
  name,
  price,
  giftVoucherLink,
  // services,
  // treatments,
  updatedAt
});

const getMembershipSchema = Joi.object({
  id: id.required(),
});

module.exports = {createMembershipSchema, updateMembershipSchema, getMembershipSchema};
