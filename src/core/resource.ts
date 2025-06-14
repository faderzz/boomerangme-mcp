// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Haye } from '../client';

export abstract class APIResource {
  protected _client: Haye;

  constructor(client: Haye) {
    this._client = client;
  }
}
