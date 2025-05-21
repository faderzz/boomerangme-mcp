// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.profile.agency',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_profile_v2_agency',
  description: 'Edit agency profile',
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'string',
      },
      agreement: {
        type: 'string',
      },
      city: {
        type: 'string',
      },
      country: {
        type: 'string',
        title: 'e.g. "US"',
      },
      demoFormLink: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      facebook: {
        type: 'string',
      },
      helpCenterLink: {
        type: 'string',
      },
      instagram: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      privacyPolicy: {
        type: 'string',
      },
      privacyPolicyLink: {
        type: 'string',
      },
      state: {
        type: 'string',
      },
      subscriptionAgreementLink: {
        type: 'string',
      },
      telegram: {
        type: 'string',
      },
      termsOfUse: {
        type: 'string',
      },
      twitter: {
        type: 'string',
      },
      zip: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.profile.agency.update(body);
};

export default { metadata, tool, handler };
