// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.templates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/templates',
  operationId: 'get_api-get-template-list',
};

export const tool: Tool = {
  name: 'list_v2_templates',
  description: 'List of templates',
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
  return client.v2.templates.list(body);
};

export default { metadata, tool, handler };
