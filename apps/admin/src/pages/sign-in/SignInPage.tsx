import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignInButton from '@pages/sign-in/SignInButton.tsx';
import { useLocation } from 'react-router-dom';

const SignInPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const redirectUrl = searchParams.get('redirectUrl') || undefined;

  return (
    <Container
      className="position-absolute top-0 vh-100 d-flex align-items-center"
      style={{ maxWidth: '100%' }}
    >
      <Row className="w-100 justify-content-center">
        <Col className="w-auto d-flex justify-content-center">
          <SignInButton redirectUrl={redirectUrl} />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
