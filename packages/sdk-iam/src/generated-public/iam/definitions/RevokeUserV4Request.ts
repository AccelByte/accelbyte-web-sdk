/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevokeUserV4Request = z.object({ namespace: z.string(), userId: z.string() })

export interface RevokeUserV4Request extends z.TypeOf<typeof RevokeUserV4Request> {}