const models = require('../../models/documents')('recipes');

module.exports = async (objInfos) => {
  const { _id, role } = objInfos.userInfos;
  const { userId, name, ingredients, preparation } = await models.getRecipe(objInfos.id);
  if (userId === _id || role === 'admin') {
    await models.updateRecipe({ id: objInfos.id, fileUrl: objInfos.fileUrl });
    return { userId, name, ingredients, preparation };
  }
  return false;
};