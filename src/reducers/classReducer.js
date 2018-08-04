import * as types from '../actions/actionTypes';
//import initialState from './initialState';

export default function classReducer(state = false, action) {
  switch (action.type) {
    case types.ADD_CLASS:
      return action.ADD_CLASS;

    default:
      return state;
  }
}
