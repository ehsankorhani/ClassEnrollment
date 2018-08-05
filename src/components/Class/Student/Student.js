import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classActions from './../../../actions/classActions';

import StudentList from './StudentList';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      studentList: []
    };

    this.handleRemoveStudent = this.handleRemoveStudent.bind(this);
  }

  handleRemoveStudent() {
    // TODO: implement
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const visibleClass = nextProps.classList.find(x => x.id === nextProps.visibleClassId);

    this.setState({title: visibleClass.id + ' ' + visibleClass.name});
    const classStudent = visibleClass.studentIds || [];
    const list = nextProps.studentList.filter(function(item) {
      return classStudent.indexOf(item.id) > 0;
    });

    this.setState({studentList: list});
  }

  render() { 
    return (
      <div>
        <h3>{this.state.title}</h3>
        <StudentList
          list={this.state.studentList}
          remove={this.handleRemoveStudent}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    classList: state.classEnrollment ? state.classEnrollment.classList : [],
    studentList: state.classEnrollment ? state.classEnrollment.studentList : [],
    visibleClassId: state.classEnrollment ? state.classEnrollment.visibleClassId : ''
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, classActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
