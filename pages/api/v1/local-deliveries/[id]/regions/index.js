/* eslint-disable camelcase */
import app from '@/app';
import { findDeliveryRegions } from '@/services/deliveries';

const handler = async (request, response) => {
  const { id } = request.query;
  const items = await findDeliveryRegions(id);

  response.status(200).json(items);
};

export default app({ cache: 172800 }).get(handler);
