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
import { DataRetrievalResponse } from '../generated-definitions/DataRetrievalResponse.js'
import { ListPersonalDataResponse } from '../generated-definitions/ListPersonalDataResponse.js'
import { UserDataUrl } from '../generated-definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../generated-definitions/UserPersonalDataResponse.js'
import { DataRetrievalAdmin$ } from './endpoints/DataRetrievalAdmin$.js'

export function DataRetrievalAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get list personal data requests Scope: account
   */
  async function getRequests(queryParams?: {
    limit?: number
    offset?: number
    requestDate?: string | null
  }): Promise<ListPersonalDataResponse> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRequests(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user&#39;s personal data requests Scope: account
   */
  async function getRequests_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<UserPersonalDataResponse> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRequests_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Submit user personal data retrieval request. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
   */
  async function postRequest_ByUserId(userId: string, data: { password?: string | null }): Promise<DataRetrievalResponse> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postRequest_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Cancel user&#39;s personal data requests Scope: account
   */
  async function deleteRequest_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<unknown> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteRequest_ByUserId_ByRequestDate(userId, requestDate)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Generate personal data download url. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
   */
  async function postGenerate_ByUserId_ByRequestDate(
    userId: string,
    requestDate: string,
    data: { password: string | null }
  ): Promise<UserDataUrl> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.postGenerate_ByUserId_ByRequestDate(userId, requestDate, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRequests,
    getRequests_ByUserId,
    postRequest_ByUserId,
    deleteRequest_ByUserId_ByRequestDate,
    postGenerate_ByUserId_ByRequestDate
  }
}
