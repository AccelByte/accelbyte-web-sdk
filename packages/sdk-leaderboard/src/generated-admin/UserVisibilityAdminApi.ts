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
import { GetHiddenUserResponse } from '../generated-definitions/GetHiddenUserResponse.js'
import { GetUserVisibilityResponse } from '../generated-definitions/GetUserVisibilityResponse.js'
import { SetUserVisibilityRequest } from '../generated-definitions/SetUserVisibilityRequest.js'
import { UserVisibilityAdmin$ } from './endpoints/UserVisibilityAdmin$.js'

export function UserVisibilityAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
   */
  async function updateVisibility_ByUserId(userId: string, data: SetUserVisibilityRequest): Promise<GetUserVisibilityResponse> {
    const $ = new UserVisibilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateVisibility_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Return hidden users on a leaderboard
   */
  async function getUsersHidden_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetHiddenUserResponse> {
    const $ = new UserVisibilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersHidden_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
   */
  async function getVisibility_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<GetUserVisibilityResponse> {
    const $ = new UserVisibilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getVisibility_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
   */
  async function updateVisibility_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    data: SetUserVisibilityRequest
  ): Promise<GetUserVisibilityResponse> {
    const $ = new UserVisibilityAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateVisibility_ByLeaderboardCode_ByUserId(leaderboardCode, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateVisibility_ByUserId,
    getUsersHidden_ByLeaderboardCode,
    getVisibility_ByLeaderboardCode_ByUserId,
    updateVisibility_ByLeaderboardCode_ByUserId
  }
}
