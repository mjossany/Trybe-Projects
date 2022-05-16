const service = require('../../services/products');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.getById(id);
    return res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};