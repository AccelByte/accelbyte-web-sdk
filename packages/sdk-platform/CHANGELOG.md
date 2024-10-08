# @accelbyte/sdk-platform

## 6.0.1

### Patch Changes

- da4e505: fix(packages): fix failed publish because of invalid tag
- Updated dependencies [da4e505]
  - @accelbyte/sdk@4.0.1
  - @accelbyte/validator@0.2.23

## 6.0.0

### Major Changes

- cfb0dba: AGS TypeScript SDK

  - SDK Initialization: The SDK now requires two separate fields: `coreConfig` and `axiosConfig` for initialization, instead of a single options object. This change was made to clearly separate concerns between core SDK configurations and Axios-specific configurations, improving clarity and flexibility.
  - Return Response: API function calls now return `{ data, headers, status }` instead of just `data`.
  - Event Listeners: Event listeners (e.g., `onSessionExpired`) have been replaced by Axios interceptors.
  - Interceptors: Moving event listeners to interceptors improves customization, allowing consumers to handle events and errors through the Axios interceptor rather than relying on SDK-specific events.
  - Token Repository: Allow tokens to be attached in SDK and rename `refreshTokens` method to `setToken` for Extend compatibilty.
  - API Classes and Methods: Fix redundant API Classes name and inaccurate methods name.
  - Generated React Query: Optionally access AGS using react-query for better server-state management.

### Patch Changes

- Updated dependencies [cfb0dba]
  - @accelbyte/sdk@4.0.0
  - @accelbyte/validator@0.2.22

## 2.3.3

### Patch Changes

- Updated dependencies [8bba3b81b]
- Updated dependencies [d84f877e9]
  - @accelbyte/validator@0.2.16
  - @accelbyte/sdk@2.0.6

## 2.3.1

### Patch Changes

- Updated dependencies [e1c22f0f9]
  - @accelbyte/validator@0.2.15
  - @accelbyte/sdk@2.0.4

## 2.3.0

### Patch Changes

- 4f5b32ea9: fix: change get countries from basic into iam
