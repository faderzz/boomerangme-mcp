// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Haye from 'boomerangme-api';

const client = new Haye({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketplace', () => {
  // skipped: tests are disabled for the time being
  test.skip('accrue: only required params', async () => {
    const responsePromise = client.v2.marketplace.accrue({
      check: { amount: 0, currency: 'currency', selections: [{ quantity: 1, totalPrice: 0 }] },
      transactionId: 'transactionId',
      'X-App-Token': 'X-App-Token',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('accrue: required and optional params', async () => {
    const response = await client.v2.marketplace.accrue({
      check: {
        amount: 0,
        currency: 'currency',
        selections: [
          { quantity: 1, totalPrice: 0, id: 'id', displayName: 'displayName', groupId: 'groupId', price: 0 },
        ],
      },
      transactionId: 'transactionId',
      'X-App-Token': 'X-App-Token',
      credentials: [{ name: 'name', value: 'value' }],
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
      phone: 'phone',
      serialNumber: 'serialNumber',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('resolveCredentials: only required params', async () => {
    const responsePromise = client.v2.marketplace.resolveCredentials({
      names: ['string'],
      'X-App-Token': 'X-App-Token',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('resolveCredentials: required and optional params', async () => {
    const response = await client.v2.marketplace.resolveCredentials({
      names: ['string'],
      'X-App-Token': 'X-App-Token',
      credentials: [{ name: 'name', value: 'value' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('reverse: only required params', async () => {
    const responsePromise = client.v2.marketplace.reverse({
      transactionId: 'transactionId',
      'X-App-Token': 'X-App-Token',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('reverse: required and optional params', async () => {
    const response = await client.v2.marketplace.reverse({
      transactionId: 'transactionId',
      'X-App-Token': 'X-App-Token',
      credentials: [{ name: 'name', value: 'value' }],
    });
  });
});
