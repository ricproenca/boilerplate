const BASE_TIMEOUT = 5000;
const BASE_URL = 'https://clientconnect-dev.eib.org/';
const APIGW_URL = 'https://apiproxy-dev1/call/t/ft-clientcon-dmz.eib.org/';

export const API_BE_ENVIRONMENT_SERVICE = `${BASE_URL}clientconnect-be-environment-service/`;
export const API_BE_ENVIRONMENT_TIMEOUT = BASE_TIMEOUT;

export const API_BE_ACCOUNT_SERVICE = `${APIGW_URL}`;
export const API_BE_ACCOUNT_TIMEOUT = BASE_TIMEOUT;

export const HOST = 'http://localhost:3000/';
