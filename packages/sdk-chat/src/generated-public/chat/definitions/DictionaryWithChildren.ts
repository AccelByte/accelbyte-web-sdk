/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DictionaryChild } from './DictionaryChild'

export const DictionaryWithChildren = z.object({
  falseNegatives: z.array(DictionaryChild).nullish(),
  falsePositives: z.array(DictionaryChild).nullish(),
  id: z.string(),
  namespace: z.string(),
  parentId: z.string(),
  word: z.string(),
  wordType: z.string()
})

export interface DictionaryWithChildren extends z.TypeOf<typeof DictionaryWithChildren> {}