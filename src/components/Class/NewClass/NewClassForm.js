import React from 'react';
import PropTypes from 'prop-types';

const NewClassForm = ({ newClass, message, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Class ID</label>
        <input type="text" className="form-control" name="id" value={newClass.id} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Class Name</label>
        <input type="text" className="form-control" name="name" value={newClass.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Maximum number of Enroll</label>
        <input type="number" className="form-control" name="numberOfStudents" value={newClass.numberOfStudents} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Starting Date</label>
        <input type="date" className="form-control" name="startingDate" value={newClass.startingDate} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Add Class</button>
      <p className="text-danger">{message}</p>
    </form>
  );
};

NewClassForm.prototype = {
  newClass: PropTypes.object,
  onChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default NewClassForm;
