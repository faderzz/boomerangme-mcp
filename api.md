# V2

Types:

- <code><a href="./src/resources/v2/v2.ts">V2ListOperationsResponse</a></code>
- <code><a href="./src/resources/v2/v2.ts">V2SendSMSResponse</a></code>

Methods:

- <code title="get /api/v2/operations">client.v2.<a href="./src/resources/v2/v2.ts">listOperations</a>({ ...params }) -> V2ListOperationsResponse</code>
- <code title="post /api/v2/sms">client.v2.<a href="./src/resources/v2/v2.ts">sendSMS</a>({ ...params }) -> V2SendSMSResponse</code>

## Cards

Types:

- <code><a href="./src/resources/v2/cards.ts">Card</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAccrualAmountInput</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAccrualPointInput</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAccrualRewardInput</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAccrualScoresInput</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAccrualStampInput</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAccrualVisitInput</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardPurchaseInput</a></code>
- <code><a href="./src/resources/v2/cards.ts">CustomField</a></code>
- <code><a href="./src/resources/v2/cards.ts">ListResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">MembershipTier</a></code>
- <code><a href="./src/resources/v2/cards.ts">MembershipTierPricing</a></code>
- <code><a href="./src/resources/v2/cards.ts">Response</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardCreateResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardUpdateResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardListResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardDeleteResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAddPointResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAddPurchaseResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAddRewardResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAddScoresResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAddStampResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAddTransactionAmountResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardAddVisitResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardReceiveRewardResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardRedeemCouponResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSetExpirationDateResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSetMembershipTierResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSubtractPointResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSubtractPurchaseResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSubtractRewardResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSubtractScoresResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSubtractStampResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSubtractTransactionAmountResponse</a></code>
- <code><a href="./src/resources/v2/cards.ts">CardSubtractVisitResponse</a></code>

Methods:

- <code title="post /api/v2/cards">client.v2.cards.<a href="./src/resources/v2/cards.ts">create</a>({ ...params }) -> CardCreateResponse</code>
- <code title="get /api/v2/cards/{id}">client.v2.cards.<a href="./src/resources/v2/cards.ts">retrieve</a>(id) -> CardRetrieveResponse</code>
- <code title="patch /api/v2/cards/{id}">client.v2.cards.<a href="./src/resources/v2/cards.ts">update</a>(id, { ...params }) -> CardUpdateResponse</code>
- <code title="get /api/v2/cards">client.v2.cards.<a href="./src/resources/v2/cards.ts">list</a>({ ...params }) -> CardListResponse</code>
- <code title="delete /api/v2/cards/{id}">client.v2.cards.<a href="./src/resources/v2/cards.ts">delete</a>(id) -> CardDeleteResponse</code>
- <code title="post /api/v2/cards/{id}/add-point">client.v2.cards.<a href="./src/resources/v2/cards.ts">addPoint</a>(id, { ...params }) -> CardAddPointResponse</code>
- <code title="post /api/v2/cards/{id}/add-purchase">client.v2.cards.<a href="./src/resources/v2/cards.ts">addPurchase</a>(id, { ...params }) -> CardAddPurchaseResponse</code>
- <code title="post /api/v2/cards/{id}/add-reward">client.v2.cards.<a href="./src/resources/v2/cards.ts">addReward</a>(id, { ...params }) -> CardAddRewardResponse</code>
- <code title="post /api/v2/cards/{id}/add-scores">client.v2.cards.<a href="./src/resources/v2/cards.ts">addScores</a>(id, { ...params }) -> CardAddScoresResponse</code>
- <code title="post /api/v2/cards/{id}/add-stamp">client.v2.cards.<a href="./src/resources/v2/cards.ts">addStamp</a>(id, { ...params }) -> CardAddStampResponse</code>
- <code title="post /api/v2/cards/{id}/add-transaction-amount">client.v2.cards.<a href="./src/resources/v2/cards.ts">addTransactionAmount</a>(id, { ...params }) -> CardAddTransactionAmountResponse</code>
- <code title="post /api/v2/cards/{id}/add-visit">client.v2.cards.<a href="./src/resources/v2/cards.ts">addVisit</a>(id, { ...params }) -> CardAddVisitResponse</code>
- <code title="post /api/v2/cards/{id}/receive-reward">client.v2.cards.<a href="./src/resources/v2/cards.ts">receiveReward</a>(pathID, { ...params }) -> CardReceiveRewardResponse</code>
- <code title="post /api/v2/cards/{id}/redeem-coupon">client.v2.cards.<a href="./src/resources/v2/cards.ts">redeemCoupon</a>(id, { ...params }) -> CardRedeemCouponResponse</code>
- <code title="post /api/v2/cards/{id}/set-expiration-date">client.v2.cards.<a href="./src/resources/v2/cards.ts">setExpirationDate</a>(id, { ...params }) -> CardSetExpirationDateResponse</code>
- <code title="post /api/v2/cards/{id}/set-membership-tier">client.v2.cards.<a href="./src/resources/v2/cards.ts">setMembershipTier</a>(id, { ...params }) -> CardSetMembershipTierResponse</code>
- <code title="post /api/v2/cards/{id}/subtract-point">client.v2.cards.<a href="./src/resources/v2/cards.ts">subtractPoint</a>(id, { ...params }) -> CardSubtractPointResponse</code>
- <code title="post /api/v2/cards/{id}/subtract-purchase">client.v2.cards.<a href="./src/resources/v2/cards.ts">subtractPurchase</a>(id, { ...params }) -> CardSubtractPurchaseResponse</code>
- <code title="post /api/v2/cards/{id}/subtract-reward">client.v2.cards.<a href="./src/resources/v2/cards.ts">subtractReward</a>(id, { ...params }) -> CardSubtractRewardResponse</code>
- <code title="post /api/v2/cards/{id}/subtract-scores">client.v2.cards.<a href="./src/resources/v2/cards.ts">subtractScores</a>(id, { ...params }) -> CardSubtractScoresResponse</code>
- <code title="post /api/v2/cards/{id}/subtract-stamp">client.v2.cards.<a href="./src/resources/v2/cards.ts">subtractStamp</a>(id, { ...params }) -> CardSubtractStampResponse</code>
- <code title="post /api/v2/cards/{id}/subtract-transaction-amount">client.v2.cards.<a href="./src/resources/v2/cards.ts">subtractTransactionAmount</a>(id, { ...params }) -> CardSubtractTransactionAmountResponse</code>
- <code title="post /api/v2/cards/{id}/subtract-visit">client.v2.cards.<a href="./src/resources/v2/cards.ts">subtractVisit</a>(id, { ...params }) -> CardSubtractVisitResponse</code>

