[mini-extract-plugin](../README.md) › [CompilationContext](compilationcontext.md)

# Interface: CompilationContext <**MEP**>

Context object extending `CompilationContext` with compilation instance
exposed to the compiler's `thisCompilation` hook.

## Type parameters

▪ **MEP**: *[AbstractMiniExtractPlugin](abstractminiextractplugin.md)*

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

*Defined in [src/types/context.ts:19](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/context.ts#L19)*

___

###  compilation

• **compilation**: *Compilation*

*Defined in [src/types/context.ts:40](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/context.ts#L40)*

___

###  compiler

• **compiler**: *Compiler*

*Inherited from [CompilerContext](compilercontext.md).[compiler](compilercontext.md#compiler)*

*Defined in [src/types/context.ts:30](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/context.ts#L30)*

___

###  options

• **options**: *MEP["options"]*

*Inherited from [ContextBase](contextbase.md).[options](contextbase.md#options)*

*Defined in [src/types/context.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/context.ts#L20)*

___

###  plugin

• **plugin**: *MEP*

*Inherited from [ContextBase](contextbase.md).[plugin](contextbase.md#plugin)*

*Defined in [src/types/context.ts:18](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/context.ts#L18)*
