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
import { GlobalConfigurationResponse } from '../generated-definitions/GlobalConfigurationResponse.js'
import { PutGlobalConfigurationRequest } from '../generated-definitions/PutGlobalConfigurationRequest.js'
import { GlobalConfigurationAdmin$ } from './endpoints/GlobalConfigurationAdmin$.js'

export function GlobalConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Delete of global configuration data.
   */
  async function deleteGlobalConfiguration(): Promise<unknown> {
    const $ = new GlobalConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGlobalConfiguration()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Record of global configuration data.
   */
  async function getGlobalConfigurations(): Promise<GlobalConfigurationResponse> {
    const $ = new GlobalConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGlobalConfigurations()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upsert global configuration data.
   */
  async function updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<GlobalConfigurationResponse> {
    const $ = new GlobalConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateGlobalConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteGlobalConfiguration,
    getGlobalConfigurations,
    updateGlobalConfiguration
  }
}
