/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TwitchIapConfigInfo = z.object({
  namespace: z.string(),
  clientId: z.string().nullish(),
  clientSecret: z.string().nullish(),
  organizationId: z.string().nullish()
})

export interface TwitchIapConfigInfo extends z.TypeOf<typeof TwitchIapConfigInfo> {}