import app from '@/app';

function Status(_request, response) {
  response.status(200);
  response.json({
    status: 'ok',
    date: new Date(),
    environment: process.env.NODE_ENV,
  });
}

export default app().get(Status);
