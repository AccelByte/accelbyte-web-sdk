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
import { CreateLocalizedPolicyVersionRequest } from '../generated-definitions/CreateLocalizedPolicyVersionRequest.js'
import { CreateLocalizedPolicyVersionResponse } from '../generated-definitions/CreateLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponse } from '../generated-definitions/RetrieveLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponseArray } from '../generated-definitions/RetrieveLocalizedPolicyVersionResponseArray.js'
import { UpdateLocalizedPolicyVersionRequest } from '../generated-definitions/UpdateLocalizedPolicyVersionRequest.js'
import { UpdateLocalizedPolicyVersionResponse } from '../generated-definitions/UpdateLocalizedPolicyVersionResponse.js'
import { UploadLocalizedPolicyVersionAttachmentResponse } from '../generated-definitions/UploadLocalizedPolicyVersionAttachmentResponse.js'
import { UploadPolicyVersionAttachmentRequest } from '../generated-definitions/UploadPolicyVersionAttachmentRequest.js'
import { LocalizedPolicyVersionsAdmin$ } from './endpoints/LocalizedPolicyVersionsAdmin$.js'

export function LocalizedPolicyVersionsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Retrieve a version of a particular country-specific policy.
   */
  async function getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<RetrieveLocalizedPolicyVersionResponse> {
    const $ = new LocalizedPolicyVersionsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a version of a particular country-specific policy.
   */
  async function updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string,
    data: UpdateLocalizedPolicyVersionRequest
  ): Promise<UpdateLocalizedPolicyVersionResponse> {
    const $ = new LocalizedPolicyVersionsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve versions of a particular country-specific policy.
   */
  async function getLocalizedPolicyVersionVersion_ByPolicyVersionId(
    policyVersionId: string
  ): Promise<RetrieveLocalizedPolicyVersionResponseArray> {
    const $ = new LocalizedPolicyVersionsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a version of a particular country-specific policy.
   */
  async function createLocalizedPolicyVersionVersion_ByPolicyVersionId(
    policyVersionId: string,
    data: CreateLocalizedPolicyVersionRequest
  ): Promise<CreateLocalizedPolicyVersionResponse> {
    const $ = new LocalizedPolicyVersionsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a localized version policy to be the default.
   */
  async function patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<unknown> {
    const $ = new LocalizedPolicyVersionsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Request presigned URL for upload attachment for a particular localized version of base policy.
   */
  async function createAttachment_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string,
    data: UploadPolicyVersionAttachmentRequest
  ): Promise<UploadLocalizedPolicyVersionAttachmentResponse> {
    const $ = new LocalizedPolicyVersionsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createAttachment_ByLocalizedPolicyVersionId(localizedPolicyVersionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
    updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
    getLocalizedPolicyVersionVersion_ByPolicyVersionId,
    createLocalizedPolicyVersionVersion_ByPolicyVersionId,
    patchDefault_ByLocalizedPolicyVersionId,
    createAttachment_ByLocalizedPolicyVersionId
  }
}
