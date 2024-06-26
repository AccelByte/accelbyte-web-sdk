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
import { ViewInfoArray } from '../generated-definitions/ViewInfoArray.js'
import { View$ } from './endpoints/View$.js'

export function ViewApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to get all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store views)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store views)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: all views&lt;/li&gt;&lt;/ul&gt;
   */
  async function getViews_ByUserId(
    userId: string,
    queryParams?: { language?: string | null; storeId?: string | null }
  ): Promise<ViewInfoArray> {
    const $ = new View$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getViews_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getViews_ByUserId
  }
}
