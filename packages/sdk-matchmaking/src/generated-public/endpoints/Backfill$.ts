/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BackFillAcceptRequest } from '../../generated-definitions/BackFillAcceptRequest.js'
import { BackFillCreateRequest } from '../../generated-definitions/BackFillCreateRequest.js'
import { BackFillRejectRequest } from '../../generated-definitions/BackFillRejectRequest.js'
import { BackfillCreateResponse } from '../../generated-definitions/BackfillCreateResponse.js'
import { BackfillGetResponse } from '../../generated-definitions/BackfillGetResponse.js'
import { BackfillProposalResponse } from '../../generated-definitions/BackfillProposalResponse.js'
import { GameSession } from '../../generated-definitions/GameSession.js'

export class Backfill$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Create backfill ticket.
   */
  createBackfill(data: BackFillCreateRequest): Promise<IResponse<BackfillCreateResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BackfillCreateResponse,
      'BackfillCreateResponse'
    )
  }

  /**
   * Get backfill proposal
   */
  getBackfillProposal(queryParams: { sessionID: string | null }): Promise<IResponse<BackfillProposalResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/proposal'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BackfillProposalResponse,
      'BackfillProposalResponse'
    )
  }

  /**
   * Delete backfill ticket.
   */
  deleteBackfill_ByBackfillId(backfillID: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get backfill ticket by ID
   */
  getBackfill_ByBackfillId(backfillID: string): Promise<IResponse<BackfillGetResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BackfillGetResponse, 'BackfillGetResponse')
  }

  /**
   * Accept backfill proposal.
   */
  updateProposalAccept_ByBackfillId(backfillID: string, data: BackFillAcceptRequest): Promise<IResponse<GameSession>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/accept'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameSession, 'GameSession')
  }

  /**
   * Reject backfill proposal
   */
  updateProposalReject_ByBackfillId(backfillID: string, data: BackFillRejectRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/reject'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
