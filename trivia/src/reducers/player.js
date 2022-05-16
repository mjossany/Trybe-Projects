import { STORAGE_PLAYER_INFO } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
};

function storagePlayerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case STORAGE_PLAYER_INFO:
    return {
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  default:
    return state;
  }
}

export default storagePlayerReducer;
