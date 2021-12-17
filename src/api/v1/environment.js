import { API_BE_ENVIRONMENT_SERVICE, API_BE_ENVIRONMENT_TIMEOUT, HOST } from '@Config/api';
import { createInstance, del, get, post, put } from '@Services/http/axios';
import { isDevelopmentMode } from '@Utils/build';

let apiHandlerInstance;

const handleRequestConfig = config => {
  return config;
};

const handleRequestError = error => {
  return Promise.reject(error);
};

const handleResponseSuccess = response => {
  response.data.data.redirectUri = isDevelopmentMode ? HOST : response.data.data.redirectUri;
  return response;
};

const handleResponseError = error => {
  return Promise.reject(error);
};

const getInstance = async () => {
  if (!apiHandlerInstance) {
    apiHandlerInstance = await createInstance({
      baseURL: API_BE_ENVIRONMENT_SERVICE,
      timeout: API_BE_ENVIRONMENT_TIMEOUT,
      handlers: {
        requestConfig: handleRequestConfig,
        requestError: handleRequestError,
        responseSuccess: handleResponseSuccess,
        responseError: handleResponseError
      }
    });
  }

  return apiHandlerInstance;
};

const getRequest = async ({ url, config }) => {
  const instance = await getInstance();
  return get(instance, url, config);
};

const postRequest = ({ url, data, config }) => post(getInstance(), url, data, config);
const putRequest = ({ url, data, config }) => put(getInstance(), url, data, config);
const delRequest = ({ url }) => del(getInstance(), url);

export { getRequest, postRequest, putRequest, delRequest };
