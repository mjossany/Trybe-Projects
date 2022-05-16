const { Category } = require('../../models');

module.exports = async (categoryName) => {
  const response = await Category.create({ name: categoryName });

  return response;
};