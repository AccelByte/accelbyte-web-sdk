/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserProfilePublicInfo } from './UserProfilePublicInfo'

export const UserProfilePublicInfoArray = z.array(UserProfilePublicInfo)

export interface UserProfilePublicInfoArray extends z.TypeOf<typeof UserProfilePublicInfoArray> {}
