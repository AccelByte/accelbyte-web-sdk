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
import { AdminEntitlementDecrement } from '../../generated-definitions/AdminEntitlementDecrement.js'
import { AdminEntitlementSoldRequest } from '../../generated-definitions/AdminEntitlementSoldRequest.js'
import { AppEntitlementInfo } from '../../generated-definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../../generated-definitions/AppEntitlementPagingSlicedResult.js'
import { BulkEntitlementGrantRequest } from '../../generated-definitions/BulkEntitlementGrantRequest.js'
import { BulkEntitlementGrantResult } from '../../generated-definitions/BulkEntitlementGrantResult.js'
import { BulkEntitlementRevokeResult } from '../../generated-definitions/BulkEntitlementRevokeResult.js'
import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { EntitlementConfigInfo } from '../../generated-definitions/EntitlementConfigInfo.js'
import { EntitlementDecrementResult } from '../../generated-definitions/EntitlementDecrementResult.js'
import { EntitlementGrant } from '../../generated-definitions/EntitlementGrant.js'
import { EntitlementHistoryInfoArray } from '../../generated-definitions/EntitlementHistoryInfoArray.js'
import { EntitlementIfc } from '../../generated-definitions/EntitlementIfc.js'
import { EntitlementInfo } from '../../generated-definitions/EntitlementInfo.js'
import { EntitlementInfoArray } from '../../generated-definitions/EntitlementInfoArray.js'
import { EntitlementOwnershipArray } from '../../generated-definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../../generated-definitions/EntitlementPagingSlicedResult.js'
import { EntitlementPlatformConfigInfo } from '../../generated-definitions/EntitlementPlatformConfigInfo.js'
import { EntitlementPlatformConfigUpdate } from '../../generated-definitions/EntitlementPlatformConfigUpdate.js'
import { EntitlementPrechekResult } from '../../generated-definitions/EntitlementPrechekResult.js'
import { EntitlementSoldResult } from '../../generated-definitions/EntitlementSoldResult.js'
import { EntitlementUpdate } from '../../generated-definitions/EntitlementUpdate.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { RevokeUseCountRequest } from '../../generated-definitions/RevokeUseCountRequest.js'
import { StackableEntitlementInfoArray } from '../../generated-definitions/StackableEntitlementInfoArray.js'
import { TimedOwnership } from '../../generated-definitions/TimedOwnership.js'

