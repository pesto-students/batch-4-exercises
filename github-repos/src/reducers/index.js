import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  repos: reposReducer,
  error: errorReducer,
  loading: loadingReducer
});
