/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AcceptedPoliciesRequest = z.object({
  isAccepted: z.boolean(),
  localizedPolicyVersionId: z.string(),
  policyId: z.string(),
  policyVersionId: z.string()
})

export interface AcceptedPoliciesRequest extends z.TypeOf<typeof AcceptedPoliciesRequest> {}
