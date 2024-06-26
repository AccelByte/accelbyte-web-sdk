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
import { Permissions } from '../generated-definitions/Permissions.js'
import { Role } from '../generated-definitions/Role.js'
import { RoleAdminStatusResponse } from '../generated-definitions/RoleAdminStatusResponse.js'
import { RoleCreateRequest } from '../generated-definitions/RoleCreateRequest.js'
import { RoleManagersRequest } from '../generated-definitions/RoleManagersRequest.js'
import { RoleManagersResponse } from '../generated-definitions/RoleManagersResponse.js'
import { RoleMembersRequest } from '../generated-definitions/RoleMembersRequest.js'
import { RoleMembersResponse } from '../generated-definitions/RoleMembersResponse.js'
import { RoleNamesResponseV3 } from '../generated-definitions/RoleNamesResponseV3.js'
import { RoleResponse } from '../generated-definitions/RoleResponse.js'
import { RoleResponseWithManagersArray } from '../generated-definitions/RoleResponseWithManagersArray.js'
import { RoleUpdateRequest } from '../generated-definitions/RoleUpdateRequest.js'
import { UpdatePermissionScheduleRequest } from '../generated-definitions/UpdatePermissionScheduleRequest.js'
import { Roles$ } from './endpoints/Roles$.js'

export function RolesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles [GET]_**
   */
  async function getRoles_DEPRECATED(queryParams?: { isWildcard?: string | null }): Promise<RoleResponseWithManagersArray> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRoles_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. If role is an administrator role (i.e. AdminRole == true), it will list out the role&#39;s members. Administrator role can be created only when at least 1 manager is specified. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles [POST]_**
   */
  async function createRole_DEPRECATED(data: RoleCreateRequest): Promise<Role> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createRole_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [DELETE]_**
   */
  async function deleteRole_ByRoleId_DEPRECATED(roleId: string): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByRoleId_DEPRECATED(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [GET]_**
   */
  async function getRole_ByRoleId_DEPRECATED(roleId: string): Promise<RoleResponse> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRole_ByRoleId_DEPRECATED(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [PATCH]_**
   */
  async function updateRole_ByRoleId_DEPRECATED(roleId: string, data: RoleUpdateRequest): Promise<RoleResponse> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRole_ByRoleId_DEPRECATED(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get all non-admin role. action code: 10418
   */
  async function getRoles_v3(queryParams?: {
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
    limit?: number
  }): Promise<RoleNamesResponseV3> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRoles_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [DELETE]_**
   */
  async function deleteAdmin_ByRoleId_DEPRECATED(roleId: string): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteAdmin_ByRoleId_DEPRECATED(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [GET]_**
   */
  async function getAdmin_ByRoleId_DEPRECATED(roleId: string): Promise<RoleAdminStatusResponse> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getAdmin_ByRoleId_DEPRECATED(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. Role can be set as admin role only when it has at least 1 manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [POST]_**
   */
  async function createAdmin_ByRoleId_DEPRECATED(roleId: string): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createAdmin_ByRoleId_DEPRECATED(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [DELETE]_**
   */
  async function deleteMember_ByRoleId_DEPRECATED(roleId: string, data: RoleMembersRequest): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteMember_ByRoleId_DEPRECATED(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [GET]_**
   */
  async function getMembers_ByRoleId_DEPRECATED(roleId: string): Promise<RoleMembersResponse> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMembers_ByRoleId_DEPRECATED(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [POST]_**
   */
  async function createMember_ByRoleId_DEPRECATED(roleId: string, data: RoleMembersRequest): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createMember_ByRoleId_DEPRECATED(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [DELETE]_**
   */
  async function deleteManager_ByRoleId_DEPRECATED(roleId: string, data: RoleManagersRequest): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteManager_ByRoleId_DEPRECATED(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [GET]_**
   */
  async function getManagers_ByRoleId_DEPRECATED(roleId: string): Promise<RoleManagersResponse> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getManagers_ByRoleId_DEPRECATED(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [POST]_**
   */
  async function createManager_ByRoleId_DEPRECATED(roleId: string, data: RoleManagersRequest): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createManager_ByRoleId_DEPRECATED(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get non-admin role based on specify roleId. action code : 10417
   */
  async function getRole_ByRoleId_v3(roleId: string): Promise<RoleResponse> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRole_ByRoleId_v3(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint will REPLACE role&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. \*: all values in the fields, e.g. \* in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/permissions [POST]_**
   */
  async function createPermission_ByRoleId_DEPRECATED(roleId: string, data: Permissions): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPermission_ByRoleId_DEPRECATED(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/permissions/{resource}/{action} [DELETE]_** - **Substitute endpoint: _/iam/v4/admin/roles/{roleId}/permissions [DELETE]_**
   */
  async function deletePermission_ByRoleId_ByResource_ByAction_DEPRECATED(
    roleId: string,
    resource: string,
    action: number
  ): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByRoleId_ByResource_ByAction_DEPRECATED(roleId, resource, action)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint will update existing permission (bitwise OR the action) if found one with same resource, otherwise it will append a new permission Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: - Seconds: 0-59 * / , - - Minutes: 0-59 * / , - - Hours: 0-23 * / , - - Day of month: 1-31 * / , - L W - Month: 1-12 JAN-DEC * / , - - Day of week: 0-6 SUN-SAT * / , - L # - Year: 1970-2099 * / , - Special characters: - \**: all values in the fields, e.g. \* in seconds fields indicates every second - /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter - ,: separate items of a list, e.g. MON,WED,FRI in day of week - -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive - L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. - W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; - #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month. ### Endpoint migration guide - **Substitute endpoint(update): _/iam/v3/admin/roles/{roleId}/permissions [PUT]_** - **Substitute endpoint(create): _/iam/v3/admin/roles/{roleId}/permissions [POST]_**
   */
  async function createPermission_ByRoleId_ByResource_ByAction_DEPRECATED(
    roleId: string,
    resource: string,
    action: number,
    data: UpdatePermissionScheduleRequest
  ): Promise<unknown> {
    const $ = new Roles$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPermission_ByRoleId_ByResource_ByAction_DEPRECATED(roleId, resource, action, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRoles_DEPRECATED,
    createRole_DEPRECATED,
    deleteRole_ByRoleId_DEPRECATED,
    getRole_ByRoleId_DEPRECATED,
    updateRole_ByRoleId_DEPRECATED,
    getRoles_v3,
    deleteAdmin_ByRoleId_DEPRECATED,
    getAdmin_ByRoleId_DEPRECATED,
    createAdmin_ByRoleId_DEPRECATED,
    deleteMember_ByRoleId_DEPRECATED,
    getMembers_ByRoleId_DEPRECATED,
    createMember_ByRoleId_DEPRECATED,
    deleteManager_ByRoleId_DEPRECATED,
    getManagers_ByRoleId_DEPRECATED,
    createManager_ByRoleId_DEPRECATED,
    getRole_ByRoleId_v3,
    createPermission_ByRoleId_DEPRECATED,
    deletePermission_ByRoleId_ByResource_ByAction_DEPRECATED,
    createPermission_ByRoleId_ByResource_ByAction_DEPRECATED
  }
}
