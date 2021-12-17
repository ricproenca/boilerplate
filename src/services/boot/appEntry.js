import {
  AUTH_ADFS_APPIDS,
  AUTH_ADFS_EXTRAQUERYPARAMETER,
  AUTH_ADFS_INSTANCE,
  AUTH_ADFS_TENANT,
  CC_API_HOST,
  CC_FO_EMAIL_LIST,
  CC_POST_LOGOUT_REDIRECT_URI,
  CC_SHOW_DOCUMENTS_IN_GED,
  CC_SHOW_LOGIN,
  CC_USE_APGW
} from '@Config/auth';
import storage from '@Services/storage';

import { getAppEnvironment } from './appService';

const startAppEnvironment = async () => {
  const appEnv = await getAppEnvironment();

  if (!appEnv) {
    return false;
  }

  const { adfsUrl, apiUrl, clientId, redirectUri, resource, showDocumentsInGed, showLogin, useApiGw, foEmailList } =
    appEnv;

  storage.setItem(AUTH_ADFS_TENANT, '/adfs');
  storage.setItem(AUTH_ADFS_INSTANCE, adfsUrl);
  storage.setItem(AUTH_ADFS_APPIDS, clientId);
  storage.setItem(AUTH_ADFS_EXTRAQUERYPARAMETER, `resource=${resource}`);
  storage.setItem(CC_API_HOST, apiUrl);
  storage.setItem(CC_USE_APGW, useApiGw);
  storage.setItem(CC_SHOW_DOCUMENTS_IN_GED, showDocumentsInGed);
  storage.setItem(CC_POST_LOGOUT_REDIRECT_URI, redirectUri);
  storage.setItem(CC_SHOW_LOGIN, showLogin);
  storage.setItem(CC_FO_EMAIL_LIST, foEmailList);

  return { showLogin, canInit: true };
};

export { startAppEnvironment };
