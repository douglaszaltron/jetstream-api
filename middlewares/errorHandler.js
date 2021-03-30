/* eslint-disable no-console */
import BaseError from '@/errors/base';

export default function errorHandler(error, request, response) {
  console.log({ url: request.url, ...error });

  if (error instanceof BaseError) {
    const details = {
      message: error.message,
      type: error.type,
      name: error.name,
    };

    if (error.errors.length !== 0) {
      details.errors = error.errors;
    }

    return response.status(error.status).json(details);
  }

  return response.status(500).json(error);
}
