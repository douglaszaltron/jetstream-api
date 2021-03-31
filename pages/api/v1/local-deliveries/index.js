/* eslint-disable camelcase */
import app from '@/app';
import { findAll, findDeliveriesByName } from '@/services/deliveries';

const handler = async (request, response) => {
  const { name, page, per_page } = request.query;
  let items;

  if (name) {
    items = await findDeliveriesByName(name);
  } else {
    const query = page && per_page ? { page, per_page } : {};
    items = await findAll(query);
  }

  response.status(200).json(items);
};

export default app({ cache: 172800 }).get(handler);
