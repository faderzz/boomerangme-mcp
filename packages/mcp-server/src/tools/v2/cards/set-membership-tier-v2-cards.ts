// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/cards/{id}/set-membership-tier',
  operationId: 'post_api-post-card-set-membership-tier',
};

export const tool: Tool = {
  name: 'set_membership_tier_v2_cards',
  description: 'Set membership card tier and period',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      period: {
        type: 'string',
        enum: ['day', 'week', 'month', 'year'],
      },
      tierId: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.cards.setMembershipTier(id, body);
};

export default { metadata, tool, handler };
