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
import { DlcItemConfigInfo } from '../generated-definitions/DlcItemConfigInfo.js'
import { DlcItemConfigUpdate } from '../generated-definitions/DlcItemConfigUpdate.js'
import { PlatformDlcConfigInfo } from '../generated-definitions/PlatformDlcConfigInfo.js'
import { PlatformDlcConfigUpdate } from '../generated-definitions/PlatformDlcConfigUpdate.js'
import { UserDlc } from '../generated-definitions/UserDlc.js'
import { UserDlcRecordArray } from '../generated-definitions/UserDlcRecordArray.js'
import { DlcAdmin$ } from './endpoints/DlcAdmin$.js'

export function DlcAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * delete a DLC item config.
   */
  async function deleteDlcConfigItem(): Promise<unknown> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteDlcConfigItem()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get DLC item config.
   */
  async function getDlcConfigItem(): Promise<DlcItemConfigInfo> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDlcConfigItem()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update DLC item config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated DLC item config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDlcConfigItem(data: DlcItemConfigUpdate): Promise<DlcItemConfigInfo> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcConfigItem(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user dlc by platform.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDlc_ByUserId(
    userId: string,
    queryParams: { type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX' }
  ): Promise<UserDlc> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDlc_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * delete a Platform DLC config.
   */
  async function deleteDlcConfigPlatformMap(): Promise<unknown> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteDlcConfigPlatformMap()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get Platform DLC config.
   */
  async function getDlcConfigPlatformMap(): Promise<PlatformDlcConfigInfo> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDlcConfigPlatformMap()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update Platform DLC config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated Platform DLC config&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for platform dlc map&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function updateDlcConfigPlatformMap(data: PlatformDlcConfigUpdate): Promise<PlatformDlcConfigInfo> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcConfigPlatformMap(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user dlc records.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDlcRecords_ByUserId(
    userId: string,
    queryParams?: { type?: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX' }
  ): Promise<UserDlcRecordArray> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDlcRecords_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteDlcConfigItem,
    getDlcConfigItem,
    updateDlcConfigItem,
    getDlc_ByUserId,
    deleteDlcConfigPlatformMap,
    getDlcConfigPlatformMap,
    updateDlcConfigPlatformMap,
    getDlcRecords_ByUserId
  }
}
