import React from 'react';
import { Spinner as BsSpinner } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

export const Spinner = () => {
  return (
    <BsSpinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </BsSpinner>
  );
};

export const SpinnerCenter = () => {
  return (
    <Container
      className="position-absolute top-0 vh-100 d-flex align-items-center"
      style={{ maxWidth: '100%' }}
    >
      <Row className="w-100 justify-content-center">
        <Col className="w-auto flex-grow-0">
          <BsSpinner />
        </Col>
      </Row>
    </Container>
  );
};
