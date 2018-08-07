import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function classReducer(state = initialState, action) {
  let visibleView;
  let classList;

  switch (action.type) {
    case types.SHOW_NEW_CLASS:
      visibleView = Object.assign({}, state.visibleView);

      for (let p in visibleView) {
        visibleView[p] = false;
      }

      visibleView.addNewClass = action.show;

      return {
        ...state,
        visibleView: visibleView
      };

    case types.SHOW_ADD_STUDENT:
      visibleView = Object.assign({}, state.visibleView);

      for (let p in visibleView) {
        visibleView[p] = false;
      }

      visibleView.addStudent = action.show;

      return {
        ...state,
        visibleView: visibleView
      };

    case types.SHOW_STUDENTS:
      visibleView = Object.assign({}, state.visibleView);

      for (let p in visibleView) {
        visibleView[p] = false;
      }

      visibleView.students = action.show;

      return {
        ...state,
        visibleClassId: action.classId,
        visibleView: visibleView
      };

    case types.ADD_CLASS:
      return {
        ...state,
        classList: [...state.classList, action.newClass]
      };

    case types.GET_STUDENTS_SUCCESS:
      return {
        ...state,
        studentList: action.studentList
      };

    case types.ADD_STUDENTS_TO_CLASS:
      classList = state.classList;
      const classes = classList.find(x => x.id === action.classId);
      const classesIndex = classList.findIndex(x => x.id === action.classId);
 
      classes.studentIds = classes.studentIds || [];
      classes.studentIds.push(action.studentId);
      classList[classesIndex] = classes;

      return {
        ...state,
        classList: [...state.classList]
      };

    case types.DELETE_CLASS:
      classList = [...state.classList];
      const index = classList.findIndex(x => x.id === action.classId);

      if (index !== -1) classList.splice(index, 1);
      
      return {
        ...state,
        classList: classList
      };

    case types.REMOVE_STUDENT:
      classList = [...state.classList];

      const selectedClassIndex = classList.findIndex(x => x.id === action.classId);
      const selectedClass = classList[selectedClassIndex];
      const classStudentIds = selectedClass.studentIds;
      const indexOfStudent = classStudentIds.indexOf(action.studentId);

      if (indexOfStudent !== -1) classStudentIds.splice(index, 1);

      selectedClass.studentIds = classStudentIds;
      classList[selectedClassIndex] = selectedClass;

      return {
        ...state,
        classList: classList
      };

    default:
      return state;
  }
}
