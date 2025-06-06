// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    "Perform an accrual action on a purchase.\n\nA customer's phone number, email, or card serial number is required to find or register a loyalty card.",
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
    },
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.marketplace.accrue(body));
};

export default { metadata, tool, handler };
