import React from 'react';
import { Button } from 'react-bootstrap';
import { useOktaAuth } from '@okta/okta-react';

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

  return (
    <Button variant="dark" onClick={handleClickButton}>
      Okta
    </Button>
  );
};

export default OktaSignInButton;
