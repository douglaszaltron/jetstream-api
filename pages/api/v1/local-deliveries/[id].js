import app from '@/app';
import { findDeliveryById } from '@/services/deliveries';

const handler = async (request, response) => {
  const { id } = request.query;

  const items = await findDeliveryById(id);

  response.status(200);

  response.json(items);
};

export default app({ cache: 172800 }).get(handler);
