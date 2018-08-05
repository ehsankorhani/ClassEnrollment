import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function classReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_CLASS:
      return {
        ...state,
        classList: [...state.classList, action.newClass]
      };
    default:
      return state;
  }
}
