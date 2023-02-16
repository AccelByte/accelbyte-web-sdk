/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Localization = z.object({
  title: z.string(),
  description: z.string().nullish(),
  longDescription: z.string().nullish(),
  localExt: z.record(z.any()).nullish()
})

export interface Localization extends z.TypeOf<typeof Localization> {}
