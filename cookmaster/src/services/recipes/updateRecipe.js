const models = require('../../models/documents')('recipes');

module.exports = async (infosToUpdate) => {
  const { _id, role } = infosToUpdate.userInfos;
  const { userId } = await models.getRecipe(infosToUpdate.recipeInfos.id);
  if (userId === _id || role === 'admin') {
    const response = await models.updateRecipe(infosToUpdate.recipeInfos);
    return response;
  }
  return false;
};