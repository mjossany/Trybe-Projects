const services = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { _id: userIdentification } = req.loggedUserInfos;
    const infoObj = { name, ingredients, preparation, userIdentification };
    const response = await services.createRecipe(infoObj);
    const { name: recipeName,
      ingredients: recipeIngredients, preparation: recipePreparation, userId, _id } = response;
    return res.status(201).json({
      recipe: { name: recipeName,
        ingredients: recipeIngredients,
        preparation: recipePreparation,
        userId,
        _id,
      },
    });
  } catch (err) {
    next(err);
  }
};