export class EntitlementAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Query entitlements.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlements(queryParams?: {
    activeOnly?: boolean | null
    appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    entitlementName?: string | null
    itemId?: string[]
    limit?: number
    offset?: number
    origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    userId?: string | null
  }): Promise<IResponseWithSync<EntitlementPagingSlicedResult>> {
    const params = { activeOnly: true, limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/entitlements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementPagingSlicedResult, 'EntitlementPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Grant entitlements to multiple users, skipped granting will be treated as fail.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk grant entitlements result&lt;/li&gt;&lt;/ul&gt;
   */
  createEntitlementGrant(data: BulkEntitlementGrantRequest): Promise<IResponse<BulkEntitlementGrantResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/entitlements/grant'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkEntitlementGrantResult, 'BulkEntitlementGrantResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Revoke entitlements, skipped revocation will be treated as fail.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk revoke entitlements result&lt;/li&gt;&lt;/ul&gt;
   */
  createEntitlementRevoke(data: string[]): Promise<IResponse<BulkEntitlementRevokeResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/entitlements/revoke'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkEntitlementRevokeResult, 'BulkEntitlementRevokeResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Query entitlements by Item Ids.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByItemIds(queryParams?: {
    activeOnly?: boolean | null
    itemIds?: string[]
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<EntitlementPagingSlicedResult>> {
    const params = { activeOnly: true, limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/entitlements/byItemIds'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementPagingSlicedResult, 'EntitlementPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get entitlement config info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsConfigInfo(queryParams?: { withoutCache?: boolean | null }): Promise<IResponseWithSync<EntitlementConfigInfo>> {
    const params = { withoutCache: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/entitlements/config/info'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementConfigInfo, 'EntitlementConfigInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Query entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlements_ByUserId(
    userId: string,
    queryParams?: {
      activeOnly?: boolean | null
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      collectionId?: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      features?: string[]
      fuzzyMatchName?: boolean | null
      itemId?: string[]
      limit?: number
      offset?: number
      origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    }
  ): Promise<IResponseWithSync<EntitlementPagingSlicedResult>> {
    const params = { activeOnly: true, limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementPagingSlicedResult, 'EntitlementPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Grant user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: granted entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  createEntitlement_ByUserId(userId: string, data: EntitlementGrant[]): Promise<IResponse<StackableEntitlementInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StackableEntitlementInfoArray, 'StackableEntitlementInfoArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlement_ByEntitlementId(entitlementId: string): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/entitlements/{entitlementId}'
      .replace('{namespace}', this.namespace)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Revoke all entitlements of a user (This API is for testing purpose only)&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoked entitlements count&lt;/li&gt;&lt;/ul&gt;
   */
  updateEntitlementRevoke_ByUserId(userId: string): Promise<IResponse<BulkOperationResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/revoke'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkOperationResult, 'BulkOperationResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get user app entitlement by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByAppId_ByUserId(
    userId: string,
    queryParams: { appId: string | null; activeOnly?: boolean | null }
  ): Promise<IResponseWithSync<AppEntitlementInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AppEntitlementInfo, 'AppEntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Query app entitlements by appType.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app entitlement pagination&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; activeOnly?: boolean | null; limit?: number; offset?: number }
  ): Promise<IResponseWithSync<AppEntitlementPagingSlicedResult>> {
    const params = { activeOnly: true, limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/byAppType'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AppEntitlementPagingSlicedResult, 'AppEntitlementPagingSlicedResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlements by itemIds.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[]; platform?: string | null }
  ): Promise<IResponseWithSync<EntitlementInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/byItemIds'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfoArray, 'EntitlementInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get platform entitlement config list.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementConfig_ByPlatform(platform: string): Promise<IResponseWithSync<EntitlementPlatformConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/platforms/{platform}/entitlement/config'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementPlatformConfigInfo, 'EntitlementPlatformConfigInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update platform entitlement config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform entitlement config&lt;/li&gt;&lt;/ul&gt;
   */
  updateEntitlementConfig_ByPlatform(
    platform: string,
    data: EntitlementPlatformConfigUpdate
  ): Promise<IResponse<EntitlementPlatformConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/platforms/{platform}/entitlement/config'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementPlatformConfigInfo, 'EntitlementPlatformConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Revoke user&#39;s entitlements by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlements count&lt;/li&gt;&lt;/ul&gt;
   */
  updateEntitlementRevokeById_ByUserId(
    userId: string,
    queryParams: { entitlementIds: string | null }
  ): Promise<IResponse<BulkOperationResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/revoke/byIds'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkOperationResult, 'BulkOperationResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { appIds?: string[]; itemIds?: string[]; platform?: string | null; skus?: string[] }
  ): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/ownership/any'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, Ownership, 'Ownership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<IResponseWithSync<EntitlementInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update user entitlement. If update CONSUMABLE entitlement useCount to 0, the status will be CONSUMED.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateEntitlement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementUpdate
  ): Promise<IResponse<EntitlementInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Exists any user active entitlement of specified items.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipAnyOf_ByUserId(
    userId: string,
    queryParams: { itemIds: string[]; platform?: string | null }
  ): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/ownership/anyOf'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, Ownership, 'Ownership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/ownership/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Enable Entitlement origin feature.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT:CONFIG&#34;, action=4 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
   */
  updateEntitlementConfigEntitlementOriginEnable(): Promise<IResponse<EntitlementConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/entitlements/config/entitlementOrigin/enable'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementConfigInfo, 'EntitlementConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get user app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<IResponseWithSync<Ownership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/ownership/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, Ownership, 'Ownership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<IResponseWithSync<TimedOwnership>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TimedOwnership, 'TimedOwnership')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get user entitlement ownership by itemIds.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsOwnershipByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[]; platform?: string | null }
  ): Promise<IResponseWithSync<EntitlementOwnershipArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemIds'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementOwnershipArray, 'EntitlementOwnershipArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateSell_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: AdminEntitlementSoldRequest
  ): Promise<IResponse<EntitlementSoldResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/sell'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementSoldResult, 'EntitlementSoldResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Enable user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: enable entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateEnable_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<IResponse<EntitlementInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/enable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Revoke user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevoke_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<IResponse<EntitlementInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/revoke'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Disable user entitlement if entitlement, only active entitlement can be disable, disabled entitlement can&#39;t consume.&lt;br&gt;&lt;b&gt;Like revoke, it will lose the entitlement ownership, except disabled entitlement can enable.&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: disable entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateDisable_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<IResponse<EntitlementInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/disable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementInfo, 'EntitlementInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get user entitlement histories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of entitlement history&lt;/li&gt;&lt;/ul&gt;
   */
  getHistory_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<IResponseWithSync<EntitlementHistoryInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementHistoryInfoArray, 'EntitlementHistoryInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateDecrement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: AdminEntitlementDecrement
  ): Promise<IResponse<EntitlementDecrementResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/decrement'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementDecrementResult, 'EntitlementDecrementResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Revoke specified count of user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: The revoked entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  createRevokeByUseCount_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: RevokeUseCountRequest
  ): Promise<IResponse<EntitlementIfc>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/revoke/byUseCount'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EntitlementIfc, 'EntitlementIfc')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Checks if specified use count of user entitlement can be revoked without actually revoking it.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=1 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: true if revokable, false otherwise&lt;/li&gt;&lt;/ul&gt;
   */
  getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    queryParams: { quantity: number }
  ): Promise<IResponseWithSync<EntitlementPrechekResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/revoke/byUseCount/preCheck'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, EntitlementPrechekResult, 'EntitlementPrechekResult')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
