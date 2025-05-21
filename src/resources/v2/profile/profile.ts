// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CardsAPI from '../cards';
import * as AgencyAPI from './agency';
import {
  Agency,
  AgencyProfileOutput,
  AgencyRetrieveResponse,
  AgencyUpdateParams,
  AgencyUpdateResponse,
} from './agency';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Profile extends APIResource {
  agency: AgencyAPI.Agency = new AgencyAPI.Agency(this._client);

  /**
   * Get profile
   *
   * @example
   * ```ts
   * const profile = await client.v2.profile.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<ProfileRetrieveResponse> {
    return this._client.get('/api/v2/profile', options);
  }

  /**
   * Edit profile
   *
   * @example
   * ```ts
   * const profile = await client.v2.profile.update();
   * ```
   */
  update(
    body: ProfileUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProfileUpdateResponse> {
    return this._client.patch('/api/v2/profile', { body, ...options });
  }
}

export interface ProfileOutput {
  companyId: number;

  country?: string | null;

  currency?: string | null;

  dateFormat?: string | null;

  email?: string | null;

  name?: string | null;

  phone?: string | null;

  timezone?: string | null;

  userName?: string | null;

  userSurname?: string | null;
}

export interface ProfileRetrieveResponse extends CardsAPI.Response {
  data?: ProfileOutput;
}

export interface ProfileUpdateResponse extends CardsAPI.Response {
  data?: ProfileOutput;
}

export interface ProfileUpdateParams {
  contacts?: string | null;

  country?: string | null;

  currency?: string | null;

  dateFormat?: 'DD.MM.YYYY' | 'DD/MM/YYYY' | 'DD-MM-YYYY' | 'MM/DD/YYYY' | 'YYYY.MM.DD' | 'YYYY-MM-DD' | null;

  email?: string | null;

  language?: string | null;

  name?: string | null;

  phone?: string | null;

  timezone?: string | null;

  userName?: string | null;

  userSurname?: string | null;
}

Profile.Agency = Agency;

export declare namespace Profile {
  export {
    type ProfileOutput as ProfileOutput,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export {
    Agency as Agency,
    type AgencyProfileOutput as AgencyProfileOutput,
    type AgencyRetrieveResponse as AgencyRetrieveResponse,
    type AgencyUpdateResponse as AgencyUpdateResponse,
    type AgencyUpdateParams as AgencyUpdateParams,
  };
}
