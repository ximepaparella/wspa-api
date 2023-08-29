const Joi = require('joi');

const id = Joi.string().min(1);
const name = Joi.string().min(1).max(30);
const password = Joi.string().min(3).max(100);
const email = Joi.string().min(3).max(100);
const rol = Joi.string().min(3).max(100);

const createUserSchema = Joi.object({
  name: name.required(),
  password: password.required(),
  email: email.required(),
  rol: rol.required(),
});

const updateUserSchema = Joi.object({
  name,
  password,
  email,
  rol,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {createUserSchema, updateUserSchema, getUserSchema};
