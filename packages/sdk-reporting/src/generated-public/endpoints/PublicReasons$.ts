/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { PublicReasonListResponse } from '../../generated-definitions/PublicReasonListResponse.js'
import { ReasonGroupListResponse } from '../../generated-definitions/ReasonGroupListResponse.js'

export class PublicReasons$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  getReasons(queryParams?: {
    group?: string | null
    limit?: number
    offset?: number
    title?: string | null
  }): Promise<IResponse<PublicReasonListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/public/namespaces/{namespace}/reasons'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PublicReasonListResponse,
      'PublicReasonListResponse'
    )
  }

  /**
   * Return list of reason groups ID and title under given namespace.
   */
  getReasonGroups(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<ReasonGroupListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/public/namespaces/{namespace}/reasonGroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ReasonGroupListResponse,
      'ReasonGroupListResponse'
    )
  }
}
