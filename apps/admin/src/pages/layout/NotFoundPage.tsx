import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container
      className="position-absolute top-0 vh-100 d-flex align-items-center"
      style={{ maxWidth: '100%' }}
    >
      <Row className="w-100 justify-content-center">
        <Col className="w-auto d-flex justify-content-center">
          <h3>🚧 Not Found Page</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
