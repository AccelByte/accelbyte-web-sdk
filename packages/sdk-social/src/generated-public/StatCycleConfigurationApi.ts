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
import { BulkStatCycleRequest } from '../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../generated-definitions/BulkStatCycleResult.js'
import { StatCycleInfo } from '../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../generated-definitions/StatCyclePagingSlicedResult.js'
import { StatCycleConfiguration$ } from './endpoints/StatCycleConfiguration$.js'

export function StatCycleConfigurationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatCycles(queryParams?: {
    cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY'
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    status?: 'ACTIVE' | 'INIT' | 'STOPPED'
  }): Promise<StatCyclePagingSlicedResult> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatCycles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatCycleBulk(data: BulkStatCycleRequest): Promise<BulkStatCycleResult> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStatCycleBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
   */
  async function getStatCycle_ByCycleId(cycleId: string): Promise<StatCycleInfo> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatCycle_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatCycles,
    createStatCycleBulk,
    getStatCycle_ByCycleId
  }
}
