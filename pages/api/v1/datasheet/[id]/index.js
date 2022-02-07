import app from '@/app';
import { findDatasheetById } from '@/services/datasheets';

const handler = async (request, response) => {
  const { id } = request.query;

  const items = await findDatasheetById(id);

  response.status(200);

  response.json(items);
};

export default app({ cache: 172800 }).get(handler);
