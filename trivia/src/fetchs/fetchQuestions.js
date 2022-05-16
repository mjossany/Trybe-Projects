import { getQuestions, storageQuestions, storageQuestionsError } from '../actions';

const fetchQuestions = () => async (dispatch) => {
  dispatch(getQuestions());
  const tokenLocalStorageJson = localStorage.getItem('token') || '{}';
  const tokenLocalStorage = JSON.parse(tokenLocalStorageJson);
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`);
  if (!response.ok) return dispatch(storageQuestionsError());
  const { results } = await response.json();
  dispatch(storageQuestions(results));
};

export default fetchQuestions;
