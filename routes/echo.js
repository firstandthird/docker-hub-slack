'use strict';
exports.echo = {
  path: '/echo',
  method: '*',
  handler(request, reply) {
    if (request.payload) {
      request.server.log(['echo'], request.payload);
    }
    reply('ok');
  }
};
