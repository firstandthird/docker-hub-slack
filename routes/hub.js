'use strict';
exports.home = {
  path: '/',
  method: 'GET',
  handler(request, reply) {
    reply('docker-hub-slack running');
  }
};

exports.hub = {
  path: '/',
  method: 'POST',
  handler(request, reply) {
    const server = request.server;

    const payload = request.payload;
    const tag = payload.push_data.tag;
    const repo = payload.repository.repo_name;
    const url = payload.repository.repo_url;
    const image = `${repo}:${tag}`;

    server.log(['success', 'docker-hub', image], {
      message: `${image} has been pushed.`,
      url
    });

    reply('ok');
  }
};
