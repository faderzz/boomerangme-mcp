// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Haye from 'boomerangme-api';

const client = new Haye({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profile', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.profile.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.v2.profile.update();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.profile.update(
        {
          contacts: 'contacts',
          country: 'US',
          currency: 'USD',
          dateFormat: 'DD.MM.YYYY',
          email: 'email',
          language: 'en',
          name: 'name',
          phone: 'xxxxxxxx',
          timezone: 'America/New_York',
          userName: 'userName',
          userSurname: 'userSurname',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Haye.NotFoundError);
  });
});
