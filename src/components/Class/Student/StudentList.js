import React from 'react';
import uuidv1 from 'uuid/v1';

const StudentList = ({list = [], remove}) => {
  return (
    <table className="table table-bordered table-sm">
      <thead>
        <tr>
          <th scope="col">Student ID</th>
          <th scope="col">Student Name</th>
          <th scope="col">Enrollment Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((record) => {
          return (
            <tr key={uuidv1()}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.enrollmentDate}</td>
              <td>
                <button type="button" className="btn btn-link" onClick={() => remove(record.id)}>Remove</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentList;
