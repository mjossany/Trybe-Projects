const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const infosToBeUpdated = req.body;
    const saleInfos = { id, itensSold: infosToBeUpdated };
    const response = await service.update(saleInfos);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
