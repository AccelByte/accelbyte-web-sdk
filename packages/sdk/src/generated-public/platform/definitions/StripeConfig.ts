/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StripeConfig = z.object({
  publishableKey: z.string().nullish(),
  secretKey: z.string().nullish(),
  webhookSecret: z.string().nullish(),
  allowedPaymentMethodTypes: z.array(z.string()).nullish()
})

export interface StripeConfig extends z.TypeOf<typeof StripeConfig> {}
