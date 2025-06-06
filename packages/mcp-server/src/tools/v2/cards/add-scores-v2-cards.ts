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
  httpPath: '/api/v2/cards/{id}/add-scores',
  operationId: 'post_api-post-card-add-scores',
};

export const tool: Tool = {
  name: 'add_scores_v2_cards',
  description: 'Add scores to card',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      scores: {
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

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.cards.addScores(id, body));
};

export default { metadata, tool, handler };
