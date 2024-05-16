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
import { z } from 'zod'
import { CatalogConfigInfo } from '../../generated-definitions/CatalogConfigInfo.js'
import { CatalogConfigUpdate } from '../../generated-definitions/CatalogConfigUpdate.js'
import { CatalogDefinitionInfoArray } from '../../generated-definitions/CatalogDefinitionInfoArray.js'
import { ExportStoreRequest } from '../../generated-definitions/ExportStoreRequest.js'
import { ExportStoreToCsvRequest } from '../../generated-definitions/ExportStoreToCsvRequest.js'
import { ImportStoreHistoryPagingResult } from '../../generated-definitions/ImportStoreHistoryPagingResult.js'
import { ImportStoreResult } from '../../generated-definitions/ImportStoreResult.js'
import { StoreBackupInfo } from '../../generated-definitions/StoreBackupInfo.js'
import { StoreCreate } from '../../generated-definitions/StoreCreate.js'
import { StoreInfo } from '../../generated-definitions/StoreInfo.js'
import { StoreInfoArray } from '../../generated-definitions/StoreInfoArray.js'
import { StoreUpdate } from '../../generated-definitions/StoreUpdate.js'

export class StoreAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * This API is used to list stores in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of stores&lt;/li&gt;&lt;/ul&gt;
   */
  getStores(): Promise<IResponse<StoreInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfoArray, 'StoreInfoArray')
  }

  /**
   * This API is used to create a non published store in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created store data&lt;/li&gt;&lt;/ul&gt;
   */
  createStore(data: StoreCreate): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * @deprecated
   * This API is used to import a store.&lt;p&gt;This api has been deprecated, pls use /v2/admin/namespaces/{namespace}/stores/import to import store.&lt;br&gt;
   */
  updateStoreImport_DEPRECATED(data: { file?: File }, queryParams?: { storeId?: string | null }): Promise<IResponse<StoreInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * Get catalog config.
   */
  getCatalogConfigs(): Promise<IResponse<CatalogConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CatalogConfigInfo, 'CatalogConfigInfo')
  }

  /**
   * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated catalog config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogConfig(data: CatalogConfigUpdate): Promise<IResponse<CatalogConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CatalogConfigInfo, 'CatalogConfigInfo')
  }

  /**
   * This API is used to delete a store. Only non published store can be deleted.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store&lt;/li&gt;&lt;/ul&gt;
   */
  deleteStore_ByStoreId(storeId: string): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * This API is used to get a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
   */
  getStore_ByStoreId(storeId: string): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * This API is used to Update a store basic info.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store data&lt;/li&gt;&lt;/ul&gt;
   */
  updateStore_ByStoreId(storeId: string, data: StoreUpdate): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * This API is used to delete published store including category and items before release to public.&lt;p&gt;&lt;b&gt;Warning: Please do not use this API once published to public user.&lt;/b&gt;
   */
  deleteStorePublished(): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/published'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * This API is used to get a published store basic info, exclude category and item information.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
   */
  getStoresPublished(): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/published'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * This API is used to import a store.
   */
  updateStoreImport_ByNS(
    data: { file?: File },
    queryParams?: { storeId?: string | null; strictMode?: boolean | null }
  ): Promise<IResponse<ImportStoreResult>> {
    const params = { strictMode: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/stores/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ImportStoreResult, 'ImportStoreResult')
  }

  /**
   * This API is used to export a store to CSV format
   */
  createStoreExportByCsv(data: ExportStoreToCsvRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/exportByCSV'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to clone a store. Usually clone a draft store to published store because published store can&#39;t directly edit content.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: clone store info&lt;/li&gt;&lt;/ul&gt;
   */
  updateClone_ByStoreId(storeId: string, queryParams?: { targetStoreId?: string | null }): Promise<IResponse<StoreInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/clone'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * @deprecated
   * This API is used to export a store.&lt;p&gt;This api has been deprecated, pls use /v2/admin/namespaces/{namespace}/stores/export to export store.&lt;br&gt;
   */
  getExport_ByStoreId_DEPRECATED(storeId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/export'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to get a store&#39;s backup. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store backup info&lt;/li&gt;&lt;/ul&gt;
   */
  getStoresPublishedBackup(): Promise<IResponse<StoreBackupInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/published/backup'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreBackupInfo, 'StoreBackupInfo')
  }

  /**
   * This API is used to get catalog definition for import/export store by CSV&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog definition&lt;/li&gt;&lt;/ul&gt;
   */
  getStoresCatalogDefinition(queryParams: {
    catalogType: 'APP' | 'CATEGORY' | 'ITEM' | 'SECTION' | 'VIEW'
  }): Promise<IResponse<CatalogDefinitionInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/catalogDefinition'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      CatalogDefinitionInfoArray,
      'CatalogDefinitionInfoArray'
    )
  }

  /**
   * This API is used to rollback a published store. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store info&lt;/li&gt;&lt;/ul&gt;
   */
  updateStorePublishedRollback(): Promise<IResponse<StoreInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/published/rollback'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StoreInfo, 'StoreInfo')
  }

  /**
   * This API is used to export a whole or partial store.
   */
  createExport_ByStoreId(storeId: string, data: ExportStoreRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/stores/{storeId}/export'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to download store csv templates for store importing by CSV feature
   */
  getStoresDownloadCsvTemplates(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/downloadCSVTemplates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to import a store by CSV format.
   */
  createImportByCsv_ByStoreId(
    storeId: string,
    data: { category?: File; display?: File; item?: File; notes?: string | null; section?: File }
  ): Promise<IResponse<ImportStoreResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/importByCSV'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ImportStoreResult, 'ImportStoreResult')
  }

  /**
   * This API is used to query import store history
   */
  getImportHistory_ByStoreId(
    storeId: string,
    queryParams?: {
      end?: string | null
      limit?: number
      offset?: number
      sortBy?: string | null
      start?: string | null
      success?: boolean | null
    }
  ): Promise<IResponse<ImportStoreHistoryPagingResult>> {
    const params = { limit: 20, sortBy: 'createdAt:desc', ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/stores/{storeId}/import/history'
      .replace('{namespace}', this.namespace)
      .replace('{storeId}', storeId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      ImportStoreHistoryPagingResult,
      'ImportStoreHistoryPagingResult'
    )
  }
}
