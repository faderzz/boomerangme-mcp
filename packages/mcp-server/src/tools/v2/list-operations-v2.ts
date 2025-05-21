// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_operations_v2',
  description: 'More description',
  inputSchema: {
    type: 'object',
    properties: {
      cardId: {
        type: 'string',
        description: 'Filter by cardId',
      },
      customerId: {
        type: 'string',
        description: 'Filter by customerId',
      },
      endDate: {
        type: 'string',
        description: 'End date (format Y-m-d)',
        format: 'date',
      },
      itemsPerPage: {
        type: 'integer',
        description: 'Items per page',
      },
      page: {
        type: 'integer',
        description: 'Page number',
      },
      startDate: {
        type: 'string',
        description: 'Start date (format Y-m-d)',
        format: 'date',
      },
      templateId: {
        type: 'integer',
        description: 'Filter by templateId',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.listOperations(body);
};

export default { metadata, tool, handler };
