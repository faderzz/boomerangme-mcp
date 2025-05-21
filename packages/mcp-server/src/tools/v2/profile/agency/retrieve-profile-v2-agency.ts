// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Haye from 'haye';

export const metadata: Metadata = {
  resource: 'v2.profile.agency',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_profile_v2_agency',
  description: 'Get agency profile',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Haye, args: Record<string, unknown> | undefined) => {
  return client.v2.profile.agency.retrieve();
};

export default { metadata, tool, handler };
