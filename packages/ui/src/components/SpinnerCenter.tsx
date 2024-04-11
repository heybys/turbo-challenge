import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

export const SpinnerCenter = () => {
  return (
    <Container
      className="position-absolute top-0 vh-100 d-flex align-items-center"
      style={{ maxWidth: '100%' }}
    >
      <Row className="w-100 justify-content-center">
        <Col className="w-auto flex-grow-0">
          <Spinner />
        </Col>
      </Row>
    </Container>
  );
};

export default SpinnerCenter;
