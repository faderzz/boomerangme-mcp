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
  httpPath: '/api/v2/cards/{id}/subtract-visit',
  operationId: 'post_api-post-card-subtract-visit',
};

export const tool: Tool = {
  name: 'subtract_visit_v2_cards',
  description: 'Subtract visit from card',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      visits: {
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
  return asTextContentResult(await client.v2.cards.subtractVisit(id, body));
};

export default { metadata, tool, handler };
