'use strict';

let controllers = {};

controllers.index = {
  method: 'GET',
  path: '/documents',
  config: {
    description: 'Retrieves details of a single document',
    tags: ['api'],
    handler: (request, h) => {
      return {};
    }
  }
};

module.exports = controllers;