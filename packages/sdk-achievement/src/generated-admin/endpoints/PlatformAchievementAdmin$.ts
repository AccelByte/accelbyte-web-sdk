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
import { BulkCreatePsnEventResponse } from '../../generated-definitions/BulkCreatePsnEventResponse.js'
import { BulkCreatePsnEvents } from '../../generated-definitions/BulkCreatePsnEvents.js'

export class PlatformAchievementAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Create PSN UDS events. Player need to login first using playstation token to IAM service.
   */
  createPlatformPsnBulk(data: BulkCreatePsnEvents): Promise<IResponse<BulkCreatePsnEventResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/platforms/psn/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      BulkCreatePsnEventResponse,
      'BulkCreatePsnEventResponse'
    )
  }
}
