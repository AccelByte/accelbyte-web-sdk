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
import { ConsumeItemReq } from '../../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../../generated-definitions/ItemResp.js'
import { ListItemResp } from '../../generated-definitions/ListItemResp.js'
import { MoveItemsReq } from '../../generated-definitions/MoveItemsReq.js'
import { MoveItemsResp } from '../../generated-definitions/MoveItemsResp.js'
import { RemoveInventoryItemReq } from '../../generated-definitions/RemoveInventoryItemReq.js'
import { UpdateItemReq } from '../../generated-definitions/UpdateItemReq.js'
import { UpdateItemRespArray } from '../../generated-definitions/UpdateItemRespArray.js'

export class PublicItems$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   *  Bulk remove user&#39;s own items.
   */
  deleteItemMeUser_ByInventoryId(inventoryId: string, data: RemoveInventoryItemReq[]): Promise<IResponse<UpdateItemRespArray>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UpdateItemRespArray, 'UpdateItemRespArray')
  }

  /**
   *  Listing all user&#39;s owned items in an inventory. The response body will be in the form of standard pagination.
   */
  getItemsMeUsers_ByInventoryId(
    inventoryId: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  ): Promise<IResponse<ListItemResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListItemResp, 'ListItemResp')
  }

  /**
   *  Bulk Updating user&#39;s own items.
   */
  updateItemMeUser_ByInventoryId(inventoryId: string, data: UpdateItemReq[]): Promise<IResponse<UpdateItemRespArray>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UpdateItemRespArray, 'UpdateItemRespArray')
  }

  /**
   *  Consume user&#39;s own item.
   */
  createConsumeUser_ByInventoryId(inventoryId: string, data: ConsumeItemReq): Promise<IResponse<ItemResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/consume'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }

  /**
   *  Move items between inventories that is owned by the same user. Currently, this endpoint supports transferring items exclusively from source OTHER. Items from source ECOMMERCE are not yet eligible for transfer. We are working on expanding support to include source ECOMMERCE in future updates.
   */
  createItemMovementUser_ByInventoryId(inventoryId: string, data: MoveItemsReq): Promise<IResponse<MoveItemsResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items/movement'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MoveItemsResp, 'MoveItemsResp')
  }

  /**
   *  Getting an user&#39;s owned item info.
   */
  getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(
    inventoryId: string,
    slotId: string,
    sourceItemId: string
  ): Promise<IResponse<ItemResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/slots/{slotId}/sourceItems/{sourceItemId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
      .replace('{slotId}', slotId)
      .replace('{sourceItemId}', sourceItemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }
}
