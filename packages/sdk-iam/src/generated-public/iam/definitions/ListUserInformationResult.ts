/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserInfoResponse } from './UserInfoResponse'

export const ListUserInformationResult = z.object({ data: z.array(UserInfoResponse) })

export interface ListUserInformationResult extends z.TypeOf<typeof ListUserInformationResult> {}