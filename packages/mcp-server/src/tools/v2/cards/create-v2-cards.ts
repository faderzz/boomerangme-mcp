// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v2_cards',
  description: 'Create card for customer',
  inputSchema: {
    type: 'object',
    properties: {
      customerId: {
        type: 'string',
      },
      templateId: {
        type: 'integer',
      },
      customFields: {
        type: 'array',
        title:
          'Send customFields from template. Сan exclude customField with required: false and customField with type phone, email, FName, SName, DateOfBirth if they are filled in customer.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
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
  return client.v2.cards.create(body);
};

export default { metadata, tool, handler };
