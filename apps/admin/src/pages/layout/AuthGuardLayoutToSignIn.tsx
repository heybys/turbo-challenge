import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { Outlet } from 'react-router-dom';
import { SpinnerCenter } from '@repo/ui';
// import SpinnerCenter from '../../../../../packages/ui/src/components/SpinnerCenter.tsx';

const AuthGuardLayoutToSignIn = () => {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      const originalUri = toRelativeUrl(
        window.location.href,
        window.location.origin,
      );
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect();
    }
  }, [oktaAuth, !!authState, authState?.isAuthenticated]);

  if (!authState || !authState?.isAuthenticated) {
    return <SpinnerCenter />;
    // return <div></div>;
  }

  return <Outlet />;
};

export default AuthGuardLayoutToSignIn;
