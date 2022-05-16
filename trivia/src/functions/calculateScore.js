const calculateScore = (timer, difficulty, correct) => {
  if (!correct) return 0;
  const score = 10;
  const hardMultiplyier = 3;
  const mediumMultiplyier = 2;
  console.log(difficulty);
  switch (difficulty) {
  case 'hard':
    return (score + (timer * hardMultiplyier));
  case 'medium':
    return (score + (timer * mediumMultiplyier));
  case 'easy':
    return (score + timer);
  default:
    return 0;
  }
};

export default calculateScore;
