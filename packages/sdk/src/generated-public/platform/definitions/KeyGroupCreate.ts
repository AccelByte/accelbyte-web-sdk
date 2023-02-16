/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const KeyGroupCreate = z.object({
  name: z.string(),
  description: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish()
})

export interface KeyGroupCreate extends z.TypeOf<typeof KeyGroupCreate> {}
