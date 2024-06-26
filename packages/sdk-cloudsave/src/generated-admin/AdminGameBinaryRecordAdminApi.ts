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
import { BinaryRecordRequest } from '../generated-definitions/BinaryRecordRequest.js'
import { GameBinaryRecordAdminResponse } from '../generated-definitions/GameBinaryRecordAdminResponse.js'
import { GameBinaryRecordCreate } from '../generated-definitions/GameBinaryRecordCreate.js'
import { GameBinaryRecordMetadataRequest } from '../generated-definitions/GameBinaryRecordMetadataRequest.js'
import { ListGameBinaryRecordsAdminResponse } from '../generated-definitions/ListGameBinaryRecordsAdminResponse.js'
import { UploadBinaryRecordRequest } from '../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../generated-definitions/UploadBinaryRecordResponse.js'
import { AdminGameBinaryRecordAdmin$ } from './endpoints/AdminGameBinaryRecordAdmin$.js'

export function AdminGameBinaryRecordAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Retrieve list of binary records by namespace.
   */
  async function getBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
    tags?: string[]
  }): Promise<ListGameBinaryRecordsAdminResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBinaries(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a game binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createBinary(data: GameBinaryRecordCreate): Promise<UploadBinaryRecordResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createBinary(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a game binary record.
   */
  async function deleteBinary_ByKey(key: string): Promise<unknown> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a game binary record by its key.
   */
  async function getBinary_ByKey(key: string): Promise<GameBinaryRecordAdminResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a game binary record file by its key
   */
  async function updateBinary_ByKey(key: string, data: BinaryRecordRequest): Promise<GameBinaryRecordAdminResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateBinary_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a game binary record metadata by its key
   */
  async function updateMetadata_ByKey(key: string, data: GameBinaryRecordMetadataRequest): Promise<GameBinaryRecordAdminResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateMetadata_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createPresigned_ByKey(key: string, data: UploadBinaryRecordRequest): Promise<UploadBinaryRecordResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPresigned_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBinaries,
    createBinary,
    deleteBinary_ByKey,
    getBinary_ByKey,
    updateBinary_ByKey,
    updateMetadata_ByKey,
    createPresigned_ByKey
  }
}
