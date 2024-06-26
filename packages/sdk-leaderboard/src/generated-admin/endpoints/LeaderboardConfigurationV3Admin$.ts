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
import { DeleteBulkLeaderboardsReq } from '../../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsRespV3 } from '../../generated-definitions/GetAllLeaderboardConfigsRespV3.js'
import { GetLeaderboardConfigRespV3 } from '../../generated-definitions/GetLeaderboardConfigRespV3.js'
import { LeaderboardConfigReqV3 } from '../../generated-definitions/LeaderboardConfigReqV3.js'
import { UpdateLeaderboardConfigReqV3 } from '../../generated-definitions/UpdateLeaderboardConfigReqV3.js'

export class LeaderboardConfigurationV3Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
   */
  getLeaderboards(queryParams?: {
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<IResponse<GetAllLeaderboardConfigsRespV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllLeaderboardConfigsRespV3,
      'GetAllLeaderboardConfigsRespV3'
    )
  }

  /**
   * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;leaderboardCode: unique leaderboard config code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;name: leaderboard name, maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;description: leaderboard description, maximum length for leaderboard description is 2048 characters. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;iconURL: leaderboard icon image url. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;allTime: if true, all time leaderboard will be created. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;descending: leaderboard order. If true, the points will be sorted in descending order. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;statCode: Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;cycleIds: Statistic cycle ids that will be tracked in the leaderboard. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
   */
  createLeaderboard(data: LeaderboardConfigReqV3): Promise<IResponse<GetLeaderboardConfigRespV3>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetLeaderboardConfigRespV3,
      'GetLeaderboardConfigRespV3'
    )
  }

  /**
   * &lt;p&gt;This endpoint delete multiple leaderboards configuration in one request&lt;/p&gt;
   */
  createLeaderboardDelete(data: DeleteBulkLeaderboardsReq): Promise<IResponse<DeleteBulkLeaderboardsResp>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards/delete'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeleteBulkLeaderboardsResp,
      'DeleteBulkLeaderboardsResp'
    )
  }

  /**
   * &lt;p&gt;This endpoint delete a leaderboard configuration&lt;/p&gt;
   */
  deleteLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
   */
  getLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<IResponse<GetLeaderboardConfigRespV3>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetLeaderboardConfigRespV3,
      'GetLeaderboardConfigRespV3'
    )
  }

  /**
   * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;leaderboardCode: unique leaderboard config code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;name: leaderboard name, maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;description: leaderboard description, maximum length for leaderboard description is 2048 characters. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;iconURL: leaderboard icon image url. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;allTime: if true, all time leaderboard will be created. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;descending: leaderboard order. If true, the points will be sorted in descending order. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;statCode: Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;cycleIds: Statistic cycle ids that will be tracked in the leaderboard. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
   */
  updateLeaderboard_ByLeaderboardCode(
    leaderboardCode: string,
    data: UpdateLeaderboardConfigReqV3
  ): Promise<IResponse<GetLeaderboardConfigRespV3>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetLeaderboardConfigRespV3,
      'GetLeaderboardConfigRespV3'
    )
  }

  /**
   * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD:HARDDELETE [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete leaderboard configuration and its data&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment, you might want to use &lt;b&gt;archive endpoint&lt;/b&gt; instead hard delete.&lt;/p&gt;
   */
  deleteHard_ByLeaderboardCode(leaderboardCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/hard'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
