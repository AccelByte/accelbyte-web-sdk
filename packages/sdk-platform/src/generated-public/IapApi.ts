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
import { AppleIapReceipt } from '../generated-definitions/AppleIapReceipt.js'
import { EpicGamesReconcileRequest } from '../generated-definitions/EpicGamesReconcileRequest.js'
import { EpicGamesReconcileResultArray } from '../generated-definitions/EpicGamesReconcileResultArray.js'
import { GoogleIapReceipt } from '../generated-definitions/GoogleIapReceipt.js'
import { GoogleReceiptResolveResult } from '../generated-definitions/GoogleReceiptResolveResult.js'
import { IapItemMappingInfo } from '../generated-definitions/IapItemMappingInfo.js'
import { OculusReconcileResultArray } from '../generated-definitions/OculusReconcileResultArray.js'
import { PlayStationMultiServiceLabelsReconcileRequest } from '../generated-definitions/PlayStationMultiServiceLabelsReconcileRequest.js'
import { PlayStationReconcileRequest } from '../generated-definitions/PlayStationReconcileRequest.js'
import { PlayStationReconcileResultArray } from '../generated-definitions/PlayStationReconcileResultArray.js'
import { SteamSyncRequest } from '../generated-definitions/SteamSyncRequest.js'
import { TwitchSyncRequest } from '../generated-definitions/TwitchSyncRequest.js'
import { TwitchSyncResultArray } from '../generated-definitions/TwitchSyncResultArray.js'
import { XblReconcileRequest } from '../generated-definitions/XblReconcileRequest.js'
import { XblReconcileResultArray } from '../generated-definitions/XblReconcileResultArray.js'
import { Iap$ } from './endpoints/Iap$.js'

export function IapApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get iap item mapping.
   */
  async function getIapItemMapping(queryParams?: {
    platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
  }): Promise<IapItemMappingInfo> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getIapItemMapping(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync my game twitch drops entitlements.
   */
  async function updateUserMeIapTwitchSync(data: TwitchSyncRequest): Promise<TwitchSyncResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateUserMeIapTwitchSync(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapPsnSync_ByUserId(userId: string, data: PlayStationReconcileRequest): Promise<PlayStationReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapPsnSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync Xbox inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapXblSync_ByUserId(userId: string, data: XblReconcileRequest): Promise<XblReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapXblSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync steam inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapSteamSync_ByUserId(userId: string, data: SteamSyncRequest): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapSteamSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync Oculus entitlements.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapOculuSync_ByUserId(userId: string): Promise<OculusReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapOculuSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync twitch drops entitlements.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapTwitchSync_ByUserId(userId: string, data: TwitchSyncRequest): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapTwitchSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Verify apple iap receipt and fulfill item.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapAppleReceipt_ByUserId(userId: string, data: AppleIapReceipt): Promise<unknown> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapAppleReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync epic games inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapEpicgameSync_ByUserId(userId: string, data: EpicGamesReconcileRequest): Promise<EpicGamesReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapEpicgameSync_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Verify google iap receipt and fulfill item.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapGoogleReceipt_ByUserId(userId: string, data: GoogleIapReceipt): Promise<GoogleReceiptResolveResult> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapGoogleReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Synchronize with entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateIapPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationMultiServiceLabelsReconcileRequest
  ): Promise<PlayStationReconcileResultArray> {
    const $ = new Iap$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateIapPsnSyncMultiServiceLabel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getIapItemMapping,
    updateUserMeIapTwitchSync,
    updateIapPsnSync_ByUserId,
    updateIapXblSync_ByUserId,
    updateIapSteamSync_ByUserId,
    updateIapOculuSync_ByUserId,
    updateIapTwitchSync_ByUserId,
    updateIapAppleReceipt_ByUserId,
    updateIapEpicgameSync_ByUserId,
    updateIapGoogleReceipt_ByUserId,
    updateIapPsnSyncMultiServiceLabel_ByUserId
  }
}
