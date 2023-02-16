/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ValidationDetailPublic } from './ValidationDetailPublic'

export const InputValidationDataPublic = z.object({ field: z.string(), validation: ValidationDetailPublic })

export interface InputValidationDataPublic extends z.TypeOf<typeof InputValidationDataPublic> {}
