// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Haye from 'haye';

const client = new Haye({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cards', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.v2.cards.create({ customerId: 'customerId', templateId: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.v2.cards.create({
      customerId: 'customerId',
      templateId: 1,
      customFields: [{ id: 0, value: 'value' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.cards.retrieve('id');
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
    const responsePromise = client.v2.cards.update('id');
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
      client.v2.cards.update(
        'id',
        { customFields: [{ id: 0, value: 'value' }] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Haye.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.v2.cards.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.cards.list(
        {
          customerEmail: 'customerEmail',
          customerId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          customerPhone: 'customerPhone',
          itemsPerPage: 1,
          page: 1,
          templateId: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Haye.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.v2.cards.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addPoint: only required params', async () => {
    const responsePromise = client.v2.cards.addPoint('id', { points: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addPoint: required and optional params', async () => {
    const response = await client.v2.cards.addPoint('id', { points: 1, comment: 'comment', purchaseSum: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('addPurchase: only required params', async () => {
    const responsePromise = client.v2.cards.addPurchase('id', { amount: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addPurchase: required and optional params', async () => {
    const response = await client.v2.cards.addPurchase('id', {
      amount: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('addReward: only required params', async () => {
    const responsePromise = client.v2.cards.addReward('id', { rewards: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addReward: required and optional params', async () => {
    const response = await client.v2.cards.addReward('id', {
      rewards: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('addScores: only required params', async () => {
    const responsePromise = client.v2.cards.addScores('id', { scores: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addScores: required and optional params', async () => {
    const response = await client.v2.cards.addScores('id', { scores: 1, comment: 'comment', purchaseSum: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('addStamp: only required params', async () => {
    const responsePromise = client.v2.cards.addStamp('id', { stamps: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addStamp: required and optional params', async () => {
    const response = await client.v2.cards.addStamp('id', { stamps: 1, comment: 'comment', purchaseSum: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('addTransactionAmount: only required params', async () => {
    const responsePromise = client.v2.cards.addTransactionAmount('id', { amount: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addTransactionAmount: required and optional params', async () => {
    const response = await client.v2.cards.addTransactionAmount('id', {
      amount: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('addVisit: only required params', async () => {
    const responsePromise = client.v2.cards.addVisit('id', { visits: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addVisit: required and optional params', async () => {
    const response = await client.v2.cards.addVisit('id', { visits: 1, comment: 'comment', purchaseSum: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('receiveReward: only required params', async () => {
    const responsePromise = client.v2.cards.receiveReward('id', { body_id: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('receiveReward: required and optional params', async () => {
    const response = await client.v2.cards.receiveReward('id', {
      body_id: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('redeemCoupon', async () => {
    const responsePromise = client.v2.cards.redeemCoupon('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('redeemCoupon: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.cards.redeemCoupon(
        'id',
        { comment: 'comment', purchaseSum: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Haye.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('setExpirationDate', async () => {
    const responsePromise = client.v2.cards.setExpirationDate('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setExpirationDate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.cards.setExpirationDate(
        'id',
        { expiresAt: 'expiresAt' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Haye.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('setMembershipTier: only required params', async () => {
    const responsePromise = client.v2.cards.setMembershipTier('id', { period: 'day', tierId: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setMembershipTier: required and optional params', async () => {
    const response = await client.v2.cards.setMembershipTier('id', { period: 'day', tierId: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractPoint: only required params', async () => {
    const responsePromise = client.v2.cards.subtractPoint('id', { points: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractPoint: required and optional params', async () => {
    const response = await client.v2.cards.subtractPoint('id', {
      points: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractPurchase: only required params', async () => {
    const responsePromise = client.v2.cards.subtractPurchase('id', { amount: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractPurchase: required and optional params', async () => {
    const response = await client.v2.cards.subtractPurchase('id', {
      amount: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractReward: only required params', async () => {
    const responsePromise = client.v2.cards.subtractReward('id', { rewards: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractReward: required and optional params', async () => {
    const response = await client.v2.cards.subtractReward('id', {
      rewards: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractScores: only required params', async () => {
    const responsePromise = client.v2.cards.subtractScores('id', { scores: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractScores: required and optional params', async () => {
    const response = await client.v2.cards.subtractScores('id', {
      scores: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractStamp: only required params', async () => {
    const responsePromise = client.v2.cards.subtractStamp('id', { stamps: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractStamp: required and optional params', async () => {
    const response = await client.v2.cards.subtractStamp('id', {
      stamps: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractTransactionAmount: only required params', async () => {
    const responsePromise = client.v2.cards.subtractTransactionAmount('id', { amount: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractTransactionAmount: required and optional params', async () => {
    const response = await client.v2.cards.subtractTransactionAmount('id', {
      amount: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractVisit: only required params', async () => {
    const responsePromise = client.v2.cards.subtractVisit('id', { visits: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('subtractVisit: required and optional params', async () => {
    const response = await client.v2.cards.subtractVisit('id', {
      visits: 1,
      comment: 'comment',
      purchaseSum: 0,
    });
  });
});
