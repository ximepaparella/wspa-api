const Joi = require('joi');

const id = Joi.string().min(1);
const address = Joi.string().min(1).max(100);
const whatsapp = Joi.string().min(1).max(100);
const times = Joi.object({
  monday: Joi.string().min(1).max(100),
  tuesday: Joi.string().min(1).max(100),
  wednesday: Joi.string().min(1).max(100),
  thursday: Joi.string().min(1).max(100),
  friday: Joi.string().min(1).max(100),
  saturday: Joi.string().min(1).max(100),
  sunday: Joi.string().min(1).max(100),
});
const copyright = Joi.string().min(1);
const whatsappText = Joi.string().min(1);
const whatsappLink = Joi.string().uri.min(1);

const createInformationSchema = Joi.object({
  address: address.required(),
  whatsapp: whatsapp.required(),
  times: times.required(),
  whatsappText: whatsappText.required(),
  whatsappLink: whatsappLink.required(),
  copyright: copyright.required(),
});

const updateInformationSchema = Joi.object({
  address,
  whatsapp,
  times,
  whatsappText,
  whatsappLink,
  copyright,
});

const getInformationSchema = Joi.object({
  id: id.required(),
});

module.exports = {createInformationSchema, updateInformationSchema, getInformationSchema};
