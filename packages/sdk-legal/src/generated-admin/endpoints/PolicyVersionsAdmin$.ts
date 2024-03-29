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
import { CreatePolicyVersionRequest } from '../../generated-definitions/CreatePolicyVersionRequest.js'
import { CreatePolicyVersionResponse } from '../../generated-definitions/CreatePolicyVersionResponse.js'
import { RetrievePolicyVersionResponseArray } from '../../generated-definitions/RetrievePolicyVersionResponseArray.js'
import { UpdatePolicyVersionRequest } from '../../generated-definitions/UpdatePolicyVersionRequest.js'
import { UpdatePolicyVersionResponse } from '../../generated-definitions/UpdatePolicyVersionResponse.js'

export class PolicyVersionsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Retrieve a version of a particular country specific policy. If version is not provided, the Legal Service will assume caller requesting all versions from country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getVersions_ByPolicyId(
    policyId: string,
    queryParams?: { versionId?: string | null }
  ): Promise<IResponseWithSync<RetrievePolicyVersionResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/policies/{policyId}/versions'.replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RetrievePolicyVersionResponseArray, 'RetrievePolicyVersionResponseArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create a version of a particular country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createVersion_ByPolicyId(policyId: string, data: CreatePolicyVersionRequest): Promise<IResponse<CreatePolicyVersionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/policies/{policyId}/versions'.replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreatePolicyVersionResponse, 'CreatePolicyVersionResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update a particular policy version.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchPolicyVersion_ByPolicyVersionId(
    policyVersionId: string,
    data: UpdatePolicyVersionRequest
  ): Promise<IResponse<UpdatePolicyVersionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/policies/versions/{policyVersionId}'.replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdatePolicyVersionResponse, 'UpdatePolicyVersionResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Manually publish a version of a particular country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchLatestPolicy_ByPolicyVersionId(
    policyVersionId: string,
    queryParams?: { shouldNotify?: boolean | null }
  ): Promise<IResponse<unknown>> {
    const params = { shouldNotify: true, ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/policies/versions/{policyVersionId}/latest'.replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
