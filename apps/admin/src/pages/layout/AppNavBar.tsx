import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const AppNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Turbo Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Button variant="secondary">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
