const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const productsArray = req.body;
    const response = await service.create(productsArray);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};