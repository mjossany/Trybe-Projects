const error = {
  nameLength: '"name" length must be at least 5 characters long',
  nameRepeat: 'Product already exists',
  quantityMinimum: '"quantity" must be larger than or equal to 1',
  quantityNotString: '"quantity" must be a number',
};

  const blank = (value) => (!value);
  const isNotString = (value) => (typeof value !== 'string');
  const isLengthLesserThan = (value, min) => (value.length < min);
  const isNotNumber = (value) => (typeof value !== 'number');
  const isQuantityLesserThan = (value, min) => (value < min);

  const validateName = (name) => (blank(name) || isNotString(name) || isLengthLesserThan(name, 5));

const validate = (name, quantity) => {
  const errCode = { status: 422, code: 'invalid_data' };
  switch (true) {
    case validateName(name): return { err: { errCode, message: error.nameLength } };
    case isNotNumber(quantity): return { err: { errCode, message: error.quantityNotString } };
    case isQuantityLesserThan(quantity, 1):
      return { err: { errCode, message: error.quantityMinimum } };
    default: return {};
  }
};

module.exports = validate;