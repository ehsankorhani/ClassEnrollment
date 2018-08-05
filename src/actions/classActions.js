import * as types from './actionTypes';

export function addNewClassVisibility(show) {
  return {
    type: types.SHOW_NEW_CLASS,
    show
  };
}

export function addStudentVisibility(show) {
  return {
    type: types.SHOW_ADD_STUDENT,
    show
  };
}

export function studentsVisibility(show, classId) {
  return {
    type: types.SHOW_STUDENTS,
    show,
    classId
  };
}

export function addNewClass(newClass) {
  return {
    type: types.ADD_CLASS,
    newClass
  };
}

export function getStudentListSuccess(students) {
  return {
    type: types.GET_STUDENTS_SUCCESS,
    studentList: students
  };
}

export function getStudentListFail() {
  return {

  };
}

export function getStudentListIsLoading(status) {
  return {
  };
}

export function addStudentToClass(classId, studentId) {
  return {
    type: types.ADD_STUDENTS_TO_CLASS,
    classId,
    studentId
  };
}

export function getStudentList() {
  return (dispatch, getState) => {
    //dispatch(getStudentListIsLoading(true));
    fetch('https://s3-ap-southeast-2.amazonaws.com/teremstudents/students.json')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        //dispatch(getStudentListIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((json) => dispatch(getStudentListSuccess(json.Students)))
      .catch(() => dispatch(getStudentListFail()));
  };
}

export function deleteClass(classId) {
  return {
    type: types.DELETE_CLASS,
    classId
  };
}
