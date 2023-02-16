/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'
import { PublicUserInformationV3 } from './PublicUserInformationV3'

export const PublicUserInformationResponseV3 = z.object({ data: z.array(PublicUserInformationV3), paging: PaginationV3 })

export interface PublicUserInformationResponseV3 extends z.TypeOf<typeof PublicUserInformationResponseV3> {}
