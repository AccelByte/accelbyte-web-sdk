/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformRewardItem = z.object({ itemType: z.string().nullish(), itemId: z.string().nullish(), itemSku: z.string().nullish() })

export interface PlatformRewardItem extends z.TypeOf<typeof PlatformRewardItem> {}
