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
import { z } from 'zod'
import { ContentDownloadResponseV2 } from '../../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../../generated-definitions/ContentDownloadResponseV2Array.js'
import { ContentRequestV2 } from '../../generated-definitions/ContentRequestV2.js'
import { CreateContentResponseV2 } from '../../generated-definitions/CreateContentResponseV2.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GenerateContentUploadUrlRequest } from '../../generated-definitions/GenerateContentUploadUrlRequest.js'
import { GenerateContentUploadUrlResponse } from '../../generated-definitions/GenerateContentUploadUrlResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PublicGetContentBulkRequest } from '../../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequestV2 } from '../../generated-definitions/UpdateContentRequestV2.js'
import { UpdateContentResponseV2 } from '../../generated-definitions/UpdateContentResponseV2.js'
import { UpdateContentShareCodeRequest } from '../../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateFileLocationRequest } from '../../generated-definitions/UpdateFileLocationRequest.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'

export class PublicContentV2$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   *  For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
   */
  getContents(queryParams?: {
    isOfficial?: boolean | null
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    subType?: string | null
    tags?: string[]
    type?: string | null
  }): Promise<IResponseWithSync<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedContentDownloadResponseV2, 'PaginatedContentDownloadResponseV2')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
   */
  createContentBulk(data: PublicGetContentBulkRequest): Promise<IResponse<ContentDownloadResponseV2Array>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ContentDownloadResponseV2Array, 'ContentDownloadResponseV2Array')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContent_ByContentId(contentId: string): Promise<IResponseWithSync<ContentDownloadResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ContentDownloadResponseV2, 'ContentDownloadResponseV2')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public user can access without token or if token specified, required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedContentDownloadResponseV2, 'PaginatedContentDownloadResponseV2')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Require valid user token. Maximum sharecodes per request 100
   */
  createContentSharecodeBulk(data: GetContentBulkByShareCodesRequest): Promise<IResponse<ContentDownloadResponseV2Array>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/sharecodes/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ContentDownloadResponseV2Array, 'ContentDownloadResponseV2Array')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContents_ByChannelId(
    channelId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedContentDownloadResponseV2, 'PaginatedContentDownloadResponseV2')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContentSharecode_ByShareCode(shareCode: string): Promise<IResponseWithSync<ContentDownloadResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ContentDownloadResponseV2, 'ContentDownloadResponseV2')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.
   */
  createContent_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: ContentRequestV2
  ): Promise<IResponse<CreateContentResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponseV2, 'CreateContentResponseV2')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;. All request body are required except for contentType field. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the presigned URL. If not specified, it will use fileExtension value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024.
   */
  createScreenshot_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: CreateScreenshotRequest
  ): Promise<IResponse<CreateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateScreenshotResponse, 'CreateScreenshotResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. Maximum description length: 1024.
   */
  updateScreenshot_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: UpdateScreenshotRequest
  ): Promise<IResponse<UpdateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateScreenshotResponse, 'UpdateScreenshotResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  patchContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentRequestV2
  ): Promise<IResponse<UpdateContentResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateContentResponseV2, 'UpdateContentResponseV2')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(
    userId: string,
    contentId: string,
    screenshotId: string
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
      .replace('{screenshotId}', screenshotId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT:SHARECODE [UPDATE]&lt;/b&gt;.&lt;br&gt; This endpoint is used to modify the shareCode of a content. However, this operation is restricted by default and requires the above permission to be granted to the User role.&lt;br&gt; &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz
   */
  patchSharecode_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentShareCodeRequest
  ): Promise<IResponse<CreateContentResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/sharecode'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponseV2, 'CreateContentResponseV2')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  patchUploadUrl_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<IResponse<GenerateContentUploadUrlResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/uploadUrl'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GenerateContentUploadUrlResponse, 'GenerateContentUploadUrlResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint should be used after calling generate upload url endpoint to commit the changes. Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  patchFileLocation_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<IResponse<UpdateContentResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/fileLocation'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateContentResponseV2, 'UpdateContentResponseV2')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string,
    data: UpdateContentRequestV2
  ): Promise<IResponse<CreateContentResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponseV2, 'CreateContentResponseV2')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
