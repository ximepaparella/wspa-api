const Joi = require('joi');

const id = Joi.string().min(1);
const address = Joi.string().min(1).max(100);
const whatsapp = Joi.string().min(1).max(100);
const times = Joi.string().min(1).max(100);
const copyright = Joi.string().min(1);
const whatsappText = Joi.string().min(1);
const whatsappLink = Joi.string().min(1);
const facebookLink = Joi.string().min(1);
const instagramLink = Joi.string().min(1);
const policesText = Joi.string().min(1);
const bookingsText = Joi.string().min(1);
const cancelingText = Joi.string().min(1);
const pricesText = Joi.string().min(1);
const circuitText = Joi.string().min(1);
const paymentText = Joi.string().min(1);
const giftText  = Joi.string().min(1);
const personalCareText = Joi.string().min(1);
const pregnantText = Joi.string().min(1);

const createInformationSchema = Joi.object({
  address: address.required(),
  whatsapp: whatsapp.required(),
  times: times.required(),
  whatsappText: whatsappText.required(),
  whatsappLink: whatsappLink.required(),
  copyright: copyright.required(),
  facebookLink: facebookLink.required(),
  instagramLink: instagramLink.required(),
  policesText: policesText.required(),
  bookingsText: bookingsText.required(),
  cancelingText: cancelingText.required(),
  pricesText: pricesText.required(),
  circuitText: circuitText.required(),
  paymentText: paymentText.required(),
  giftText: giftText.required(),
  personalCareText: personalCareText.required(),
  pregnantText: pregnantText.required(),

});

const updateInformationSchema = Joi.object({
  address,
  whatsapp,
  times,
  whatsappText,
  whatsappLink,
  copyright,
  facebookLink,
  instagramLink,
  policesText,
  bookingsText,
  cancelingText,
  pricesText,
  circuitText,
  paymentText,
  giftText,
  personalCareText,
  pregnantText,
});

const getInformationSchema = Joi.object({
  id: id.required(),
});

module.exports = {createInformationSchema, updateInformationSchema, getInformationSchema};
