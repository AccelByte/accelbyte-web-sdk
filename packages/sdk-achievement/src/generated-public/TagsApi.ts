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
import { PaginatedTagResponse } from '../generated-definitions/PaginatedTagResponse.js'
import { Tags$ } from './endpoints/Tags$.js'

export function TagsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  async function getTags(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
  }): Promise<PaginatedTagResponse> {
    const $ = new Tags$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getTags(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTags
  }
}
