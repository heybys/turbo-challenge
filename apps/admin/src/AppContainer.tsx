import { Outlet, useNavigate } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { RestoreOriginalUriFunction } from '@okta/okta-react/bundles/types/OktaContext';
import OktaAuth, { OktaAuthOptions, toRelativeUrl } from '@okta/okta-auth-js';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || '0oag62vqug68vN46s5d7';
const ISSUER =
  process.env.REACT_APP_ISSUER ||
  'https://dev-48270309.okta.com/oauth2/default';
const REDIRECT_URI = `${window.location.origin}/login/callback`;

const oktaAuthOptions: OktaAuthOptions = {
  clientId: CLIENT_ID,
  issuer: ISSUER,
  redirectUri: REDIRECT_URI,
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  pkce: true,
  responseType: ['id_token', 'token', 'refresh_token'],
};

const oktaAuth = new OktaAuth(oktaAuthOptions);

const AppContainer = () => {
  const navigate = useNavigate();
  const restoreOriginalUri: RestoreOriginalUriFunction = (
    _oktaAuth,
    originalUri,
  ) => {
    console.log('this restoreOriginalUri gogo');
    console.log(_oktaAuth);
    console.log(originalUri);
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Outlet />
      </Security>
    </>
  );
};

export default AppContainer;
