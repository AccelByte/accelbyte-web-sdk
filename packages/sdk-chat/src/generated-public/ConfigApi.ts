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
import { PublicConfigResponse } from '../generated-definitions/PublicConfigResponse.js'
import { Config$ } from './endpoints/Config$.js'

export function ConfigApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get chat config of a namespace.
   */
  async function getConfig_ByNamespace(): Promise<PublicConfigResponse> {
    const $ = new Config$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfig_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfig_ByNamespace
  }
}
