import * as types from './actionTypes';

export function addNewClass(newClass) {
  return {
    type: types.ADD_CLASS,
    newClass
  };
}
