/* eslint-disable camelcase */
import app from '@/app';
import { findDistrictsByCityId } from '@/services/cities';

const handler = async (request, response) => {
  const { id } = request.query;
  const items = await findDistrictsByCityId(id);

  response.status(200).json(items);
};

export default app({ cache: 172800 }).get(handler);
