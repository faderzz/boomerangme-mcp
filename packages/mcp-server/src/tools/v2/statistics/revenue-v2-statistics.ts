// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.statistics',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'revenue_v2_statistics',
  description: 'Revenue statistics',
  inputSchema: {
    type: 'object',
    properties: {
      companyId: {
        type: 'integer',
        description: 'Filter by companyId',
      },
      endDate: {
        type: 'string',
        description: 'End date (format Y-m-d)',
        format: 'date',
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
  return client.v2.statistics.revenue(body);
};

export default { metadata, tool, handler };
