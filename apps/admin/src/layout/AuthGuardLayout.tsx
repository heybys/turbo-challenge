import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthGuardLayout = () => {
  const navigate = useNavigate();
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      const redirectUrl = toRelativeUrl(
        window.location.href,
        window.location.origin,
      );
      if (!redirectUrl.includes('sign-in')) {
        navigate(`/sign-in?redirectUrl=${redirectUrl}`);
      }
    }
  }, [oktaAuth, !!authState, authState?.isAuthenticated]);

  if (!authState || !authState?.isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default AuthGuardLayout;
