import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classActions from './../../../actions/classActions';

import NewClassForm from './NewClassForm';

class NewClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newClass: {
        id: '',
        name: '',
        numberOfStudents: '',
        startingDate: ''
      },
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleChange(e) {
    let newClass = Object.assign({}, this.state.newClass);

    newClass[e.target.name] = e.target.value;
    this.setState({newClass});
  }

  handleSubmit(e) {
    e.preventDefault();

    // check existence
    const index = this.props.classList.findIndex(x => x.id === this.state.newClass.id);

    if (index < 0) {
      this.props.actions.addNewClass(this.state.newClass);
      this.props.actions.addNewClassVisibility(false);
    } else {
      this.setState({message: "A class with the same Id is already exist."})
    }
  }

  render() {
    return (
      <NewClassForm
        newClass={this.state.newClass}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        message={this.state.message}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewClass);
