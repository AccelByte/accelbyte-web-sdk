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
import { ListMatchFunctionsResponse } from '../generated-definitions/ListMatchFunctionsResponse.js'
import { MatchFunctionConfig } from '../generated-definitions/MatchFunctionConfig.js'
import { MatchFunctionRequest } from '../generated-definitions/MatchFunctionRequest.js'
import { MatchFunctions$ } from './endpoints/MatchFunctions$.js'

export function MatchFunctionsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * List existing match functions.
   */
  async function getMatchFunctions(queryParams?: { limit?: number; offset?: number }): Promise<ListMatchFunctionsResponse> {
    const $ = new MatchFunctions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMatchFunctions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Creates a new matchmaking function.
   */
  async function createMatchFunction(data: MatchFunctionRequest): Promise<unknown> {
    const $ = new MatchFunctions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createMatchFunction(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes an existing match function.
   */
  async function deleteMatchFunction_ByName(name: string): Promise<unknown> {
    const $ = new MatchFunctions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteMatchFunction_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update existing matchmaking function.
   */
  async function updateMatchFunction_ByName(name: string, data: MatchFunctionRequest): Promise<MatchFunctionConfig> {
    const $ = new MatchFunctions$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateMatchFunction_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getMatchFunctions,
    createMatchFunction,
    deleteMatchFunction_ByName,
    updateMatchFunction_ByName
  }
}
