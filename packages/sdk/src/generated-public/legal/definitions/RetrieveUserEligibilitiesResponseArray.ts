/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveUserEligibilitiesResponse } from './RetrieveUserEligibilitiesResponse'

export const RetrieveUserEligibilitiesResponseArray = z.array(RetrieveUserEligibilitiesResponse)

export interface RetrieveUserEligibilitiesResponseArray extends z.TypeOf<typeof RetrieveUserEligibilitiesResponseArray> {}
