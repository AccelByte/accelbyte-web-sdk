/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SectionInfo } from './SectionInfo'

export const SectionInfoArray = z.array(SectionInfo)

export type SectionInfoArray = z.TypeOf<typeof SectionInfoArray>