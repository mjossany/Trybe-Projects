export const STORAGE_PLAYER_INFO = 'STORAGE_PLAYER_INFO';
export const STORAGE_QUESTIONS = 'STORAGE_QUESTIONS';
export const STORAGE_QUESTIONS_ERROR = 'STORAGE_QUESTIONS_ERROR';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_TOKEN_ERROR = 'GET_TOKEN_ERROR';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const SET_ANSWERED_TRUE_CORRECT = 'SET_ANSWERED_TRUE_CORRECT';
export const SET_ANSWERED_TRUE_INCORRECT = 'SET_ANSWERED_TRUE_INCORRECT';
export const SET_STORE_SCORE = 'SET_STORE_SCORE';
export const SET_RESET = 'SET_RESET';

export const getToken = (payload) => ({ type: GET_TOKEN, payload });

export const getTokenError = ({ type: GET_TOKEN_ERROR });

export const getQuestions = (payload) => ({ type: GET_QUESTIONS, payload });

export const storagePlayerInfo = (payload) => ({ type: STORAGE_PLAYER_INFO, payload });

export const storageQuestions = (payload) => ({ type: STORAGE_QUESTIONS, payload });

export const storageQuestionsError = ({ type: STORAGE_QUESTIONS_ERROR });

export const nextQuestion = () => ({ type: NEXT_QUESTION });

export const setAnsweredTrueCorrect = () => ({ type: SET_ANSWERED_TRUE_CORRECT });

export const setAnsweredTrueIncorrect = () => ({ type: SET_ANSWERED_TRUE_INCORRECT });

export const setStoreScore = (payload) => ({ type: SET_STORE_SCORE, payload });

export const setReset = () => ({ type: SET_RESET });
