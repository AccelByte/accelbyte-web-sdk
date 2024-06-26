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
import { PartyData } from '../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../generated-definitions/PartyPutCustomAttributesRequest.js'
import { PartyPutLimitSizeRequest } from '../generated-definitions/PartyPutLimitSizeRequest.js'
import { Party$ } from './endpoints/Party$.js'

export function PartyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load personal party data in a namespace based on Party ID &lt;br/&gt; Action Code: 50101
   */
  async function getPartyParty_ByPartyId(partyId: string): Promise<PartyData> {
    const $ = new Party$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPartyParty_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;Set party limit, only party leader can call this endpoint.
   */
  async function updateLimitParty_ByPartyId(partyId: string, data: PartyPutLimitSizeRequest): Promise<unknown> {
    const $ = new Party$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateLimitParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;update party attributes in a namespace.
   */
  async function updateAttributeParty_ByPartyId(partyId: string, data: PartyPutCustomAttributesRequest): Promise<PartyData> {
    const $ = new Party$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateAttributeParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPartyParty_ByPartyId,
    updateLimitParty_ByPartyId,
    updateAttributeParty_ByPartyId
  }
}
