const models = require('../../models/documents')('recipes');

module.exports = async (recipeId) => {
  const response = await models.getRecipe(recipeId);
  return response;
};