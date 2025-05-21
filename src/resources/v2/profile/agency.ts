// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CardsAPI from '../cards';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Agency extends APIResource {
  /**
   * Get agency profile
   *
   * @example
   * ```ts
   * const agency = await client.v2.profile.agency.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<AgencyRetrieveResponse> {
    return this._client.get('/api/v2/profile/agency', options);
  }

  /**
   * Edit agency profile
   *
   * @example
   * ```ts
   * const agency = await client.v2.profile.agency.update();
   * ```
   */
  update(
    body: AgencyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgencyUpdateResponse> {
    return this._client.patch('/api/v2/profile/agency', { body, ...options });
  }
}

export interface AgencyProfileOutput {
  companyId: number;

  address?: string | null;

  city?: string | null;

  country?: string | null;

  demoFormLink?: string | null;

  email?: string | null;

  facebook?: string | null;

  helpCenterLink?: string | null;

  instagram?: string | null;

  name?: string | null;

  phone?: string | null;

  privacyPolicyLink?: string | null;

  state?: string | null;

  subscriptionAgreementLink?: string | null;

  telegram?: string | null;

  termsOfUse?: string | null;

  twitter?: string | null;

  zip?: string | null;
}

export interface AgencyRetrieveResponse extends CardsAPI.Response {
  data?: AgencyProfileOutput;
}

export interface AgencyUpdateResponse extends CardsAPI.Response {
  data?: AgencyProfileOutput;
}

export interface AgencyUpdateParams {
  address?: string | null;

  agreement?: string | null;

  city?: string | null;

  country?: string | null;

  demoFormLink?: string | null;

  email?: string | null;

  facebook?: string | null;

  helpCenterLink?: string | null;

  instagram?: string | null;

  name?: string | null;

  phone?: string | null;

  privacyPolicy?: string | null;

  privacyPolicyLink?: string | null;

  state?: string | null;

  subscriptionAgreementLink?: string | null;

  telegram?: string | null;

  termsOfUse?: string | null;

  twitter?: string | null;

  zip?: string | null;
}

export declare namespace Agency {
  export {
    type AgencyProfileOutput as AgencyProfileOutput,
    type AgencyRetrieveResponse as AgencyRetrieveResponse,
    type AgencyUpdateResponse as AgencyUpdateResponse,
    type AgencyUpdateParams as AgencyUpdateParams,
  };
}
