/* eslint-disable no-console */
export default function logger(request, _response, next) {
  const { connection, headers, url } = request;
  const ip = headers['x-forwarded-for'] || connection.remoteAddress;
  console.log({ url, ip });

  return next();
}
