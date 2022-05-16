const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string()
    .required(),
  email: Joi.string()
    .pattern(new RegExp(/\w+@\w+.com/))
    .required(),
  password: Joi.string()
    .required(),
  role: Joi.string(),
});

module.exports = (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const { error } = schema.validate({ name, email, password });

    if (error) {
      return res.status(400).json({
        message: 'Invalid entries. Try again.',
      });
    }

    return next();
  } catch (err) {
    next(err);
  }
};