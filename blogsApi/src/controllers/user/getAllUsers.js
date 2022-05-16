const { OK } = require('http-status-codes/build/cjs/legacy');
const { getAllUsers } = require('../../services/user');

module.exports = async (_req, res, next) => {
  try {
    const allUsers = await getAllUsers();

    res.status(OK).json(allUsers);
  } catch (err) {
    next(err);
  }
};