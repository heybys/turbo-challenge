import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
// import { Button } from '@repo/ui';

interface OktaSignInButtonProps {
  redirectUrl?: string;
}

const OktaSignInButton = ({ redirectUrl = '/' }: OktaSignInButtonProps) => {
  const { oktaAuth, authState } = useOktaAuth();

  const handleClickButton = () => {
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      oktaAuth.setOriginalUri(redirectUrl);
      oktaAuth.signInWithRedirect();
    }
  };

  return <button onClick={handleClickButton}>Okta</button>;
};

export default OktaSignInButton;
