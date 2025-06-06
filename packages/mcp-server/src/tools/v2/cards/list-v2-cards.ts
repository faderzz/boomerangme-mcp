// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/cards',
  operationId: 'get_api-get-card-list',
};

export const tool: Tool = {
  name: 'list_v2_cards',
  description: 'More description',
  inputSchema: {
    type: 'object',
    properties: {
      customerEmail: {
        type: 'string',
        description: 'Filter by customer email',
      },
      customerId: {
        type: 'string',
        description: 'Filter by customerId',
      },
      customerPhone: {
        type: 'string',
        description: 'Filter by customer phone',
      },
      itemsPerPage: {
        type: 'integer',
        description: 'Items per page',
      },
      page: {
        type: 'integer',
        description: 'Page number',
      },
      templateId: {
        type: 'integer',
        description: 'Filter by templateId',
      },
    },
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.cards.list(body));
};

export default { metadata, tool, handler };
