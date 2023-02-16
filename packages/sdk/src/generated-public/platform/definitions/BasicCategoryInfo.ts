/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BasicCategoryInfo = z.object({
  namespace: z.string(),
  parentCategoryPath: z.string(),
  categoryPath: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  root: z.boolean().nullish()
})

export interface BasicCategoryInfo extends z.TypeOf<typeof BasicCategoryInfo> {}
