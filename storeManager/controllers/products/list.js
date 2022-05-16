const service = require('../../services/products');

module.exports = async (_req, res, next) => {
  try {
    const products = await service.list();
    return res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};