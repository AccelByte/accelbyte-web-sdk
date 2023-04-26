/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PurchaseCondition } from './PurchaseCondition'

export const PurchaseConditionUpdate = z.object({ purchaseCondition: PurchaseCondition.nullish() })

export interface PurchaseConditionUpdate extends z.TypeOf<typeof PurchaseConditionUpdate> {}