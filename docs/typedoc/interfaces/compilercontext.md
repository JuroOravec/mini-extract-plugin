[mini-extract-plugin](../README.md) › [CompilerContext](compilercontext.md)

# Interface: CompilerContext <**MEP**>

Context object with compiler instance exposed to the plugin's `apply`
method.

## Type parameters

▪ **MEP**: *[AbstractMiniExtractPlugin](abstractminiextractplugin.md)*

## Hierarchy

* [ContextBase](contextbase.md)‹MEP›

  ↳ **CompilerContext**

  ↳ [CompilationContext](compilationcontext.md)

## Index

### Properties

* [classOptions](compilercontext.md#classoptions)
* [compiler](compilercontext.md#compiler)
* [options](compilercontext.md#options)
* [plugin](compilercontext.md#plugin)

## Properties

###  classOptions

• **classOptions**: *MEP["classOptions"]*

*Inherited from [ContextBase](contextbase.md).[classOptions](contextbase.md#classoptions)*

*Defined in [src/types/context.ts:19](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/context.ts#L19)*

___

###  compiler

• **compiler**: *Compiler*

*Defined in [src/types/context.ts:30](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/context.ts#L30)*

___

###  options

• **options**: *MEP["options"]*

*Inherited from [ContextBase](contextbase.md).[options](contextbase.md#options)*

*Defined in [src/types/context.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/context.ts#L20)*

___

###  plugin

• **plugin**: *MEP*

*Inherited from [ContextBase](contextbase.md).[plugin](contextbase.md#plugin)*

*Defined in [src/types/context.ts:18](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/context.ts#L18)*
