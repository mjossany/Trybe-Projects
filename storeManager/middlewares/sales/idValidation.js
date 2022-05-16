const validate = require('../../schemas/sales/idValidation');

module.exports = (req, res, next) => {
  const { id } = req.params;
  const { err } = validate(id);
  if (err && req.method === 'DELETE') {
    return res.status(err.errCode[1].status).json({ err: {
      code: err.errCode[1].code,
      message: err.errCode[1].message,
    },
  });
  }
  if (err) { 
    return res.status(err.errCode[0].status).json({ err: {
      code: err.errCode[0].code,
      message: err.errCode[0].message,
    },
  });
  }
  next();
};