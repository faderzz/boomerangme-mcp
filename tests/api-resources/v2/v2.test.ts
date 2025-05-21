// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Haye from 'boomerangme-api';

const client = new Haye({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v2', () => {
  // skipped: tests are disabled for the time being
  test.skip('listOperations', async () => {
    const responsePromise = client.v2.listOperations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listOperations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.listOperations(
        {
          cardId: 'cardId',
          customerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          endDate: '2019-12-27',
          itemsPerPage: 1,
          page: 1,
          startDate: '2019-12-27',
          templateId: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Haye.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('sendSMS: only required params', async () => {
    const responsePromise = client.v2.sendSMS({ customerId: 'customerId', message: 'message' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('sendSMS: required and optional params', async () => {
    const response = await client.v2.sendSMS({ customerId: 'customerId', message: 'message' });
  });
});
