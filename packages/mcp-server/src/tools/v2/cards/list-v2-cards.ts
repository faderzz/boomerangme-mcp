// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'haye-mcp/filtering';
import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/cards',
  operationId: 'get_api-get-card-list',
};

export const tool: Tool = {
  name: 'list_v2_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMore description\n\n# Response Schema\n```json\n{\n  allOf: [    {\n      $ref: '#/$defs/list_response'\n    }\n  ],\n  $defs: {\n    list_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        data: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            currentPage: {\n              type: 'integer'\n            },\n            itemsPerPage: {\n              type: 'integer'\n            },\n            totalItems: {\n              type: 'integer'\n            }\n          },\n          required: []\n        },\n        responseId: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customerEmail: {
        type: 'string',
        description: 'Filter by customer email',
      },
      customerId: {
        type: 'string',
        description: 'Filter by customerId',
      },
      customerPhone: {
        type: 'string',
        description: 'Filter by customer phone',
      },
      itemsPerPage: {
        type: 'integer',
        description: 'Items per page',
      },
      page: {
        type: 'integer',
        description: 'Page number',
      },
      templateId: {
        type: 'integer',
        description: 'Filter by templateId',
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
  return asTextContentResult(await maybeFilter(args, await client.v2.cards.list(body)));
};

export default { metadata, tool, handler };
