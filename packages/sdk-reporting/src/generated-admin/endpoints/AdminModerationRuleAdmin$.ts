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
import { ModerationRuleActiveRequest } from '../../generated-definitions/ModerationRuleActiveRequest.js'
import { ModerationRuleRequest } from '../../generated-definitions/ModerationRuleRequest.js'
import { ModerationRuleResponse } from '../../generated-definitions/ModerationRuleResponse.js'
import { ModerationRulesList } from '../../generated-definitions/ModerationRulesList.js'

export class AdminModerationRuleAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This endpoint create moderation rule. Supported Category: - UGC - USER - CHAT - EXTENSION Supported Action (GOING TO DEPRECATE, for replacement please use &#34;actions&#34;): * HideContent Supported Actions: * **hideContent**: Hide the content * **banAccount**: Ban the user account * **deleteChat**: Delete chat
   */
  createRule(data: ModerationRuleRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rule'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint get moderation rules.
   */
  getRules(queryParams?: {
    category?: string | null
    extensionCategory?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<ModerationRulesList>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rules'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ModerationRulesList, 'ModerationRulesList')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint delete moderation rule.
   */
  deleteRule_ByRuleId(ruleId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}'
      .replace('{namespace}', this.namespace)
      .replace('{ruleId}', ruleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint update moderation rule. Supported Category:- UGC - USER - CHAT - EXTENSION Supported Action (GOING TO DEPRECATE, for replacement please use &#34;actions&#34;): * HideContent Supported Actions: * **hideContent**: Hide the content * **banAccount**: Ban the user account * **deleteChat**: Delete chat
   */
  updateRule_ByRuleId(ruleId: string, data: ModerationRuleRequest): Promise<IResponse<ModerationRuleResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}'
      .replace('{namespace}', this.namespace)
      .replace('{ruleId}', ruleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ModerationRuleResponse, 'ModerationRuleResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint get moderation rule.
   */
  getRule_ByRuleId(ruleId: string): Promise<IResponseWithSync<ModerationRuleResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rules/{ruleId}'
      .replace('{namespace}', this.namespace)
      .replace('{ruleId}', ruleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ModerationRuleResponse, 'ModerationRuleResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint enable/disable moderation rule status.
   */
  updateStatus_ByRuleId(ruleId: string, data: ModerationRuleActiveRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{ruleId}', ruleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
