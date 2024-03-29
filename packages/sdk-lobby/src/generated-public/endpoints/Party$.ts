/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { PartyData } from '../../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../../generated-definitions/PartyPutCustomAttributesRequest.js'
import { PartyPutLimitSizeRequest } from '../../generated-definitions/PartyPutLimitSizeRequest.js'

export class Party$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load personal party data in a namespace based on Party ID &lt;br/&gt; Action Code: 50101
   */
  getPartyParty_ByPartyId(partyId: string): Promise<IResponseWithSync<PartyData>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PartyData, 'PartyData')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;Set party limit, only party leader can call this endpoint.
   */
  updateLimitParty_ByPartyId(partyId: string, data: PartyPutLimitSizeRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}/limit'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;update party attributes in a namespace.
   */
  updateAttributeParty_ByPartyId(partyId: string, data: PartyPutCustomAttributesRequest): Promise<IResponse<PartyData>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}/attributes'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PartyData, 'PartyData')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
