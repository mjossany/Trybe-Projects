import { getToken } from '../actions';

const URL = 'https://opentdb.com/api_token.php?command=request';

const fetchToken = () => async (dispatch) => {
  const response = await fetch(URL);
  const responseJs = await response.json();
  const { token } = responseJs;
  console.log(token);
  dispatch(getToken(token));
};

export default fetchToken;
