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
  name: 'create_templates_v2_reward_tiers',
  description: 'Create reward tier',
  inputSchema: {
    type: 'object',
    properties: {
      templateId: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      type: {
        type: 'string',
        title: '0 - custom, 1 - amount, 2 - percent',
        enum: [0, 1, 2],
      },
      value: {
        type: 'number',
      },
      threshold: {
        type: 'integer',
      },
      usageLimit: {
        type: 'integer',
      },
      valueLimit: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const { templateId, ...body } = args as any;
  return client.v2.templates.rewardTiers.create(templateId, body);
};

export default { metadata, tool, handler };
