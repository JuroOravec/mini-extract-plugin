[mini-extract-plugin](../README.md) › [SyncWaterfallHook](syncwaterfallhook.md)

# Interface: SyncWaterfallHook <**T1, T2, T3**>

## Type parameters

▪ **T1**

▪ **T2**

▪ **T3**

## Hierarchy

* SyncWaterfallHook‹T1, T2, T3›

  ↳ **SyncWaterfallHook**

## Index

### Constructors

* [constructor](syncwaterfallhook.md#constructor)

### Properties

* [_hookID](syncwaterfallhook.md#_hookid)
* [call](syncwaterfallhook.md#call)
* [callAsync](syncwaterfallhook.md#callasync)
* [intercept](syncwaterfallhook.md#intercept)
* [interceptors](syncwaterfallhook.md#interceptors)
* [isUsed](syncwaterfallhook.md#isused)
* [promise](syncwaterfallhook.md#promise)
* [tap](syncwaterfallhook.md#tap)
* [tapAsync](syncwaterfallhook.md#tapasync)
* [tapPromise](syncwaterfallhook.md#tappromise)
* [taps](syncwaterfallhook.md#taps)

### Methods

* [compile](syncwaterfallhook.md#compile)

## Constructors

###  constructor

\+ **new SyncWaterfallHook**(`tapArgumentNames?`: string[]): *[SyncWaterfallHook](syncwaterfallhook.md)*

*Inherited from [SyncHook](synchook.md).[constructor](synchook.md#constructor)*

Defined in node_modules/@types/tapable/index.d.ts:248

**Parameters:**

Name | Type |
------ | ------ |
`tapArgumentNames?` | string[] |

**Returns:** *[SyncWaterfallHook](syncwaterfallhook.md)*

## Properties

###  _hookID

• **_hookID**: *3*

*Defined in [src/types/hooks-definition.ts:49](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/types/hooks-definition.ts#L49)*

___

###  call

• **call**: *function*

*Inherited from [SyncHook](synchook.md).[call](synchook.md#call)*

Defined in node_modules/@types/tapable/index.d.ts:254

#### Type declaration:

▸ (`arg1?`: TArg1, `arg2?`: TArg2, `arg3?`: TArg3, ...`args`: any[]): *T1*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | TArg1 |
`arg2?` | TArg2 |
`arg3?` | TArg3 |
`...args` | any[] |

___

###  callAsync

• **callAsync**: *function*

*Inherited from [SyncHook](synchook.md).[callAsync](synchook.md#callasync)*

Defined in node_modules/@types/tapable/index.d.ts:256

#### Type declaration:

▸ (`arg1?`: TArg1, `arg2?`: TArg2, `arg3?`: TArg3, ...`args`: any[]): *T1*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | TArg1 |
`arg2?` | TArg2 |
`arg3?` | TArg3 |
`...args` | any[] |

___

###  intercept

• **intercept**: *function*

*Inherited from [SyncHook](synchook.md).[intercept](synchook.md#intercept)*

Defined in node_modules/@types/tapable/index.d.ts:262

#### Type declaration:

▸ (`interceptor`: HookInterceptor): *void*

**Parameters:**

Name | Type |
------ | ------ |
`interceptor` | HookInterceptor |

___

###  interceptors

• **interceptors**: *HookInterceptor[]*

*Inherited from [SyncHook](synchook.md).[interceptors](synchook.md#interceptors)*

Defined in node_modules/@types/tapable/index.d.ts:251

___

###  isUsed

• **isUsed**: *function*

*Inherited from [SyncHook](synchook.md).[isUsed](synchook.md#isused)*

Defined in node_modules/@types/tapable/index.d.ts:253

#### Type declaration:

▸ (): *boolean*

___

###  promise

• **promise**: *function*

*Inherited from [SyncHook](synchook.md).[promise](synchook.md#promise)*

Defined in node_modules/@types/tapable/index.d.ts:255

#### Type declaration:

▸ (`arg1?`: TArg1, `arg2?`: TArg2, `arg3?`: TArg3, ...`args`: any[]): *Promise‹T1›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1?` | TArg1 |
`arg2?` | TArg2 |
`arg3?` | TArg3 |
`...args` | any[] |

___

###  tap

• **tap**: *function*

*Inherited from [SyncHook](synchook.md).[tap](synchook.md#tap)*

Defined in node_modules/@types/tapable/index.d.ts:259

#### Type declaration:

▸ (`name`: string | Tap, `fn`: function): *void*

**Parameters:**

▪ **name**: *string | Tap*

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, ...`args`: any[]): *T1*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`...args` | any[] |

___

###  tapAsync

• **tapAsync**: *function*

*Inherited from [SyncHook](synchook.md).[tapAsync](synchook.md#tapasync)*

Defined in node_modules/@types/tapable/index.d.ts:260

#### Type declaration:

▸ (`name`: string | Tap, `fn`: function): *void*

**Parameters:**

▪ **name**: *string | Tap*

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, ...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`...args` | any[] |

___

###  tapPromise

• **tapPromise**: *function*

*Inherited from [SyncHook](synchook.md).[tapPromise](synchook.md#tappromise)*

Defined in node_modules/@types/tapable/index.d.ts:261

#### Type declaration:

▸ (`name`: string | Tap, `fn`: function): *void*

**Parameters:**

▪ **name**: *string | Tap*

▪ **fn**: *function*

▸ (`arg1`: T1, `arg2`: T2, `arg3`: T3, ...`args`: any[]): *Promise‹T1›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |
`arg2` | T2 |
`arg3` | T3 |
`...args` | any[] |

___

###  taps

• **taps**: *any[]*

*Inherited from [SyncHook](synchook.md).[taps](synchook.md#taps)*

Defined in node_modules/@types/tapable/index.d.ts:250

## Methods

###  compile

▸ **compile**(`options`: HookCompileOptions): *Function*

*Inherited from [SyncHook](synchook.md).[compile](synchook.md#compile)*

Defined in node_modules/@types/tapable/index.d.ts:258

**Parameters:**

Name | Type |
------ | ------ |
`options` | HookCompileOptions |

**Returns:** *Function*
