const { MIN_CHARACTER_LENGTH, INVALID_EMAIL, CHARACTER_LENGTH } = require('../errors');
const { isRequiredFields, checkEmail } = require('../functions');

module.exports = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const { body } = req;

  const invalidField = isRequiredFields(body, ['displayName', 'email', 'password']);

  if (invalidField) return next(invalidField);

  if (displayName.length < 8) return next(MIN_CHARACTER_LENGTH('displayName', 8));

  if (password.length !== 6) return next(CHARACTER_LENGTH('password', 6));

  if (!checkEmail(email)) return next(INVALID_EMAIL);

  return next();
};