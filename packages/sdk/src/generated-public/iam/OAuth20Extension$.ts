/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CountryLocationResponse } from './definitions/CountryLocationResponse'
import { GameTokenCodeResponse } from './definitions/GameTokenCodeResponse'
import { OneTimeLinkingCodeResponse } from './definitions/OneTimeLinkingCodeResponse'
import { OneTimeLinkingCodeValidationResponse } from './definitions/OneTimeLinkingCodeValidationResponse'
import { TokenResponseV3 } from './definitions/TokenResponseV3'

export class OAuth20Extension$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This endpoint is being used to authenticate a user account.
   * It validates user's email / username and password.
   * Deactivated or login-banned users are unable to login.
   * Redirect URI and Client ID must be specified as a pair and only used to redirect to the specified redirect URI in case the requestId is no longer valid.
   *
   * <h2>Device Cookie Validation</h2>
   *
   * Device Cookie is used to protect the user account from brute force login attack, <a target="_blank" href="https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies">more detail from OWASP<a>.
   * This endpoint will read device cookie from cookie <b>auth-trust-id</b>. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
   *
   * Action code: 10801
   */
  postIamV3Authenticate(data: {
    user_name: string | null
    password: string | null
    request_id: string | null
    redirect_uri?: string | null
    client_id?: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/authenticate'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * This endpoint is being used to authenticate a user account and perform platform link.
   * It validates user's email / username and password.
   * If user already enable 2FA, then invoke <i>/mfa/verify</i> using <b>mfa_token</b> from this endpoint response.
   *
   * <h2>Device Cookie Validation</h2>
   *
   * Device Cookie is used to protect the user account from brute force login attack, <a target="_blank" href="https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies">more detail from OWASP<a>.
   * This endpoint will read device cookie from cookie <b>auth-trust-id</b>. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
   *
   */
  postIamV3AuthenticateWithLink<T = TokenResponseV3>(data: {
    username: string | null
    password: string | null
    linkingToken: string | null
    client_id: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/authenticateWithLink'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3)
  }

  /**
   * <p>This endpoint is being used to create headless account after 3rd platform authenticated, and response token .
   * 					The 'linkingToken' in request body is received from "/platforms/{platformId}/token"
   * 					when 3rd platform account is not linked to justice account yet.'</p>
   */
  postIamV3HeadlessToken<T = TokenResponseV3>(data: { linkingToken: string | null; extend_exp?: boolean | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/headless/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3)
  }

  /**
   * <p>This endpoint is being used to request the one time code [8 length] for headless account to link or upgrade to a full account.<br>
   * 		It require a valid user token.<br>
   * 		Should specify the target platform id and current user should already linked to this platform.<br>
   * 		Current user should be a headless account.<br>
   * 		</p>
   */
  postIamV3LinkCodeRequest<T = OneTimeLinkingCodeResponse>(data: { platformId: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/link/code/request'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, OneTimeLinkingCodeResponse)
  }

  /**
   * <p>This endpoint is being used to validate one time link code.<br>
   * 		It require a valid user token.<br>
   * 		Should specify the target platform id and current user should already linked to this platform.<br>
   * 		Current user should be a headless account.<br>
   * 		</p>
   */
  postIamV3LinkCodeValidate<T = OneTimeLinkingCodeValidationResponse>(data: { oneTimeLinkCode: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/link/code/validate'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, OneTimeLinkingCodeValidationResponse)
  }

  /**
   * <p>This endpoint is being used to generate user's token by one time link code.<br>
   * 		It require publisher ClientID<br>
   * 		It required a code which can be generated from <strong>/iam/v3/link/code/request</strong>.<br>
   * 		</p>
   */
  postIamV3LinkTokenExchange<T = TokenResponseV3>(data: {
    oneTimeLinkCode: string | null
    client_id: string | null
  }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/link/token/exchange'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3)
  }

  /**
   * <p>This endpoint get country location based on the request.</p>
   */
  fetchIamV3LocationCountry<T = CountryLocationResponse>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/location/country'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountryLocationResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint is used to remove <b>access_token</b>, <b>refresh_token</b> from cookie and revoke token from usage.</p>
   * 		<p>Supported methods:</p>
   * 			<ul>
   * 				<li>VerifyToken to verify token from header</li>
   * 				<li>AddTokenToRevocationList to revoke token with TTL</li>
   * 			</ul>
   */
  postIamV3Logout(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/logout'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>This endpoint is being used to request the code to generate publisher user's game token.<br>
   * 		It require a valid user token with publisher namespace.<br>
   * 		Path namespace should be a game namespace.<br>
   * 		Client ID should match the target namespace.
   * 		It response a code and it can be consumed by <strong>/iam/v3/token/exchange</strong>
   * 		</p>
   */
  postV3NamespaceByNamespaceTokenRequest<T = GameTokenCodeResponse>(data: { client_id: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/namespace/{namespace}/token/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, GameTokenCodeResponse)
  }

  /**
   * This endpoint authenticates user platform. It validates user to its
   *           respective platforms. Deactivated or login-banned users are unable to login. <br>
   * 		  <p>If already linked with justice account or match SSO condition, will redirect to client's redirect url with code. then invoke '/iam/v3/oauth/token' with grant_type=authorization_code</p>
   * 		  <p>If already not linked with justice account and not match SSO condition, will redirect to client's account linking page</p>
   *           <h2>Supported platforms:</h2><ul>
   *           <li><strong>steamopenid</strong></li>Steam login page will redirects to this endpoint after login success
   *           as previously defined on openID request parameter <code>openid.return_to</code> when request login to steam
   *           https://openid.net/specs/openid-authentication-2_0.html#anchor27
   *           <li><strong>ps4web</strong></li>PS4 login page will redirects to this endpoint after login success
   *           as previously defined on authorize request parameter <code>redirect_uri</code>
   * 		  https://ps4.siedev.net/resources/documents/WebAPI/1/Auth_WebAPI-Reference/0002.html#0GetAccessTokenUsingAuthorizationCode
   *           <li><strong>xblweb</strong></li>XBL login page will redirects to this endpoint after login success
   *           as previously defined on authorize request parameter <code>redirect_uri</code>
   *           <li><strong>epicgames</strong></li>Epicgames login page will redirects to this endpoint after login success
   *           or an error occurred. If error, it redirects to the login page.
   *           <li><strong>twitch</strong></li>Twitch login page will redirects to this endpoint after login success
   *           as previously defined on authorize request parameter <code>redirect_uri</code>
   *           <li><strong>facebook</strong></li>Facebook login page will redirects to this endpoint after login success
   *           as previously defined on authorize request parameter <code>redirect_uri</code>
   *           <li><strong>google</strong></li>Google login page will redirects to this endpoint after login success
   *           as previously defined on authorize request parameter <code>redirect_uri</code>
   * 		  		<li><strong>snapchat</strong></li>Snapchat login page will redirects to this endpoint after login success
   *           as previously defined on authorize request parameter <code>redirect_uri</code>
   * 					<li><strong>discord</strong></li>Discord login page will redirects to this endpoint after login success
   *           as previously defined on authorize request parameter <code>redirect_uri</code>
   *           </ul> action code : 10709
   */
  fetchV3PlatformsByPlatformidAuthenticate(
    platformId: string,
    queryParams: {
      state: string | null
      ns?: string | null
      mode?: string | null
      op_endpoint?: string | null
      claimed_id?: string | null
      identity?: string | null
      return_to?: string | null
      response_nonce?: string | null
      assoc_handle?: string | null
      signed?: string | null
      sig?: string | null
      code?: string | null
      error?: string | null
    }
  ): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/platforms/{platformId}/authenticate'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint is being used to generate publisher user's game token.<br>
   * 		It require basic header with ClientID and Secret, it should match the ClientID when call <strong>/iam/v3/namespace/{namespace}/token/request</strong><br>
   * 		It required a code which can be generated from <strong>/iam/v3/namespace/{namespace}/token/request</strong>.<br>
   * 		</p>
   */
  postIamV3TokenExchange<T = TokenResponseV3>(data: { code: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/token/exchange'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3)
  }
}
