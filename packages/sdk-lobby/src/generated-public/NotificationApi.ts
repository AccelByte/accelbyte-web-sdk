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
import { CreateTopicRequest } from '../generated-definitions/CreateTopicRequest.js'
import { FreeFormNotificationRequest } from '../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationResponse } from '../generated-definitions/NotificationResponse.js'
import { NotificationTopicResponse } from '../generated-definitions/NotificationTopicResponse.js'
import { NotificationWithTemplateRequest } from '../generated-definitions/NotificationWithTemplateRequest.js'
import { TopicByNamespacesResponse } from '../generated-definitions/TopicByNamespacesResponse.js'
import { UpdateTopicRequest } from '../generated-definitions/UpdateTopicRequest.js'
import { Notification$ } from './endpoints/Notification$.js'

export function NotificationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get list of notifications in a namespace. The query parameters **startTime** and **endTime** can be filled with the **sequenceID** value in the notification, where the value is an epoch timestamp. Example **sequenceID** or epoch timestamp value: **1706595813**
   */
  async function getNotificationMe(queryParams?: {
    endTime?: number
    limit?: number
    offset?: number
    startTime?: number
  }): Promise<NotificationResponse> {
    const $ = new Notification$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getNotificationMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get topic by namespace.
   */
  async function getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<TopicByNamespacesResponse> {
    const $ = new Notification$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getNotificationTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function createNotificationTopic(data: CreateTopicRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createNotificationTopic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function deleteNotificationTopic_ByTopic(topic: string): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get topic information by topic name.
   */
  async function getNotificationTopic_ByTopic(topic: string): Promise<NotificationTopicResponse> {
    const $ = new Notification$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function updateNotificationTopic_ByTopic(topic: string, data: UpdateTopicRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateNotificationTopic_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends notification to a user.
   */
  async function createFreeformNotification_ByUserId(userId: string, data: FreeFormNotificationRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFreeformNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends notification to a user with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  async function createTemplatedNotification_ByUserId(userId: string, data: NotificationWithTemplateRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createTemplatedNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNotificationMe,
    getNotificationTopics,
    createNotificationTopic,
    deleteNotificationTopic_ByTopic,
    getNotificationTopic_ByTopic,
    updateNotificationTopic_ByTopic,
    createFreeformNotification_ByUserId,
    createTemplatedNotification_ByUserId
  }
}
