// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.companies',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/companies',
  operationId: 'post_api-post-company',
};

export const tool: Tool = {
  name: 'create_v2_companies',
  description: 'Create company',
  inputSchema: {
    type: 'object',
    properties: {
      country: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      tariffId: {
        type: 'integer',
      },
      tariffPeriod: {
        type: 'string',
        enum: ['trial', 'month', 'two_months', 'quarter', 'six_months', 'nine_months', 'year'],
      },
      userName: {
        type: 'string',
      },
      userSurname: {
        type: 'string',
      },
      language: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.companies.create(body));
};

export default { metadata, tool, handler };
