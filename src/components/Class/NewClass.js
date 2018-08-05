import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classActions from './../../actions/classActions';

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
      }
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

    this.props.actions.addNewClass(this.state.newClass);
  }

  render() {
    return (
      <NewClassForm
        newClass={this.state.newClass}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, classActions), dispatch)
  };
}

export default connect(null, mapDispatchToProps)(NewClass);
