const models = require('../../models/documents')('users');

module.exports = async (email) => {
  const response = await models.findByEmail(email);
  return response;
};