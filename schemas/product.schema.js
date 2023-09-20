const joi = require('joi');

const id = joi.string().uuid();
const name = joi
  .string()
  .regex(/^\w+(?:\s+\w+)*$/)
  .min(3)
  .max(20);
const price = joi.number().integer().min(10);
const image = joi.string();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = joi.object({
  name: name,
  price: price,
  image: image,
});

const getProductSchema = joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
