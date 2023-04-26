/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AppendTeamGameSessionRequest } from './definitions/AppendTeamGameSessionRequest'
import { CreateGameSessionRequest } from './definitions/CreateGameSessionRequest'
import { GameSession$ } from './endpoints/GameSession$'
import { GameSessionQueryResponse } from './definitions/GameSessionQueryResponse'
import { GameSessionResponse } from './definitions/GameSessionResponse'
import { GameSessionResponseArray } from './definitions/GameSessionResponseArray'
import { MapStringInterface } from './definitions/MapStringInterface'
import { SessionInviteRequest } from './definitions/SessionInviteRequest'
import { UpdateGameSessionBackfillRequest } from './definitions/UpdateGameSessionBackfillRequest'
import { UpdateGameSessionRequest } from './definitions/UpdateGameSessionRequest'

export function GameSessionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Create a game session. Session configuration name is mandatory, this API will refer following values from the session template if they're not provided in the request: - type - joinability - minPlayers - maxPlayers - inviteTimeout - inactiveTimeout When the session type is a DS, a DS creation request will be sent to DSMC if number of active players reaches session's minPlayers. Active user is a user who present within the session, has status CONNECTED/JOINED. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  async function createGamesession(data: CreateGameSessionRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGamesession(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query game sessions. By default, API will return a list of available game sessions (joinability: open). Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  async function createGamesession_ByNS(data: MapStringInterface): Promise<GameSessionQueryResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGamesession_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query user's game sessions. By default, API will return a list of user's active game sessions (INVITED,JOINED,CONNECTED). Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  async function getUsersMeGamesessions(queryParams?: {
    status?: string | null
    orderBy?: string | null
    order?: string | null
  }): Promise<GameSessionResponseArray> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeGamesessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get game session detail. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  async function getGamesession_BySessionId(sessionId: string): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGamesession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates a game session, this endpoint will override stored gamesession data. To update only specified fields, please use following endpoint: method : PATCH API : /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} To update DS attributes (clientVersion, deployment, requestedRegions) it will only be applied only as long as no DS has been requested, otherwise ignored.
   */
  async function updateGamesession_BySessionId(sessionId: string, data: UpdateGameSessionRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGamesession_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a game session.
   */
  async function deleteGamesession_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGamesession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update specified fields from game session data.
   */
  async function patchGamesession_BySessionId(sessionId: string, data: UpdateGameSessionRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchGamesession_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Join a game session.
   */
  async function createJoin_BySessionId(sessionId: string): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoin_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Leave a game session.
   */
  async function deleteLeave_BySessionId(sessionId: string): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteLeave_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Append new member or team to session
   */
  async function createTeam_BySessionId(sessionId: string, data: AppendTeamGameSessionRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTeam_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get game session detail by podname. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  async function getGamesessionServer_ByPodName(podName: string): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGamesessionServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Invite a user to a game session. platformID represents the native platform of the invitee. API will return the corresponding native platform's userID. supported platforms: - STEAM - XBOX - PSN
   */
  async function createInvite_BySessionId(sessionId: string, data: SessionInviteRequest): Promise<unknown> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInvite_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reject a game session invitation.
   */
  async function deleteReject_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteReject_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update game session backfill ticket id. Will override game session backfill ticket based on given request parameter
   */
  async function updateBackfill_BySessionId(sessionId: string, data: UpdateGameSessionBackfillRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateBackfill_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createGamesession,
    createGamesession_ByNS,
    getUsersMeGamesessions,
    getGamesession_BySessionId,
    updateGamesession_BySessionId,
    deleteGamesession_BySessionId,
    patchGamesession_BySessionId,
    createJoin_BySessionId,
    deleteLeave_BySessionId,
    createTeam_BySessionId,
    getGamesessionServer_ByPodName,
    createInvite_BySessionId,
    deleteReject_BySessionId,
    updateBackfill_BySessionId
  }
}