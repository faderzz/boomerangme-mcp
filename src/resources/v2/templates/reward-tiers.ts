// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CardsAPI from '../cards';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RewardTiers extends APIResource {
  /**
   * Create reward tier
   *
   * @example
   * ```ts
   * const rewardTier =
   *   await client.v2.templates.rewardTiers.create(
   *     'templateId',
   *     { name: 'name', type: 0, value: 0 },
   *   );
   * ```
   */
  create(
    templateID: string,
    body: RewardTierCreateParams,
    options?: RequestOptions,
  ): APIPromise<RewardTierCreateResponse> {
    return this._client.post(path`/api/v2/templates/${templateID}/reward_tiers`, { body, ...options });
  }

  /**
   * Delete reward tier
   *
   * @example
   * ```ts
   * const rewardTier =
   *   await client.v2.templates.rewardTiers.delete('id', {
   *     templateId: 'templateId',
   *   });
   * ```
   */
  delete(
    id: string,
    params: RewardTierDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RewardTierDeleteResponse> {
    const { templateId } = params;
    return this._client.delete(path`/api/v2/templates/${templateId}/reward_tiers/${id}`, options);
  }
}

export interface RewardTierOutput {
  id: number;

  templateId: number;

  type: number;

  name?: string | null;

  threshold?: number | null;

  usageLimit?: number | null;

  value?: number | null;

  valueLimit?: number | null;
}

export interface RewardTierCreateResponse extends CardsAPI.Response {
  code?: number;

  data?: RewardTierOutput;
}

export interface RewardTierDeleteResponse extends CardsAPI.Response {
  code?: number;

  data?: RewardTierDeleteResponse.Data;
}

export namespace RewardTierDeleteResponse {
  export interface Data {
    id?: number;
  }
}

export interface RewardTierCreateParams {
  name: string;

  type: 0 | 1 | 2;

  value: number;

  threshold?: number;

  usageLimit?: number | null;

  valueLimit?: number | null;
}

export interface RewardTierDeleteParams {
  templateId: string;
}

export declare namespace RewardTiers {
  export {
    type RewardTierOutput as RewardTierOutput,
    type RewardTierCreateResponse as RewardTierCreateResponse,
    type RewardTierDeleteResponse as RewardTierDeleteResponse,
    type RewardTierCreateParams as RewardTierCreateParams,
    type RewardTierDeleteParams as RewardTierDeleteParams,
  };
}
