import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classActions from './../../../actions/classActions';

import AddStudentForm from './AddStudentForm';

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newStudent: {
        classId: '',
        studentId: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.getStudentList();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const newStudent = Object.assign({}, this.state.newStudent);

    newStudent.classId = nextProps.classList[0].id;
    newStudent.studentId = nextProps.studentList[0].id;

    this.setState({newStudent});
  }

  handleChange(e) {
    let newStudent = Object.assign({}, this.state.newStudent);

    newStudent[e.target.name] = e.target.value;
    this.setState({newStudent});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.actions.addStudentToClass(this.state.newStudent.classId, this.state.newStudent.studentId);
    this.props.actions.addStudentVisibility(false);
  }

  render() {
    return (
      <AddStudentForm
        studentList={this.props.studentList}
        classList={this.props.classList}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.classEnrollment ? state.classEnrollment.studentList : [],
    classList: state.classEnrollment ? state.classEnrollment.classList : []
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, classActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
