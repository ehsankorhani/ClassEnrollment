import React from 'react';
import './../class.scss';

const ClassesActions = ({ newClassClick, addStudentClick }) => {
  return (
    <form>
      <div className="form-row">
        <div className="col text-center">
          <div className="classes-action-button">
            <button type="button" className="btn btn-secondary" onClick={newClassClick}>New Class</button>
          </div>
          <div className="classes-action-button">
            <button type="button" className="btn btn-secondary" onClick={addStudentClick}>Add Student</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ClassesActions;
