const services = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
  const { id } = req.params;
  const response = await services.getRecipe(id);
  if (!response) return res.status(404).json({ message: 'recipe not found' });
  return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};