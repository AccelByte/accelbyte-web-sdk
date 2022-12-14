/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Agreement$ } from '@accelbyte/sdk/generated-public/legal/Agreement$'
import { AcceptAgreementRequest } from '@accelbyte/sdk/generated-public/legal/definitions/AcceptAgreementRequest'
import { Network } from '@accelbyte/sdk/utils/Network'

export class AgreementApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  acceptLegalPolicies(acceptAgreements: AcceptAgreementRequest[]) {
    return this.newInstance().postPublicAgreementsPolicies(acceptAgreements)
  }

  /**
   * Retrieve accepted Legal Agreements.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  getAgreements() {
    return this.newInstance().fetchPublicAgreementsPolicies()
  }

  /**
   * Change marketing preference consent.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  updateMarketingPreferences(acceptAgreements: AcceptAgreementRequest[]) {
    return this.newInstance().patchPublicAgreementsLocalizedPolicyVersionsPreferences(acceptAgreements)
  }

  private newInstance() {
    return new Agreement$(Network.create(this.conf), this.namespace, this.cache)
  }
}
