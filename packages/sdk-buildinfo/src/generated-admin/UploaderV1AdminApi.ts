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
import { BasicBuildManifestArray } from '../generated-definitions/BasicBuildManifestArray.js'
import { BinaryUpload } from '../generated-definitions/BinaryUpload.js'
import { BlockData } from '../generated-definitions/BlockData.js'
import { BlockManifest } from '../generated-definitions/BlockManifest.js'
import { BuildDeletionDataArray } from '../generated-definitions/BuildDeletionDataArray.js'
import { BuildIdManifest } from '../generated-definitions/BuildIdManifest.js'
import { BuildIdVersionArray } from '../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../generated-definitions/BuildManifest.js'
import { UploadSummary } from '../generated-definitions/UploadSummary.js'
import { UploaderV1Admin$ } from './endpoints/UploaderV1Admin$.js'

export function UploaderV1AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBuildsByAppId(queryParams: { appId: string | null }): Promise<BuildIdVersionArray> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBuildsByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to delete build manifest. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteBuild_ByBuildId_DEPRECATED(buildId: string): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteBuild_ByBuildId_DEPRECATED(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get build manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBuild_ByBuildId(buildId: string): Promise<BuildManifest> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBuild_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to start chunk upload and retrieve upload url. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStartchunkupload_DEPRECATED(data: BinaryUpload): Promise<UploadSummary> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStartchunkupload_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBuildsByNamespace(): Promise<BasicBuildManifestArray> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBuildsByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to commit build manifest. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function createCommitbuildmanifest_DEPRECATED(data: BuildManifest): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createCommitbuildmanifest_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get build deletion. Only deleted build will be retrieved.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: List of build deletion&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBuildsdeletionByAppId(queryParams: {
    appId: string | null
    deletionStatus?: number
    platformId?: string | null
  }): Promise<BuildDeletionDataArray> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBuildsdeletionByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to set current build as release version.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSetcurrentbuild_ByBuildId(buildId: string, queryParams?: { sendNotification?: boolean | null }): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateSetcurrentbuild_ByBuildId(buildId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retrieve chunk by hash.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRetrievechunkbyhash_ByHash(hash: string): Promise<BlockData> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRetrievechunkbyhash_ByHash(hash)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retry build deletion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRetry_ByBuildId(buildId: string): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRetry_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to cancel build deletion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteCancel_ByBuildId(buildId: string): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteCancel_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to set current build as release version. [DEPRECATED] &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSetcurrentbuild_ByAppId_ByVersion_DEPRECATED(appId: string, version: string): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateSetcurrentbuild_ByAppId_ByVersion_DEPRECATED(appId, version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to start build upload. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStartbuildupload_ByAppId_ByVersion_DEPRECATED(appId: string, version: string): Promise<BuildIdManifest> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStartbuildupload_ByAppId_ByVersion_DEPRECATED(appId, version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to commit chunk that has been uploaded. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createUuid_ByHash_ByUuid_ByOffset_DEPRECATED(hash: string, uuid: string, offset: number): Promise<BlockManifest> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUuid_ByHash_ByUuid_ByOffset_DEPRECATED(hash, uuid, offset)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to commit chunk that has been uploaded. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createOffset_ByHash_ByUuid_ByOffset_ByBlockSize_DEPRECATED(
    hash: string,
    uuid: string,
    offset: number,
    blockSize: number
  ): Promise<BlockManifest> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createOffset_ByHash_ByUuid_ByOffset_ByBlockSize_DEPRECATED(hash, uuid, offset, blockSize)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBuildsByAppId,
    deleteBuild_ByBuildId_DEPRECATED,
    getBuild_ByBuildId,
    createStartchunkupload_DEPRECATED,
    getBuildsByNamespace,
    createCommitbuildmanifest_DEPRECATED,
    getBuildsdeletionByAppId,
    updateSetcurrentbuild_ByBuildId,
    getRetrievechunkbyhash_ByHash,
    updateRetry_ByBuildId,
    deleteCancel_ByBuildId,
    updateSetcurrentbuild_ByAppId_ByVersion_DEPRECATED,
    createStartbuildupload_ByAppId_ByVersion_DEPRECATED,
    createUuid_ByHash_ByUuid_ByOffset_DEPRECATED,
    createOffset_ByHash_ByUuid_ByOffset_ByBlockSize_DEPRECATED
  }
}
