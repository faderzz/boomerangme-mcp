// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'haye-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate company\n\n# Response Schema\n```json\n{\n  allOf: [    {\n      $ref: '#/$defs/response'\n    }\n  ],\n  $defs: {\n    response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        data: {\n          type: 'object'\n        },\n        responseId: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.companies.create(body)));
};

export default { metadata, tool, handler };
