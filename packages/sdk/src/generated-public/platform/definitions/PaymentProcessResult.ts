/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentProcessResult = z.object({
  success: z.boolean(),
  pending: z.boolean(),
  redirectUrl: z.string().nullish(),
  reason: z.string().nullish()
})

export interface PaymentProcessResult extends z.TypeOf<typeof PaymentProcessResult> {}
