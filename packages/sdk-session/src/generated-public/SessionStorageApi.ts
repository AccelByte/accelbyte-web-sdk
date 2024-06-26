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

import { SessionStorage$ } from './endpoints/SessionStorage$.js'

export function SessionStorageApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   *  Update Insert Session Storage Leader. only Leader can update or insert user session storage data Leader. can store generic json example json can store : { &#34;leader&#34;: { &#34;leader&#34;: 1 }, &#34;data&#34;: 123 } game Admin can update or insert session storage Session Storage feature only available for Gamesession
   */
  async function patchStorageLeader_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new SessionStorage$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchStorageLeader_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Update Insert Session Storage User. user can only update or insert user session storage data itself. can store generic json example json can store : { &#34;storage&#34;: { &#34;storage&#34;: 1 }, &#34;data&#34;: 123 } game Admin can update or insert session storage Session Storage feature only available for Gamesession
   */
  async function patchStorageUser_BySessionId_ByUserId(sessionId: string, userId: string): Promise<unknown> {
    const $ = new SessionStorage$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchStorageUser_BySessionId_ByUserId(sessionId, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchStorageLeader_BySessionId,
    patchStorageUser_BySessionId_ByUserId
  }
}
