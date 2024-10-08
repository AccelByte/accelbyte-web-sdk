/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import * as uuid from 'uuid'

export class SdkDevice {
  static ID_KEY = 'deviceId'

  static TYPE = {
    MOBILE: 'mobile',
    DESKTOP: 'desktop'
  }

  static getType = () => {
    return isMobile() ? SdkDevice.TYPE.MOBILE : SdkDevice.TYPE.DESKTOP
  }

  static generateUUID = () => {
    const deviceIdInUUID = uuid.v4().split('-').join('')
    localStorage.setItem(SdkDevice.ID_KEY, deviceIdInUUID)
    return deviceIdInUUID
  }

  static getDeviceId = () => {
    return localStorage.getItem(this.ID_KEY) || this.generateUUID()
  }
}

/*
  Below function is copied from npm 'is-mobile'
 */
const mobileRE =
  /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
const tabletRE = /android|ipad|playbook|silk/i

const isMobile = (opts?: any) => {
  if (!opts) opts = {}
  let ua = opts.ua
  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent
  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {
    ua = ua.headers['user-agent']
  }
  if (typeof ua !== 'string') return false

  let result = mobileRE.test(ua) || (!!opts.tablet && tabletRE.test(ua))

  if (
    !result &&
    opts.tablet &&
    opts.featureDetect &&
    navigator &&
    navigator.maxTouchPoints > 1 &&
    ua.indexOf('Macintosh') !== -1 &&
    ua.indexOf('Safari') !== -1
  ) {
    result = true
  }

  return result
}