## Companies

Types:

- <code><a href="./src/resources/v2/companies.ts">Company</a></code>
- <code><a href="./src/resources/v2/companies.ts">CompanyCreateResponse</a></code>
- <code><a href="./src/resources/v2/companies.ts">CompanyRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/companies.ts">CompanyUpdateResponse</a></code>
- <code><a href="./src/resources/v2/companies.ts">CompanyListResponse</a></code>
- <code><a href="./src/resources/v2/companies.ts">CompanyDeleteResponse</a></code>

Methods:

- <code title="post /api/v2/companies">client.v2.companies.<a href="./src/resources/v2/companies.ts">create</a>({ ...params }) -> CompanyCreateResponse</code>
- <code title="get /api/v2/companies/{id}">client.v2.companies.<a href="./src/resources/v2/companies.ts">retrieve</a>(id) -> CompanyRetrieveResponse</code>
- <code title="patch /api/v2/companies/{id}">client.v2.companies.<a href="./src/resources/v2/companies.ts">update</a>(id, { ...params }) -> CompanyUpdateResponse</code>
- <code title="get /api/v2/companies">client.v2.companies.<a href="./src/resources/v2/companies.ts">list</a>({ ...params }) -> CompanyListResponse</code>
- <code title="delete /api/v2/companies/{id}">client.v2.companies.<a href="./src/resources/v2/companies.ts">delete</a>(id) -> CompanyDeleteResponse</code>

## Customers

Types:

- <code><a href="./src/resources/v2/customers.ts">CustomerOutput</a></code>
- <code><a href="./src/resources/v2/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/v2/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/customers.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/v2/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/v2/customers.ts">CustomerDeleteResponse</a></code>

Methods:

