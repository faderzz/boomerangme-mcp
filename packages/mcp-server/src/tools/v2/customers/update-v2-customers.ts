// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/customers/{id}',
  operationId: 'patch_api-edit-customer',
};

export const tool: Tool = {
  name: 'update_v2_customers',
  description: 'Edit customer',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      dateOfBirth: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      externalUserId: {
        type: 'string',
      },
      firstName: {
        type: 'string',
      },
      gender: {
        type: 'string',
        title: '0 - unknown, 1 - male, 2 - female',
        enum: [0, 1, 2],
      },
      surname: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.v2.customers.update(id, body));
};

export default { metadata, tool, handler };
