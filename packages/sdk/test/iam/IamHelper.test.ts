/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { IamHelper } from '@accelbyte/sdk/api/iam/IamHelper'
import { describe, expect, test } from 'vitest'
import { BanType } from '@accelbyte/sdk/models/UserTypes'
import { USER } from './TestConstants'

describe('currentUserIsHeadlessAccount', () => {
  test('null input', () => {
    expect(IamHelper.currentUserIsHeadlessAccount(null)).toBe(false)
  })

  test('headless account', () => {
    expect(IamHelper.currentUserIsHeadlessAccount(USER)).toBe(true)
  })

  test('headed account', () => {
    expect(
      IamHelper.currentUserIsHeadlessAccount({
        ...USER,
        emailAddress: 'test-email@accelbyte.net'
      })
    ).toBe(false)
  })
})

describe('currentUserNeedsVerification', () => {
  test('null input', () => {
    expect(IamHelper.currentUserNeedsVerification(null)).toBe(false)
  })

  test("user hasn't verified their email", () => {
    expect(
      IamHelper.currentUserNeedsVerification({
        ...USER,
        emailAddress: 'test-email@accelbyte.net',
        emailVerified: false
      })
    ).toBe(true)
  })

  test('user has verified their email', () => {
    expect(
      IamHelper.currentUserNeedsVerification({
        ...USER,
        emailAddress: 'test-email@accelbyte.net',
        emailVerified: true
      })
    ).toBe(false)
  })
})

describe('currentUserIsUpdatingEmail', () => {
  test('null input', () => {
    expect(IamHelper.currentUserIsUpdatingEmail(null)).toBe(false)
  })

  test('not updating email', () => {
    expect(IamHelper.currentUserIsUpdatingEmail(USER)).toBe(false)
  })

  test('currently updating email', () => {
    expect(
      IamHelper.currentUserIsUpdatingEmail({
        ...USER,
        newEmailAddress: 'test-new-email@accelbyte.net',
        emailAddress: 'test-email@accelbyte.net',
        emailVerified: false
      })
    ).toBe(true)
  })
})

describe('currentUserIsEligible', () => {
  test('null input', () => {
    expect(IamHelper.currentUserIsEligible(null)).toBe(false)
  })

  test('ineligible user', () => {
    // TODO: is it possible that there is an ineligible user?
  })

  test('eligible user', () => {
    expect(IamHelper.currentUserIsEligible(USER)).toBe(true)
  })
})

describe('currentUserCanOrder', () => {
  test('null input', () => {
    expect(IamHelper.currentUserCanOrder(null)).toBe(true)
  })

  test('cannot order because of banned', () => {
    expect(
      IamHelper.currentUserCanOrder({
        ...USER,
        bans: [
          {
            ban: BanType.enum.ORDER_AND_PAYMENT,
            banId: '1234',
            endDate: new Date(Date.now() + 3600).toISOString()
          }
        ]
      })
    ).toBe(false)
  })

  test('can order, ban expired', () => {
    expect(
      IamHelper.currentUserCanOrder({
        ...USER,
        bans: [
          {
            ban: BanType.enum.ORDER_AND_PAYMENT,
            banId: '1234',
            endDate: new Date(Date.now() - 3600).toISOString()
          }
        ]
      })
    ).toBe(true)
  })

  test('can order, no ban', () => {
    expect(IamHelper.currentUserCanOrder(USER)).toBe(true)
  })
})
