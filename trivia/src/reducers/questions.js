import {
  STORAGE_QUESTIONS,
  // STORAGE_QUESTIONS_ERROR,
  GET_QUESTIONS, NEXT_QUESTION,
  SET_ANSWERED_TRUE_CORRECT,
  SET_ANSWERED_TRUE_INCORRECT,
  SET_STORE_SCORE,
  SET_RESET,
} from '../actions';

const INITIAL_STATE = {
  questions: [],
  questionNumber: 0,
  answered: false,
  loading: true,
  error: '',
  correct: false,
  assertions: 0,
  score: 0,
};

function storageQuestionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_QUESTIONS:
    return { ...state, loading: true };
  case STORAGE_QUESTIONS:
    return { ...state, loading: false, questions: action.payload };
  // case STORAGE_QUESTIONS_ERROR:
  //   return { ...state, error: 'erro' };
  case SET_RESET:
    return { ...INITIAL_STATE };
  case NEXT_QUESTION:
    return { ...state, questionNumber: state.questionNumber + 1, answered: false };
  case SET_ANSWERED_TRUE_CORRECT:
    return { ...state, answered: true, assertions: state.assertions + 1, correct: true };
  case SET_ANSWERED_TRUE_INCORRECT:
    return { ...state, answered: true, correct: false };
  case SET_STORE_SCORE:
    return { ...state, score: state.score + action.payload };

  default:
    return state;
  }
}

export default storageQuestionsReducer;
