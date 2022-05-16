const error = 'Wrong product ID or invalid quantity';

const isQuantityLesserThan = (arrayOfObjects, min) => {
  const response = arrayOfObjects.some(({ quantity }) => quantity < min);
  return response;
};

const isNotNumber = (arrayOfObjects) => {
  const response = arrayOfObjects.some(({ quantity }) => typeof quantity !== 'number');
  return response;
};

const validate = (arrayOfObjects) => {
  const errCode = { status: 422, code: 'invalid_data' };
  switch (true) {
    case isQuantityLesserThan(arrayOfObjects, 1):
      return { err: { errCode, message: error } };
    case isNotNumber(arrayOfObjects):
      return { err: { errCode, message: error } };
    default: return {};
  }
};

module.exports = validate;
