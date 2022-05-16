const { getAllCategories } = require('../categories');

module.exports = async (categoriesArray) => {
  const categories = await getAllCategories();

  const categoriesIds = categories.map((category) => category.id);

  const doesntHaveAllCategories = categoriesArray.some((categ) => !categoriesIds.includes(categ));

  if (doesntHaveAllCategories) return false;

  return true;
};