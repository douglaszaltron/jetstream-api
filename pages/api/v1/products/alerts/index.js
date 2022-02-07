import app from '@/app';

const items = [
  {
    query: '/api/v1/products?alert=UNPUBLISHED',
    severity: 'ERROR',
    kind: 'UNPUBLISHED',
    count: 0,
  },
  {
    query: '/api/v1/products?alert=WITHOUT_STOCK',
    severity: 'ERROR',
    kind: 'WITHOUT_STOCK',
    count: 0,
  },
  {
    query: '/api/v1/products?alert=LOW_STOCK',
    severity: 'WARNING',
    kind: 'LOW_STOCK',
    count: 0,
  },
  {
    query: '/api/v1/products?alert=PRICE_LOCK',
    severity: 'ERROR',
    kind: 'PRICE_LOCK',
    count: 0,
  },
  {
    query: '/api/v1/products?alert=PROMOTIONAL_PRICE',
    severity: 'INFO',
    kind: 'PROMOTIONAL_PRICE',
    count: 0,
  },
];

const handler = async (_, response) => {
  response.status(200);

  response.json(items);
};

export default app({ cache: 172800 }).get(handler);
