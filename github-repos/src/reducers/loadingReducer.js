import { LOADING_STARTED, LOADING_DONE } from '../actions/types';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_STARTED:
      return {
        ...state,
        loading: true
      };
    case LOADING_DONE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
