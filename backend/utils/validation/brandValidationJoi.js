const { celebrate, Joi } = require('celebrate');

const regExpUrl = require('../regExp');

const brandValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    image: Joi.string().required().pattern(regExpUrl),
    brandId: Joi.number().required(),
  }),
});

const brandIdValidator = celebrate({
  params: Joi.object().keys({
    brandId: Joi.number().required(),
  }),
});

module.exports = {
  brandValidator,
  brandIdValidator,
};
