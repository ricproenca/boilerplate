const environment = process.env.NODE_ENV;
const isDevelopmentMode = environment === 'development';
const isProductionMode = environment === 'production';
const isTestingMode = environment === 'test';

const startLocalApi = (isDevelopmentMode || isTestingMode) && process.env.REACT_APP_LOCAL_API !== 'false';

export { environment, isDevelopmentMode, isProductionMode, isTestingMode, startLocalApi };
