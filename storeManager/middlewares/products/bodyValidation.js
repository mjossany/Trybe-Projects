const validate = require('../../schemas/products/bodyValidation');

module.exports = (req, res, next) => {
  const { name, quantity } = req.body;
  const { err } = validate(name, quantity);
  if (err) { 
    return res.status(err.errCode.status).json({ err: {
      code: err.errCode.code,
      message: err.message,
    },
  });
  }
  next();
};