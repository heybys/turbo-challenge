import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useOktaAuth } from '@okta/okta-react';
import { MuiNavBar } from '@repo/ui';

const AppNavBar = () => {
  // const navigate = useNavigate();
  //
  // const { oktaAuth, authState } = useOktaAuth();
  //
  // const logout = async () => {
  //   // Will redirect to Okta to end the session then redirect back to the configured `postLogoutRedirectUri`
  //   await oktaAuth.signOut();
  // };

  return (
    <MuiNavBar />
    // <Navbar expand="lg" className="bg-body-tertiary z-3">
    //   <Container fluid>
    //     <Navbar.Brand href="/">Turbo Challenge</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/movies">Movies</Nav.Link>
    //         <Nav.Link href="/products">Products</Nav.Link>
    //         <Nav.Link href="/ui">UI</Nav.Link>
    //       </Nav>
    //       <div className="d-flex gap-3 align-items-center">
    //         <Badge>{authState?.idToken?.claims?.name}</Badge>
    //         {!authState ? null : !authState?.isAuthenticated ? (
    //           <Button
    //             variant="dark"
    //             onClick={() => {
    //               const redirectUrl = toRelativeUrl(
    //                 window.location.href,
    //                 window.location.origin,
    //               );
    //               if (!redirectUrl.includes('sign-in')) {
    //                 navigate(`/sign-in?redirectUrl=${redirectUrl}`);
    //               }
    //             }}
    //           >
    //             Sign In
    //           </Button>
    //         ) : (
    //           <Button
    //             variant="outline-dark"
    //             onClick={() => {
    //               logout();
    //             }}
    //           >
    //             Logout
    //           </Button>
    //         )}
    //       </div>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default AppNavBar;
