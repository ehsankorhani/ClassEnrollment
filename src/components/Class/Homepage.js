import React from 'react';

import './class.scss';

import './Classes';
import Classes from './Classes';

const Homepage = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Class Enrollment</span>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-8 home-left-pane">
            <Classes />
          </div>
          <div className="col-12 col-sm-4 home-right-pane">
            One of three columns
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
