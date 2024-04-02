import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
// import { toRelativeUrl } from '@okta/okta-auth-js';
import { Outlet } from 'react-router-dom';

function OktaProtectedRoute() {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (!authState) {
      return;
    }

    checkMenuAutorization(authState);

    if (!authState?.isAuthenticated) {
      const originalUri = '/'; //toRelativeUrl(window.location.href, window.location.origin);
      // console.log(originalUri);
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect();
    }
  }, [oktaAuth, !!authState, authState?.isAuthenticated]);

  if (!authState || !authState?.isAuthenticated) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        ...
      </div>
    );
  }

  return <Outlet />;
}

export default OktaProtectedRoute;
