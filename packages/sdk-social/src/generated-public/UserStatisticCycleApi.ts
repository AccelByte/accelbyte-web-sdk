/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { UserStatCycleItemPagingSlicedResult } from '../generated-definitions/UserStatCycleItemPagingSlicedResult.js'
import { UserStatisticCycle$ } from './endpoints/UserStatisticCycle$.js'

export function UserStatisticCycleApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatCycleitemsMeUsers_ByCycleId(
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string[] }
  ): Promise<UserStatCycleItemPagingSlicedResult> {
    const $ = new UserStatisticCycle$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatCycleitemsMeUsers_ByCycleId(cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatCycleitems_ByUserId_ByCycleId(
    userId: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null }
  ): Promise<UserStatCycleItemPagingSlicedResult> {
    const $ = new UserStatisticCycle$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatCycleitems_ByUserId_ByCycleId(userId, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatCycleitemsMeUsers_ByCycleId,
    getStatCycleitems_ByUserId_ByCycleId
  }
}
