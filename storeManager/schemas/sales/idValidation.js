const { ObjectId } = require('mongodb');

  const isIdValid = (value) => (!ObjectId.isValid(value));

const validate = (id) => {
  const errCode = [
    { status: 404, code: 'not_found', message: 'Sale not found' }, 
    { status: 422, code: 'invalid_data', message: 'Wrong sale ID format' },
  ];
  switch (true) {
    case isIdValid(id): return { err: { errCode } };
    default: return {};
  }
};

module.exports = validate;