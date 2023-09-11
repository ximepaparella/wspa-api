const Joi = require('joi');

const id = Joi.string().min(1);
const name = Joi.string().min(1).max(30);
const password = Joi.string().min(3).max(100);
const email = Joi.string().min(3).max(100);
const role = Joi.string().min(3).max(100);
const createdAt = Joi.date();
const updatedAt = Joi.date();

const createUserSchema = Joi.object({
  name: name.required(),
  password: password.required(),
  email: email.required(),
  role: role.required(),
  createdAt: createdAt.required(),
});

const updateUserSchema = Joi.object({
  name,
  password,
  email,
  role,
  updatedAt,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {createUserSchema, updateUserSchema, getUserSchema};
