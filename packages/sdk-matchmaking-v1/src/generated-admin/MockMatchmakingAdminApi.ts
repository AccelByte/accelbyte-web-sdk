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
import { CreateMockTicket } from '../generated-definitions/CreateMockTicket.js'
import { GetMockMatchesResponse } from '../generated-definitions/GetMockMatchesResponse.js'
import { GetMockTicketsResponse } from '../generated-definitions/GetMockTicketsResponse.js'
import { MatchingParty } from '../generated-definitions/MatchingParty.js'
import { MockTicketArray } from '../generated-definitions/MockTicketArray.js'
import { QueryMockBy } from '../generated-definitions/QueryMockBy.js'
import { MockMatchmakingAdmin$ } from './endpoints/MockMatchmakingAdmin$.js'

export function MockMatchmakingAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   *  Delete all mock tickets and matches in a channel. &#39;
   */
  async function deleteMock_ByChannelName(channelName: string): Promise<unknown> {
    const $ = new MockMatchmakingAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteMock_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Read all mock matches in a channel resulted from matching mock tickets. &#39;
   */
  async function getMocksMatches_ByChannelName(channelName: string): Promise<GetMockMatchesResponse> {
    const $ = new MockMatchmakingAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMocksMatches_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Read mock matches that has timestamp older than specified timestamp in a channel resulted from matching mock tickets. &#39;
   */
  async function createMockMatche_ByChannelName(channelName: string, data: QueryMockBy): Promise<GetMockMatchesResponse> {
    const $ = new MockMatchmakingAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createMockMatche_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Read all mock tickets in a channel. &#39;
   */
  async function getMocksTickets_ByChannelName(channelName: string): Promise<GetMockTicketsResponse> {
    const $ = new MockMatchmakingAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMocksTickets_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Create and queue mock tickets into specified game mode&#39;s pool. Ticket&#39;s MMRs will be randomized using Normal distribution according to the input mean and standard deviation. All mock tickets and matches will be cleaned up automatically after 1 day. &#39;
   */
  async function createMockTicket_ByChannelName(channelName: string, data: CreateMockTicket): Promise<MockTicketArray> {
    const $ = new MockMatchmakingAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createMockTicket_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Create and queue mock tickets into specified game mode&#39;s pool. The tickets input will be used as is. &#39;
   */
  async function createMockTicketBulk_ByChannelName(channelName: string, data: MatchingParty[]): Promise<unknown> {
    const $ = new MockMatchmakingAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createMockTicketBulk_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Read mock tickets after the specified timestamp in a channel. &#39;
   */
  async function createMockTicketQuery_ByChannelName(channelName: string, data: QueryMockBy): Promise<GetMockTicketsResponse> {
    const $ = new MockMatchmakingAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createMockTicketQuery_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteMock_ByChannelName,
    getMocksMatches_ByChannelName,
    createMockMatche_ByChannelName,
    getMocksTickets_ByChannelName,
    createMockTicket_ByChannelName,
    createMockTicketBulk_ByChannelName,
    createMockTicketQuery_ByChannelName
  }
}
