const { CATEGORIES_NOT_ALLOWED } = require('../errors');
const { isRequiredFields } = require('../functions');

module.exports = (req, _res, next) => {
  const { categoryIds } = req.body;

  if (categoryIds) return next(CATEGORIES_NOT_ALLOWED);

  const { body } = req;

  const invalidFields = isRequiredFields(body, ['title', 'content']);

  if (invalidFields) return next(invalidFields);

  return next();
};