import { HOST } from '@Config/api';

export const reloadPage = () => {
  window.location.href = HOST;
};

export default { reloadPage };
