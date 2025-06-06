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
  httpPath: '/api/v2/cards/{id}/set-expiration-date',
  operationId: 'post_api-post-set-expiration-date',
};

export const tool: Tool = {
  name: 'set_expiration_date_v2_cards',
  description: 'Set card expiration date',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      expiresAt: {
        type: 'string',
        title: 'Y-m-dTH:i:sP',
      },
    },
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.cards.setExpirationDate(id, body));
};

export default { metadata, tool, handler };
