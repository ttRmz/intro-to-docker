import React from 'react';
import './Student.css';

function Student({ data }) {
  return (
    <div className='student'>
      <h5>
        {data.name} {data.family_name}
      </h5>
      <span>{data.class}</span>
    </div>
  );
}

export default Student;
