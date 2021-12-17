import { AuthenticationContext, adalGetToken } from 'react-adal';

import adalConfig from '@Config/auth';

let authContext;
class AppAuthenticationContext extends AuthenticationContext {
  _getNavigateUrl(_, resource) {
    return super._getNavigateUrl('id_token+token', resource);
  }
}

const getContext = () => {
  if (!authContext) {
    try {
      authContext = new AppAuthenticationContext(adalConfig);
    } catch (e) {
      // needs to be called 2 times to make it work ?!?
      authContext = new AppAuthenticationContext(adalConfig);
    }
  }

  return authContext;
};

const getToken = () => {
  const context = getContext();

  return adalGetToken(context, context.config.clientId);
};

const isLoggedIn = () => {
  return !!(getContext().getCachedToken('') !== null ? getContext().getCachedToken('') : '');
};

const login = () => {
  authContext.login();
};

const logout = () => {
  authContext.clearCache();
  authContext.logOut();
};

export { getContext, getToken, isLoggedIn, login, logout };
