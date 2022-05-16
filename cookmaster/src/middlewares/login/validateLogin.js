const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string()
    .pattern(new RegExp(/\w+@\w+.com(.br)?/))
    .not().empty()
    .messages({ 
      'string.pattern.base': 'Incorrect username or password',
      'any.required': 'All fields must be filled',
      'string.empty': 'All fields must be filled',
    })
    .required(),
  password: Joi.string()
    .not().empty()
    .messages({
      'string.empty': 'All fields must be filled',
      'any.required': 'All fields must be filled',
    })
    .required(),
});

const getMessage = ({ details: [{ message }] }) => message;

module.exports = (req, res, next) => {
  try {
    const { email, password } = req.body;
  
    const { error } = schema.validate({ email, password });
  
    if (error) {
      return res.status(401).json({
        message: getMessage(error),
      });
    }
    return next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};