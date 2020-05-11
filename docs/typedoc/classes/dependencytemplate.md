[mini-extract-plugin](../README.md) › [DependencyTemplate](dependencytemplate.md)

# Class: DependencyTemplate

## Hierarchy

* Tapable

* Tapable

  ↳ **DependencyTemplate**

## Implements

* DependencyTemplate

## Index

### Interfaces

* [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md)
* [Handler](../interfaces/dependencytemplate.handler.md)
* [Plugin](../interfaces/dependencytemplate.plugin.md)

### Variables

* [_pluginCompat](dependencytemplate.md#_plugincompat)
* [apply](dependencytemplate.md#apply)

### Functions

* [applyPlugins](dependencytemplate.md#applyplugins)
* [applyPlugins0](dependencytemplate.md#applyplugins0)
* [applyPlugins1](dependencytemplate.md#applyplugins1)
* [applyPlugins2](dependencytemplate.md#applyplugins2)
* [applyPluginsAsync](dependencytemplate.md#applypluginsasync)
* [applyPluginsAsyncSeries](dependencytemplate.md#applypluginsasyncseries)
* [applyPluginsAsyncSeries1](dependencytemplate.md#applypluginsasyncseries1)
* [applyPluginsAsyncSeriesBailResult](dependencytemplate.md#applypluginsasyncseriesbailresult)
* [applyPluginsAsyncSeriesBailResult1](dependencytemplate.md#applypluginsasyncseriesbailresult1)
* [applyPluginsAsyncWaterfall](dependencytemplate.md#applypluginsasyncwaterfall)
* [applyPluginsBailResult](dependencytemplate.md#applypluginsbailresult)
* [applyPluginsBailResult1](dependencytemplate.md#applypluginsbailresult1)
* [applyPluginsParallel](dependencytemplate.md#applypluginsparallel)
* [applyPluginsParallelBailResult](dependencytemplate.md#applypluginsparallelbailresult)
* [applyPluginsParallelBailResult1](dependencytemplate.md#applypluginsparallelbailresult1)
* [applyPluginsWaterfall](dependencytemplate.md#applypluginswaterfall)
* [applyPluginsWaterfall0](dependencytemplate.md#applypluginswaterfall0)
* [plugin](dependencytemplate.md#plugin)
* [mixin](dependencytemplate.md#static-mixin)

## Variables

###  _pluginCompat

• **_pluginCompat**: *Hook*

*Inherited from [DependencyTemplate](dependencytemplate.md).[_pluginCompat](dependencytemplate.md#_plugincompat)*

*Overrides [DependencyTemplate](dependencytemplate.md).[_pluginCompat](dependencytemplate.md#_plugincompat)*

Defined in node_modules/@types/tapable/index.d.ts:14

**`deprecated`** Private internals. Do not use directly

___

###  apply

▸ **apply**(): *void*

*Defined in [src/models/dependency-template.ts:13](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/models/dependency-template.ts#L13)*

**Returns:** *void*

## Functions

###  applyPlugins

▸ **applyPlugins**(`name`: string, ...`args`: any[]): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPlugins](dependencytemplate.md#applyplugins)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPlugins](dependencytemplate.md#applyplugins)*

Defined in node_modules/@types/tapable/index.d.ts:47

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
synchronously applies all registered handlers for target name(event id).

The handlers are called with all the rest arguments.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | plugin group name |
`...args` | any[] |   |

**Returns:** *void*

___

###  applyPlugins0

▸ **applyPlugins0**(`name`: string): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPlugins0](dependencytemplate.md#applyplugins0)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPlugins0](dependencytemplate.md#applyplugins0)*

Defined in node_modules/@types/tapable/index.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *void*

___

###  applyPlugins1

▸ **applyPlugins1**(`name`: string, `param`: any): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPlugins1](dependencytemplate.md#applyplugins1)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPlugins1](dependencytemplate.md#applyplugins1)*

Defined in node_modules/@types/tapable/index.d.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`param` | any |

**Returns:** *void*

___

###  applyPlugins2

▸ **applyPlugins2**(`name`: string, `param1`: any, `param2`: any): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPlugins2](dependencytemplate.md#applyplugins2)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPlugins2](dependencytemplate.md#applyplugins2)*

Defined in node_modules/@types/tapable/index.d.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`param1` | any |
`param2` | any |

**Returns:** *void*

___

###  applyPluginsAsync

▸ **applyPluginsAsync**(`name`: string, ...`args`: any[]): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsAsync](dependencytemplate.md#applypluginsasync)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsAsync](dependencytemplate.md#applypluginsasync)*

Defined in node_modules/@types/tapable/index.d.ts:115

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
asynchronously applies all registered handlers for target name(event id).

The handlers are called with all the rest arguments
and a callback function with the signature (err: Error) => void.

The handlers are called in series, one at a time. After all handlers are applied, callback is called.

If any handler invokes the (anonymous)callback with error, no more handlers will be called
and the real callback is call with that error.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`...args` | any[] |

**Returns:** *void*

___

###  applyPluginsAsyncSeries

▸ **applyPluginsAsyncSeries**(`name`: string, ...`args`: any[]): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncSeries](dependencytemplate.md#applypluginsasyncseries)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncSeries](dependencytemplate.md#applypluginsasyncseries)*

Defined in node_modules/@types/tapable/index.d.ts:125

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
same as `applyPluginsAsync`

**`see`** applyPluginsAsync

**`alias`** Tapable.applyPluginsAsync

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | - |
`...args` | any[] |   |

**Returns:** *void*

___

###  applyPluginsAsyncSeries1

▸ **applyPluginsAsyncSeries1**(`name`: string, `param`: any, `callback`: [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md)): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncSeries1](dependencytemplate.md#applypluginsasyncseries1)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncSeries1](dependencytemplate.md#applypluginsasyncseries1)*

Defined in node_modules/@types/tapable/index.d.ts:127

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`param` | any |
`callback` | [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md) |

**Returns:** *void*

___

###  applyPluginsAsyncSeriesBailResult

▸ **applyPluginsAsyncSeriesBailResult**(`name`: string, ...`args`: any[]): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncSeriesBailResult](dependencytemplate.md#applypluginsasyncseriesbailresult)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncSeriesBailResult](dependencytemplate.md#applypluginsasyncseriesbailresult)*

Defined in node_modules/@types/tapable/index.d.ts:143

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
asynchronously applies all registered handlers for target name(event id).

The handlers are called with all the rest arguments
and a callback function with the signature (...params) => void.

Handlers must invoke the (anonymous)callback, otherwise the series is cut down and real callback won't be
invoked.

The order is defined by registration order not by speed of the handler function.

If a handler returns something !== undefined, that value is returned and no more handlers will be applied.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`...args` | any[] |

**Returns:** *void*

___

###  applyPluginsAsyncSeriesBailResult1

▸ **applyPluginsAsyncSeriesBailResult1**(`name`: string, `param`: any, `callback`: [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md)): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncSeriesBailResult1](dependencytemplate.md#applypluginsasyncseriesbailresult1)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncSeriesBailResult1](dependencytemplate.md#applypluginsasyncseriesbailresult1)*

Defined in node_modules/@types/tapable/index.d.ts:156

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
asynchronously applies all registered handlers for target name(event id).

**`see`** applyPluginsAsyncSeriesBailResult

Note: the fundamental difference with `[applyPluginsAsyncSeriesBailResult](dependencytemplate.md#applypluginsasyncseriesbailresult)`, is that,
      `[applyPluginsAsyncSeriesBailResult](dependencytemplate.md#applypluginsasyncseriesbailresult)` passes the arguments as arguments list for plugins
      while `[applyPluginsAsyncSeriesBailResult1](dependencytemplate.md#applypluginsasyncseriesbailresult1)` passes the arguments as single param(any type)
      and a callback for plugins

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`param` | any |
`callback` | [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md) |

**Returns:** *void*

___

###  applyPluginsAsyncWaterfall

▸ **applyPluginsAsyncWaterfall**(`name`: string, `init`: any, `callback`: [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md)): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncWaterfall](dependencytemplate.md#applypluginsasyncwaterfall)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsAsyncWaterfall](dependencytemplate.md#applypluginsasyncwaterfall)*

Defined in node_modules/@types/tapable/index.d.ts:173

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
Asynchronously applies all registered handlers for target name(event id).

The handlers are called with the current value and a callback function with the signature (err: Error,
nextValue: any) => void.

`init` is used for the first handler. The rest handles are called with the value which previous handler uses
to invoke the (anonymous)callback invoked

After all handlers are applied, callback is called with the last value.

If any handler invokes the (anonymous)callback with error, no more handlers will be called
and the real callback is call with that error.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`init` | any |
`callback` | [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md) |

**Returns:** *void*

___

###  applyPluginsBailResult

▸ **applyPluginsBailResult**(`name`: string, ...`args`: any[]): *any*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsBailResult](dependencytemplate.md#applypluginsbailresult)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsBailResult](dependencytemplate.md#applypluginsbailresult)*

Defined in node_modules/@types/tapable/index.d.ts:87

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
synchronously applies all registered handlers for target name(event id).

The handlers are called with all the rest arguments.

If a handler returns something !== undefined, that value is returned and no more handlers will be applied.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`...args` | any[] |

**Returns:** *any*

___

###  applyPluginsBailResult1

▸ **applyPluginsBailResult1**(`name`: string, `param`: any): *any*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsBailResult1](dependencytemplate.md#applypluginsbailresult1)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsBailResult1](dependencytemplate.md#applypluginsbailresult1)*

Defined in node_modules/@types/tapable/index.d.ts:101

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
synchronously applies all registered handlers for target name(event id).

The handlers are called with target param

If a handler returns something !== undefined, the value is returned and no more handlers are applied.

Note: the fundamental difference with `[applyPluginsBailResult](dependencytemplate.md#applypluginsbailresult)`, is that,
      `[applyPluginsBailResult](dependencytemplate.md#applypluginsbailresult)` passes the arguments as arguments list for plugins
      while `[applyPluginsBailResult1](dependencytemplate.md#applypluginsbailresult1)` passes the arguments as single param(any type) for plugins

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`param` | any |

**Returns:** *any*

___

###  applyPluginsParallel

▸ **applyPluginsParallel**(`name`: string, ...`args`: any[]): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsParallel](dependencytemplate.md#applypluginsparallel)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsParallel](dependencytemplate.md#applypluginsparallel)*

Defined in node_modules/@types/tapable/index.d.ts:187

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
applies all registered handlers for target name(event id) in parallel.

The handlers are called with all the rest arguments
and a callback function with the signature (err?: Error) => void.

The callback function is called when all handlers call the callback without err.

If any handler invokes the callback with err, callback is invoked with this error and the other handlers are
skipped.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`...args` | any[] |

**Returns:** *void*

___

###  applyPluginsParallelBailResult

▸ **applyPluginsParallelBailResult**(`name`: string, ...`args`: any[]): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsParallelBailResult](dependencytemplate.md#applypluginsparallelbailresult)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsParallelBailResult](dependencytemplate.md#applypluginsparallelbailresult)*

Defined in node_modules/@types/tapable/index.d.ts:202

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
applies all registered handlers for target name(event id) in parallel.

The handlers are called with all the rest arguments
and a callback function with the signature (currentResult?: []) => void.

Handlers must call the callback.

The first result (either error or value) with is not undefined is passed to the callback.

The order is defined by registration not by speed of the handler function.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`...args` | any[] |

**Returns:** *void*

___

###  applyPluginsParallelBailResult1

▸ **applyPluginsParallelBailResult1**(`name`: string, `param`: any, `callback`: [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md)): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsParallelBailResult1](dependencytemplate.md#applypluginsparallelbailresult1)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsParallelBailResult1](dependencytemplate.md#applypluginsparallelbailresult1)*

Defined in node_modules/@types/tapable/index.d.ts:215

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
applies all registered handlers for target name(event id) in parallel.

**`see`** applyPluginsParallelBailResult

Note: the fundamental difference with `[applyPluginsParallelBailResult](dependencytemplate.md#applypluginsparallelbailresult)`, is that,
      `[applyPluginsParallelBailResult](dependencytemplate.md#applypluginsparallelbailresult)` passes the arguments as arguments list for plugins
      while `[applyPluginsParallelBailResult1](dependencytemplate.md#applypluginsparallelbailresult1)` passes the arguments as single param(any type)
      and a callback for plugins

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`param` | any |
`callback` | [CallbackFunction](../interfaces/dependencytemplate.callbackfunction.md) |

**Returns:** *void*

___

###  applyPluginsWaterfall

▸ **applyPluginsWaterfall**(`name`: string, `init`: any, ...`args`: any[]): *any*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsWaterfall](dependencytemplate.md#applypluginswaterfall)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsWaterfall](dependencytemplate.md#applypluginswaterfall)*

Defined in node_modules/@types/tapable/index.d.ts:65

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
synchronously applies all registered handlers for target name(event id).

The handlers are called with the return value of the previous handler and all the rest arguments.

`init` is used for the first handler.

return the returned value of the last handler

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`init` | any |
`...args` | any[] |

**Returns:** *any*

___

###  applyPluginsWaterfall0

▸ **applyPluginsWaterfall0**(`name`: string, `init`: any): *any*

*Inherited from [DependencyTemplate](dependencytemplate.md).[applyPluginsWaterfall0](dependencytemplate.md#applypluginswaterfall0)*

*Overrides [DependencyTemplate](dependencytemplate.md).[applyPluginsWaterfall0](dependencytemplate.md#applypluginswaterfall0)*

Defined in node_modules/@types/tapable/index.d.ts:77

**`deprecated`** Tapable.apply is deprecated. Call apply on the plugin directly instead
synchronously applies all registered handlers for target name(event id).

The handlers are called ONLY with the return value of the previous handler.

`init` is used for the first handler.

return the returned value of the last handler

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`init` | any |

**Returns:** *any*

___

###  plugin

▸ **plugin**(`names`: string, `handler`: function): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[plugin](dependencytemplate.md#plugin)*

*Overrides [DependencyTemplate](dependencytemplate.md).[plugin](dependencytemplate.md#plugin)*

Defined in node_modules/@types/tapable/index.d.ts:25

**`deprecated`** Tapable.plugin is deprecated. Use new API on `.hooks` instead
Register plugin(s)
This acts as the same as on() of EventEmitter, for registering a handler/listener to do something when the
signal/event happens.

**Parameters:**

▪ **names**: *string*

a string or an array of strings to generate the id(group name) of plugins

▪ **handler**: *function*

a function which provides the plugin functionality *

▸ (`this`: this, ...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | this |
`...args` | any[] |

**Returns:** *void*

▸ **plugin**(`names`: string[], `handler`: function): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[plugin](dependencytemplate.md#plugin)*

*Overrides [DependencyTemplate](dependencytemplate.md).[plugin](dependencytemplate.md#plugin)*

Defined in node_modules/@types/tapable/index.d.ts:28

**`deprecated`** Tapable.plugin is deprecated. Use new API on `.hooks` instead

**Parameters:**

▪ **names**: *string[]*

▪ **handler**: *function*

▸ (`this`: this, ...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | this |
`...args` | any[] |

**Returns:** *void*

___

### `Static` mixin

▸ **mixin**(`proto`: any): *void*

*Inherited from [DependencyTemplate](dependencytemplate.md).[mixin](dependencytemplate.md#static-mixin)*

*Overrides [DependencyTemplate](dependencytemplate.md).[mixin](dependencytemplate.md#static-mixin)*

Defined in node_modules/@types/tapable/index.d.ts:217

**Parameters:**

Name | Type |
------ | ------ |
`proto` | any |

**Returns:** *void*
