// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.cards',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'set_expiration_date_v2_cards',
  description: 'Set card expiration date',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      expiresAt: {
        type: 'string',
        title: 'Y-m-dTH:i:sP',
      },
    },
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.v2.cards.setExpirationDate(id, body);
};

export default { metadata, tool, handler };
