/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InGameItemSync = z.object({ targetNamespace: z.string(), targetItemId: z.string(), categoryPath: z.string() })

export interface InGameItemSync extends z.TypeOf<typeof InGameItemSync> {}
