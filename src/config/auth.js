import storage from '@Services/storage';

// Adal Auth needed
export const AUTH_ADFS_TENANT = 'auth.adfs.tenant';
export const AUTH_ADFS_INSTANCE = 'auth.adfs.instance';
export const AUTH_ADFS_APPIDS = 'auth.adfs.appids';
export const AUTH_ADFS_EXTRAQUERYPARAMETER = 'auth.adfs.extraQueryParameter';

export const CC_API_HOST = 'clientconnect.api.host';
export const CC_USE_APGW = 'clientconnect.use.apgw';
export const CC_SHOW_DOCUMENTS_IN_GED = 'clientconnect.showDocumentsInGed';
export const CC_POST_LOGOUT_REDIRECT_URI = 'clientconnect.postLogoutRedirectUri';
export const CC_SHOW_LOGIN = 'clientconnect.show.login';
export const CC_FO_EMAIL_LIST = 'clientconnect.fo.emails';

export const JWT_TOKEN_ID = 'adal.idtoken';
export const JWT_TOKEN_HINT = 'id_token_hint';
export const JWT_TOKEN_NAME = 'adal.access.token.key';

export const adalConfig = {
  cacheLocation: 'sessionStorage',
  clientId: storage.getItem(AUTH_ADFS_APPIDS),
  endpoints: { api: storage.getItem(AUTH_ADFS_APPIDS) },
  extraQueryParameter: storage.getItem(AUTH_ADFS_EXTRAQUERYPARAMETER),
  instance: storage.getItem(AUTH_ADFS_INSTANCE),
  navigateToLoginRequestUrl: false,
  postLogoutRedirectUri: `${storage.getItem(CC_POST_LOGOUT_REDIRECT_URI)}&id_token_hint=${JWT_TOKEN_HINT}`,
  redirectUri: storage.getItem(CC_POST_LOGOUT_REDIRECT_URI),
  tenant: storage.getItem(AUTH_ADFS_TENANT)
};

export default adalConfig;
