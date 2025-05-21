// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.profile',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v2_profile',
  description: 'Get profile',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  return client.v2.profile.retrieve();
};

export default { metadata, tool, handler };
