// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardsAPI from './cards';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Create customer
   *
   * @example
   * ```ts
   * const customer = await client.v2.customers.create({
   *   firstName: 'firstName',
   * });
   * ```
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerCreateResponse> {
    return this._client.post('/api/v2/customers', { body, ...options });
  }

  /**
   * Get customer
   *
   * @example
   * ```ts
   * const customer = await client.v2.customers.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomerRetrieveResponse> {
    return this._client.get(path`/api/v2/customers/${id}`, options);
  }

  /**
   * Edit customer
   *
   * @example
   * ```ts
   * const customer = await client.v2.customers.update('id', {
   *   body_id: 'id',
   * });
   * ```
   */
  update(
    pathID: string,
    body: CustomerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomerUpdateResponse> {
    return this._client.patch(path`/api/v2/customers/${pathID}`, { body, ...options });
  }

  /**
   * List of customers
   *
   * @example
   * ```ts
   * const customers = await client.v2.customers.list();
   * ```
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/api/v2/customers', { query, ...options });
  }

  /**
   * Delete customer
   *
   * @example
   * ```ts
   * const customer = await client.v2.customers.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CustomerDeleteResponse> {
    return this._client.delete(path`/api/v2/customers/${id}`, options);
  }
}

export interface CustomerOutput {
  id: string;

  segments: Array<CustomerOutput.Segment>;

  createdAt?: string | null;

  dateOfBirth?: string;

  email?: string | null;

  externalUserId?: string | null;

  firstName?: string | null;

  gender?: number | null;

  phone?: string | null;

  surname?: string | null;

  updatedAt?: string | null;
}

export namespace CustomerOutput {
  export interface Segment {
    id: number;

    name: string;

    type: number;
  }
}

export interface CustomerCreateResponse extends CardsAPI.Response {
  code?: number;

  data?: CustomerOutput;
}

export interface CustomerRetrieveResponse extends CardsAPI.Response {
  data?: CustomerOutput;
}

export interface CustomerUpdateResponse extends CardsAPI.Response {
  code?: number;

  data?: CustomerOutput;
}

export interface CustomerListResponse extends CardsAPI.ListResponse {
  data?: Array<CustomerOutput>;
}

export interface CustomerDeleteResponse extends CardsAPI.Response {
  code?: number;

  data?: CustomerDeleteResponse.Data;
}

export namespace CustomerDeleteResponse {
  export interface Data {
    id?: string;
  }
}

export interface CustomerCreateParams {
  firstName: string;

  dateOfBirth?: string | null;

  email?: string | null;

  externalUserId?: string | null;

  gender?: 0 | 1 | 2 | null;

  phone?: string | null;

  surname?: string | null;
}

export interface CustomerUpdateParams {
  body_id: string;

  dateOfBirth?: string | null;

  email?: string | null;

  externalUserId?: string | null;

  firstName?: string | null;

  gender?: 0 | 1 | 2 | null;

  surname?: string | null;
}

export interface CustomerListParams {
  /**
   * Filter by email
   */
  email?: string;

  /**
   * Items per page
   */
  itemsPerPage?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter by phone
   */
  phone?: string;
}

export declare namespace Customers {
  export {
    type CustomerOutput as CustomerOutput,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
