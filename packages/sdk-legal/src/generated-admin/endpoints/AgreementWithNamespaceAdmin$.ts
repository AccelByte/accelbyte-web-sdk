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
import { DownloadExportedAgreementsInCsvResponse } from '../../generated-definitions/DownloadExportedAgreementsInCsvResponse.js'
import { InitiateExportAgreementsToCsvResponse } from '../../generated-definitions/InitiateExportAgreementsToCsvResponse.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { UserAgreementsResponseArray } from '../../generated-definitions/UserAgreementsResponseArray.js'
import { UsersAgreementsRequest } from '../../generated-definitions/UsersAgreementsRequest.js'

export class AgreementWithNamespaceAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * This API will return all accepted Legal Agreements for each user, including agreements of game users if publisher user has corresponding game account.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  createAgreement(data: UsersAgreementsRequest): Promise<IResponse<UserAgreementsResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserAgreementsResponseArray, 'UserAgreementsResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API will return all users who has accepted a specific policy version.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getAgreementsPolicyVersionsUsers(queryParams: {
    policyVersionId: string | null
    convertGameUserId?: boolean | null
    keyword?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponse<PagedRetrieveUserAcceptedAgreementResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policy-versions/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PagedRetrieveUserAcceptedAgreementResponse, 'PagedRetrieveUserAcceptedAgreementResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API will return all accepted Legal Agreements for specified user. &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getAgreementPolicyUser_ByUserId(
    userId: string,
    queryParams?: { excludeOtherNamespacesPolicies?: boolean | null }
  ): Promise<IResponse<RetrieveAcceptedAgreementResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policies/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RetrieveAcceptedAgreementResponseArray, 'RetrieveAcceptedAgreementResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API will check the status of export process.&lt;br&gt;If the export process has been completed, the response body will include the download url.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getAgreementsPolicyVersionsUsersExportCsvDownload(queryParams: {
    policyVersionId: string | null
  }): Promise<IResponse<DownloadExportedAgreementsInCsvResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/download'.replace(
      '{namespace}',
      this.namespace
    )
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, DownloadExportedAgreementsInCsvResponse, 'DownloadExportedAgreementsInCsvResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API will initiate a worker to export list of users who has accepted a specific policy version into a CSV file.&lt;br&gt;To check the export state after initialize it, use `GET /admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/download` API.&lt;br/&gt;&lt;br/&gt;This Initiate API is &lt;b&gt;not allow&lt;/b&gt; multiple export worker running for the same namespace, it will return 409 http error if so.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  createAgreementPolicyVersionUserExportCsvInitiate(queryParams: {
    policyVersionId: string | null
  }): Promise<IResponse<InitiateExportAgreementsToCsvResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/initiate'.replace(
      '{namespace}',
      this.namespace
    )
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, InitiateExportAgreementsToCsvResponse, 'InitiateExportAgreementsToCsvResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}