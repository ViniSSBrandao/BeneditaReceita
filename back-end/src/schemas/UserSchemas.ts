import Joi from 'joi';

export const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  image: Joi.string().uri().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
