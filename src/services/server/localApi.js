import { Model, createServer } from 'miragejs';

import accountSubscriptions from './db/account/v1.0/subscriptions';
import accountMe from './db/account/v1.0/users/me';
import environmentEnv from './db/environment/rest/env';

export function makeServer({ environment = 'test' } = {}) {
  return createServer({
    environment,

    models: {
      user: Model
    },

    seeds(server) {
      server.create('user', { name: 'Alice' });
    },

    routes() {
      this.get('/rest/env', () => {
        return environmentEnv;
      });

      this.get('/account/v1.0/users/me', () => {
        return accountMe;
      });

      this.get('/account/v1.0/subscriptions', () => {
        return accountSubscriptions;
      });
    }
  });
}
