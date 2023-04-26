/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Pagination = z.object({ Next: z.string().nullish(), Previous: z.string().nullish() })

export interface Pagination extends z.TypeOf<typeof Pagination> {}