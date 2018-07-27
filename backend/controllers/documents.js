'use strict';

const Joi = require('joi');

let controller = {};

controller.details = {
  method: 'GET',
  path: '/documents/{documentId}',
  config: {
    description: 'Retrieves details of a single document',
    tags: ['api'],
    handler: (request, h) => {
      return {};
    }
  }
};

controller.create = {
  method: 'POST',
  path: '/documents',
  config: {
    description: 'Retrieves details of a single document',
    tags: ['api'],
    validate: {
      payload: {
        name: Joi.string().required(),
        content: Joi.string().required(),
        type: Joi.string().required(),
        location: Joi.string().required()
      }
    },
    handler: (request, h) => {
      return {};
    }
  }
};

module.exports = controller;