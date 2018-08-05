import { combineReducers } from 'redux';
import classEnrollment from './classReducer';

const rootReducer = combineReducers({
  classEnrollment: classEnrollment
});

export default rootReducer;
