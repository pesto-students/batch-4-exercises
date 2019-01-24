import { LOADING_STARTED, LOADING_DONE } from '../actions/types';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_STARTED:
      return true;
    case LOADING_DONE:
      return false;
    default:
      return state;
  }
};
