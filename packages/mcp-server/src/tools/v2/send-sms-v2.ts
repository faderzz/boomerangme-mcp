// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/sms',
  operationId: 'post_api-post-sms',
};

export const tool: Tool = {
  name: 'send_sms_v2',
  description: 'Send SMS to customer',
  inputSchema: {
    type: 'object',
    properties: {
      customerId: {
        type: 'string',
      },
      message: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v2.sendSMS(body);
};

export default { metadata, tool, handler };