- <code title="post /api/v2/customers">client.v2.customers.<a href="./src/resources/v2/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="get /api/v2/customers/{id}">client.v2.customers.<a href="./src/resources/v2/customers.ts">retrieve</a>(id) -> CustomerRetrieveResponse</code>
- <code title="patch /api/v2/customers/{id}">client.v2.customers.<a href="./src/resources/v2/customers.ts">update</a>(pathID, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /api/v2/customers">client.v2.customers.<a href="./src/resources/v2/customers.ts">list</a>({ ...params }) -> CustomerListResponse</code>
- <code title="delete /api/v2/customers/{id}">client.v2.customers.<a href="./src/resources/v2/customers.ts">delete</a>(id) -> CustomerDeleteResponse</code>

## Marketplace

Types:

- <code><a href="./src/resources/v2/marketplace.ts">TransactionOutput</a></code>
- <code><a href="./src/resources/v2/marketplace.ts">MarketplaceResolveCredentialsResponse</a></code>

Methods:

- <code title="post /api/v2/marketplace/accrue">client.v2.marketplace.<a href="./src/resources/v2/marketplace.ts">accrue</a>({ ...params }) -> TransactionOutput</code>
- <code title="post /api/v2/marketplace/resolve-credentials">client.v2.marketplace.<a href="./src/resources/v2/marketplace.ts">resolveCredentials</a>({ ...params }) -> MarketplaceResolveCredentialsResponse</code>
- <code title="post /api/v2/marketplace/reverse">client.v2.marketplace.<a href="./src/resources/v2/marketplace.ts">reverse</a>({ ...params }) -> TransactionOutput</code>

## Profile

Types:

- <code><a href="./src/resources/v2/profile/profile.ts">ProfileOutput</a></code>
- <code><a href="./src/resources/v2/profile/profile.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/profile/profile.ts">ProfileUpdateResponse</a></code>

Methods:

- <code title="get /api/v2/profile">client.v2.profile.<a href="./src/resources/v2/profile/profile.ts">retrieve</a>() -> ProfileRetrieveResponse</code>
- <code title="patch /api/v2/profile">client.v2.profile.<a href="./src/resources/v2/profile/profile.ts">update</a>({ ...params }) -> ProfileUpdateResponse</code>

### Agency

Types:

- <code><a href="./src/resources/v2/profile/agency.ts">AgencyProfileOutput</a></code>
- <code><a href="./src/resources/v2/profile/agency.ts">AgencyRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/profile/agency.ts">AgencyUpdateResponse</a></code>

Methods:

- <code title="get /api/v2/profile/agency">client.v2.profile.agency.<a href="./src/resources/v2/profile/agency.ts">retrieve</a>() -> AgencyRetrieveResponse</code>
- <code title="patch /api/v2/profile/agency">client.v2.profile.agency.<a href="./src/resources/v2/profile/agency.ts">update</a>({ ...params }) -> AgencyUpdateResponse</code>

## Pushes

Types:

- <code><a href="./src/resources/v2/pushes.ts">Push</a></code>
- <code><a href="./src/resources/v2/pushes.ts">PushRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/pushes.ts">PushListResponse</a></code>
- <code><a href="./src/resources/v2/pushes.ts">PushSendResponse</a></code>

Methods:

- <code title="get /api/v2/pushes/{id}">client.v2.pushes.<a href="./src/resources/v2/pushes.ts">retrieve</a>(id) -> PushRetrieveResponse</code>
- <code title="get /api/v2/pushes">client.v2.pushes.<a href="./src/resources/v2/pushes.ts">list</a>({ ...params }) -> PushListResponse</code>
- <code title="post /api/v2/pushes">client.v2.pushes.<a href="./src/resources/v2/pushes.ts">send</a>({ ...params }) -> PushSendResponse</code>

## Statistics

Types:

- <code><a href="./src/resources/v2/statistics.ts">StatsByPeriodOutput</a></code>
- <code><a href="./src/resources/v2/statistics.ts">StatisticRevenueResponse</a></code>

Methods:

- <code title="get /api/v2/statistics/revenue">client.v2.statistics.<a href="./src/resources/v2/statistics.ts">revenue</a>({ ...params }) -> StatisticRevenueResponse</code>

## Tariffs

Types:

- <code><a href="./src/resources/v2/tariffs.ts">Tariff</a></code>
- <code><a href="./src/resources/v2/tariffs.ts">TariffRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/tariffs.ts">TariffListResponse</a></code>

Methods:

- <code title="get /api/v2/tariffs/{id}">client.v2.tariffs.<a href="./src/resources/v2/tariffs.ts">retrieve</a>(id) -> TariffRetrieveResponse</code>
- <code title="get /api/v2/tariffs">client.v2.tariffs.<a href="./src/resources/v2/tariffs.ts">list</a>() -> TariffListResponse</code>

## Templates

Types:

- <code><a href="./src/resources/v2/templates/templates.ts">Template</a></code>
- <code><a href="./src/resources/v2/templates/templates.ts">TemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/templates/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="get /api/v2/templates/{id}">client.v2.templates.<a href="./src/resources/v2/templates/templates.ts">retrieve</a>(id) -> TemplateRetrieveResponse</code>
- <code title="get /api/v2/templates">client.v2.templates.<a href="./src/resources/v2/templates/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>

### RewardTiers

Types:

- <code><a href="./src/resources/v2/templates/reward-tiers.ts">RewardTierOutput</a></code>
- <code><a href="./src/resources/v2/templates/reward-tiers.ts">RewardTierCreateResponse</a></code>
- <code><a href="./src/resources/v2/templates/reward-tiers.ts">RewardTierDeleteResponse</a></code>

Methods:

- <code title="post /api/v2/templates/{templateId}/reward_tiers">client.v2.templates.rewardTiers.<a href="./src/resources/v2/templates/reward-tiers.ts">create</a>(templateID, { ...params }) -> RewardTierCreateResponse</code>
- <code title="delete /api/v2/templates/{templateId}/reward_tiers/{id}">client.v2.templates.rewardTiers.<a href="./src/resources/v2/templates/reward-tiers.ts">delete</a>(id, { ...params }) -> RewardTierDeleteResponse</code>
