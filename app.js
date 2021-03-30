import cors from 'cors';
import nc from 'next-connect';
import cache from './middlewares/cache';
import onError from './middlewares/errorHandler';
import logger from './middlewares/logger';

const corsDefault = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const cacheDefault = 86400;

const onNoMatch = (_request, response) => {
  return response.status(404).json({
    message: 'Page not found.',
    type: 'not_found',
    name: 'NotFoundError',
  });
};

export default (options = {}) => {
  const corsOptions = options.cors || {};
  const cacheOptions = options.cache || cacheDefault;

  const configurations = {
    cors: {
      ...corsDefault,
      ...corsOptions,
    },
    cache: cacheOptions,
  };

  return nc({ onError, onNoMatch })
    .use(cors(configurations.cors))
    .use(logger)
    .use(cache(configurations.cache));
};
