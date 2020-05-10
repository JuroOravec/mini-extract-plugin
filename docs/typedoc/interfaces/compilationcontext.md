[mini-extract-plugin](../README.md) › [CompilationContext](compilationcontext.md)

# Interface: CompilationContext <**MEP**>

Context object extending `CompilationContext` with compilation instance
exposed to the compiler's `thisCompilation` hook.

## Type parameters

▪ **MEP**: *[MiniExtractPlugin](miniextractplugin.md)*

## Hierarchy

  ↳ [CompilerContext](compilercontext.md)‹MEP›

  ↳ **CompilationContext**

  ↳ [RenderContext](rendercontext.md)

## Index

### Properties

* [classOptions](compilationcontext.md#classoptions)
* [compilation](compilationcontext.md#compilation)
* [compiler](compilationcontext.md#compiler)
* [options](compilationcontext.md#options)
* [plugin](compilationcontext.md#plugin)

## Properties

###  classOptions

• **classOptions**: *MEP["classOptions"]*

*Inherited from [ContextBase](contextbase.md).[classOptions](contextbase.md#classoptions)*

*Defined in [src/types/context.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/context.ts#L20)*

___

###  compilation

• **compilation**: *Compilation*

*Defined in [src/types/context.ts:41](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/context.ts#L41)*

___

###  compiler

• **compiler**: *Compiler*

*Inherited from [CompilerContext](compilercontext.md).[compiler](compilercontext.md#compiler)*

*Defined in [src/types/context.ts:31](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/context.ts#L31)*

___

###  options

• **options**: *MEP["options"]*

*Inherited from [ContextBase](contextbase.md).[options](contextbase.md#options)*

*Defined in [src/types/context.ts:21](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/context.ts#L21)*

___

###  plugin

• **plugin**: *MEP*

*Inherited from [ContextBase](contextbase.md).[plugin](contextbase.md#plugin)*

*Defined in [src/types/context.ts:19](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/context.ts#L19)*
