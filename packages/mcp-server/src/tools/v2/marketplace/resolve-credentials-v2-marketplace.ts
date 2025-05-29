// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.marketplace',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/marketplace/resolve-credentials',
  operationId: 'post_app_api_v2_marketplace_marketplaceapi_resolvecredentials',
};

export const tool: Tool = {
  name: 'resolve_credentials_v2_marketplace',
  description:
    'Retrieve a bundle of app installation credentials using any one of them.\n\nFor example, on a service webhook or at the application service level,\nyou may only have the merchant ID and need to obtain the service API token.',
  inputSchema: {
    type: 'object',
    properties: {
      names: {
        type: 'array',
        description:
          'Optional credential names to return.\nIf not specified, all merchant credentials are returned.',
        items: {
          type: 'string',
        },
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
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.marketplace.resolveCredentials(body);
};

export default { metadata, tool, handler };
