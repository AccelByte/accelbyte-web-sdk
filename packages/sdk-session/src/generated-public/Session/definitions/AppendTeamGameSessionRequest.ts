/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PartyMembers } from './PartyMembers'
import { Team } from './Team'

export const AppendTeamGameSessionRequest = z.object({
  additionalMembers: z.array(PartyMembers),
  proposedTeams: z.array(Team),
  version: z.number().int()
})

export interface AppendTeamGameSessionRequest extends z.TypeOf<typeof AppendTeamGameSessionRequest> {}