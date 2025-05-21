// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers';
import * as RewardTiersAPI from './templates/reward-tiers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Cards extends APIResource {
  /**
   * Create card for customer
   *
   * @example
   * ```ts
   * const card = await client.v2.cards.create({
   *   customerId: 'customerId',
   *   templateId: 1,
   * });
   * ```
   */
  create(body: CardCreateParams, options?: RequestOptions): APIPromise<CardCreateResponse> {
    return this._client.post('/api/v2/cards', { body, ...options });
  }

  /**
   * Get card information by id (serial number)
   *
   * @example
   * ```ts
   * const card = await client.v2.cards.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CardRetrieveResponse> {
    return this._client.get(path`/api/v2/cards/${id}`, options);
  }

  /**
   * Edit card
   *
   * @example
   * ```ts
   * const card = await client.v2.cards.update('id');
   * ```
   */
  update(
    id: string,
    body: CardUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardUpdateResponse> {
    return this._client.patch(path`/api/v2/cards/${id}`, { body, ...options });
  }

  /**
   * More description
   *
   * @example
   * ```ts
   * const cards = await client.v2.cards.list();
   * ```
   */
  list(
    query: CardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardListResponse> {
    return this._client.get('/api/v2/cards', { query, ...options });
  }

  /**
   * Delete card
   *
   * @example
   * ```ts
   * const card = await client.v2.cards.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CardDeleteResponse> {
    return this._client.delete(path`/api/v2/cards/${id}`, options);
  }

  /**
   * Add point to card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.addPoint('id', {
   *   points: 1,
   * });
   * ```
   */
  addPoint(id: string, body: CardAddPointParams, options?: RequestOptions): APIPromise<CardAddPointResponse> {
    return this._client.post(path`/api/v2/cards/${id}/add-point`, { body, ...options });
  }

  /**
   * Add purchase to card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.addPurchase('id', {
   *   amount: 1,
   * });
   * ```
   */
  addPurchase(
    id: string,
    body: CardAddPurchaseParams,
    options?: RequestOptions,
  ): APIPromise<CardAddPurchaseResponse> {
    return this._client.post(path`/api/v2/cards/${id}/add-purchase`, { body, ...options });
  }

  /**
   * Add reward to card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.addReward('id', {
   *   rewards: 1,
   * });
   * ```
   */
  addReward(
    id: string,
    body: CardAddRewardParams,
    options?: RequestOptions,
  ): APIPromise<CardAddRewardResponse> {
    return this._client.post(path`/api/v2/cards/${id}/add-reward`, { body, ...options });
  }

  /**
   * Add scores to card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.addScores('id', {
   *   scores: 1,
   * });
   * ```
   */
  addScores(
    id: string,
    body: CardAddScoresParams,
    options?: RequestOptions,
  ): APIPromise<CardAddScoresResponse> {
    return this._client.post(path`/api/v2/cards/${id}/add-scores`, { body, ...options });
  }

  /**
   * Add stamp to card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.addStamp('id', {
   *   stamps: 1,
   * });
   * ```
   */
  addStamp(id: string, body: CardAddStampParams, options?: RequestOptions): APIPromise<CardAddStampResponse> {
    return this._client.post(path`/api/v2/cards/${id}/add-stamp`, { body, ...options });
  }

  /**
   * Add amount to card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.addTransactionAmount(
   *   'id',
   *   { amount: 1 },
   * );
   * ```
   */
  addTransactionAmount(
    id: string,
    body: CardAddTransactionAmountParams,
    options?: RequestOptions,
  ): APIPromise<CardAddTransactionAmountResponse> {
    return this._client.post(path`/api/v2/cards/${id}/add-transaction-amount`, { body, ...options });
  }

  /**
   * Add visit to card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.addVisit('id', {
   *   visits: 1,
   * });
   * ```
   */
  addVisit(id: string, body: CardAddVisitParams, options?: RequestOptions): APIPromise<CardAddVisitResponse> {
    return this._client.post(path`/api/v2/cards/${id}/add-visit`, { body, ...options });
  }

  /**
   * Receive reward
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.receiveReward('id', {
   *   body_id: 1,
   * });
   * ```
   */
  receiveReward(
    pathID: string,
    body: CardReceiveRewardParams,
    options?: RequestOptions,
  ): APIPromise<CardReceiveRewardResponse> {
    return this._client.post(path`/api/v2/cards/${pathID}/receive-reward`, { body, ...options });
  }

  /**
   * Redeem coupon
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.redeemCoupon('id');
   * ```
   */
  redeemCoupon(
    id: string,
    body: CardRedeemCouponParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardRedeemCouponResponse> {
    return this._client.post(path`/api/v2/cards/${id}/redeem-coupon`, { body, ...options });
  }

  /**
   * Set card expiration date
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.setExpirationDate(
   *   'id',
   * );
   * ```
   */
  setExpirationDate(
    id: string,
    body: CardSetExpirationDateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardSetExpirationDateResponse> {
    return this._client.post(path`/api/v2/cards/${id}/set-expiration-date`, { body, ...options });
  }

  /**
   * Set membership card tier and period
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.setMembershipTier(
   *   'id',
   *   { period: 'day', tierId: 0 },
   * );
   * ```
   */
  setMembershipTier(
    id: string,
    body: CardSetMembershipTierParams,
    options?: RequestOptions,
  ): APIPromise<CardSetMembershipTierResponse> {
    return this._client.post(path`/api/v2/cards/${id}/set-membership-tier`, { body, ...options });
  }

  /**
   * Subtract point from card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.subtractPoint('id', {
   *   points: 1,
   * });
   * ```
   */
  subtractPoint(
    id: string,
    body: CardSubtractPointParams,
    options?: RequestOptions,
  ): APIPromise<CardSubtractPointResponse> {
    return this._client.post(path`/api/v2/cards/${id}/subtract-point`, { body, ...options });
  }

  /**
   * Subtract purchase from card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.subtractPurchase(
   *   'id',
   *   { amount: 1 },
   * );
   * ```
   */
  subtractPurchase(
    id: string,
    body: CardSubtractPurchaseParams,
    options?: RequestOptions,
  ): APIPromise<CardSubtractPurchaseResponse> {
    return this._client.post(path`/api/v2/cards/${id}/subtract-purchase`, { body, ...options });
  }

  /**
   * Subtract reward from card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.subtractReward(
   *   'id',
   *   { rewards: 1 },
   * );
   * ```
   */
  subtractReward(
    id: string,
    body: CardSubtractRewardParams,
    options?: RequestOptions,
  ): APIPromise<CardSubtractRewardResponse> {
    return this._client.post(path`/api/v2/cards/${id}/subtract-reward`, { body, ...options });
  }

  /**
   * Subtract scores from card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.subtractScores(
   *   'id',
   *   { scores: 1 },
   * );
   * ```
   */
  subtractScores(
    id: string,
    body: CardSubtractScoresParams,
    options?: RequestOptions,
  ): APIPromise<CardSubtractScoresResponse> {
    return this._client.post(path`/api/v2/cards/${id}/subtract-scores`, { body, ...options });
  }

  /**
   * Subtract stamp from card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.subtractStamp('id', {
   *   stamps: 1,
   * });
   * ```
   */
  subtractStamp(
    id: string,
    body: CardSubtractStampParams,
    options?: RequestOptions,
  ): APIPromise<CardSubtractStampResponse> {
    return this._client.post(path`/api/v2/cards/${id}/subtract-stamp`, { body, ...options });
  }

  /**
   * Subtract amount from card
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.cards.subtractTransactionAmount('id', {
   *     amount: 1,
   *   });
   * ```
   */
  subtractTransactionAmount(
    id: string,
    body: CardSubtractTransactionAmountParams,
    options?: RequestOptions,
  ): APIPromise<CardSubtractTransactionAmountResponse> {
    return this._client.post(path`/api/v2/cards/${id}/subtract-transaction-amount`, { body, ...options });
  }

  /**
   * Subtract visit from card
   *
   * @example
   * ```ts
   * const response = await client.v2.cards.subtractVisit('id', {
   *   visits: 1,
   * });
   * ```
   */
  subtractVisit(
    id: string,
    body: CardSubtractVisitParams,
    options?: RequestOptions,
  ): APIPromise<CardSubtractVisitResponse> {
    return this._client.post(path`/api/v2/cards/${id}/subtract-visit`, { body, ...options });
  }
}

export interface Card {
  id: string;

  availableRewardTiers: Array<RewardTiersAPI.RewardTierOutput>;

  balance: Card.Balance;

  companyId: number;

  createdAt: string;

  customer: CustomersAPI.CustomerOutput;

  customerId: string;

  directInstallLink: Card.DirectInstallLink;

  installLink: string;

  qrLink: string;

  shareLink: string;

  templateId: number;

  type: string;

  /**
   * This field is always empty if a list of cards is requested.
   */
  countVisits?: number | null;

  couponRedeemed?: boolean | null;

  customerSubscription?: Card.CustomerSubscription | null;

  customFields?: Array<CustomField> | null;

  device?: string | null;

  expiresAt?: string | null;

  firstVisitDiscount?: string | null;

  /**
   * This field is always empty if a list of cards is requested.
   */
  lastRewardEarnedAt?: string | null;

  /**
   * This field is always empty if a list of cards is requested.
   */
  lastRewardRedeemedAt?: string | null;

  /**
   * This field is always empty if a list of cards is requested.
   */
  lastStampEarnedAt?: string | null;

  membershipTier?: MembershipTier | null;

  status?: string | null;

  /**
   * This field is always empty if a list of cards is requested.
   */
  totalPointsEarnedByReferral?: number | null;

  /**
   * This field is always empty if a list of cards is requested.
   */
  totalRewardsEarned?: number | null;

  /**
   * This field is always empty if a list of cards is requested.
   */
  totalRewardsRedeemed?: number | null;

  /**
   * This field is always empty if a list of cards is requested.
   */
  totalStampsEarnedByReferral?: number | null;

  updatedAt?: string | null;

  utmSource?: string | null;
}

export namespace Card {
  export interface Balance {
    balance?: number | null;

    bonusBalance?: number | null;

    currentNumberOfUses?: number | null;

    discountAmount?: number | null;

    discountPercentage?: number | null;

    numberRewardsUnused?: number | null;

    numberStampsTotal?: number | null;

    stampsBeforeReward?: number | null;
  }

  export interface DirectInstallLink {
    apple: string;

    google: string;

    pwa: string;

    universal: string;
  }

  export interface CustomerSubscription {
    id: number;

    cardId: number;

    customerId: string;

    period: string;

    status: number;

    templateId: number;

    balance?: number | null;

    createdAt?: number | null;

    expiredAt?: number | null;

    externalId?: string | null;

    membershipTierId?: number | null;

    providerId?: number | null;

    updatedAt?: number | null;
  }
}

export interface CardAccrualAmountInput {
  amount: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAccrualPointInput {
  points: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAccrualRewardInput {
  rewards: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAccrualScoresInput {
  scores: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAccrualStampInput {
  stamps: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAccrualVisitInput {
  visits: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardPurchaseInput {
  amount: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CustomField {
  required: boolean;

  unique: boolean;

  id?: number | null;

  name?: string | null;

  order?: number | null;

  type?: string | null;

  value?: string | null;
}

export interface ListResponse {
  code?: number;

  createdAt?: string;

  data?: Array<unknown>;

  meta?: ListResponse.Meta;

  responseId?: string;
}

export namespace ListResponse {
  export interface Meta {
    currentPage?: number;

    itemsPerPage?: number;

    totalItems?: number;
  }
}

export interface MembershipTier {
  id: number;

  benefits: Array<string>;

  dailyParameters: MembershipTierPricing;

  monthlyParameters: MembershipTierPricing;

  templateId: number;

  weeklyParameters: MembershipTierPricing;

  yearlyParameters: MembershipTierPricing;

  description?: string | null;

  name?: string | null;
}

export interface MembershipTierPricing {
  active: boolean;

  limit: number;

  perFilialLimit: number;

  price: number;

  recommended: boolean;
}

export interface Response {
  code?: number;

  createdAt?: string;

  data?: unknown;

  responseId?: string;
}

export interface CardCreateResponse extends Response {
  code?: number;

  data?: Card;
}

export interface CardRetrieveResponse extends Response {
  data?: Card;
}

export interface CardUpdateResponse extends Response {
  code?: number;

  data?: Card;
}

export interface CardListResponse extends ListResponse {
  data?: Array<Card>;
}

export interface CardDeleteResponse extends Response {
  data?: CardDeleteResponse.Data;
}

export namespace CardDeleteResponse {
  export interface Data {
    id?: string;
  }
}

export interface CardAddPointResponse extends Response {
  data?: Card;
}

export interface CardAddPurchaseResponse extends Response {
  data?: Card;
}

export interface CardAddRewardResponse extends Response {
  data?: Card;
}

export interface CardAddScoresResponse extends Response {
  data?: Card;
}

export interface CardAddStampResponse extends Response {
  data?: Card;
}

export interface CardAddTransactionAmountResponse extends Response {
  data?: Card;
}

export interface CardAddVisitResponse extends Response {
  data?: Card;
}

export interface CardReceiveRewardResponse extends Response {
  data?: Card;
}

export interface CardRedeemCouponResponse extends Response {
  data?: Card;
}

export interface CardSetExpirationDateResponse extends Response {
  data?: Card;
}

export interface CardSetMembershipTierResponse extends Response {
  data?: Card;
}

export interface CardSubtractPointResponse extends Response {
  data?: Card;
}

export interface CardSubtractPurchaseResponse extends Response {
  data?: Card;
}

export interface CardSubtractRewardResponse extends Response {
  data?: Card;
}

export interface CardSubtractScoresResponse extends Response {
  data?: Card;
}

export interface CardSubtractStampResponse extends Response {
  data?: Card;
}

export interface CardSubtractTransactionAmountResponse extends Response {
  data?: Card;
}

export interface CardSubtractVisitResponse extends Response {
  data?: Card;
}

export interface CardCreateParams {
  customerId: string;

  templateId: number;

  customFields?: Array<CardCreateParams.CustomField>;
}

export namespace CardCreateParams {
  export interface CustomField {
    id?: number;

    value?: string;
  }
}

export interface CardUpdateParams {
  customFields?: Array<CardUpdateParams.CustomField>;
}

export namespace CardUpdateParams {
  export interface CustomField {
    id?: number;

    value?: string;
  }
}

export interface CardListParams {
  /**
   * Filter by customer email
   */
  customerEmail?: string;

  /**
   * Filter by customerId
   */
  customerId?: string;

  /**
   * Filter by customer phone
   */
  customerPhone?: string;

  /**
   * Items per page
   */
  itemsPerPage?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter by templateId
   */
  templateId?: number;
}

export interface CardAddPointParams {
  points: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAddPurchaseParams {
  amount: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAddRewardParams {
  rewards: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAddScoresParams {
  scores: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAddStampParams {
  stamps: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAddTransactionAmountParams {
  amount: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardAddVisitParams {
  visits: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardReceiveRewardParams {
  body_id: number | null;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardRedeemCouponParams {
  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardSetExpirationDateParams {
  expiresAt?: string | null;
}

export interface CardSetMembershipTierParams {
  period: 'day' | 'week' | 'month' | 'year' | null;

  tierId: number | null;
}

export interface CardSubtractPointParams {
  points: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardSubtractPurchaseParams {
  amount: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardSubtractRewardParams {
  rewards: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardSubtractScoresParams {
  scores: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardSubtractStampParams {
  stamps: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardSubtractTransactionAmountParams {
  amount: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export interface CardSubtractVisitParams {
  visits: number;

  comment?: string | null;

  purchaseSum?: number | null;
}

export declare namespace Cards {
  export {
    type Card as Card,
    type CardAccrualAmountInput as CardAccrualAmountInput,
    type CardAccrualPointInput as CardAccrualPointInput,
    type CardAccrualRewardInput as CardAccrualRewardInput,
    type CardAccrualScoresInput as CardAccrualScoresInput,
    type CardAccrualStampInput as CardAccrualStampInput,
    type CardAccrualVisitInput as CardAccrualVisitInput,
    type CardPurchaseInput as CardPurchaseInput,
    type CustomField as CustomField,
    type ListResponse as ListResponse,
    type MembershipTier as MembershipTier,
    type MembershipTierPricing as MembershipTierPricing,
    type Response as Response,
    type CardCreateResponse as CardCreateResponse,
    type CardRetrieveResponse as CardRetrieveResponse,
    type CardUpdateResponse as CardUpdateResponse,
    type CardListResponse as CardListResponse,
    type CardDeleteResponse as CardDeleteResponse,
    type CardAddPointResponse as CardAddPointResponse,
    type CardAddPurchaseResponse as CardAddPurchaseResponse,
    type CardAddRewardResponse as CardAddRewardResponse,
    type CardAddScoresResponse as CardAddScoresResponse,
    type CardAddStampResponse as CardAddStampResponse,
    type CardAddTransactionAmountResponse as CardAddTransactionAmountResponse,
    type CardAddVisitResponse as CardAddVisitResponse,
    type CardReceiveRewardResponse as CardReceiveRewardResponse,
    type CardRedeemCouponResponse as CardRedeemCouponResponse,
    type CardSetExpirationDateResponse as CardSetExpirationDateResponse,
    type CardSetMembershipTierResponse as CardSetMembershipTierResponse,
    type CardSubtractPointResponse as CardSubtractPointResponse,
    type CardSubtractPurchaseResponse as CardSubtractPurchaseResponse,
    type CardSubtractRewardResponse as CardSubtractRewardResponse,
    type CardSubtractScoresResponse as CardSubtractScoresResponse,
    type CardSubtractStampResponse as CardSubtractStampResponse,
    type CardSubtractTransactionAmountResponse as CardSubtractTransactionAmountResponse,
    type CardSubtractVisitResponse as CardSubtractVisitResponse,
    type CardCreateParams as CardCreateParams,
    type CardUpdateParams as CardUpdateParams,
    type CardListParams as CardListParams,
    type CardAddPointParams as CardAddPointParams,
    type CardAddPurchaseParams as CardAddPurchaseParams,
    type CardAddRewardParams as CardAddRewardParams,
    type CardAddScoresParams as CardAddScoresParams,
    type CardAddStampParams as CardAddStampParams,
    type CardAddTransactionAmountParams as CardAddTransactionAmountParams,
    type CardAddVisitParams as CardAddVisitParams,
    type CardReceiveRewardParams as CardReceiveRewardParams,
    type CardRedeemCouponParams as CardRedeemCouponParams,
    type CardSetExpirationDateParams as CardSetExpirationDateParams,
    type CardSetMembershipTierParams as CardSetMembershipTierParams,
    type CardSubtractPointParams as CardSubtractPointParams,
    type CardSubtractPurchaseParams as CardSubtractPurchaseParams,
    type CardSubtractRewardParams as CardSubtractRewardParams,
    type CardSubtractScoresParams as CardSubtractScoresParams,
    type CardSubtractStampParams as CardSubtractStampParams,
    type CardSubtractTransactionAmountParams as CardSubtractTransactionAmountParams,
    type CardSubtractVisitParams as CardSubtractVisitParams,
  };
}
