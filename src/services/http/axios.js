import axios from 'axios';

import { startLocalApi } from '@Utils/build';

const createAxiosInstance = async ({ baseURL, timeout }) => {
  if (startLocalApi) {
    baseURL = baseURL.replace(/.*\/(.*)\/(.*)$/, '/');
  }

  return axios.create({ baseURL, timeout });
};

const get = (axiosInstance, url, config = null) => {
  return axiosInstance.get(url, config);
};

const post = (axiosInstance, url, data = null, config = null) => {
  return axiosInstance.post(url, data, config);
};

const put = (axiosInstance, url, data = null, config = null) => {
  return axiosInstance.put(url, data, config);
};

const del = (axiosInstance, url) => {
  return axiosInstance.delete(url);
};

const createInstance = async ({ baseURL, timeout, handlers }) => {
  const instance = await createAxiosInstance({ baseURL, timeout });
  const { requestConfig, requestError, responseSuccess, responseError } = handlers;

  instance.interceptors.request.use(requestConfig, requestError);
  instance.interceptors.response.use(responseSuccess, responseError);

  return instance;
};

export { createInstance, get, put, post, del };
