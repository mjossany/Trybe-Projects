const { REQUIRED_FIELD } = require('../errors');

module.exports = (fields, arrayExpectedFields) => {
  const fieldsKeys = Object.keys(fields);
  
  const missingFields = arrayExpectedFields.filter((field) => !fieldsKeys.includes(field));

  const [missingField] = missingFields;

  if (missingField) return REQUIRED_FIELD(missingField);

  return null;
};