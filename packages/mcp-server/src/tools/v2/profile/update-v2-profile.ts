// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.profile',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/profile',
  operationId: 'patch_api-patch-profile',
};

export const tool: Tool = {
  name: 'update_v2_profile',
  description: 'Edit profile',
  inputSchema: {
    type: 'object',
    properties: {
      contacts: {
        type: 'string',
      },
      country: {
        type: 'string',
        title: 'e.g. "US"',
      },
      currency: {
        type: 'string',
        title: 'e.g. "USD"',
      },
      dateFormat: {
        type: 'string',
        enum: ['DD.MM.YYYY', 'DD/MM/YYYY', 'DD-MM-YYYY', 'MM/DD/YYYY', 'YYYY.MM.DD', 'YYYY-MM-DD'],
      },
      email: {
        type: 'string',
      },
      language: {
        type: 'string',
        title: 'e.g. "en"',
      },
      name: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      timezone: {
        type: 'string',
        title: 'e.g. "America/New_York"',
      },
      userName: {
        type: 'string',
      },
      userSurname: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.profile.update(body);
};

export default { metadata, tool, handler };
