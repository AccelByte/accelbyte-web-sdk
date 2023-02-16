/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamSyncRequest = z.object({
  steamId: z.string(),
  appId: z.string(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  productId: z.string().nullish(),
  price: z.number().nullish(),
  currencyCode: z.string().nullish()
})

export interface SteamSyncRequest extends z.TypeOf<typeof SteamSyncRequest> {}
