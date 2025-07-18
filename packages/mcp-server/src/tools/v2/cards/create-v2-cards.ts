// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'haye-mcp/filtering';
import { Metadata, asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/cards',
  operationId: 'post_api-post-card',
};

export const tool: Tool = {
  name: 'create_v2_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate card for customer\n\n# Response Schema\n```json\n{\n  allOf: [    {\n      $ref: '#/$defs/response'\n    }\n  ],\n  $defs: {\n    response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        data: {\n          type: 'object'\n        },\n        responseId: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customerId: {
        type: 'string',
      },
      templateId: {
        type: 'integer',
      },
      customFields: {
        type: 'array',
        title:
          'Send customFields from template. Сan exclude customField with required: false and customField with type phone, email, FName, SName, DateOfBirth if they are filled in customer.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            value: {
              type: 'string',
            },
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customerId', 'templateId'],
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v2.cards.create(body)));
};

export default { metadata, tool, handler };
