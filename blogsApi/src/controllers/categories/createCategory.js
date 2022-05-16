const { CREATED } = require('http-status-codes/build/cjs/legacy');
const { createCategory } = require('../../services/categories');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = await createCategory(name);

    res.status(CREATED).json(category);
  } catch (err) {
    next(err);
  }
};