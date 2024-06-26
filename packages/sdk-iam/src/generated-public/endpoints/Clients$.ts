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
import { ClientCreateRequest } from '../../generated-definitions/ClientCreateRequest.js'
import { ClientCreationResponse } from '../../generated-definitions/ClientCreationResponse.js'
import { ClientPermissions } from '../../generated-definitions/ClientPermissions.js'
import { ClientResponse } from '../../generated-definitions/ClientResponse.js'
import { ClientResponseArray } from '../../generated-definitions/ClientResponseArray.js'
import { ClientUpdateRequest } from '../../generated-definitions/ClientUpdateRequest.js'
import { ClientUpdateSecretRequest } from '../../generated-definitions/ClientUpdateSecretRequest.js'

export class Clients$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
   */
  getClients_DEPRECATED(): Promise<IResponse<ClientResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClientResponseArray, 'ClientResponseArray')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [POST]_**
   */
  createClient_DEPRECATED(data: ClientCreateRequest): Promise<IResponse<ClientCreationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ClientCreationResponse,
      'ClientCreationResponse'
    )
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
   */
  deleteClient_ByClientId_DEPRECATED(clientId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [GET]_**
   */
  getClient_ByClientId_DEPRECATED(clientId: string): Promise<IResponse<ClientResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClientResponse, 'ClientResponse')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [PATCH]_**
   */
  updateClient_ByClientId_DEPRECATED(clientId: string, data: ClientUpdateRequest): Promise<IResponse<ClientResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClientResponse, 'ClientResponse')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/{clientId}/secret [PUT]_**
   */
  updateSecret_ByClientId_DEPRECATED(clientId: string, data: ClientUpdateSecretRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}/secret'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients [GET]_**
   */
  getClients_ByNS_DEPRECATED(): Promise<IResponse<ClientResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/namespaces/{namespace}/clients'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClientResponseArray, 'ClientResponseArray')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/v3/admin/namespaces/{namespace}/clients [POST]_**
   */
  createClient_ByNS_DEPRECATED(data: ClientCreateRequest): Promise<IResponse<ClientCreationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/namespaces/{namespace}/clients'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ClientCreationResponse,
      'ClientCreationResponse'
    )
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [PUT]_**
   */
  createClientpermission_ByClientId_DEPRECATED(clientId: string, data: ClientPermissions): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}/clientpermissions'.replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId} [DELETE]_**
   */
  deleteClient_ByClientId_ByNS_DEPRECATED(clientId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/namespaces/{namespace}/clients/{clientId}'.replace('{namespace}', this.namespace).replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions/{resource}/{action} [DELETE]_**
   */
  deleteClientpermission_ByClientId_ByResource_ByAction_DEPRECATED(
    clientId: string,
    resource: string,
    action: number
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}/clientpermissions/{resource}/{action}'
      .replace('{clientId}', clientId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated **Endpoint migration guide** - **Substitute endpoint: _/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions [POST]_**
   */
  createClientpermission_ByClientId_ByResource_ByAction_DEPRECATED(
    clientId: string,
    resource: string,
    action: number
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/clients/{clientId}/clientpermissions/{resource}/{action}'
      .replace('{clientId}', clientId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
