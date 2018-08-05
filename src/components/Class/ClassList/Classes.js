import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classActions from './../../../actions/classActions';

import ClassesList from './ClassesList';
import ClassesActions from './ClassesActions';

class Classes extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewClassClick = this.handleNewClassClick.bind(this);
    this.handleAddStudentClick = this.handleAddStudentClick.bind(this);
    this.handleViewClass = this.handleViewClass.bind(this);
    this.handleDeleteClass = this.handleDeleteClass.bind(this);
  }

  handleNewClassClick() {
    this.props.actions.addNewClassVisibility(true);
  }

  handleAddStudentClick() {
    this.props.actions.addStudentVisibility(true);
  }

  handleViewClass(classId) {
    this.props.actions.studentsVisibility(true, classId);
  }

  handleDeleteClass(classId) {
    this.props.actions.deleteClass(classId);
  }

  render() {
    return (
      <div>
        <ClassesList
          list={this.props.classList}
          viewClass={this.handleViewClass}
          deleteClass={this.handleDeleteClass}
        />
        <ClassesActions
          newClassClick={this.handleNewClassClick}
          addStudentClick={this.handleAddStudentClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    classList: state.classEnrollment ? state.classEnrollment.classList : []
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, classActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
