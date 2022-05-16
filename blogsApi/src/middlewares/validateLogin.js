const { isRequiredFields } = require('../functions');
const checkEmptyFields = require('../functions/checkEmptyFields');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  const { body } = req;

  const invalidFields = isRequiredFields(body, ['email', 'password']);

  if (invalidFields) return next(invalidFields);

  const emptyFields = checkEmptyFields({ email, password });

  if (emptyFields) return next(emptyFields);

  return next();
};