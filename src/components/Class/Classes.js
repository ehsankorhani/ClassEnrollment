import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classActions from './../../actions/classActions';

import ClassesList from './ClassesList';

class Classes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classList: [
        {
          id: "CS201",
          name: "Information Security",
          startingDate: "12/12/2014",
          numberOfStudents: 4
        }
      ]
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <ClassesList list={this.state.classList} />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    classList: state.classList
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, classActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
