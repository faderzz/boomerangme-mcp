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
  httpPath: '/api/v2/pushes/{id}',
  operationId: 'get_api-get-push',
};

export const tool: Tool = {
  name: 'retrieve_v2_pushes',
  description: 'Get push',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.pushes.retrieve(id));
};

export default { metadata, tool, handler };
