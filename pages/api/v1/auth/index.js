import app from '@/app';

const auth = {
  id: '5fca3821acf76c00202be101',
  email: 'douglas.zaltron@luizalabs.com',
  username: 'douglas.zaltron@luizalabs.com',
  lastName: 'Zaltron',
  name: 'Douglas',
  sellers: [
    {
      id: '5fca3d64e8720c9172fcc46d',
      legalName: 'Zaltron STORE SANDBOX LTDA',
      tenantId: 'zaltron_store_sandbox',
      services: [
        {
          id: 'product-api',
          iconUrl: '',
          name: 'Catálogo',
          url: 'https://product-staging.luizalabs.com/',
        },
      ],
    },
  ],
};

const handler = async (_request, response) => {
  response.status(200);

  response.json(auth);
};

export default app({ cache: 172800 }).get(handler);
