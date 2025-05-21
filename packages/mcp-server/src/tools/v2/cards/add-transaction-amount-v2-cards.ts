// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'haye';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'add_transaction_amount_v2_cards',
  description: 'Add amount to card',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      amount: {
        type: 'integer',
      },
      comment: {
        type: 'string',
      },
      purchaseSum: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.cards.addTransactionAmount(id, body);
};

export default { metadata, tool, handler };
