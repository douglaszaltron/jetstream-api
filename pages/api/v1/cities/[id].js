import app from '@/app';
import { findCityById } from '@/services/cities';

const handler = async (request, response) => {
  const { id } = request.query;

  const items = await findCityById(id);

  response.status(200);

  response.json(items);
};

export default app({ cache: 172800 }).get(handler);
