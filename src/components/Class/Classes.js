import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classActions from './../../actions/classActions';

import ClassesList from './ClassesList';

class Classes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <ClassesList list={this.props.classList} />
    );
  }
}

Classes.prototype = {
  classList: PropTypes.array
};

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
