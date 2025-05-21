// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Marketplace extends APIResource {
  /**
   * Perform an accrual action on a purchase.
   *
   * A customer's phone number, email, or card serial number is required to find or
   * register a loyalty card.
   *
   * @example
   * ```ts
   * const transactionOutput =
   *   await client.v2.marketplace.accrue({
   *     check: {
   *       amount: 0,
   *       currency: 'currency',
   *       selections: [{ quantity: 1, totalPrice: 0 }],
   *     },
   *     transactionId: 'transactionId',
   *     'X-App-Token': 'X-App-Token',
   *   });
   * ```
   */
  accrue(params: MarketplaceAccrueParams, options?: RequestOptions): APIPromise<TransactionOutput> {
    const { 'X-App-Token': xAppToken, ...body } = params;
    return this._client.post('/api/v2/marketplace/accrue', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-App-Token': xAppToken }, options?.headers]),
    });
  }

  /**
   * Retrieve a bundle of app installation credentials using any one of them.
   *
   * For example, on a service webhook or at the application service level, you may
   * only have the merchant ID and need to obtain the service API token.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.marketplace.resolveCredentials({
   *     names: ['string'],
   *     'X-App-Token': 'X-App-Token',
   *   });
   * ```
   */
  resolveCredentials(
    params: MarketplaceResolveCredentialsParams,
    options?: RequestOptions,
  ): APIPromise<MarketplaceResolveCredentialsResponse> {
    const { 'X-App-Token': xAppToken, ...body } = params;
    return this._client.post('/api/v2/marketplace/resolve-credentials', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-App-Token': xAppToken }, options?.headers]),
    });
  }

  /**
   * Revert a previously performed accrual action using the transaction ID.
   *
   * @example
   * ```ts
   * const transactionOutput =
   *   await client.v2.marketplace.reverse({
   *     transactionId: 'transactionId',
   *     'X-App-Token': 'X-App-Token',
   *   });
   * ```
   */
  reverse(params: MarketplaceReverseParams, options?: RequestOptions): APIPromise<TransactionOutput> {
    const { 'X-App-Token': xAppToken, ...body } = params;
    return this._client.post('/api/v2/marketplace/reverse', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-App-Token': xAppToken }, options?.headers]),
    });
  }
}

export interface TransactionOutput {
  results: Array<TransactionOutput.Result>;

  transactionId: string;
}

export namespace TransactionOutput {
  export interface Result {
    /**
     * Amount in cents to accrue
     */
    accrualAmount?: number | null;

    /**
     * Actually accrued amount in cents. May be 0 in specific cases
     */
    accruedValue?: number | null;

    cardType?: number | null;

    /**
     * Total amount of the check in cents
     */
    checkAmount?: number | null;

    /**
     * Id of the merchant company
     */
    companyId?: number | null;

    createdAt?: string | null;

    errorMessage?: string | null;

    /**
     * Id of the app installation
     */
    installationId?: number | null;

    isSuccess?: boolean | null;

    reversedAt?: string | null;

    serialNumber?: string | null;

    /**
     * Id of the card template
     */
    templateId?: number | null;
  }
}

export interface MarketplaceResolveCredentialsResponse {
  /**
   * Merchant credentials.
   */
  credentials?: Array<MarketplaceResolveCredentialsResponse.Credential>;
}

export namespace MarketplaceResolveCredentialsResponse {
  export interface Credential {
    name?: string;

    value?: string;
  }
}

export interface MarketplaceAccrueParams {
  /**
   * Body param:
   */
  check: MarketplaceAccrueParams.Check | null;

  /**
   * Body param: Unique transaction id.
   */
  transactionId: string | null;

  /**
   * Header param: App static authorization token
   */
  'X-App-Token': string;

  /**
   * Body param: Merchant credentials.
   */
  credentials?: Array<MarketplaceAccrueParams.Credential>;

  /**
   * Body param: Customer's email.
   */
  email?: string | null;

  /**
   * Body param: Customer's first name.
   */
  firstName?: string | null;

  /**
   * Body param: Customer's last name.
   */
  lastName?: string | null;

  /**
   * Body param: Customer's phone.
   */
  phone?: string | null;

  /**
   * Body param: Customer's loyalty card serial number.
   */
  serialNumber?: string | null;
}

export namespace MarketplaceAccrueParams {
  export interface Check {
    /**
     * Total amount of the check in cents.
     */
    amount: number;

    /**
     * Currency in ISO 4217 3-letter code.
     */
    currency: string | null;

    selections: Array<Check.Selection>;
  }

  export namespace Check {
    export interface Selection {
      /**
       * Quantity of items. Should be positive.
       */
      quantity: number | null;

      /**
       * Total price of the selection.
       */
      totalPrice: number | null;

      /**
       * Inventory item unique ID. Need to work an accrual rule with specific SKU.
       */
      id?: string | null;

      /**
       * Inventory item display name.
       */
      displayName?: string | null;

      /**
       * Group ID of inventory item. Need to work an accrual rule with specific SKU
       * group.
       */
      groupId?: string | null;

      /**
       * Inventory item price in cents.
       */
      price?: number | null;
    }
  }

  export interface Credential {
    name?: string;

    value?: string;
  }
}

export interface MarketplaceResolveCredentialsParams {
  /**
   * Body param: Optional credential names to return. If not specified, all merchant
   * credentials are returned.
   */
  names: Array<string>;

  /**
   * Header param: App static authorization token
   */
  'X-App-Token': string;

  /**
   * Body param: Merchant credentials.
   */
  credentials?: Array<MarketplaceResolveCredentialsParams.Credential>;
}

export namespace MarketplaceResolveCredentialsParams {
  export interface Credential {
    name?: string;

    value?: string;
  }
}

export interface MarketplaceReverseParams {
  /**
   * Body param: Unique transaction id.
   */
  transactionId: string | null;

  /**
   * Header param: App static authorization token
   */
  'X-App-Token': string;

  /**
   * Body param: Merchant credentials.
   */
  credentials?: Array<MarketplaceReverseParams.Credential>;
}

export namespace MarketplaceReverseParams {
  export interface Credential {
    name?: string;

    value?: string;
  }
}

export declare namespace Marketplace {
  export {
    type TransactionOutput as TransactionOutput,
    type MarketplaceResolveCredentialsResponse as MarketplaceResolveCredentialsResponse,
    type MarketplaceAccrueParams as MarketplaceAccrueParams,
    type MarketplaceResolveCredentialsParams as MarketplaceResolveCredentialsParams,
    type MarketplaceReverseParams as MarketplaceReverseParams,
  };
}
