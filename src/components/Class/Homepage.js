import React from 'react';
import { connect } from 'react-redux';

import Classes from './ClassList/Classes';
import NewClass from './NewClass/NewClass';
import AddStudent from './AddStudent/AddStudent';
import Students from './Student/Student';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let RightPaneComponent = <div />;

    if (this.props.visibleView.addNewClass) {
      RightPaneComponent = <NewClass />;
    } else if (this.props.visibleView.addStudent) {
      RightPaneComponent = <AddStudent />;
    } else if (this.props.visibleView.students) {
      RightPaneComponent = <Students />;
    }

    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Class Enrollment</span>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-7 home-left-pane">
              <Classes />
            </div>
            <div className="col-12 col-sm-5 home-right-pane">
              {RightPaneComponent}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibleView: state.classEnrollment ? state.classEnrollment.visibleView : {}
  };
};

export default connect(mapStateToProps, null)(Homepage);
