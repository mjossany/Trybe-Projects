const service = require('../../services/products');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { deletedCount, name, quantity } = await service.remove(id);
    if (deletedCount === 1) return res.status(200).json({ id, name, quantity });
  } catch (err) {
    next(err);
  }
};