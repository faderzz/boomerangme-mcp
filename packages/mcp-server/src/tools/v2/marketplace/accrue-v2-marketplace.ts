// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'haye-mcp/filtering';
import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.marketplace',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/marketplace/accrue',
  operationId: 'post_app_api_v2_marketplace_marketplaceapi_accrue',
};

export const tool: Tool = {
  name: 'accrue_v2_marketplace',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPerform an accrual action on a purchase.\n\nA customer's phone number, email, or card serial number is required to find or register a loyalty card.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/transaction_output',\n  $defs: {\n    transaction_output: {\n      type: 'object',\n      properties: {\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              accrualAmount: {\n                type: 'integer',\n                description: 'Amount in cents to accrue'\n              },\n              accruedValue: {\n                type: 'integer',\n                description: 'Actually accrued amount in cents. May be 0 in specific cases'\n              },\n              cardType: {\n                type: 'integer'\n              },\n              checkAmount: {\n                type: 'integer',\n                description: 'Total amount of the check in cents'\n              },\n              companyId: {\n                type: 'integer',\n                description: 'Id of the merchant company'\n              },\n              createdAt: {\n                type: 'string'\n              },\n              errorMessage: {\n                type: 'string'\n              },\n              installationId: {\n                type: 'integer',\n                description: 'Id of the app installation'\n              },\n              isSuccess: {\n                type: 'boolean'\n              },\n              reversedAt: {\n                type: 'string'\n              },\n              serialNumber: {\n                type: 'string'\n              },\n              templateId: {\n                type: 'integer',\n                description: 'Id of the card template'\n              }\n            },\n            required: []\n          }\n        },\n        transactionId: {\n          type: 'string'\n        }\n      },\n      required: [        'results',\n        'transactionId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      check: {
        type: 'object',
        properties: {
          amount: {
            type: 'integer',
            description: 'Total amount of the check in cents.',
          },
          currency: {
            type: 'string',
            description: 'Currency in ISO 4217 3-letter code.',
          },
          selections: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                quantity: {
                  type: 'integer',
                  description: 'Quantity of items. Should be positive.',
                },
                totalPrice: {
                  type: 'integer',
                  description: 'Total price of the selection.',
                },
                id: {
                  type: 'string',
                  description: 'Inventory item unique ID. Need to work an accrual rule with specific SKU.',
                },
                displayName: {
                  type: 'string',
                  description: 'Inventory item display name.',
                },
                groupId: {
                  type: 'string',
                  description:
                    'Group ID of inventory item. Need to work an accrual rule with specific SKU group.',
                },
                price: {
                  type: 'integer',
                  description: 'Inventory item price in cents.',
                },
              },
              required: ['quantity', 'totalPrice'],
            },
          },
        },
        required: ['amount', 'currency', 'selections'],
      },
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
      email: {
        type: 'string',
        description: "Customer's email.",
      },
      firstName: {
        type: 'string',
        description: "Customer's first name.",
      },
      lastName: {
        type: 'string',
        description: "Customer's last name.",
      },
      phone: {
        type: 'string',
        description: "Customer's phone.",
      },
      serialNumber: {
        type: 'string',
        description: "Customer's loyalty card serial number.",
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
  return asTextContentResult(await maybeFilter(args, await client.v2.marketplace.accrue(body)));
};

export default { metadata, tool, handler };
