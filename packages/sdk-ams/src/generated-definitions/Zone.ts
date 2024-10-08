/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Zone = z.object({ isDST: z.boolean(), name: z.string(), offset: z.number().int() })

export interface Zone extends z.TypeOf<typeof Zone> {}
