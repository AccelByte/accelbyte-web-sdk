[@accelbyte/sdk](../README.md) / [iam/UserAuthorization](../modules/iam_UserAuthorization.md) / LoginErrorCancelled

# Class: LoginErrorCancelled

[iam/UserAuthorization](../modules/iam_UserAuthorization.md).LoginErrorCancelled

## Hierarchy

- `Error`

  ↳ **`LoginErrorCancelled`**

## Table of contents

### Constructors

- [constructor](iam_UserAuthorization.LoginErrorCancelled.md#constructor)

### Properties

- [cause](iam_UserAuthorization.LoginErrorCancelled.md#cause)
- [message](iam_UserAuthorization.LoginErrorCancelled.md#message)
- [name](iam_UserAuthorization.LoginErrorCancelled.md#name)
- [stack](iam_UserAuthorization.LoginErrorCancelled.md#stack)
- [prepareStackTrace](iam_UserAuthorization.LoginErrorCancelled.md#preparestacktrace)
- [stackTraceLimit](iam_UserAuthorization.LoginErrorCancelled.md#stacktracelimit)

### Methods

- [captureStackTrace](iam_UserAuthorization.LoginErrorCancelled.md#capturestacktrace)

## Constructors

### constructor

• **new LoginErrorCancelled**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1028

• **new LoginErrorCancelled**(`message?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:30

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
