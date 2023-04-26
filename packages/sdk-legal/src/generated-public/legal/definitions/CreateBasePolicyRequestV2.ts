/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateBasePolicyRequestV2 = z.object({
  typeId: z.string().nullish(),
  basePolicyName: z.string().nullish(),
  description: z.string().nullish(),
  affectedCountries: z.array(z.string()).nullish(),
  affectedClientIds: z.array(z.string()).nullish(),
  tags: z.array(z.string()).nullish()
})

export interface CreateBasePolicyRequestV2 extends z.TypeOf<typeof CreateBasePolicyRequestV2> {}