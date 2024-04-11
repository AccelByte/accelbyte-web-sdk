/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { OrderSyncResult } from '../../generated-definitions/OrderSyncResult.js'

export class OrderDedicatedAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Sync orders. If response contains nextEvaluatedKey, please use it as query param in the next call to fetch the next batch, a batch has 1000 elements or less.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: sync orders&lt;/li&gt;&lt;/ul&gt;
   */
  getOrders(queryParams: {
    end: string | null
    start: string | null
    nextEvaluatedKey?: string | null
  }): Promise<IResponse<OrderSyncResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/orders'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, OrderSyncResult, 'OrderSyncResult')
  }
}
