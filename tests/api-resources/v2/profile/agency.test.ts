// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Haye from 'haye';

const client = new Haye({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agency', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.v2.profile.agency.retrieve();
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
    const responsePromise = client.v2.profile.agency.update();
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
      client.v2.profile.agency.update(
        {
          address: 'address',
          agreement: 'agreement',
          city: 'city',
          country: 'US',
          demoFormLink: 'demoFormLink',
          email: 'email',
          facebook: 'facebook',
          helpCenterLink: 'helpCenterLink',
          instagram: 'instagram',
          name: 'name',
          phone: 'xxxxxxxx',
          privacyPolicy: 'privacyPolicy',
          privacyPolicyLink: 'privacyPolicyLink',
          state: 'state',
          subscriptionAgreementLink: 'subscriptionAgreementLink',
          telegram: 'telegram',
          termsOfUse: 'termsOfUse',
          twitter: 'twitter',
          zip: 'zip',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Haye.NotFoundError);
  });
});
