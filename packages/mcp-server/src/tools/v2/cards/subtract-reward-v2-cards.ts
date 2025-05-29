// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/cards/{id}/subtract-reward',
  operationId: 'post_api-post-card-subtract-reward',
};

export const tool: Tool = {
  name: 'subtract_reward_v2_cards',
  description: 'Subtract reward from card',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      rewards: {
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
  return client.v2.cards.subtractReward(id, body);
};

export default { metadata, tool, handler };
