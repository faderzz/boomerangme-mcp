// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.customers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v2_customers',
  description: 'Create customer',
  inputSchema: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
      },
      dateOfBirth: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      externalUserId: {
        type: 'string',
      },
      gender: {
        type: 'string',
        title: '0 - unknown, 1 - male, 2 - female',
        enum: [0, 1, 2],
      },
      phone: {
        type: 'string',
      },
      surname: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.customers.create(body);
};

export default { metadata, tool, handler };
