import app from '@/app';

const auth = {
  sellers: [{ tenantId: 'raphaelsapatos' }],
};

const handler = async (_request, response) => {
  response.status(200);

  response.json(auth);
};

export default app({ cache: 172800 }).get(handler);
