import Axios from 'axios';
import {
  UPDATE_REPOS_LIST,
  LOADING_DONE,
  LOADING_STARTED,
  GET_ERRORS
} from './types';

export const fetchRepos = username => dispatch => {
  dispatch({
    type: LOADING_STARTED
  });
  const apiEndPoint = `https://api.github.com/users/${username}/repos`;
  Axios.get(apiEndPoint)
    .then(response => response.data)
    .then(repos => {
      dispatch({
        type: UPDATE_REPOS_LIST,
        repos: repos
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        error: error.toString()
      });
    })
    .finally(() => {
      dispatch({
        type: LOADING_DONE
      });
    });
};
