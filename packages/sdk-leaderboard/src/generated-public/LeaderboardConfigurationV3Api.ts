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
import { GetAllLeaderboardConfigsPublicRespV3 } from '../generated-definitions/GetAllLeaderboardConfigsPublicRespV3.js'
import { GetLeaderboardConfigPublicRespV3 } from '../generated-definitions/GetLeaderboardConfigPublicRespV3.js'
import { LeaderboardConfigurationV3$ } from './endpoints/LeaderboardConfigurationV3$.js'

export function LeaderboardConfigurationV3Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
   */
  async function getLeaderboards(queryParams?: {
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<GetAllLeaderboardConfigsPublicRespV3> {
    const $ = new LeaderboardConfigurationV3$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLeaderboards(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
   */
  async function getLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<GetLeaderboardConfigPublicRespV3> {
    const $ = new LeaderboardConfigurationV3$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLeaderboard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLeaderboards,
    getLeaderboard_ByLeaderboardCode
  }
}
