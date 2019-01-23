import { UPDATE_REPOS_LIST } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REPOS_LIST:
      return [...action.repos];
    default:
      return state;
  }
};
