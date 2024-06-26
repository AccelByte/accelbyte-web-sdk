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
import { InputValidationConfigVersion } from '../generated-definitions/InputValidationConfigVersion.js'
import { InputValidationsPublicResponse } from '../generated-definitions/InputValidationsPublicResponse.js'
import { InputValidations$ } from './endpoints/InputValidations$.js'

export function InputValidationsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * No role required This endpoint is to get list of input validation configuration. &lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.
   */
  async function getInputValidations(queryParams?: {
    defaultOnEmpty?: boolean | null
    languageCode?: string | null
  }): Promise<InputValidationsPublicResponse> {
    const $ = new InputValidations$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getInputValidations(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is to get input validation configuration by field.
   */
  async function getInputValidation_ByField(field: string): Promise<InputValidationConfigVersion> {
    const $ = new InputValidations$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getInputValidation_ByField(field)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInputValidations,
    getInputValidation_ByField
  }
}
