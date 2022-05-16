const models = require('../../models/documents')('recipes');

module.exports = async () => {
  const response = await models.getAllRecipes();
  return response;
};