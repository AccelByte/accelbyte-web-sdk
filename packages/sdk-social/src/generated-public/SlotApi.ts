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
import { SlotInfo } from '../generated-definitions/SlotInfo.js'
import { SlotInfoArray } from '../generated-definitions/SlotInfoArray.js'
import { SlotMetadataUpdate } from '../generated-definitions/SlotMetadataUpdate.js'
import { Slot$ } from './endpoints/Slot$.js'

export function SlotApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get list of slots for a given user in namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of slots&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSlots_ByUserId_DEPRECATED(userId: string): Promise<SlotInfoArray> {
    const $ = new Slot$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSlots_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Creates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created slot info&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSlot_ByUserId_DEPRECATED(
    userId: string,
    data: { checksum?: string | null; customAttribute?: string | null; file?: File },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createSlot_ByUserId_DEPRECATED(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes the slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/ul&gt;
   */
  async function deleteSlot_ByUserId_BySlotId_DEPRECATED(userId: string, slotId: string): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteSlot_ByUserId_BySlotId_DEPRECATED(userId, slotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot data.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slot data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSlot_ByUserId_BySlotId_DEPRECATED(userId: string, slotId: string): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSlot_ByUserId_BySlotId_DEPRECATED(userId, slotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSlot_ByUserId_BySlotId_DEPRECATED(
    userId: string,
    slotId: string,
    data: { checksum?: string | null; customAttribute?: string | null; file?: File },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<SlotInfo> {
    const $ = new Slot$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateSlot_ByUserId_BySlotId_DEPRECATED(userId, slotId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates the slot metadata.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateMetadata_ByUserId_BySlotId_DEPRECATED(userId: string, slotId: string, data: SlotMetadataUpdate): Promise<SlotInfo> {
    const $ = new Slot$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateMetadata_ByUserId_BySlotId_DEPRECATED(userId, slotId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSlots_ByUserId_DEPRECATED,
    createSlot_ByUserId_DEPRECATED,
    deleteSlot_ByUserId_BySlotId_DEPRECATED,
    getSlot_ByUserId_BySlotId_DEPRECATED,
    updateSlot_ByUserId_BySlotId_DEPRECATED,
    updateMetadata_ByUserId_BySlotId_DEPRECATED
  }
}
