const { EMPTY_FIELD } = require('../errors');

module.exports = (fields) => {
  const fieldsKeys = Object.keys(fields);
  const emptyField = fieldsKeys.find((key) => fields[key].length === 0);

  if (emptyField) return EMPTY_FIELD(emptyField);
  return null;
};