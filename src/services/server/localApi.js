import { Model, createServer } from 'miragejs';

import accountMe from './db/v1.0/users/me';

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
      this.get('/account/v1.0/users/me', () => {
        return accountMe;
      });
    }
  });
}
