const { isRequiredFields } = require('../functions');

module.exports = (req, _res, next) => {
  const { body } = req;

  const invalidFields = isRequiredFields(body, ['title', 'content', 'categoryIds']);

  if (invalidFields) return next(invalidFields);

  return next();
};