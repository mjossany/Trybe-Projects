const services = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const { _id, email, role } = req.loggedUserInfos;
    const infosObj = { id, userInfos: { ...req.loggedUserInfos } };
    const response = await services.deleteRecipe(infosObj);
    if (response) return res.status(204).end();
    return response;
  } catch (err) {
    next(err);
  }
};