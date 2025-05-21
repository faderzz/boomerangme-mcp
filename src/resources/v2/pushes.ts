// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardsAPI from './cards';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Pushes extends APIResource {
  /**
   * Get push
   *
   * @example
   * ```ts
   * const push = await client.v2.pushes.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PushRetrieveResponse> {
    return this._client.get(path`/api/v2/pushes/${id}`, options);
  }

  /**
   * List of push messages
   *
   * @example
   * ```ts
   * const pushes = await client.v2.pushes.list();
   * ```
   */
  list(
    query: PushListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PushListResponse> {
    return this._client.get('/api/v2/pushes', { query, ...options });
  }

  /**
   * Send push
   *
   * @example
   * ```ts
   * const response = await client.v2.pushes.send({
   *   message: 'message',
   *   templateId: 1,
   * });
   * ```
   */
  send(body: PushSendParams, options?: RequestOptions): APIPromise<PushSendResponse> {
    return this._client.post('/api/v2/pushes', { body, ...options });
  }
}

export interface Push {
  id: string;

  createdAt: string;

  deliveredAmount: number;

  message: string;

  scheduledAt: string;

  sentAmount: number;

  status: string;

  templateId: number;

  type: string;

  cardId?: string | null;
}

export interface PushRetrieveResponse extends CardsAPI.Response {
  data?: Push;
}

export interface PushListResponse extends CardsAPI.ListResponse {
  data?: Array<Push>;
}

export interface PushSendResponse extends CardsAPI.Response {
  code?: number;

  data?: Push;
}

export interface PushListParams {
  /**
   * Items per page
   */
  itemsPerPage?: number;

  /**
   * Page number
   */
  page?: number;
}

export interface PushSendParams {
  message: string;

  templateId: number;

  cardId?: string | null;

  scheduledAt?: string | null;
}

export declare namespace Pushes {
  export {
    type Push as Push,
    type PushRetrieveResponse as PushRetrieveResponse,
    type PushListResponse as PushListResponse,
    type PushSendResponse as PushSendResponse,
    type PushListParams as PushListParams,
    type PushSendParams as PushSendParams,
  };
}
