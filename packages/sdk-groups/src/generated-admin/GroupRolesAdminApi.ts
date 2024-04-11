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
import { CreateMemberRoleRequestV1 } from '../generated-definitions/CreateMemberRoleRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../generated-definitions/GetMemberRolesListResponseV1.js'
import { GroupRolesAdmin$ } from './endpoints/GroupRolesAdmin$.js'
import { MemberRoleResponseV1 } from '../generated-definitions/MemberRoleResponseV1.js'
import { UpdateMemberRolePermissionsRequestV1 } from '../generated-definitions/UpdateMemberRolePermissionsRequestV1.js'
import { UpdateMemberRoleRequestV1 } from '../generated-definitions/UpdateMemberRoleRequestV1.js'

export function GroupRolesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This endpoint is used to get list of member roles Action Code: 73201
   */
  async function getRoles(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRolesListResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to create new member role Action Code: 73202 memberRolePermissions example value : &#34;action&#34;: 1 &#34;resourceName&#34;: &#34;GROUP:ROLE&#34; The changes will give user with that role have a permission to create a role for new group member
   */
  async function createRole(data: CreateMemberRoleRequestV1): Promise<MemberRoleResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createRole(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to delete member role. Any member role can&#39;t be deleted if the specific role is applied to the configuration (admin and member role) Action Code: 73207
   */
  async function deleteRole_ByMemberRoleId(memberRoleId: string): Promise<unknown> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteRole_ByMemberRoleId(memberRoleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get member role based on the role ID Action Code: 73203
   */
  async function getRole_ByMemberRoleId(memberRoleId: string): Promise<MemberRoleResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRole_ByMemberRoleId(memberRoleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to update member role Action Code: 73204
   */
  async function patchRole_ByMemberRoleId(memberRoleId: string, data: UpdateMemberRoleRequestV1): Promise<MemberRoleResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchRole_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to update member role permission. It will replace the existing permission based on the request from this endpoint Action Code: 73205 memberRolePermissions example value : &#34;action&#34;: 2 &#34;resourceName&#34;: &#34;GROUP:ROLE&#34; The changes will update user role to be able to read a role of other member
   */
  async function updatePermission_ByMemberRoleId(
    memberRoleId: string,
    data: UpdateMemberRolePermissionsRequestV1
  ): Promise<MemberRoleResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updatePermission_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRoles,
    createRole,
    deleteRole_ByMemberRoleId,
    getRole_ByMemberRoleId,
    patchRole_ByMemberRoleId,
    updatePermission_ByMemberRoleId
  }
}
