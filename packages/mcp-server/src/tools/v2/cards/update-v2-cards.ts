// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/cards/{id}',
  operationId: 'patch_api-patch-card',
};

export const tool: Tool = {
  name: 'update_v2_cards',
  description: 'Edit card',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      customFields: {
        type: 'array',
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

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.cards.update(id, body));
};

export default { metadata, tool, handler };
