// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Haye from 'boomerangme-api';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import list_operations_v2 from './v2/list-operations-v2';
import send_sms_v2 from './v2/send-sms-v2';
import create_v2_cards from './v2/cards/create-v2-cards';
import retrieve_v2_cards from './v2/cards/retrieve-v2-cards';
import update_v2_cards from './v2/cards/update-v2-cards';
import list_v2_cards from './v2/cards/list-v2-cards';
import delete_v2_cards from './v2/cards/delete-v2-cards';
import add_point_v2_cards from './v2/cards/add-point-v2-cards';
import add_purchase_v2_cards from './v2/cards/add-purchase-v2-cards';
import add_reward_v2_cards from './v2/cards/add-reward-v2-cards';
import add_scores_v2_cards from './v2/cards/add-scores-v2-cards';
import add_stamp_v2_cards from './v2/cards/add-stamp-v2-cards';
import add_transaction_amount_v2_cards from './v2/cards/add-transaction-amount-v2-cards';
import add_visit_v2_cards from './v2/cards/add-visit-v2-cards';
import receive_reward_v2_cards from './v2/cards/receive-reward-v2-cards';
import redeem_coupon_v2_cards from './v2/cards/redeem-coupon-v2-cards';
import set_expiration_date_v2_cards from './v2/cards/set-expiration-date-v2-cards';
import set_membership_tier_v2_cards from './v2/cards/set-membership-tier-v2-cards';
import subtract_point_v2_cards from './v2/cards/subtract-point-v2-cards';
import subtract_purchase_v2_cards from './v2/cards/subtract-purchase-v2-cards';
import subtract_reward_v2_cards from './v2/cards/subtract-reward-v2-cards';
import subtract_scores_v2_cards from './v2/cards/subtract-scores-v2-cards';
import subtract_stamp_v2_cards from './v2/cards/subtract-stamp-v2-cards';
import subtract_transaction_amount_v2_cards from './v2/cards/subtract-transaction-amount-v2-cards';
import subtract_visit_v2_cards from './v2/cards/subtract-visit-v2-cards';
import create_v2_companies from './v2/companies/create-v2-companies';
import retrieve_v2_companies from './v2/companies/retrieve-v2-companies';
import update_v2_companies from './v2/companies/update-v2-companies';
import list_v2_companies from './v2/companies/list-v2-companies';
import delete_v2_companies from './v2/companies/delete-v2-companies';
import create_v2_customers from './v2/customers/create-v2-customers';
import retrieve_v2_customers from './v2/customers/retrieve-v2-customers';
import update_v2_customers from './v2/customers/update-v2-customers';
import list_v2_customers from './v2/customers/list-v2-customers';
import delete_v2_customers from './v2/customers/delete-v2-customers';
import accrue_v2_marketplace from './v2/marketplace/accrue-v2-marketplace';
import resolve_credentials_v2_marketplace from './v2/marketplace/resolve-credentials-v2-marketplace';
import reverse_v2_marketplace from './v2/marketplace/reverse-v2-marketplace';
import retrieve_v2_profile from './v2/profile/retrieve-v2-profile';
import update_v2_profile from './v2/profile/update-v2-profile';
import retrieve_profile_v2_agency from './v2/profile/agency/retrieve-profile-v2-agency';
import update_profile_v2_agency from './v2/profile/agency/update-profile-v2-agency';
import retrieve_v2_pushes from './v2/pushes/retrieve-v2-pushes';
import list_v2_pushes from './v2/pushes/list-v2-pushes';
import send_v2_pushes from './v2/pushes/send-v2-pushes';
import revenue_v2_statistics from './v2/statistics/revenue-v2-statistics';
import retrieve_v2_tariffs from './v2/tariffs/retrieve-v2-tariffs';
import list_v2_tariffs from './v2/tariffs/list-v2-tariffs';
import retrieve_v2_templates from './v2/templates/retrieve-v2-templates';
import list_v2_templates from './v2/templates/list-v2-templates';
import create_templates_v2_reward_tiers from './v2/templates/reward-tiers/create-templates-v2-reward-tiers';
import delete_templates_v2_reward_tiers from './v2/templates/reward-tiers/delete-templates-v2-reward-tiers';

export type HandlerFunction = (client: Haye, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(list_operations_v2);
addEndpoint(send_sms_v2);
addEndpoint(create_v2_cards);
addEndpoint(retrieve_v2_cards);
addEndpoint(update_v2_cards);
addEndpoint(list_v2_cards);
addEndpoint(delete_v2_cards);
addEndpoint(add_point_v2_cards);
addEndpoint(add_purchase_v2_cards);
addEndpoint(add_reward_v2_cards);
addEndpoint(add_scores_v2_cards);
addEndpoint(add_stamp_v2_cards);
addEndpoint(add_transaction_amount_v2_cards);
addEndpoint(add_visit_v2_cards);
addEndpoint(receive_reward_v2_cards);
addEndpoint(redeem_coupon_v2_cards);
addEndpoint(set_expiration_date_v2_cards);
addEndpoint(set_membership_tier_v2_cards);
addEndpoint(subtract_point_v2_cards);
addEndpoint(subtract_purchase_v2_cards);
addEndpoint(subtract_reward_v2_cards);
addEndpoint(subtract_scores_v2_cards);
addEndpoint(subtract_stamp_v2_cards);
addEndpoint(subtract_transaction_amount_v2_cards);
addEndpoint(subtract_visit_v2_cards);
addEndpoint(create_v2_companies);
addEndpoint(retrieve_v2_companies);
addEndpoint(update_v2_companies);
addEndpoint(list_v2_companies);
addEndpoint(delete_v2_companies);
addEndpoint(create_v2_customers);
addEndpoint(retrieve_v2_customers);
addEndpoint(update_v2_customers);
addEndpoint(list_v2_customers);
addEndpoint(delete_v2_customers);
addEndpoint(accrue_v2_marketplace);
addEndpoint(resolve_credentials_v2_marketplace);
addEndpoint(reverse_v2_marketplace);
addEndpoint(retrieve_v2_profile);
addEndpoint(update_v2_profile);
addEndpoint(retrieve_profile_v2_agency);
addEndpoint(update_profile_v2_agency);
addEndpoint(retrieve_v2_pushes);
addEndpoint(list_v2_pushes);
addEndpoint(send_v2_pushes);
addEndpoint(revenue_v2_statistics);
addEndpoint(retrieve_v2_tariffs);
addEndpoint(list_v2_tariffs);
addEndpoint(retrieve_v2_templates);
addEndpoint(list_v2_templates);
addEndpoint(create_templates_v2_reward_tiers);
addEndpoint(delete_templates_v2_reward_tiers);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
