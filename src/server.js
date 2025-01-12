const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const config = {
  port: 5000,
  host: 'localhost',
};

/**
 * Initiate Hapi Server
 * @param {Object} c
 * @param {number} c.port
 * @param {string} c.host
 * @returns {Promise<Hapi.Server>}
 */
const init = async (c) => {
  const server = Hapi.server({
    port: c.port,
    host: c.host,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  return server;
};

init(config);