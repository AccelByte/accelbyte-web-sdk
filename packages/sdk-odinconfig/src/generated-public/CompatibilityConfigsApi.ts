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
import { CompatibilityConfigs$ } from './endpoints/CompatibilityConfigs$.js'
import { Configs } from '../generated-definitions/Configs.js'

export function CompatibilityConfigsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  async function getTemplatesDefaultConfigs(): Promise<Configs> {
    const $ = new CompatibilityConfigs$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getTemplatesDefaultConfigs()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getTemplatesTemplateDiscoveryConfigs(): Promise<Configs> {
    const $ = new CompatibilityConfigs$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getTemplatesTemplateDiscoveryConfigs()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTemplatesDefaultConfigs,
    getTemplatesTemplateDiscoveryConfigs
  }
}
