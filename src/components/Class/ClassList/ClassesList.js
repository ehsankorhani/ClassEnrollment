import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

const ClassesList = ({ list = [], viewClass, deleteClass }) => {
  return (
    <table className="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">Class ID</th>
          <th scope="col">Class Name</th>
          <th scope="col">Starting Date</th>
          <th scope="col"># of Students</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((record) => {
          return (
            <tr key={uuidv1()}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.startingDate}</td>
              <td>{record.numberOfStudents}</td>
              <td>
                <button type="button" className="btn btn-link" onClick={() => viewClass(record.id)}>View</button>
                /
                <button type="button" className="btn btn-link" onClick={() => deleteClass(record.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ClassesList.propTypes = {
  list: PropTypes.array
};

export default ClassesList;
