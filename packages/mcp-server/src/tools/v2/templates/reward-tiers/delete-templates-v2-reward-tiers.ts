// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Haye from 'haye';

export const metadata: Metadata = {
  resource: 'v2.templates.reward_tiers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_templates_v2_reward_tiers',
  description: 'Delete reward tier',
  inputSchema: {
    type: 'object',
    properties: {
      templateId: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.templates.rewardTiers.delete(id, body);
};

export default { metadata, tool, handler };
