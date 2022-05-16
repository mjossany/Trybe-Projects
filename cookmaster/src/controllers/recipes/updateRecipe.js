const services = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id } = req.loggedUserInfos;
    const { name, ingredients, preparation } = req.body;
    const infosObj = { recipeInfos: { id, ...req.body }, userInfos: { ...req.loggedUserInfos } };
    const response = await services.updateRecipe(infosObj);
    if (response) {
      return res.status(200).json({
        _id: id,
        name,
        ingredients,
        preparation,
        userId: _id,
      });
    }
  } catch (err) {
    next(err);
  }
};