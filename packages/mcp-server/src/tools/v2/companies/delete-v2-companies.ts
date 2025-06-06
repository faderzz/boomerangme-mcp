// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.companies',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/companies/{id}',
  operationId: 'delete_api-delete-company',
};

export const tool: Tool = {
  name: 'delete_v2_companies',
  description: 'Delete company',
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
  return asTextContentResult(await client.v2.companies.delete(id));
};

export default { metadata, tool, handler };
