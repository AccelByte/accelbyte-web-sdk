/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NativeSessionSetting } from './NativeSessionSetting'

export const ConfigurationTemplateResponse = z.object({
  clientVersion: z.string(),
  createdAt: z.string(),
  deployment: z.string(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  last: z.string(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  name: z.string(),
  namespace: z.string(),
  nativeSessionSetting: NativeSessionSetting,
  persistent: z.boolean(),
  requestedRegions: z.array(z.string()).nullish(),
  textChat: z.boolean(),
  type: z.string(),
  updatedAt: z.string()
})

export interface ConfigurationTemplateResponse extends z.TypeOf<typeof ConfigurationTemplateResponse> {}