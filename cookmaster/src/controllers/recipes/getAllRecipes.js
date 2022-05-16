const services = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const response = await services.getAllRecipes();
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};