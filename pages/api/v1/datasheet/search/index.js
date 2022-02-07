/* eslint-disable camelcase */
import app from '@/app';
import { findAllByIdentifier } from '@/services/datasheets';
import paginate from '@/services/datasheets/paginate';

const handler = async (request, response) => {
  const { query, filters } = request.body;

  const { page_number, limit } = request.query;

  const params = page_number && limit ? { page_number, limit } : {};

  const search = { type: filters.type, value: query };

  const items = await findAllByIdentifier({ ...params, search });

  response.status(200).json(paginate(items, params));
};

export default app({ cache: 172800 }).post(handler);
