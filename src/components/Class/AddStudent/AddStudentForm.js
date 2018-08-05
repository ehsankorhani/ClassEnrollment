import React from 'react';
import PropTypes from 'prop-types';

const AddStudentForm = ({ studentList = [], classList = [], handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Student Name</label>
        <select className="form-control" name="studentId" onChange={handleChange}>
          {studentList.map(s =>
            <option key={s.id} value={s.id}>{s.name}</option>
          )};
        </select>
      </div>
      <div className="form-group">
        <label>Class Name</label>
        <select className="form-control" name="classId" onChange={handleChange}>
          {classList.map(c =>
            <option key={c.id} value={c.id}>{c.name}</option>
          )};
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Student</button>
    </form>
  );
};

AddStudentForm.prototype = {
  newClass: PropTypes.object,
  onChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default AddStudentForm;
