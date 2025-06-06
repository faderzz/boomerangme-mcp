// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/cards/{id}/add-purchase',
  operationId: 'post_api-post-card-add-purchase',
};

export const tool: Tool = {
  name: 'add_purchase_v2_cards',
  description: 'Add purchase to card',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      amount: {
        type: 'number',
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

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.cards.addPurchase(id, body));
};

export default { metadata, tool, handler };
