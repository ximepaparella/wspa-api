const Joi = require('joi');

const id = Joi.string().min(1);
const validationText = Joi.string().min(1).max(100);
const featuredImage = Joi.string().uri.min(1).max(300);
const name = Joi.string().min(1).max(30);
const price = Joi.number().min(1);
const giftVoucherLink = Joi.string().uri.min(1).max(300);
const services = Joi.array().items(Joi.object({
  id: Joi.number().min(1),
  name: Joi.string().min(1).max(100),
}));
const treatments = Joi.array().items(Joi.object({
  id: Joi.number().min(1),
  name: Joi.string().min(1).max(100),
  duration: Joi.number().min(1),
}));

const createMembershipSchema = Joi.object({
  validationText: validationText.required(),
  featuredImage: featuredImage.required(),
  name: name.required(),
  price: price.required(),
  giftVoucherLink: giftVoucherLink.required(),
  services: services.required(),
  treatments: treatments.required()
});

const updateMembershipSchema = Joi.object({
  validationText,
  featuredImage,
  name,
  price,
  giftVoucherLink,
  services,
  treatments
});

const getMembershipSchema = Joi.object({
  id: id.required(),
});

module.exports = {createMembershipSchema, updateMembershipSchema, getMembershipSchema};
