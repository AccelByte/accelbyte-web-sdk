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
import { EnvironmentVariableAdmin$ } from './endpoints/EnvironmentVariableAdmin$.js'
import { EnvironmentVariableListResponse } from '../generated-definitions/EnvironmentVariableListResponse.js'

export function EnvironmentVariableAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * List of environment variables.
   */
  async function getEnvironmentVariables(): Promise<EnvironmentVariableListResponse> {
    const $ = new EnvironmentVariableAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getEnvironmentVariables()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEnvironmentVariables
  }
}
