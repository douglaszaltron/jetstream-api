/* eslint-disable camelcase */
const paginate = (array, { page_number = 1, limit = 10 }) => {
  const result = array.slice((page_number - 1) * limit, page_number * limit);

  const body = {
    limit: +limit,
    page_number: +page_number,
    total_documents: array.length,
    total_pages: Math.ceil(array.length / limit),
  };

  return { ...body, result };
};

export default paginate;
