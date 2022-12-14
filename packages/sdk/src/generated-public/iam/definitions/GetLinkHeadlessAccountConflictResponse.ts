/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AccountProgressionInfo } from './AccountProgressionInfo'

export const GetLinkHeadlessAccountConflictResponse = z.object({
  currentAccount: AccountProgressionInfo.nullish(),
  headlessAccount: AccountProgressionInfo.nullish(),
  platformAlreadyLinked: z.boolean(),
  platformId: z.string(),
  platformLinkConflict: z.boolean()
})

export type GetLinkHeadlessAccountConflictResponse = z.TypeOf<typeof GetLinkHeadlessAccountConflictResponse>
