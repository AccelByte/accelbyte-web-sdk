/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SimpleLatestBaseGame = z.object({
  platformId: z.string().nullish(),
  latestBuildId: z.string().nullish(),
  latestVersion: z.string().nullish()
})

export interface SimpleLatestBaseGame extends z.TypeOf<typeof SimpleLatestBaseGame> {}
