const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string()
    .not().empty()
    .required(),
  ingredients: Joi.string()
    .not().empty()
    .required(),
  preparation: Joi.string()
    .not().empty()
    .required(),
});

module.exports = (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;

    const { error } = schema.validate({ name, ingredients, preparation });

    if (error) {
      return res.status(400).json({
        message: 'Invalid entries. Try again.',
      });
    }
    return next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};