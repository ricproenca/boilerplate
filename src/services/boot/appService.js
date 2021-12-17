import { getRequest } from '@Api/v1/environment';

const getAppEnvironment = async () => {
  const response = await getRequest({ url: 'rest/env' });

  return response.data.data;
};

const getAppLanguageCode = () => localStorage.getItem('i18nextLng');

export { getAppEnvironment, getAppLanguageCode };
