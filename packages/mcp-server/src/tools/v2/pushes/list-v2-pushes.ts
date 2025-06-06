// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.pushes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/pushes',
  operationId: 'get_api-get-push-list',
};

export const tool: Tool = {
  name: 'list_v2_pushes',
  description: 'List of push messages',
  inputSchema: {
    type: 'object',
    properties: {
      itemsPerPage: {
        type: 'integer',
        description: 'Items per page',
      },
      page: {
        type: 'integer',
        description: 'Page number',
      },
    },
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.pushes.list(body));
};

export default { metadata, tool, handler };
