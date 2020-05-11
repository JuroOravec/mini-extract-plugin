[mini-extract-plugin](../README.md) › [Hash](hash.md)

# Interface: Hash

Interface for the Hash object used in Webpack.

## Hierarchy

* **Hash**

## Index

### Methods

* [digest](hash.md#digest)
* [update](hash.md#update)

## Methods

###  digest

▸ **digest**(`encoding`: string): *string*

*Defined in [src/types/webpack.ts:30](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/webpack.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *string*

___

###  update

▸ **update**(`data`: string | Buffer, `inputEncoding?`: undefined | string): *this*

*Defined in [src/types/webpack.ts:29](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/webpack.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string &#124; Buffer |
`inputEncoding?` | undefined &#124; string |

**Returns:** *this*
