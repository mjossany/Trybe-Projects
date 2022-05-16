const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.getById(id);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
