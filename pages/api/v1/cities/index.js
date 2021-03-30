import app from '@/app';
import { findCitiesByName } from '@/services/cities';

const handler = async (request, response) => {
  const { name } = request.query;

  const items = await findCitiesByName(name);

  response.status(200).json(items);
};

export default app({ cache: 172800 }).get(handler);
