const service = require('../../services/sales');

module.exports = async (_req, res, next) => {
  try {
    const response = await service.list();
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};