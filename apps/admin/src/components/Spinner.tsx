import React from 'react';
import { Spinner as BsSpinner } from 'react-bootstrap';

const Spinner = () => {
  return (
    <BsSpinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </BsSpinner>
  );
};

export default Spinner;
