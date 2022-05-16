const service = require('../../services/products');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const newProduct = { name, quantity };
    const response = await service.create(newProduct);
    return res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};