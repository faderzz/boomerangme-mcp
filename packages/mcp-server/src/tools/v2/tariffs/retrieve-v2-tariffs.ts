// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.tariffs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/tariffs/{id}',
  operationId: 'get_api-get-tariff',
};

export const tool: Tool = {
  name: 'retrieve_v2_tariffs',
  description: 'Get tariff',
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
  return client.v2.tariffs.retrieve(id);
};

export default { metadata, tool, handler };
