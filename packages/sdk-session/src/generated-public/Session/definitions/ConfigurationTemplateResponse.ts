/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NativeSessionSetting } from './NativeSessionSetting.js'

export const ConfigurationTemplateResponse = z.object({
  PSNBaseUrl: z.string().nullish(),
  autoJoin: z.boolean().nullish(),
  clientVersion: z.string(),
  createdAt: z.string(),
  deployment: z.string(),
  disableCodeGeneration: z.boolean().nullish(),
  dsManualSetReady: z.boolean().nullish(),
  dsSource: z.string().nullish(),
  enableSecret: z.boolean(),
  fallbackClaimKeys: z.array(z.string()).nullish(),
  immutableStorage: z.boolean().nullish(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  last: z.string(),
  maxActiveSessions: z.number().int().nullish(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  name: z.string(),
  namespace: z.string(),
  nativeSessionSetting: NativeSessionSetting.nullish(),
  persistent: z.boolean(),
  preferredClaimKeys: z.array(z.string()).nullish(),
  requestedRegions: z.array(z.string()).nullish(),
  textChat: z.boolean(),
  tieTeamsSessionLifetime: z.boolean().nullish(),
  type: z.string(),
  updatedAt: z.string()
})

export interface ConfigurationTemplateResponse extends z.TypeOf<typeof ConfigurationTemplateResponse> {}
