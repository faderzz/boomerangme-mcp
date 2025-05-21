// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.marketplace',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'reverse_v2_marketplace',
  description: 'Revert a previously performed accrual action using the transaction ID.',
  inputSchema: {
    type: 'object',
    properties: {
      transactionId: {
        type: 'string',
        description: 'Unique transaction id.',
      },
      'X-App-Token': {
        type: 'string',
      },
      credentials: {
        type: 'array',
        description: 'Merchant credentials.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.marketplace.reverse(body);
};

export default { metadata, tool, handler };
