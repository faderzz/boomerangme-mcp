// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CardsAPI from '../cards';
import * as RewardTiersAPI from './reward-tiers';
import {
  RewardTierCreateParams,
  RewardTierCreateResponse,
  RewardTierDeleteParams,
  RewardTierDeleteResponse,
  RewardTierOutput,
  RewardTiers,
} from './reward-tiers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Templates extends APIResource {
  rewardTiers: RewardTiersAPI.RewardTiers = new RewardTiersAPI.RewardTiers(this._client);

  /**
   * Get template
   *
   * @example
   * ```ts
   * const template = await client.v2.templates.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TemplateRetrieveResponse> {
    return this._client.get(path`/api/v2/templates/${id}`, options);
  }

  /**
   * List of templates
   *
   * @example
   * ```ts
   * const templates = await client.v2.templates.list();
   * ```
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/api/v2/templates', { query, ...options });
  }
}

export interface Template {
  id: number;

  companyId: number;

  createdAt: string;

  installLink: string;

  qrLink: string;

  type: number;

  customFields?: Array<CardsAPI.CustomField> | null;

  membershipTiers?: Array<CardsAPI.MembershipTier> | null;

  name?: string | null;

  rewardTiers?: Array<RewardTiersAPI.RewardTierOutput> | null;

  updatedAt?: string | null;
}

export interface TemplateRetrieveResponse extends CardsAPI.Response {
  data?: Template;
}

export interface TemplateListResponse extends CardsAPI.ListResponse {
  data?: Array<Template>;
}

export interface TemplateListParams {
  /**
   * Items per page
   */
  itemsPerPage?: number;

  /**
   * Page number
   */
  page?: number;
}

Templates.RewardTiers = RewardTiers;

export declare namespace Templates {
  export {
    type Template as Template,
    type TemplateRetrieveResponse as TemplateRetrieveResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateListParams as TemplateListParams,
  };

  export {
    RewardTiers as RewardTiers,
    type RewardTierOutput as RewardTierOutput,
    type RewardTierCreateResponse as RewardTierCreateResponse,
    type RewardTierDeleteResponse as RewardTierDeleteResponse,
    type RewardTierCreateParams as RewardTierCreateParams,
    type RewardTierDeleteParams as RewardTierDeleteParams,
  };
}
