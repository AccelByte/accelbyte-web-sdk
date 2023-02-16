/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TokenThirdPartyLinkStatusResponse = z.object({ linked: z.boolean() })

export interface TokenThirdPartyLinkStatusResponse extends z.TypeOf<typeof TokenThirdPartyLinkStatusResponse> {}
