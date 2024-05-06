import React from 'react';
import { SpinnerCenter } from '@repo/ui';
import { LoginCallback } from '@okta/okta-react';

const LoginCallbackPage = () => {
  return <LoginCallback loadingElement={<SpinnerCenter />} />;
};

export default LoginCallbackPage;
