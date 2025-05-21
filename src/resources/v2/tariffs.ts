// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardsAPI from './cards';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tariffs extends APIResource {
  /**
   * Get tariff
   *
   * @example
   * ```ts
   * const tariff = await client.v2.tariffs.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TariffRetrieveResponse> {
    return this._client.get(path`/api/v2/tariffs/${id}`, options);
  }

  /**
   * List of tariffs
   *
   * @example
   * ```ts
   * const tariffs = await client.v2.tariffs.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<TariffListResponse> {
    return this._client.get('/api/v2/tariffs', options);
  }
}

export interface Tariff {
  id: number;

  createdAt: string;

  limits: Tariff.Limits;

  name: string;

  options: Tariff.Options;

  country?: string | null;

  currency?: string | null;

  prices?: Tariff.Prices | null;

  type?: number | null;

  updatedAt?: string | null;
}

export namespace Tariff {
  export interface Limits {
    integrations: number;

    locations: number;

    managers: number;

    templates: number;
  }

  export interface Options {
    autoPush: boolean;

    customAutoPush: boolean;

    customFields: boolean;

    duplicatesCheck: boolean;

    integrations: boolean;

    phoneCheck: boolean;

    push: boolean;

    referralProgram: boolean;

    reports: boolean;

    whiteLabel: boolean;
  }

  export interface Prices {
    month?: number | null;

    quarter?: number | null;

    year?: number | null;
  }
}

export interface TariffRetrieveResponse extends CardsAPI.Response {
  data?: Tariff;
}

export interface TariffListResponse extends CardsAPI.ListResponse {
  data?: Array<Tariff>;
}

export declare namespace Tariffs {
  export {
    type Tariff as Tariff,
    type TariffRetrieveResponse as TariffRetrieveResponse,
    type TariffListResponse as TariffListResponse,
  };
}
