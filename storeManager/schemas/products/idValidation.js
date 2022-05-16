const { ObjectId } = require('mongodb');

const error = {
  idValid: 'Wrong id format',
};

  const isIdValid = (value) => (!ObjectId.isValid(value));

const validate = (id) => {
  const errCode = { status: 422, code: 'invalid_data' };
  switch (true) {
    case isIdValid(id): return { err: { errCode, message: error.idValid } };
    default: return {};
  }
};

module.exports = validate;