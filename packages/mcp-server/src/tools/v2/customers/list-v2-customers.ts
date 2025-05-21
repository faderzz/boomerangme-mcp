// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.customers',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v2_customers',
  description: 'List of customers',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Filter by email',
      },
      itemsPerPage: {
        type: 'integer',
        description: 'Items per page',
      },
      page: {
        type: 'integer',
        description: 'Page number',
      },
      phone: {
        type: 'string',
        description: 'Filter by phone',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.customers.list(body);
};

export default { metadata, tool, handler };
