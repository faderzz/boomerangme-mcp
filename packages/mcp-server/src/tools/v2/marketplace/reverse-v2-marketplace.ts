// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'haye-mcp/filtering';
import { Metadata, asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.marketplace',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/marketplace/reverse',
  operationId: 'post_app_api_v2_marketplace_marketplaceapi_reverse',
};

export const tool: Tool = {
  name: 'reverse_v2_marketplace',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRevert a previously performed accrual action using the transaction ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/transaction_output',\n  $defs: {\n    transaction_output: {\n      type: 'object',\n      properties: {\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              accrualAmount: {\n                type: 'integer',\n                description: 'Amount in cents to accrue'\n              },\n              accruedValue: {\n                type: 'integer',\n                description: 'Actually accrued amount in cents. May be 0 in specific cases'\n              },\n              cardType: {\n                type: 'integer'\n              },\n              checkAmount: {\n                type: 'integer',\n                description: 'Total amount of the check in cents'\n              },\n              companyId: {\n                type: 'integer',\n                description: 'Id of the merchant company'\n              },\n              createdAt: {\n                type: 'string'\n              },\n              errorMessage: {\n                type: 'string'\n              },\n              installationId: {\n                type: 'integer',\n                description: 'Id of the app installation'\n              },\n              isSuccess: {\n                type: 'boolean'\n              },\n              reversedAt: {\n                type: 'string'\n              },\n              serialNumber: {\n                type: 'string'\n              },\n              templateId: {\n                type: 'integer',\n                description: 'Id of the card template'\n              }\n            },\n            required: []\n          }\n        },\n        transactionId: {\n          type: 'string'\n        }\n      },\n      required: [        'results',\n        'transactionId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      transactionId: {
        type: 'string',
        description: 'Unique transaction id.',
      },
      'X-App-Token': {
        type: 'string',
      },
      credentials: {
        type: 'array',
        description: 'Merchant credentials.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
          required: [],
        },
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
  return asTextContentResult(await maybeFilter(args, await client.v2.marketplace.reverse(body)));
};

export default { metadata, tool, handler };
