/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { UserSearchByPlatformIdResult } from './UserSearchByPlatformIdResult'

export const SearchUsersByPlatformIdResponse = z.object({ Data: z.array(UserSearchByPlatformIdResult), Paging: Pagination })

export interface SearchUsersByPlatformIdResponse extends z.TypeOf<typeof SearchUsersByPlatformIdResponse> {}
