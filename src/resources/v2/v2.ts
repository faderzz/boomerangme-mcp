// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardsAPI from './cards';
import {
  Card,
  CardAccrualAmountInput,
  CardAccrualPointInput,
  CardAccrualRewardInput,
  CardAccrualScoresInput,
  CardAccrualStampInput,
  CardAccrualVisitInput,
  CardAddPointParams,
  CardAddPointResponse,
  CardAddPurchaseParams,
  CardAddPurchaseResponse,
  CardAddRewardParams,
  CardAddRewardResponse,
  CardAddScoresParams,
  CardAddScoresResponse,
  CardAddStampParams,
  CardAddStampResponse,
  CardAddTransactionAmountParams,
  CardAddTransactionAmountResponse,
  CardAddVisitParams,
  CardAddVisitResponse,
  CardCreateParams,
  CardCreateResponse,
  CardDeleteResponse,
  CardListParams,
  CardListResponse,
  CardPurchaseInput,
  CardReceiveRewardParams,
  CardReceiveRewardResponse,
  CardRedeemCouponParams,
  CardRedeemCouponResponse,
  CardRetrieveResponse,
  CardSetExpirationDateParams,
  CardSetExpirationDateResponse,
  CardSetMembershipTierParams,
  CardSetMembershipTierResponse,
  CardSubtractPointParams,
  CardSubtractPointResponse,
  CardSubtractPurchaseParams,
  CardSubtractPurchaseResponse,
  CardSubtractRewardParams,
  CardSubtractRewardResponse,
  CardSubtractScoresParams,
  CardSubtractScoresResponse,
  CardSubtractStampParams,
  CardSubtractStampResponse,
  CardSubtractTransactionAmountParams,
  CardSubtractTransactionAmountResponse,
  CardSubtractVisitParams,
  CardSubtractVisitResponse,
  CardUpdateParams,
  CardUpdateResponse,
  Cards,
  CustomField,
  ListResponse,
  MembershipTier,
  MembershipTierPricing,
  Response,
} from './cards';
import * as CompaniesAPI from './companies';
import {
  Companies,
  Company,
  CompanyCreateParams,
  CompanyCreateResponse,
  CompanyDeleteResponse,
  CompanyListParams,
  CompanyListResponse,
  CompanyRetrieveResponse,
  CompanyUpdateParams,
  CompanyUpdateResponse,
} from './companies';
import * as CustomersAPI from './customers';
import {
  CustomerCreateParams,
  CustomerCreateResponse,
  CustomerDeleteResponse,
  CustomerListParams,
  CustomerListResponse,
  CustomerOutput,
  CustomerRetrieveResponse,
  CustomerUpdateParams,
  CustomerUpdateResponse,
  Customers,
} from './customers';
import * as MarketplaceAPI from './marketplace';
import {
  Marketplace,
  MarketplaceAccrueParams,
  MarketplaceResolveCredentialsParams,
  MarketplaceResolveCredentialsResponse,
  MarketplaceReverseParams,
  TransactionOutput,
} from './marketplace';
import * as PushesAPI from './pushes';
import {
  Push,
  PushListParams,
  PushListResponse,
  PushRetrieveResponse,
  PushSendParams,
  PushSendResponse,
  Pushes,
} from './pushes';
import * as StatisticsAPI from './statistics';
import {
  StatisticRevenueParams,
  StatisticRevenueResponse,
  Statistics,
  StatsByPeriodOutput,
} from './statistics';
import * as TariffsAPI from './tariffs';
import { Tariff, TariffListResponse, TariffRetrieveResponse, Tariffs } from './tariffs';
import * as ProfileAPI from './profile/profile';
import {
  Profile,
  ProfileOutput,
  ProfileRetrieveResponse,
  ProfileUpdateParams,
  ProfileUpdateResponse,
} from './profile/profile';
import * as TemplatesAPI from './templates/templates';
import {
  Template,
  TemplateListParams,
  TemplateListResponse,
  TemplateRetrieveResponse,
  Templates,
} from './templates/templates';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V2 extends APIResource {
  cards: CardsAPI.Cards = new CardsAPI.Cards(this._client);
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  marketplace: MarketplaceAPI.Marketplace = new MarketplaceAPI.Marketplace(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
  pushes: PushesAPI.Pushes = new PushesAPI.Pushes(this._client);
  statistics: StatisticsAPI.Statistics = new StatisticsAPI.Statistics(this._client);
  tariffs: TariffsAPI.Tariffs = new TariffsAPI.Tariffs(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);

  /**
   * More description
   *
   * @example
   * ```ts
   * const response = await client.v2.listOperations();
   * ```
   */
  listOperations(
    query: V2ListOperationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2ListOperationsResponse> {
    return this._client.get('/api/v2/operations', { query, ...options });
  }

  /**
   * Send SMS to customer
   *
   * @example
   * ```ts
   * const response = await client.v2.sendSMS({
   *   customerId: 'customerId',
   *   message: 'message',
   * });
   * ```
   */
  sendSMS(body: V2SendSMSParams, options?: RequestOptions): APIPromise<V2SendSMSResponse> {
    return this._client.post('/api/v2/sms', { body, ...options });
  }
}

export interface V2ListOperationsResponse extends CardsAPI.ListResponse {
  data?: Array<V2ListOperationsResponse.Data>;
}

export namespace V2ListOperationsResponse {
  export interface Data {
    id: number;

    amount: number;

    balance: number;

    cardId: string;

    companyId: number;

    createdAt: string;

    customer: CustomersAPI.CustomerOutput;

    customerId: string;

    eventId: number;

    purchaseSum: number;

    source: string;

    templateId: number;

    cardDevice?: string | null;

    comment?: string | null;

    locationId?: number | null;

    managerId?: number | null;

    updatedAt?: string | null;
  }
}

export interface V2SendSMSResponse extends CardsAPI.Response {
  code?: number;

  data?: V2SendSMSResponse.Data;
}

export namespace V2SendSMSResponse {
  export interface Data {
    id: string;
  }
}

export interface V2ListOperationsParams {
  /**
   * Filter by cardId
   */
  cardId?: string;

  /**
   * Filter by customerId
   */
  customerId?: string;

  /**
   * End date (format Y-m-d)
   */
  endDate?: string;

  /**
   * Items per page
   */
  itemsPerPage?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Start date (format Y-m-d)
   */
  startDate?: string;

  /**
   * Filter by templateId
   */
  templateId?: number;
}

export interface V2SendSMSParams {
  customerId: string;

  message: string;
}

V2.Cards = Cards;
V2.Companies = Companies;
V2.Customers = Customers;
V2.Marketplace = Marketplace;
V2.Profile = Profile;
V2.Pushes = Pushes;
V2.Statistics = Statistics;
V2.Tariffs = Tariffs;
V2.Templates = Templates;

export declare namespace V2 {
  export {
    type V2ListOperationsResponse as V2ListOperationsResponse,
    type V2SendSMSResponse as V2SendSMSResponse,
    type V2ListOperationsParams as V2ListOperationsParams,
    type V2SendSMSParams as V2SendSMSParams,
  };

  export {
    Cards as Cards,
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

  export {
    Companies as Companies,
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

  export {
    Customers as Customers,
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

  export {
    Marketplace as Marketplace,
    type TransactionOutput as TransactionOutput,
    type MarketplaceResolveCredentialsResponse as MarketplaceResolveCredentialsResponse,
    type MarketplaceAccrueParams as MarketplaceAccrueParams,
    type MarketplaceResolveCredentialsParams as MarketplaceResolveCredentialsParams,
    type MarketplaceReverseParams as MarketplaceReverseParams,
  };

  export {
    Profile as Profile,
    type ProfileOutput as ProfileOutput,
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export {
    Pushes as Pushes,
    type Push as Push,
    type PushRetrieveResponse as PushRetrieveResponse,
    type PushListResponse as PushListResponse,
    type PushSendResponse as PushSendResponse,
    type PushListParams as PushListParams,
    type PushSendParams as PushSendParams,
  };

  export {
    Statistics as Statistics,
    type StatsByPeriodOutput as StatsByPeriodOutput,
    type StatisticRevenueResponse as StatisticRevenueResponse,
    type StatisticRevenueParams as StatisticRevenueParams,
  };

  export {
    Tariffs as Tariffs,
    type Tariff as Tariff,
    type TariffRetrieveResponse as TariffRetrieveResponse,
    type TariffListResponse as TariffListResponse,
  };

  export {
    Templates as Templates,
    type Template as Template,
    type TemplateRetrieveResponse as TemplateRetrieveResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateListParams as TemplateListParams,
  };
}
