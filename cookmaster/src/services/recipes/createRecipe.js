const models = require('../../models/documents')('recipes');

module.exports = async (objInfo) => {
  const response = await models.createRecipe(objInfo);
  return response.ops[0];
};