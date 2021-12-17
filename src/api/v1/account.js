import { nanoid } from 'nanoid';

import { API_BE_ACCOUNT_SERVICE, API_BE_ACCOUNT_TIMEOUT } from '@Config/api';
import { JWT_TOKEN_NAME } from '@Config/auth';
import { createInstance, del, get, post, put } from '@Services/http/axios';
import storage from '@Services/storage';

let apiHandlerInstance;
const handleRequestConfig = async config => {
  const jwt = storage.getItem(JWT_TOKEN_NAME);
  const correlationId = nanoid();

  config.headers.Authorization = `Bearer ${jwt}`;
  config.headers['X-Correlation-ID'] = correlationId;

  return config;
};

const handleRequestError = error => {
  return Promise.reject(error);
};

const handleResponseSuccess = response => {
  return response.data.data;
};

const handleResponseError = error => {
  return Promise.reject(error);
};

const getInstance = async () => {
  if (!apiHandlerInstance) {
    apiHandlerInstance = await createInstance({
      baseURL: API_BE_ACCOUNT_SERVICE,
      timeout: API_BE_ACCOUNT_TIMEOUT,
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
