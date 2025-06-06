// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.templates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/templates/{id}',
  operationId: 'get_api-get-template',
};

export const tool: Tool = {
  name: 'retrieve_v2_templates',
  description: 'Get template',
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
  return asTextContentResult(await client.v2.templates.retrieve(id));
};

export default { metadata, tool, handler };
