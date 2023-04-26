/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'
import { UserLinkedPlatformV3 } from './UserLinkedPlatformV3'

export const UserLinkedPlatformsResponseV3 = z.object({ data: z.array(UserLinkedPlatformV3), paging: PaginationV3 })

export interface UserLinkedPlatformsResponseV3 extends z.TypeOf<typeof UserLinkedPlatformsResponseV3> {}