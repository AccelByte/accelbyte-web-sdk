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
import { BulkFriendsRequest } from '../../generated-definitions/BulkFriendsRequest.js'
import { BulkFriendsResponse } from '../../generated-definitions/BulkFriendsResponse.js'
import { GetUserFriendsResponseArray } from '../../generated-definitions/GetUserFriendsResponseArray.js'
import { GetUserIncomingFriendsResponseArray } from '../../generated-definitions/GetUserIncomingFriendsResponseArray.js'
import { GetUserOutgoingFriendsResponseArray } from '../../generated-definitions/GetUserOutgoingFriendsResponseArray.js'
import { ListBulkUserPlatformsResponse } from '../../generated-definitions/ListBulkUserPlatformsResponse.js'
import { LoadIncomingFriendsWithTimeResponseArray } from '../../generated-definitions/LoadIncomingFriendsWithTimeResponseArray.js'
import { LoadOutgoingFriendsWithTimeResponseArray } from '../../generated-definitions/LoadOutgoingFriendsWithTimeResponseArray.js'
import { NativeFriendRequest } from '../../generated-definitions/NativeFriendRequest.js'
import { NativeFriendSyncResponseArray } from '../../generated-definitions/NativeFriendSyncResponseArray.js'
import { UserAcceptFriendRequest } from '../../generated-definitions/UserAcceptFriendRequest.js'
import { UserCancelFriendRequest } from '../../generated-definitions/UserCancelFriendRequest.js'
import { UserGetFriendshipStatusResponse } from '../../generated-definitions/UserGetFriendshipStatusResponse.js'
import { UserRejectFriendRequest } from '../../generated-definitions/UserRejectFriendRequest.js'
import { UserRequestFriendRequest } from '../../generated-definitions/UserRequestFriendRequest.js'
import { UserUnfriendRequest } from '../../generated-definitions/UserUnfriendRequest.js'

export class Friends$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Get list of friends in a namespace.
   */
  getFriendsMe(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<GetUserFriendsResponseArray>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      GetUserFriendsResponseArray,
      'GetUserFriendsResponseArray'
    )
  }

  /**
   * Sync friends using server to server call to native first party server. Supported platforms: steam: The platform_token’s value is the binary ticket returned by Steam. If this ticket was generated by Steam GetAuthTicketForWebApi with version &gt;= 1.57, then platform token should use this style: {identity}:{ticket} the {identity} was the parameter to call GetAuthTicketForWebApi when the ticket was created. Note: Do not contain : in this {identity} ps4: The platform_token’s value is the authorization code returned by Sony OAuth. ps5: The platform_token’s value is the authorization code returned by Sony OAuth. pspc: The platform_token’s value is the authorization code returned by Sony OAuth.
   */
  patchFriendSyncMe(data: NativeFriendRequest[]): Promise<IResponse<NativeFriendSyncResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/sync/namespaces/{namespace}/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      NativeFriendSyncResponseArray,
      'NativeFriendSyncResponseArray'
    )
  }

  /**
   * Client should provide either friendID or friendPublicID. If both are provided, friendID will be chosen to be used. This endpoint will only send a pending invite that can be either rejected/accepted
   */
  createFriendMeRequest(data: UserRequestFriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get list of incoming friends in a namespace.
   */
  getFriendsMeIncoming(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<GetUserIncomingFriendsResponseArray>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/incoming'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      GetUserIncomingFriendsResponseArray,
      'GetUserIncomingFriendsResponseArray'
    )
  }

  /**
   * Get list of outgoing friends in a namespace.
   */
  getFriendsMeOutgoing(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<GetUserOutgoingFriendsResponseArray>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/outgoing'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      GetUserOutgoingFriendsResponseArray,
      'GetUserOutgoingFriendsResponseArray'
    )
  }

  /**
   * User unfriend a friend.
   */
  createFriendMeUnfriend(data: UserUnfriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/unfriend'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get list of friends with platform data in a namespace.
   */
  getFriendsMePlatforms(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<ListBulkUserPlatformsResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/platforms'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      ListBulkUserPlatformsResponse,
      'ListBulkUserPlatformsResponse'
    )
  }

  /**
   * Get list of incoming friends with requested time info in a namespace.
   */
  getFriendsMeIncomingTime(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<IResponse<LoadIncomingFriendsWithTimeResponseArray>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/incoming-time'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      LoadIncomingFriendsWithTimeResponseArray,
      'LoadIncomingFriendsWithTimeResponseArray'
    )
  }

  /**
   * Get list of outgoing friends with requested time info in a namespace.
   */
  getFriendsMeOutgoingTime(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<IResponse<LoadOutgoingFriendsWithTimeResponseArray>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/outgoing-time'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      LoadOutgoingFriendsWithTimeResponseArray,
      'LoadOutgoingFriendsWithTimeResponseArray'
    )
  }

  /**
   * User accept friend.
   */
  createFriendMeRequestAccept(data: UserAcceptFriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/request/accept'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * User cancel a friend request.
   */
  createFriendMeRequestCancel(data: UserCancelFriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/request/cancel'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * User reject a friend request.
   */
  createFriendMeRequestReject(data: UserRejectFriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/request/reject'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * User get friendship status. Code: 0 - Message: &#34;not friend&#34; Code: 1 - Message: &#34;outgoing&#34; Code: 2 - Message: &#34;incoming&#34; Code: 3 - Message: &#34;friend&#34;
   */
  getFriendMeStatu_ByFriendId(friendId: string): Promise<IResponse<UserGetFriendshipStatusResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/status/{friendId}'
      .replace('{namespace}', this.namespace)
      .replace('{friendId}', friendId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      UserGetFriendshipStatusResponse,
      'UserGetFriendshipStatusResponse'
    )
  }

  /**
   * Friends request in a namespace.
   */
  createAddBulkFriend_ByUserId(userId: string, data: BulkFriendsRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/users/{userId}/add/bulk'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Friends request in a namespace.
   */
  createDeleteBulkFriend_ByUserId(userId: string, data: BulkFriendsRequest): Promise<IResponse<BulkFriendsResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/users/{userId}/delete/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, BulkFriendsResponse, 'BulkFriendsResponse')
  }
}
