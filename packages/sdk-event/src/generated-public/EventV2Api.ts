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
import { EventResponseV2 } from '../generated-definitions/EventResponseV2.js'
import { EventV2$ } from './endpoints/EventV2$.js'

export function EventV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Requires valid user access token
   */
  async function getEvent_ByUserId(
    userId: string,
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<EventResponseV2> {
    const $ = new EventV2$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEvent_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Available Type: * email * password * displayname * dateofbirth * country * language
   */
  async function getEdithistory_ByUserId(
    userId: string,
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null; type?: string | null }
  ): Promise<EventResponseV2> {
    const $ = new EventV2$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEdithistory_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEvent_ByUserId,
    getEdithistory_ByUserId
  }
}
