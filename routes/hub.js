'use strict';
exports.hub = {
  path: '/',
  method: '*',
  handler(request, reply) {
    const server = request.server;

    server.log(['success', 'docker-hub'], 'some repo here');

    reply('ok');
  }
};
