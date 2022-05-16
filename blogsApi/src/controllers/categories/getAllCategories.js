const { OK } = require('http-status-codes');
const { getAllCategories } = require('../../services/categories');

module.exports = async (_req, res, next) => {
  try {
    const categories = await getAllCategories();

    res.status(OK).json(categories);
  } catch (err) {
    next(err);
  }
};