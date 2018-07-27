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
        content: Joi.string().required(),
        type: Joi.string().required(),
        location: Joi.string().required()
      }
    },
    handler: (request, h) => {
      return {};
    }
  }
}

controller.update = {
  method: 'PUT',
  path: '/documents/{location}',
  config: {
    description: 'Update details of a single document',
    tags: ['api'],
    validate: {
      params: {
        location: Joi.string().required()
      },
      payload: {
        content: Joi.string().required(),
        type: Joi.string().required()
      }
    },
    handler: (request, h) => {
      return {};
    }
  }
};

module.exports = controller;
