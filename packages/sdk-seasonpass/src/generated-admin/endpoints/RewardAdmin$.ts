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
import { RewardCreate } from '../../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardInfoArray } from '../../generated-definitions/RewardInfoArray.js'
import { RewardUpdate } from '../../generated-definitions/RewardUpdate.js'

export class RewardAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to query rewards for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
   */
  getRewards_BySeasonId(seasonId: string, queryParams?: { q?: string | null }): Promise<IResponseWithSync<RewardInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RewardInfoArray, 'RewardInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to create a reward for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward&lt;/li&gt;&lt;/ul&gt;
   */
  createReward_BySeasonId(seasonId: string, data: RewardCreate): Promise<IResponse<RewardInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RewardInfo, 'RewardInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to delete a reward permanently, only draft season reward can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get a reward for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward data&lt;/li&gt;&lt;/ul&gt;
   */
  getReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<IResponseWithSync<RewardInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RewardInfo, 'RewardInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update a reward. Only draft season reward can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated reward&lt;/li&gt;&lt;/ul&gt;
   */
  patchReward_BySeasonId_ByCode(seasonId: string, code: string, data: RewardUpdate): Promise<IResponse<RewardInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RewardInfo, 'RewardInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
