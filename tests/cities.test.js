const axios = require('axios');

describe('/v1/cities (E2E)', () => {
  test('Utilizando um nome válido', async () => {
    const requestUrl = `${global.SERVER_URL}/api/v1/cities?name=uberlandia`;
    const response = await axios.get(requestUrl);

    expect(response.status).toBe(200);
    expect(response.data).toEqual([
      {
        id: 3170206,
        name: 'Uberlândia',
        state: { code: 'MG', name: 'Minas Gerais' },
      },
    ]);
  });

  test('Utilizando cidade por id', async () => {
    const requestUrl = `${global.SERVER_URL}/api/v1/cities/3170206`;
    const response = await axios.get(requestUrl);

    expect(response.status).toBe(200);
    expect(response.data).toEqual({
      id: 3170206,
      name: 'Uberlândia',
      state: { code: 'MG', name: 'Minas Gerais' },
    });
  });
});
