/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserIdentityUpdateRequestV3 = z.object({ emailAddress: z.string(), password: z.string() })

export interface UserIdentityUpdateRequestV3 extends z.TypeOf<typeof UserIdentityUpdateRequestV3> {}
