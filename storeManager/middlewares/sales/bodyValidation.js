const validate = require('../../schemas/sales/bodyValidation');

module.exports = (req, res, next) => {
  const { err } = validate(req.body);
  if (err) {
    return res.status(err.errCode.status).json({ err: {
      code: err.errCode.code,
      message: err.message,
    },
  });
  }
  next();
};