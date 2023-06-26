import Joi from 'joi';


export const recipeSchema = Joi.object({
  name: Joi.string().required(),
  img: Joi.string().required(),
  Description: Joi.string().required(),
  Ingredients: Joi.array().items(Joi.object().keys({
    quantity: Joi.number().required(),
    name: Joi.string().required(),
    measureUnit: Joi.string().required()})),
  Steps: Joi.array().items(Joi.object().keys({
    Description: Joi.string().required(),
    img: Joi.string().required(),
    step: Joi.number().required()
})),
});


