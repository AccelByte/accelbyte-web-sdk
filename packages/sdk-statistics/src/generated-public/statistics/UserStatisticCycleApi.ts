/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { UserStatCycleItemPagingSlicedResult } from './definitions/UserStatCycleItemPagingSlicedResult'
import { UserStatisticCycle$ } from './endpoints/UserStatisticCycle$'

export function UserStatisticCycleApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * List user's statCycleItems by statCycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat cycle items</li></ul>
   */
  async function getStatCycleitems_ByUserId_ByCycleId(
    userId: string,
    cycleId: string,
    queryParams?: { statCodes?: string | null; offset?: number; limit?: number; sortBy?: string | null }
  ): Promise<UserStatCycleItemPagingSlicedResult> {
    const $ = new UserStatisticCycle$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatCycleitems_ByUserId_ByCycleId(userId, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatCycleitems_ByUserId_ByCycleId
  }
}