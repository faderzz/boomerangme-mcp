// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'haye-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Haye from 'boomerangme-api';

export const metadata: Metadata = {
  resource: 'v2.profile.agency',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/profile/agency',
  operationId: 'get_api-get-profile-agency',
};

export const tool: Tool = {
  name: 'retrieve_profile_v2_agency',
  description: 'Get agency profile',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Haye, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.v2.profile.agency.retrieve());
};

export default { metadata, tool, handler };
