// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.tariffs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/tariffs',
  operationId: 'get_api-get-tariff-list',
};

export const tool: Tool = {
  name: 'list_v2_tariffs',
  description: 'List of tariffs',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  return client.v2.tariffs.list();
};

export default { metadata, tool, handler };
