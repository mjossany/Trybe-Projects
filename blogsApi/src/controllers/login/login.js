const { OK } = require('http-status-codes');
const { checkUser } = require('../../services/user');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await checkUser({ email, password });
  
    res.status(OK).json({ token });
  } catch (err) {
    next(err);
  }
};