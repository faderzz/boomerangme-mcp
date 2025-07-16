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
  httpPath: '/api/v2/marketplace/resolve-credentials',
  operationId: 'post_app_api_v2_marketplace_marketplaceapi_resolvecredentials',
};

export const tool: Tool = {
  name: 'resolve_credentials_v2_marketplace',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a bundle of app installation credentials using any one of them.\n\nFor example, on a service webhook or at the application service level,\nyou may only have the merchant ID and need to obtain the service API token.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    credentials: {\n      type: 'array',\n      description: 'Merchant credentials.',\n      items: {\n        type: 'object',\n        properties: {\n          name: {\n            type: 'string'\n          },\n          value: {\n            type: 'string'\n          }\n        },\n        required: []\n      }\n    }\n  },\n  required: []\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.v2.marketplace.resolveCredentials(body)));
};

export default { metadata, tool, handler };
