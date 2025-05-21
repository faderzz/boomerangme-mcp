// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'haye';

export const metadata: Metadata = {
  resource: 'v2.pushes',
  operation: 'read',
  tags: [],
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

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.pushes.list(body);
};

export default { metadata, tool, handler };
