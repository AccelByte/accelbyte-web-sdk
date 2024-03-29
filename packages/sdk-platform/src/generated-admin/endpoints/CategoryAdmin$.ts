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
import { BasicCategoryInfoArray } from '../../generated-definitions/BasicCategoryInfoArray.js'
import { CategoryCreate } from '../../generated-definitions/CategoryCreate.js'
import { CategoryUpdate } from '../../generated-definitions/CategoryUpdate.js'
import { FullCategoryInfo } from '../../generated-definitions/FullCategoryInfo.js'
import { FullCategoryInfoArray } from '../../generated-definitions/FullCategoryInfoArray.js'

export class CategoryAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to get root categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: root category data&lt;/li&gt;&lt;/ul&gt;
   */
  getCategories(queryParams?: { storeId?: string | null }): Promise<IResponseWithSync<FullCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, FullCategoryInfoArray, 'FullCategoryInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to create category.&lt;p&gt;A category is a path separated by &#34;/&#34;. A category also has localized display names. Example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizationDisplayNames&#34;: \{&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created category data&lt;/li&gt;&lt;/ul&gt;
   */
  createCategory(data: CategoryCreate, queryParams: { storeId: string | null }): Promise<IResponse<FullCategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, FullCategoryInfo, 'FullCategoryInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to list all categories&#39; basic info of a store ordered by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of categories&#39; paths&lt;/li&gt;&lt;/ul&gt;
   */
  getCategoriesBasic(queryParams?: { storeId?: string | null }): Promise<IResponseWithSync<BasicCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/basic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, BasicCategoryInfoArray, 'BasicCategoryInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to delete category by category path. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the deleted category data&lt;/li&gt;&lt;/ul&gt;
   */
  deleteCategory_ByCategoryPath(categoryPath: string, queryParams: { storeId: string | null }): Promise<IResponse<FullCategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, FullCategoryInfo, 'FullCategoryInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get category by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: category data&lt;/li&gt;&lt;/ul&gt;
   */
  getCategory_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<IResponseWithSync<FullCategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, FullCategoryInfo, 'FullCategoryInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update category. &lt;p&gt; The category update data is a category object, example as:&lt;pre&gt;&lt;code&gt;{ &#34;storeId&#34;: &#34;store-id&#34;, &#34;localizationDisplayNames&#34;: {&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the updated category data&lt;/li&gt;&lt;/ul&gt;
   */
  updateCategory_ByCategoryPath(
    categoryPath: string,
    data: CategoryUpdate,
    queryParams: { storeId: string | null }
  ): Promise<IResponse<FullCategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, FullCategoryInfo, 'FullCategoryInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get child categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child categories data&lt;/li&gt;&lt;/ul&gt;
   */
  getChildren_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<IResponseWithSync<FullCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}/children'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, FullCategoryInfoArray, 'FullCategoryInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get descendant categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CATEGORY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of descendant categories data&lt;/li&gt;&lt;/ul&gt;
   */
  getDescendants_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<IResponseWithSync<FullCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}/descendants'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, FullCategoryInfoArray, 'FullCategoryInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
