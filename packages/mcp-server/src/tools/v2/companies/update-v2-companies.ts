// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.companies',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v2_companies',
  description: 'Edit company',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      expiresAt: {
        type: 'string',
        title: 'Y-m-dTH:i:sP',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.companies.update(id, body);
};

export default { metadata, tool, handler };
