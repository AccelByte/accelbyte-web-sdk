/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { StatCreate } from '../generated-definitions/StatCreate.js'
import { StatImportInfo } from '../generated-definitions/StatImportInfo.js'
import { StatInfo } from '../generated-definitions/StatInfo.js'
import { StatPagingSlicedResult } from '../generated-definitions/StatPagingSlicedResult.js'
import { StatUpdate } from '../generated-definitions/StatUpdate.js'
import { StatConfigurationAdmin$ } from './endpoints/StatConfigurationAdmin$.js'

export function StatConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * List stats by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStats(queryParams?: {
    cycleIds?: string | null
    isGlobal?: boolean | null
    isPublic?: boolean | null
    limit?: number
    offset?: number
  }): Promise<StatPagingSlicedResult> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStats(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat template&lt;/li&gt;&lt;li&gt;default minimum value is 0&lt;/li&gt;&lt;li&gt;default maximum value is 1.7976931348623157e+308&lt;/li&gt;&lt;li&gt;Field globalAggregationMethod will be ignored when setAsGlobal field is false&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStat(data: StatCreate): Promise<StatInfo> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStat(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Export all stat configurations for a given namespace into file At current, only JSON file is supported.
   */
  async function getStatsExport(): Promise<unknown> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatsExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Import stat configurations for a given namespace from file. At current, only JSON file is supported.
   */
  async function createStatImport(data: { file?: File }, queryParams?: { replaceExisting?: boolean | null }): Promise<StatImportInfo> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStatImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query stats by keyword.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatsSearch(queryParams: {
    keyword: string | null
    isGlobal?: boolean | null
    isPublic?: boolean | null
    limit?: number
    offset?: number
  }): Promise<StatPagingSlicedResult> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatsSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes stat template.&lt;br&gt;
   */
  async function deleteStat_ByStatCode(statCode: string): Promise<unknown> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteStat_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get stat by statCode.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat info&lt;/ul&gt;
   */
  async function getStat_ByStatCode(statCode: string): Promise<StatInfo> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStat_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field globalAggregationMethod will be ignored when the stat is not set as global&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field globalAggregationMethod is not updatable when the stat status is TIED&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchStat_ByStatCode(statCode: string, data: StatUpdate): Promise<StatInfo> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchStat_ByStatCode(statCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes stat template.
   */
  async function deleteTied_ByStatCode(statCode: string): Promise<unknown> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteTied_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStats,
    createStat,
    getStatsExport,
    createStatImport,
    getStatsSearch,
    deleteStat_ByStatCode,
    getStat_ByStatCode,
    patchStat_ByStatCode,
    deleteTied_ByStatCode
  }
}
