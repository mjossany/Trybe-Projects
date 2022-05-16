const { OK } = require('http-status-codes');
const { getUserById } = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    res.status(OK).json(user);
  } catch (err) {
    next(err);
  }
};