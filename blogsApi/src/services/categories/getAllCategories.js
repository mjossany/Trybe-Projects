const { Category } = require('../../models');

module.exports = async () => {
  const response = await Category.findAll();

  return response;
};