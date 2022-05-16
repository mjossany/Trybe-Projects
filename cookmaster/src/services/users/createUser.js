const models = require('../../models/documents')('users');

module.exports = async (newUser) => {
  const { name, email, role, _id } = await models.createUser(newUser);
  return { name, email, role, _id };
};