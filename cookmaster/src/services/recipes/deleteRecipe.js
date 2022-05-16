const models = require('../../models/documents')('recipes');

module.exports = async (infosObj) => {
  const { _id, role } = infosObj.userInfos;
  const { userId } = await models.getRecipe(infosObj.id);
  if (userId === _id || role === 'admin') {
    const response = await models.deleteRecipe(infosObj.id);
    return response;
  }
  return false;
};
