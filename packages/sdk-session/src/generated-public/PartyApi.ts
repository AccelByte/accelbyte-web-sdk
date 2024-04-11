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
import { CreatePartyRequest } from '../generated-definitions/CreatePartyRequest.js'
import { JoinByCodeRequest } from '../generated-definitions/JoinByCodeRequest.js'
import { KickResponse } from '../generated-definitions/KickResponse.js'
import { Party$ } from './endpoints/Party$.js'
import { PartyQueryResponse } from '../generated-definitions/PartyQueryResponse.js'
import { PartySessionResponse } from '../generated-definitions/PartySessionResponse.js'
import { PromoteLeaderRequest } from '../generated-definitions/PromoteLeaderRequest.js'
import { SessionInviteRequest } from '../generated-definitions/SessionInviteRequest.js'
import { SessionInviteResponse } from '../generated-definitions/SessionInviteResponse.js'
import { UpdatePartyRequest } from '../generated-definitions/UpdatePartyRequest.js'

export function PartyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * A join code will be autogenerated if the party is joinable. Creator will be removed from previous party (if any) and automatically join into the created party as a leader. Party members will be sent invitation to join the party. Session configuration name is optional. Default configuration name if empty: { &#34;name&#34;: &#34;default&#34;, &#34;type&#34;: &#34;NONE&#34;, &#34;joinability&#34;: &#34;OPEN&#34;, &#34;minPlayers&#34;: 1, &#34;maxPlayers&#34;: 8, &#34;inviteTimeout&#34;: 60, &#34;inactiveTimeout&#34;: 60, &#34;textChat&#34;: false } Supported platforms: 1. STEAM 2. PSN 3. XBOX Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI.
   */
  async function createParty(data: CreatePartyRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createParty(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query user&#39;s parties. By default, API will return a list of user&#39;s active parties.
   */
  async function getUsersMeParties(queryParams?: {
    order?: string | null
    orderBy?: string | null
    status?: string | null
  }): Promise<PartyQueryResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUsersMeParties(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get party details.
   */
  async function getParty_ByPartyId(partyId: string): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getParty_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update specified fields from party data. Note: Join type can only be updated by the party&#39;s leader. Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI.
   */
  async function patchParty_ByPartyId(partyId: string, data: UpdatePartyRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates party blob, this endpoint will override stored party data. Join type can only be updated by the party&#39;s leader. To update only specified fields, please use following endpoint: method : PATCH API : /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI.
   */
  async function updateParty_ByPartyId(partyId: string, data: UpdatePartyRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revoke code of the party. Only leader can revoke a code.
   */
  async function deleteCode_ByPartyId(partyId: string): Promise<unknown> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteCode_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Generate a new code for the party. Only leader can generate a code.
   */
  async function createCode_ByPartyId(partyId: string): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createCode_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Invite a user to a party. platformID represents the native platform of the invitee. API will return the corresponding native platform&#39;s userID. supported platforms: - STEAM - XBOX - PSN
   */
  async function createInvite_ByPartyId(partyId: string, data: SessionInviteRequest): Promise<SessionInviteResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createInvite_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Promotes a party member to be a party leader. Only leader can promote a new leader.
   */
  async function createLeader_ByPartyId(partyId: string, data: PromoteLeaderRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createLeader_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Join a party by code. The user can join a party as long as the code is valid
   */
  async function createPartyUserMeJoinCode(data: JoinByCodeRequest): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPartyUserMeJoinCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Join a party. The user can either join a party they have been invited to, or any party with an &#34;open&#34; joinable setting.
   */
  async function createUserMeJoin_ByPartyId(partyId: string): Promise<PartySessionResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createUserMeJoin_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Leave a party
   */
  async function deleteUserMeLeave_ByPartyId(partyId: string): Promise<unknown> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteUserMeLeave_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reject a party invitation.
   */
  async function deleteUserMeReject_ByPartyId(partyId: string): Promise<unknown> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteUserMeReject_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Kick a player from a party. Requires invoker to be the party leader.
   */
  async function deleteKick_ByPartyId_ByUserId(partyId: string, userId: string): Promise<KickResponse> {
    const $ = new Party$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteKick_ByPartyId_ByUserId(partyId, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createParty,
    getUsersMeParties,
    getParty_ByPartyId,
    patchParty_ByPartyId,
    updateParty_ByPartyId,
    deleteCode_ByPartyId,
    createCode_ByPartyId,
    createInvite_ByPartyId,
    createLeader_ByPartyId,
    createPartyUserMeJoinCode,
    createUserMeJoin_ByPartyId,
    deleteUserMeLeave_ByPartyId,
    deleteUserMeReject_ByPartyId,
    deleteKick_ByPartyId_ByUserId
  }
}
