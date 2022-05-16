const questionTimer = (length, quantity) => {
  const random = [];
  while (random.length < length) {
    const randomNumber = Math.round(Math.random() * quantity);
    if (!random.includes(randomNumber)) {
      random.push(randomNumber);
    }
  }
  return random;
};

export default questionTimer;
