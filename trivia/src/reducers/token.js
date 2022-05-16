import { GET_TOKEN, GET_TOKEN_ERROR } from '../actions';

const INITIAL_STATE = {
  token: '',
  error: '',
};

function storageTokenReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_TOKEN:
    return { ...state, token: action.payload };
  case GET_TOKEN_ERROR:
    return { ...state, error: 'erro' };
  default:
    return state;
  }
}

export default storageTokenReducer;
