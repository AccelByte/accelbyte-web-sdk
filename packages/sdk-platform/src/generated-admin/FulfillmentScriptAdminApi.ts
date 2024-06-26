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
import { FulfillmentScriptCreate } from '../generated-definitions/FulfillmentScriptCreate.js'
import { FulfillmentScriptInfo } from '../generated-definitions/FulfillmentScriptInfo.js'
import { FulfillmentScriptInfoArray } from '../generated-definitions/FulfillmentScriptInfoArray.js'
import { FulfillmentScriptUpdate } from '../generated-definitions/FulfillmentScriptUpdate.js'
import { FulfillmentScriptAdmin$ } from './endpoints/FulfillmentScriptAdmin$.js'

export function FulfillmentScriptAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;List all fulfillment scripts.
   */
  async function getFulfillmentScripts(): Promise<FulfillmentScriptInfoArray> {
    const $ = new FulfillmentScriptAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFulfillmentScripts()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Delete fulfillment script.
   */
  async function deleteFulfillmentScript_ById(id: string): Promise<unknown> {
    const $ = new FulfillmentScriptAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteFulfillmentScript_ById(id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get fulfillment script by id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get fulfillment script&lt;/li&gt;&lt;/ul&gt;
   */
  async function getFulfillmentScript_ById(id: string): Promise<FulfillmentScriptInfo> {
    const $ = new FulfillmentScriptAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFulfillmentScript_ById(id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update fulfillment script.
   */
  async function patchFulfillmentScript_ById(id: string, data: FulfillmentScriptUpdate): Promise<FulfillmentScriptInfo> {
    const $ = new FulfillmentScriptAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchFulfillmentScript_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Create fulfillment script.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;Fulfillment scripts are used for adding custom fulfillment logic based on &lt;b&gt;ITEM_TYPE&lt;/b&gt;: [MEDIA,INGAMEITEM] for now, and the custom scripts only cover grantDays.&lt;br&gt;Example for grantDays: &lt;br&gt;&lt;code&gt;order &amp;&amp; ((order.currency &amp;&amp; order.currency.currencyCode) == &#39;LP&#39; || order.isFree) ? 30 : -1&lt;/code&gt;&lt;br&gt;
   */
  async function createFulfillmentScript_ById(id: string, data: FulfillmentScriptCreate): Promise<FulfillmentScriptInfo> {
    const $ = new FulfillmentScriptAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFulfillmentScript_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getFulfillmentScripts,
    deleteFulfillmentScript_ById,
    getFulfillmentScript_ById,
    patchFulfillmentScript_ById,
    createFulfillmentScript_ById
  }
}
