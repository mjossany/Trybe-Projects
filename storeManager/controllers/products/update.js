const service = require('../../services/products');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const productInfos = { id, name, quantity };
    const response = await service.update(productInfos);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};