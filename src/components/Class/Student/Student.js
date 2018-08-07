import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classActions from './../../../actions/classActions';

import StudentList from './StudentList';

class Student extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveStudent = this.handleRemoveStudent.bind(this);
  }

  handleRemoveStudent(studentId) {
    this.props.actions.removeStudent(this.state.classId, studentId);
  }

  render() {
    return (
      <div>
        <h3>{this.props.visibleClass.id + ': ' + this.props.visibleClass.name}</h3>
        <StudentList
          list={this.props.list}
          remove={this.handleRemoveStudent}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let classEnrollment = state.classEnrollment ? state.classEnrollment : {};
  const classList = classEnrollment.classList || [];
  const visibleClassId = classEnrollment.visibleClassId || '';
  const visibleClass = classList.find(x => x.id === visibleClassId);
  const classStudent = visibleClass.studentIds || [];
  const studentList = classEnrollment.studentList || [];
  const list = studentList.filter(student => {
    return classStudent.indexOf(student.id) !== -1;
  });

  return {
    visibleClass: visibleClass,
    list: list
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, classActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
