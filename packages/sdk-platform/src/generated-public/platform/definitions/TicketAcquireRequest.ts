/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketAcquireRequest = z.object({ count: z.number().int(), orderNo: z.string() })

export interface TicketAcquireRequest extends z.TypeOf<typeof TicketAcquireRequest> {}