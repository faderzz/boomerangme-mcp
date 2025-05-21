// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StatisticsAPI from './statistics';
import * as CardsAPI from './cards';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Statistics extends APIResource {
  /**
   * Revenue statistics
   *
   * @example
   * ```ts
   * const response = await client.v2.statistics.revenue();
   * ```
   */
  revenue(
    query: StatisticRevenueParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatisticRevenueResponse> {
    return this._client.get('/api/v2/statistics/revenue', { query, ...options });
  }
}

export interface StatsByPeriodOutput {
  date: string;

  value: number;
}

export interface StatisticRevenueResponse extends CardsAPI.Response {
  data?: StatisticRevenueResponse.Data;
}

export namespace StatisticRevenueResponse {
  export interface Data {
    ltv: number;

    revenueByDay: Array<StatisticsAPI.StatsByPeriodOutput>;

    revenueTotal: number;

    roi: number;

    roiByDay: Array<StatisticsAPI.StatsByPeriodOutput>;

    totalCost: number;
  }
}

export interface StatisticRevenueParams {
  /**
   * Filter by companyId
   */
  companyId?: number;

  /**
   * End date (format Y-m-d)
   */
  endDate?: string;

  /**
   * Start date (format Y-m-d)
   */
  startDate?: string;

  /**
   * Filter by templateId
   */
  templateId?: number;
}

export declare namespace Statistics {
  export {
    type StatsByPeriodOutput as StatsByPeriodOutput,
    type StatisticRevenueResponse as StatisticRevenueResponse,
    type StatisticRevenueParams as StatisticRevenueParams,
  };
}
