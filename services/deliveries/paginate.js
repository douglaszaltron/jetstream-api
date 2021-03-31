/* eslint-disable camelcase */
const paginate = (array, { page = 1, per_page = 10 }) => {
  return array.slice((page - 1) * per_page, page * per_page);
};

export default paginate;
