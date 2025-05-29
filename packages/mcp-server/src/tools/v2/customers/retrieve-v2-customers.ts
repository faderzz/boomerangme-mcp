// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/customers/{id}',
  operationId: 'get_api-get-customer',
};

export const tool: Tool = {
  name: 'retrieve_v2_customers',
  description: 'Get customer',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.customers.retrieve(id);
};

export default { metadata, tool, handler };
