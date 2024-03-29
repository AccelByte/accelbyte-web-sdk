/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AddUserRoleV4Request } from '../generated-definitions/AddUserRoleV4Request.js'
import { AuthenticatorKeyResponseV4 } from '../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../generated-definitions/BackupCodesResponseV4.js'
import { BulkAccountTypeUpdateRequestV4 } from '../generated-definitions/BulkAccountTypeUpdateRequestV4.js'
import { CheckValidUserIdRequestV4 } from '../generated-definitions/CheckValidUserIdRequestV4.js'
import { CreateTestUsersRequestV4 } from '../generated-definitions/CreateTestUsersRequestV4.js'
import { CreateTestUsersResponseV4 } from '../generated-definitions/CreateTestUsersResponseV4.js'
import { CreateUserRequestV4 } from '../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../generated-definitions/CreateUserResponseV4.js'
import { EmailUpdateRequestV4 } from '../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../generated-definitions/EnabledFactorsResponseV4.js'
import { InviteUserRequestV4 } from '../generated-definitions/InviteUserRequestV4.js'
import { InviteUserResponseV3 } from '../generated-definitions/InviteUserResponseV3.js'
import { ListUserRolesV4Response } from '../generated-definitions/ListUserRolesV4Response.js'
import { ListValidUserIdResponseV4 } from '../generated-definitions/ListValidUserIdResponseV4.js'
import { RemoveUserRoleV4Request } from '../generated-definitions/RemoveUserRoleV4Request.js'
import { UserResponseV3 } from '../generated-definitions/UserResponseV3.js'
import { UserUpdateRequestV3 } from '../generated-definitions/UserUpdateRequestV3.js'
import { UsersV4Admin$ } from './endpoints/UsersV4Admin$.js'

export function UsersV4AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. action code : 10103
   */
  async function patchUserMe(data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchUserMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4]. Detail request body : - **emailAddresses** is required, List of email addresses that will be invited - **isAdmin** is required, true if user is admin, false if user is not admin - **namespace** is optional. Only works on multi tenant mode, if not specified then it will be assigned Publisher namespace, if specified, it will become that studio/publisher where user is invited to. - **roleId** is optional, if not specified then it will only assign User role. - **assignedNamespaces** is optional, List of namespaces which the Role will be assigned to the user, only works when Role is not empty. The invited admin will also assigned with &#34;User&#34; role by default.
   */
  async function createUserInvite(data: InviteUserRequestV4): Promise<InviteUserResponseV3> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserInvite(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get user enabled factors.
   */
  async function getUsersMeMfaFactor(): Promise<EnabledFactorsResponseV4> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeMfaFactor()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to make 2FA factor default.
   */
  async function postUserMeMfaFactor(data: { factor: string | null }): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.postUserMeMfaFactor(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  async function getUsersMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used.
   */
  async function createUserMeMfaBackupCode(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaBackupCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to send email code.
   */
  async function createUserMeMfaEmailCode(): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaEmailCode()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA email.
   */
  async function postUserMeMfaEmailEnable(data: { code: string | null }): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.postUserMeMfaEmailEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to disable 2FA email.
   */
  async function createUserMeMfaEmailDisable(): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaEmailDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.
   */
  async function createUser(data: CreateUserRequestV4): Promise<CreateUserResponseV4> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image.
   */
  async function createUserMeMfaAuthenticatorKey(): Promise<AuthenticatorKeyResponseV4> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaAuthenticatorKey()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA backup codes.
   */
  async function createUserMeMfaBackupCodeEnable(): Promise<BackupCodesResponseV4> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeMfaBackupCodeEnable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA backup codes.
   */
  async function deleteUserMeMfaBackupCodeDisable(): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteUserMeMfaBackupCodeDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to download backup codes.
   */
  async function getUsersMeMfaBackupCodeDownload(): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeMfaBackupCodeDownload()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create test users and not send verification code email.
   */
  async function createTestUser(data: CreateTestUsersRequestV4): Promise<CreateTestUsersResponseV4> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createTestUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to enable 2FA authenticator.
   */
  async function postUserMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.postUserMeMfaAuthenticatorEnable(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to disable 2FA authenticator.
   */
  async function deleteUserMeMfaAuthenticatorDisable(): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteUserMeMfaAuthenticatorDisable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103
   */
  async function updateUser_ByUserId(userId: string, data: UserUpdateRequestV3): Promise<UserResponseV3> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateUser_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Use this endpoint to check if userID exists or not Maximum number of userID to be checked is 50
   */
  async function createUserBulkValidate(data: CheckValidUserIdRequestV4): Promise<ListValidUserIdResponseV4> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserBulkValidate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to update a user email address. This endpoint need a valid user token from an admin to verify its identity (email) before updating a user.
   */
  async function updateEmail_ByUserId(userId: string, data: EmailUpdateRequestV4): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEmail_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Remove a role from user&#39;s roles.
   */
  async function deleteRole_ByUserId(userId: string, data: RemoveUserRoleV4Request): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteRole_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List roles assigned to a user
   */
  async function getRoles_ByUserId(userId: string): Promise<ListUserRolesV4Response> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRoles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * New role will be appended to user&#39;s current roles. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of this endpoint.
   */
  async function createRole_ByUserId(userId: string, data: AddUserRoleV4Request): Promise<ListUserRolesV4Response> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRole_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * User&#39;s roles will be replaced with roles from request body. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of this endpoint.
   */
  async function updateRole_ByUserId(userId: string, data: AddUserRoleV4Request): Promise<ListUserRolesV4Response> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRole_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to change users account type - set **testAccount** to &lt;code&gt;true&lt;/code&gt; to mark user as test account type - set **testAccount** to &lt;code&gt;false&lt;/code&gt; to mark user as default account type
   */
  async function patchUserBulkAccountType(data: BulkAccountTypeUpdateRequestV4): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchUserBulkAccountType(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **This endpoint is used to disable user 2FA.**
   */
  async function deleteMfaDisable_ByUserId(userId: string): Promise<unknown> {
    const $ = new UsersV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteMfaDisable_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchUserMe,
    createUserInvite,
    getUsersMeMfaFactor,
    postUserMeMfaFactor,
    getUsersMeMfaBackupCode,
    createUserMeMfaBackupCode,
    createUserMeMfaEmailCode,
    postUserMeMfaEmailEnable,
    createUserMeMfaEmailDisable,
    createUser,
    createUserMeMfaAuthenticatorKey,
    createUserMeMfaBackupCodeEnable,
    deleteUserMeMfaBackupCodeDisable,
    getUsersMeMfaBackupCodeDownload,
    createTestUser,
    postUserMeMfaAuthenticatorEnable,
    deleteUserMeMfaAuthenticatorDisable,
    updateUser_ByUserId,
    createUserBulkValidate,
    updateEmail_ByUserId,
    deleteRole_ByUserId,
    getRoles_ByUserId,
    createRole_ByUserId,
    updateRole_ByUserId,
    patchUserBulkAccountType,
    deleteMfaDisable_ByUserId
  }
}
