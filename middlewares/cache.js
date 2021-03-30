export default (time) => (_request, response, next) => {
  const CACHE_CONTROL_HEADER_VALUE = `max-age=0, s-maxage=${time}, stale-while-revalidate, public`;

  response.setHeader('Cache-Control', CACHE_CONTROL_HEADER_VALUE);

  next();
};
