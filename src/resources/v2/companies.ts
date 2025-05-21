// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardsAPI from './cards';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Create company
   *
   * @example
   * ```ts
   * const company = await client.v2.companies.create({
   *   country: 'country',
   *   email: 'email',
   *   name: 'name',
   *   password: 'xxxxxx',
   *   phone: 'phone',
   *   tariffId: 1,
   *   tariffPeriod: 'trial',
   *   userName: 'userName',
   *   userSurname: 'userSurname',
   * });
   * ```
   */
  create(body: CompanyCreateParams, options?: RequestOptions): APIPromise<CompanyCreateResponse> {
    return this._client.post('/api/v2/companies', { body, ...options });
  }

  /**
   * Get company
   *
   * @example
   * ```ts
   * const company = await client.v2.companies.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CompanyRetrieveResponse> {
    return this._client.get(path`/api/v2/companies/${id}`, options);
  }

  /**
   * Edit company
   *
   * @example
   * ```ts
   * const company = await client.v2.companies.update('id');
   * ```
   */
  update(
    id: string,
    body: CompanyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyUpdateResponse> {
    return this._client.patch(path`/api/v2/companies/${id}`, { body, ...options });
  }

  /**
   * List of companies
   *
   * @example
   * ```ts
   * const companies = await client.v2.companies.list();
   * ```
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyListResponse> {
    return this._client.get('/api/v2/companies', { query, ...options });
  }

  /**
   * Delete company
   *
   * @example
   * ```ts
   * const company = await client.v2.companies.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CompanyDeleteResponse> {
    return this._client.delete(path`/api/v2/companies/${id}`, options);
  }
}

export interface Company {
  id: number;

  createdAt: string;

  extra: Company.Extra;

  status: number;

  tariffId: number;

  userId: string;

  apiKey?: string | null;

  email?: string | null;

  expiresAt?: string | null;

  name?: string | null;

  note?: string | null;

  phone?: string | null;

  updatedAt?: string | null;
}

export namespace Company {
  export interface Extra {
    city?: string | null;

    country?: string | null;

    countryCode?: string | null;

    fullAddress?: string | null;

    postalCode?: string | null;

    state?: string | null;

    stateCode?: string | null;

    street?: string | null;

    timezone?: string | null;

    website?: string | null;
  }
}

export interface CompanyCreateResponse extends CardsAPI.Response {
  code?: number;

  data?: Company;
}

export interface CompanyRetrieveResponse extends CardsAPI.Response {
  data?: Company;
}

export interface CompanyUpdateResponse extends CardsAPI.Response {
  data?: Company;
}

export interface CompanyListResponse extends CardsAPI.ListResponse {
  data?: Array<Company>;
}

export interface CompanyDeleteResponse extends CardsAPI.Response {
  data?: CompanyDeleteResponse.Data;
}

export namespace CompanyDeleteResponse {
  export interface Data {
    id?: number;
  }
}

export interface CompanyCreateParams {
  country: string;

  email: string;

  name: string;

  password: string;

  phone: string;

  tariffId: number;

  tariffPeriod: 'trial' | 'month' | 'two_months' | 'quarter' | 'six_months' | 'nine_months' | 'year';

  userName: string;

  userSurname: string;

  language?: string | null;
}

export interface CompanyUpdateParams {
  expiresAt?: string | null;

  name?: string | null;
}

export interface CompanyListParams {
  /**
   * Items per page
   */
  itemsPerPage?: number;

  /**
   * Page number
   */
  page?: number;
}

export declare namespace Companies {
  export {
    type Company as Company,
    type CompanyCreateResponse as CompanyCreateResponse,
    type CompanyRetrieveResponse as CompanyRetrieveResponse,
    type CompanyUpdateResponse as CompanyUpdateResponse,
    type CompanyListResponse as CompanyListResponse,
    type CompanyDeleteResponse as CompanyDeleteResponse,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
  };
}
