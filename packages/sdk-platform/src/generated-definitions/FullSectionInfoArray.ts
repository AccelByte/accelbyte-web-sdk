/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FullSectionInfo } from './FullSectionInfo.js'

export const FullSectionInfoArray = z.array(FullSectionInfo)

export interface FullSectionInfoArray extends z.TypeOf<typeof FullSectionInfoArray> {}
