/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { ContentLikeRequest } from '../../generated-definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../../generated-definitions/ContentLikeResponse.js'
import { PaginatedContentLikersResponse } from '../../generated-definitions/PaginatedContentLikersResponse.js'

export class PublicLikeV2$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This endpoint will only display the list of users who performed like from v2 endpoint.
   */
  getLike_ByContentId(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<IResponseWithSync<PaginatedContentLikersResponse>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}/like'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedContentLikersResponse, 'PaginatedContentLikersResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Requires valid user token
   */
  updateLike_ByContentId(contentId: string, data: ContentLikeRequest): Promise<IResponse<ContentLikeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}/like'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ContentLikeResponse, 'ContentLikeResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
