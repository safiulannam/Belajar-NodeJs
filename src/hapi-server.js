const hapi = require('@hapi/hapi');
const routes = require('./routes').default;

const init = async () => {
  const server = hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);

  await server.start();
  console.log(`Server sedang berjalan pada ${server.info.uri}`);
};
init();
