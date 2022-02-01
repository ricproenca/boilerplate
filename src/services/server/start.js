import { makeServer } from '@Services/server/localApi';
import { environment, startLocalApi } from '@Utils/build';

export default (start = false) => {
  if (start && startLocalApi) {
    makeServer({ environment });
  }
};
