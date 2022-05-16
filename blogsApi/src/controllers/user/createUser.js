const { CREATED } = require('http-status-codes').StatusCodes;
const { createUser } = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await createUser({ displayName, email, password, image });

    res.status(CREATED).json({ token });
  } catch (err) {
    next(err);
  }
};