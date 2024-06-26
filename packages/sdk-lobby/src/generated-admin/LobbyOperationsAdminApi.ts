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
import { LobbyOperationsAdmin$ } from './endpoints/LobbyOperationsAdmin$.js'

export function LobbyOperationsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Update party attributes in a namespace.
   */
  async function updateAttributeParty_ByPartyId(partyId: string, data: PartyPutCustomAttributesRequest): Promise<PartyData> {
    const $ = new LobbyOperationsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateAttributeParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin join a player into a party.
   */
  async function createJoinParty_ByPartyId_ByUserId(partyId: string, userId: string): Promise<unknown> {
    const $ = new LobbyOperationsAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createJoinParty_ByPartyId_ByUserId(partyId, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateAttributeParty_ByPartyId,
    createJoinParty_ByPartyId_ByUserId
  }
}
