// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'haye';

export const metadata: Metadata = {
  resource: 'v2.pushes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'send_v2_pushes',
  description: 'Send push',
  inputSchema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
      templateId: {
        type: 'integer',
      },
      cardId: {
        type: 'string',
      },
      scheduledAt: {
        type: 'string',
        title: 'Y-m-dTH:i:sP',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.pushes.send(body);
};

export default { metadata, tool, handler };
