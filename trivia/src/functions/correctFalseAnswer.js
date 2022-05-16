import { setAnsweredTrueCorrect, setAnsweredTrueIncorrect } from '../actions';

const correctFalseAnswer = (event) => (
  event.target.setdata.datatestid === 'correct-answer'
    ? setAnsweredTrueCorrect() : setAnsweredTrueIncorrect()
);

export default correctFalseAnswer;
