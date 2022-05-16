const validate = require('../../schemas/products/idValidation');

module.exports = (req, res, next) => {
  const { id } = req.params;
  const { err } = validate(id);
  if (err) { 
    return res.status(err.errCode.status).json({ err: {
      code: err.errCode.code,
      message: err.message,
    },
  });
  }
  next();
};