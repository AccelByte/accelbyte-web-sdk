/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LinkHeadlessAccountRequest = z.object({ chosenNamespaces: z.array(z.string()), oneTimeLinkCode: z.string() })

export type LinkHeadlessAccountRequest = z.TypeOf<typeof LinkHeadlessAccountRequest>
