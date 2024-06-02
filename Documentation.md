<a name="ArrayUtils"></a>

## ArrayUtils

Array utilities.

**Kind**: global class\
<a name="ArrayUtils.equal"></a>

### ArrayUtils.equal(first, second) ⇒ <code>boolean</code>

Check whether two arrays are equal.

**Kind**: static method of [<code>ArrayUtils</code>](#ArrayUtils)\
**Returns**: <code>boolean</code> - Whether two arrays are equal.

| Param  | Type               | Description     |
| ------ | ------------------ | --------------- |
| first  | <code>Array</code> | A first array.  |
| second | <code>Array</code> | A second array. |

**Example**

```js
ArrayUtils.equal([1], [1])
```

<a name="BasicUtils"></a>

## BasicUtils

Basic validation tools.

**Kind**: global class

- [BasicUtils](#BasicUtils)
  - [.safeToString\_(\[value\])](#BasicUtils.safeToString_)
  - [.isBoolean(\[value\])](#BasicUtils.isBoolean) ⇒ <code>boolean</code>
  - [.isNumber(\[value\])](#BasicUtils.isNumber) ⇒ <code>boolean</code>
  - [.isInteger(\[value\])](#BasicUtils.isInteger) ⇒ <code>boolean</code>
  - [.isString(\[value\])](#BasicUtils.isString) ⇒ <code>boolean</code>
  - [.isBigint(\[value\])](#BasicUtils.isBigint) ⇒ <code>boolean</code>
  - [.isSymbol(\[value\])](#BasicUtils.isSymbol) ⇒ <code>boolean</code>
  - [.isArray(\[value\])](#BasicUtils.isArray) ⇒ <code>boolean</code>
  - [.isObject(\[value\])](#BasicUtils.isObject) ⇒ <code>boolean</code>
  - [.isRegExp(\[value\])](#BasicUtils.isRegExp) ⇒ <code>boolean</code>
  - [.isFunction(\[value\])](#BasicUtils.isFunction) ⇒ <code>boolean</code>
  - [.isExisting(\[value\])](#BasicUtils.isExisting) ⇒ <code>boolean</code>
  - [.isSupported(\[value\])](#BasicUtils.isSupported) ⇒ <code>boolean</code>
  - [.isComparableSupported(\[value\])](#BasicUtils.isComparableSupported) ⇒ <code>boolean</code>
  - [.isSupportedTypeIdentifier(\[identifier\])](#BasicUtils.isSupportedTypeIdentifier) ⇒ <code>boolean</code>
  - [.isComparableSupportedTypeIdentifier(\[identifier\])](#BasicUtils.isComparableSupportedTypeIdentifier) ⇒ <code>boolean</code>
  - [.isValidator(\[value\])](#BasicUtils.isValidator) ⇒ <code>boolean</code>
  - [.isBooleanOrUndefined(\[value\])](#BasicUtils.isBooleanOrUndefined) ⇒ <code>boolean</code>
  - [.isNumberOrUndefined(\[value\])](#BasicUtils.isNumberOrUndefined) ⇒ <code>boolean</code>
  - [.isIntegerOrUndefined(\[value\])](#BasicUtils.isIntegerOrUndefined) ⇒ <code>boolean</code>
  - [.isStringOrUndefined(\[value\])](#BasicUtils.isStringOrUndefined) ⇒ <code>boolean</code>
  - [.isBigintOrUndefined(\[value\])](#BasicUtils.isBigintOrUndefined) ⇒ <code>boolean</code>
  - [.isSymbolOrUndefined(\[value\])](#BasicUtils.isSymbolOrUndefined) ⇒ <code>boolean</code>
  - [.isArrayOrUndefined(\[value\])](#BasicUtils.isArrayOrUndefined) ⇒ <code>boolean</code>
  - [.isObjectOrUndefined(\[value\])](#BasicUtils.isObjectOrUndefined) ⇒ <code>boolean</code>
  - [.isRegExpOrUndefined(\[value\])](#BasicUtils.isRegExpOrUndefined) ⇒ <code>boolean</code>
  - [.isFunctionOrUndefined(\[value\])](#BasicUtils.isFunctionOrUndefined) ⇒ <code>boolean</code>
  - [.isValidatorOrUndefined(\[value\])](#BasicUtils.isValidatorOrUndefined) ⇒ <code>boolean</code>
  - [.requireTypeByPredicate\_(predicate, value, argumentName, argumentIndex)](#BasicUtils.requireTypeByPredicate_)
  - [.requireTypeIdentifierByPredicate\_(predicate, identifier, argumentName, argumentIndex)](#BasicUtils.requireTypeIdentifierByPredicate_)
  - [.requireBoolean(\[value\], argumentName, argumentIndex)](#BasicUtils.requireBoolean)
  - [.requireNumber(\[value\], argumentName, argumentIndex)](#BasicUtils.requireNumber)
  - [.requireInteger(\[value\], argumentName, argumentIndex)](#BasicUtils.requireInteger)
  - [.requireString(\[value\], argumentName, argumentIndex)](#BasicUtils.requireString)
  - [.requireBigint(\[value\], argumentName, argumentIndex)](#BasicUtils.requireBigint)
  - [.requireSymbol(\[value\], argumentName, argumentIndex)](#BasicUtils.requireSymbol)
  - [.requireArray(\[value\], argumentName, argumentIndex)](#BasicUtils.requireArray)
  - [.requireObject(\[value\], argumentName, argumentIndex)](#BasicUtils.requireObject)
  - [.requireRegExp(\[value\], argumentName, argumentIndex)](#BasicUtils.requireRegExp)
  - [.requireFunction(\[value\], argumentName, argumentIndex)](#BasicUtils.requireFunction)
  - [.requireExisting(\[value\], argumentName, argumentIndex)](#BasicUtils.requireExisting)
  - [.requireSupported(\[value\], argumentName, argumentIndex)](#BasicUtils.requireSupported)
  - [.requireComparableSupported(\[value\], argumentName, argumentIndex)](#BasicUtils.requireComparableSupported)
  - [.requireSupportedTypeIdentifier(identifier, argumentName, argumentIndex)](#BasicUtils.requireSupportedTypeIdentifier)
  - [.requireComparableSupportedTypeIdentifier(identifier, argumentName, argumentIndex)](#BasicUtils.requireComparableSupportedTypeIdentifier)
  - [.requireValidator(\[value\], argumentName, argumentIndex)](#BasicUtils.requireValidator)
  - [.requireBooleanOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireBooleanOrUndefined)
  - [.requireNumberOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireNumberOrUndefined)
  - [.requireIntegerOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireIntegerOrUndefined)
  - [.requireStringOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireStringOrUndefined)
  - [.requireBigintOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireBigintOrUndefined)
  - [.requireSymbolOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireSymbolOrUndefined)
  - [.requireArrayOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireArrayOrUndefined)
  - [.requireObjectOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireObjectOrUndefined)
  - [.requireRegExpOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireRegExpOrUndefined)
  - [.requireFunctionOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireFunctionOrUndefined)
  - [.requireValidatorOrUndefined(\[value\], argumentName, argumentIndex)](#BasicUtils.requireValidatorOrUndefined)

<a name="BasicUtils.safeToString_"></a>

### BasicUtils.safeToString\_(\[value\])

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param     | Type             |
| --------- | ---------------- |
| \[value\] | <code>any</code> |

<a name="BasicUtils.isBoolean"></a>

### BasicUtils.isBoolean(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a boolean value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a boolean value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isBoolean(true)
```

<a name="BasicUtils.isNumber"></a>

### BasicUtils.isNumber(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a number value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a number value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isNumber(1)
```

<a name="BasicUtils.isInteger"></a>

### BasicUtils.isInteger(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is an integer value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an integer value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isInteger(1)
```

<a name="BasicUtils.isString"></a>

### BasicUtils.isString(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a string value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a string value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isString("Emily")
```

<a name="BasicUtils.isBigint"></a>

### BasicUtils.isBigint(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a bigint value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a bigint value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isBigint(9007199254740991n)
```

<a name="BasicUtils.isSymbol"></a>

### BasicUtils.isSymbol(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a symbol value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a symbol value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isSymbol(Symbol())
```

<a name="BasicUtils.isArray"></a>

### BasicUtils.isArray(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is an array value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an array value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isArray([1])
```

<a name="BasicUtils.isObject"></a>

### BasicUtils.isObject(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is an object value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an object value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isObject({ name: "Emily" })
```

<a name="BasicUtils.isRegExp"></a>

### BasicUtils.isRegExp(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a regular expression.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a regular expression.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isRegExp(/name/)
```

<a name="BasicUtils.isFunction"></a>

### BasicUtils.isFunction(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a function.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a function.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isFunction(() => console.log("Emily"))
```

<a name="BasicUtils.isExisting"></a>

### BasicUtils.isExisting(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is neither undefined or null value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a not null or undefined value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isExisting(true)
```

<a name="BasicUtils.isSupported"></a>

### BasicUtils.isSupported(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a supported validator value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a supported validator type value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isSupported(true)
```

<a name="BasicUtils.isComparableSupported"></a>

### BasicUtils.isComparableSupported(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a supported comparable validator value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a supported comparable validator type value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isComparableSupported(true)
```

<a name="BasicUtils.isSupportedTypeIdentifier"></a>

### BasicUtils.isSupportedTypeIdentifier(\[identifier\]) ⇒ <code>boolean</code>

Check whether a `identifier` is a supported validator type identifier.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `identifier` is a supported validator type identifier.

| Param          | Type             | Description    |
| -------------- | ---------------- | -------------- |
| \[identifier\] | <code>any</code> | An identifier. |

**Example**

```js
BasicUtils.isSupportedTypeIdentifier("boolean")
```

<a name="BasicUtils.isComparableSupportedTypeIdentifier"></a>

### BasicUtils.isComparableSupportedTypeIdentifier(\[identifier\]) ⇒ <code>boolean</code>

Check whether a `identifier` is a supported comparable validator type identifier.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `identifier` is a supported comparable validator type identifier.

| Param          | Type             | Description    |
| -------------- | ---------------- | -------------- |
| \[identifier\] | <code>any</code> | An identifier. |

**Example**

```js
BasicUtils.isComparableSupportedTypeIdentifier("boolean")
```

<a name="BasicUtils.isValidator"></a>

### BasicUtils.isValidator(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a validator value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a validator value.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isValidator(isBoolean())
```

<a name="BasicUtils.isBooleanOrUndefined"></a>

### BasicUtils.isBooleanOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a boolean value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a boolean value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isBooleanOrUndefined(true)
```

<a name="BasicUtils.isNumberOrUndefined"></a>

### BasicUtils.isNumberOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a number value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a number value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isNumberOrUndefined(1)
```

<a name="BasicUtils.isIntegerOrUndefined"></a>

### BasicUtils.isIntegerOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is an integer value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an integer value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isIntegerOrUndefined(1)
```

<a name="BasicUtils.isStringOrUndefined"></a>

### BasicUtils.isStringOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a string value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a string value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isStringOrUndefined("Emily")
```

<a name="BasicUtils.isBigintOrUndefined"></a>

### BasicUtils.isBigintOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a bigint value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a bigint value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isBigintOrUndefined(9007199254740991n)
```

<a name="BasicUtils.isSymbolOrUndefined"></a>

### BasicUtils.isSymbolOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a symbol value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a symbol value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isSymbolOrUndefined(Symbol())
```

<a name="BasicUtils.isArrayOrUndefined"></a>

### BasicUtils.isArrayOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is an array value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an array value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isArrayOrUndefined([1])
```

<a name="BasicUtils.isObjectOrUndefined"></a>

### BasicUtils.isObjectOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is an object value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an object value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isObjectOrUndefined({ name: "Emily" })
```

<a name="BasicUtils.isRegExpOrUndefined"></a>

### BasicUtils.isRegExpOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a regular expression or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a regular expression or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isRegExpOrUndefined(/name/)
```

<a name="BasicUtils.isFunctionOrUndefined"></a>

### BasicUtils.isFunctionOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a function or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a function or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isFunctionOrUndefined(() => console.log("Emily"))
```

<a name="BasicUtils.isValidatorOrUndefined"></a>

### BasicUtils.isValidatorOrUndefined(\[value\]) ⇒ <code>boolean</code>

Check whether a `value` is a validator value or undefined.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a validator value or undefined.

| Param     | Type             | Description |
| --------- | ---------------- | ----------- |
| \[value\] | <code>any</code> | A value.    |

**Example**

```js
BasicUtils.isValidatorOrUndefined(isBoolean())
```

<a name="BasicUtils.requireTypeByPredicate_"></a>

### BasicUtils.requireTypeByPredicate\_(predicate, value, argumentName, argumentIndex)

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                   | Description        |
| ------------- | ---------------------- | ------------------ |
| predicate     | <code>Predicate</code> | A predicate.       |
| value         | <code>any</code>       | A value.           |
| argumentName  | <code>string</code>    | An argument name.  |
| argumentIndex | <code>number</code>    | An argument index. |

<a name="BasicUtils.requireTypeIdentifierByPredicate_"></a>

### BasicUtils.requireTypeIdentifierByPredicate\_(predicate, identifier, argumentName, argumentIndex)

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                   | Description        |
| ------------- | ---------------------- | ------------------ |
| predicate     | <code>Predicate</code> | A predicate.       |
| identifier    | <code>any</code>       | An identifier.     |
| argumentName  | <code>string</code>    | An argument name.  |
| argumentIndex | <code>number</code>    | An argument index. |

<a name="BasicUtils.requireBoolean"></a>

### BasicUtils.requireBoolean(\[value\], argumentName, argumentIndex)

Check whether a `value` is a boolean value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireBoolean(true, "parameter")
```

<a name="BasicUtils.requireNumber"></a>

### BasicUtils.requireNumber(\[value\], argumentName, argumentIndex)

Check whether a `value` is a number value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireNumber(1, "parameter")
```

<a name="BasicUtils.requireInteger"></a>

### BasicUtils.requireInteger(\[value\], argumentName, argumentIndex)

Check whether a `value` is an integer value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireInteger(1, "parameter")
```

<a name="BasicUtils.requireString"></a>

### BasicUtils.requireString(\[value\], argumentName, argumentIndex)

Check whether a `value` is a string value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireString("Emily", "parameter")
```

<a name="BasicUtils.requireBigint"></a>

### BasicUtils.requireBigint(\[value\], argumentName, argumentIndex)

Check whether a `value` is a bigint value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireBigint(9007199254740991n, "parameter")
```

<a name="BasicUtils.requireSymbol"></a>

### BasicUtils.requireSymbol(\[value\], argumentName, argumentIndex)

Check whether a `value` is a symbol value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireSymbol(Symbol(), "parameter")
```

<a name="BasicUtils.requireArray"></a>

### BasicUtils.requireArray(\[value\], argumentName, argumentIndex)

Check whether a `value` is an array value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireArray([1], "parameter")
```

<a name="BasicUtils.requireObject"></a>

### BasicUtils.requireObject(\[value\], argumentName, argumentIndex)

Check whether a `value` is an object value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireObject({ name: "Emily" }, "parameter")
```

<a name="BasicUtils.requireRegExp"></a>

### BasicUtils.requireRegExp(\[value\], argumentName, argumentIndex)

Check whether a `value` is a regular expression value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireRegExp(/name/, "parameter")
```

<a name="BasicUtils.requireFunction"></a>

### BasicUtils.requireFunction(\[value\], argumentName, argumentIndex)

Check whether a `value` is a function value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireFunction(() => console.log("Emily"), "parameter")
```

<a name="BasicUtils.requireExisting"></a>

### BasicUtils.requireExisting(\[value\], argumentName, argumentIndex)

Check whether a `value` is neither undefined or null value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireExisting(true, "parameter")
```

<a name="BasicUtils.requireSupported"></a>

### BasicUtils.requireSupported(\[value\], argumentName, argumentIndex)

Check whether a `value` is a supported validator value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireSupported(true, "parameter")
```

<a name="BasicUtils.requireComparableSupported"></a>

### BasicUtils.requireComparableSupported(\[value\], argumentName, argumentIndex)

Check whether a `value` is a basic supported comparable validator value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireComparableSupported(true, "parameter")
```

<a name="BasicUtils.requireSupportedTypeIdentifier"></a>

### BasicUtils.requireSupportedTypeIdentifier(identifier, argumentName, argumentIndex)

Check whether a `identifier` is a supported validator type identifier and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| identifier    | <code>any</code>    | An identifier.     |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireSupportedTypeIdentifier("boolean", "parameter")
```

<a name="BasicUtils.requireComparableSupportedTypeIdentifier"></a>

### BasicUtils.requireComparableSupportedTypeIdentifier(identifier, argumentName, argumentIndex)

Check whether a `identifier` is a supported comparable validator type value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| identifier    | <code>any</code>    | An identifier.     |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireComparableSupportedTypeIdentifier("boolean", "parameter")
```

<a name="BasicUtils.requireValidator"></a>

### BasicUtils.requireValidator(\[value\], argumentName, argumentIndex)

Check whether a `value` is a validator value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireValidator(isBoolean(), "parameter")
```

<a name="BasicUtils.requireBooleanOrUndefined"></a>

### BasicUtils.requireBooleanOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is a boolean value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireBooleanOrUndefined(true, "parameter")
```

<a name="BasicUtils.requireNumberOrUndefined"></a>

### BasicUtils.requireNumberOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is a number value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireNumberOrUndefined(1, "parameter")
```

<a name="BasicUtils.requireIntegerOrUndefined"></a>

### BasicUtils.requireIntegerOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is an integer value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireIntegerOrUndefined(1, "parameter")
```

<a name="BasicUtils.requireStringOrUndefined"></a>

### BasicUtils.requireStringOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is a string value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireStringOrUndefined("Emily", "parameter")
```

<a name="BasicUtils.requireBigintOrUndefined"></a>

### BasicUtils.requireBigintOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is a bigint value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireBigintOrUndefined(9007199254740991n, "parameter")
```

<a name="BasicUtils.requireSymbolOrUndefined"></a>

### BasicUtils.requireSymbolOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is a symbol value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireSymbolOrUndefined(Symbol(), "parameter")
```

<a name="BasicUtils.requireArrayOrUndefined"></a>

### BasicUtils.requireArrayOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is an array value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireArrayOrUndefined([1], "parameter")
```

<a name="BasicUtils.requireObjectOrUndefined"></a>

### BasicUtils.requireObjectOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is an object value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireObjectOrUndefined({ name: "Emily" }, "parameter")
```

<a name="BasicUtils.requireRegExpOrUndefined"></a>

### BasicUtils.requireRegExpOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is a regular expression value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireRegExpOrUndefined(/name/, "parameter")
```

<a name="BasicUtils.requireFunctionOrUndefined"></a>

### BasicUtils.requireFunctionOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is a function value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireFunctionOrUndefined(() => console.log("Emily"), "parameter")
```

<a name="BasicUtils.requireValidatorOrUndefined"></a>

### BasicUtils.requireValidatorOrUndefined(\[value\], argumentName, argumentIndex)

Check whether a `value` is a validator value or undefined and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| \[value\]     | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

**Example**

```js
BasicUtils.requireValidatorOrUndefined(isBoolean(), "parameter")
```

## Functions

<dl>
<dt><a href="#getBasicUtils">getBasicUtils()</a> ⇒ <code>BasicUtils</code></dt>
<dd><p>Return <code>BasicUtils</code> class.</p>
</dd>
<dt><a href="#getArrayUtils">getArrayUtils()</a> ⇒ <code>ArrayUtils</code></dt>
<dd><p>Return <code>ArrayUtils</code> class.</p>
</dd>
<dt><a href="#getObjectUtils">getObjectUtils()</a> ⇒ <code>ObjectUtils</code></dt>
<dd><p>Return <code>ObjectUtils</code> class.</p>
</dd>
<dt><a href="#getUniversalValidator">getUniversalValidator()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Return <code>UniversalValidator</code> class.</p>
</dd>
<dt><a href="#getJSDocGenerator">getJSDocGenerator()</a> ⇒ <code>JSDocGenerator</code></dt>
<dd><p>Return <code>JSDocGenerator</code> class.</p>
</dd>
</dl>

<a name="getBasicUtils"></a>

## getBasicUtils() ⇒ <code>BasicUtils</code>

Return `BasicUtils` class.

**Kind**: global function\
**Example**

```js
getBasicUtils().isBoolean(true)
```

<a name="getArrayUtils"></a>

## getArrayUtils() ⇒ <code>ArrayUtils</code>

Return `ArrayUtils` class.

**Kind**: global function\
**Example**

```js
getArrayUtils().equal([1], [1])
```

<a name="getObjectUtils"></a>

## getObjectUtils() ⇒ <code>ObjectUtils</code>

Return `ObjectUtils` class.

**Kind**: global function\
**Example**

```js
getObjectUtils().clone({ name: "Emily" })
```

<a name="getUniversalValidator"></a>

## getUniversalValidator() ⇒ <code>UniversalValidator</code>

Return `UniversalValidator` class.

**Kind**: global function\
**Example**

```js
new (getUniversalValidator())("boolean")
```

<a name="getJSDocGenerator"></a>

## getJSDocGenerator() ⇒ <code>JSDocGenerator</code>

Return `JSDocGenerator` class.

**Kind**: global function\
**Example**

```js
new (getJSDocGenerator())("Person", record({ name: str(), age: int() }))
```

## Members

<dl>
<dt><a href="#ANY_OF">ANY_OF</a></dt>
<dd><p>Requires at least one of nested schemas to succeed.</p>
</dd>
<dt><a href="#ONE_OF">ONE_OF</a></dt>
<dd><p>Requires at one of nested schemas to succeed.</p>
</dd>
<dt><a href="#ALL_OF">ALL_OF</a></dt>
<dd><p>Requires all of nested schemas to succeed.</p>
</dd>
<dt><a href="#LESS_THAN">LESS_THAN</a></dt>
<dd><p>Requires a value or its characteristic to be less than a constant.</p>
</dd>
<dt><a href="#GREATER_THAN">GREATER_THAN</a></dt>
<dd><p>Requires a value or its characteristic to be greater than a constant.</p>
</dd>
<dt><a href="#LESS_THAN_OR_EQUAL_TO">LESS_THAN_OR_EQUAL_TO</a></dt>
<dd><p>Requires a value or its characteristic to be less than or equal to a constant.</p>
</dd>
<dt><a href="#GREATER_THAN_OR_EQUAL_TO">GREATER_THAN_OR_EQUAL_TO</a></dt>
<dd><p>Requires a value or its characteristic to be greater than or equal to a constant.</p>
</dd>
<dt><a href="#EQUAL_TO">EQUAL_TO</a></dt>
<dd><p>Requires a value or its characteristic to be equal to a constant.</p>
</dd>
<dt><a href="#NOT_EQUAL_TO">NOT_EQUAL_TO</a></dt>
<dd><p>Requires a value or its characteristic to be not equal to a constant.</p>
</dd>
<dt><a href="#IN_RANGE">IN_RANGE</a></dt>
<dd><p>Requires a value or its characteristic to be in a range.</p>
</dd>
<dt><a href="#NOT_IN_RANGE">NOT_IN_RANGE</a></dt>
<dd><p>Requires a value or its characteristic to be not in a range.</p>
</dd>
<dt><a href="#BE_ONE_OF">BE_ONE_OF</a></dt>
<dd><p>Requires a value to be one of constants.</p>
</dd>
<dt><a href="#NOT_BE_ONE_OF">NOT_BE_ONE_OF</a></dt>
<dd><p>Requires a value to be not one of constants.</p>
</dd>
<dt><a href="#MATCH">MATCH</a></dt>
<dd><p>Requires a value to match a regular expression.</p>
</dd>
<dt><a href="#NOT_MATCH">NOT_MATCH</a></dt>
<dd><p>Requires a value not to match a regular expression.</p>
</dd>
<dt><a href="#BE">BE</a></dt>
<dd><p>Requires a value to be items or properties with specific characteristics.</p>
</dd>
<dt><a href="#NOT_HAVE">NOT_HAVE</a></dt>
<dd><p>Requires a value to not to have properties with specific characteristics.</p>
</dd>
<dt><a href="#TYPE">TYPE</a></dt>
<dd><p>Apply operation to a value type.</p>
</dd>
<dt><a href="#VALUE">VALUE</a></dt>
<dd><p>Apply operation to a value.</p>
</dd>
<dt><a href="#LENGTH">LENGTH</a></dt>
<dd><p>Apply operation to a value length.</p>
</dd>
<dt><a href="#ITEM_COUNT">ITEM_COUNT</a></dt>
<dd><p>Apply operation to a value&#39;s item count.</p>
</dd>
<dt><a href="#PROPERTY_COUNT">PROPERTY_COUNT</a></dt>
<dd><p>Apply operation to a value&#39;s property count.</p>
</dd>
<dt><a href="#ITEMS">ITEMS</a></dt>
<dd><p>Apply operation to a value items.</p>
</dd>
<dt><a href="#PROPERTIES">PROPERTIES</a></dt>
<dd><p>Apply operation to an value items.</p>
</dd>
<dt><a href="#REQUIRED_PROPERTIES">REQUIRED_PROPERTIES</a></dt>
<dd><p>Apply operation to an value&#39;s required properties.</p>
</dd>
<dt><a href="#OPTIONAL_PROPERTIES">OPTIONAL_PROPERTIES</a></dt>
<dd><p>Apply operation to an value&#39;s optional properties.</p>
</dd>
<dt><a href="#ADDITIONAL_PROPERTIES">ADDITIONAL_PROPERTIES</a></dt>
<dd><p>Apply operation to an value&#39;s additional properties.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#JoinType">JoinType</a> : <code>JoinType_</code></dt>
<dd><p>A schema join type.</p>
</dd>
<dt><a href="#OperationType">OperationType</a> : <code>OperationType_</code></dt>
<dd><p>An operation.</p>
</dd>
<dt><a href="#OperationTargetType">OperationTargetType</a> : <code>OperationTargetType_</code></dt>
<dd><p>An operation target.</p>
</dd>
</dl>

<a name="ANY_OF"></a>

## ANY_OF

Requires at least one of nested schemas to succeed.

**Kind**: global variable\
<a name="ONE_OF"></a>

## ONE_OF

Requires at one of nested schemas to succeed.

**Kind**: global variable\
<a name="ALL_OF"></a>

## ALL_OF

Requires all of nested schemas to succeed.

**Kind**: global variable\
<a name="LESS_THAN"></a>

## LESS_THAN

Requires a value or its characteristic to be less than a constant.

**Kind**: global variable\
<a name="GREATER_THAN"></a>

## GREATER_THAN

Requires a value or its characteristic to be greater than a constant.

**Kind**: global variable\
<a name="LESS_THAN_OR_EQUAL_TO"></a>

## LESS_THAN_OR_EQUAL_TO

Requires a value or its characteristic to be less than or equal to a constant.

**Kind**: global variable\
<a name="GREATER_THAN_OR_EQUAL_TO"></a>

## GREATER_THAN_OR_EQUAL_TO

Requires a value or its characteristic to be greater than or equal to a constant.

**Kind**: global variable\
<a name="EQUAL_TO"></a>

## EQUAL_TO

Requires a value or its characteristic to be equal to a constant.

**Kind**: global variable\
<a name="NOT_EQUAL_TO"></a>

## NOT_EQUAL_TO

Requires a value or its characteristic to be not equal to a constant.

**Kind**: global variable\
<a name="IN_RANGE"></a>

## IN_RANGE

Requires a value or its characteristic to be in a range.

**Kind**: global variable\
<a name="NOT_IN_RANGE"></a>

## NOT_IN_RANGE

Requires a value or its characteristic to be not in a range.

**Kind**: global variable\
<a name="BE_ONE_OF"></a>

## BE_ONE_OF

Requires a value to be one of constants.

**Kind**: global variable\
<a name="NOT_BE_ONE_OF"></a>

## NOT_BE_ONE_OF

Requires a value to be not one of constants.

**Kind**: global variable\
<a name="MATCH"></a>

## MATCH

Requires a value to match a regular expression.

**Kind**: global variable\
<a name="NOT_MATCH"></a>

## NOT_MATCH

Requires a value not to match a regular expression.

**Kind**: global variable\
<a name="BE"></a>

## BE

Requires a value to be items or properties with specific characteristics.

**Kind**: global variable\
<a name="NOT_HAVE"></a>

## NOT_HAVE

Requires a value to not to have properties with specific characteristics.

**Kind**: global variable\
<a name="TYPE"></a>

## TYPE

Apply operation to a value type.

**Kind**: global variable\
<a name="VALUE"></a>

## VALUE

Apply operation to a value.

**Kind**: global variable\
<a name="LENGTH"></a>

## LENGTH

Apply operation to a value length.

**Kind**: global variable\
<a name="ITEM_COUNT"></a>

## ITEM_COUNT

Apply operation to a value's item count.

**Kind**: global variable\
<a name="PROPERTY_COUNT"></a>

## PROPERTY_COUNT

Apply operation to a value's property count.

**Kind**: global variable\
<a name="ITEMS"></a>

## ITEMS

Apply operation to a value items.

**Kind**: global variable\
<a name="PROPERTIES"></a>

## PROPERTIES

Apply operation to an value items.

**Kind**: global variable\
<a name="REQUIRED_PROPERTIES"></a>

## REQUIRED_PROPERTIES

Apply operation to an value's required properties.

**Kind**: global variable\
<a name="OPTIONAL_PROPERTIES"></a>

## OPTIONAL_PROPERTIES

Apply operation to an value's optional properties.

**Kind**: global variable\
<a name="ADDITIONAL_PROPERTIES"></a>

## ADDITIONAL_PROPERTIES

Apply operation to an value's additional properties.

**Kind**: global variable\
<a name="JoinType"></a>

## JoinType : <code>JoinType\_</code>

A schema join type.

**Kind**: global constant\
<a name="OperationType"></a>

## OperationType : <code>OperationType\_</code>

An operation.

**Kind**: global constant\
<a name="OperationTargetType"></a>

## OperationTargetType : <code>OperationTargetType\_</code>

An operation target.

**Kind**: global constant\
<a name="JSCodeGenerator"></a>

## JSCodeGenerator

A JS code generator that creates simple JS code from a validator.

**Kind**: global class\
**Summary**: Generates JS code.

- [JSCodeGenerator](#JSCodeGenerator)
  - [new JSCodeGenerator(name, validator)](#new_JSCodeGenerator_new)
  - [.filterPropertyDescriptions\_(properties)](#JSCodeGenerator+filterPropertyDescriptions_)
  - [.toParameterDefinition\_(type, name, description)](#JSCodeGenerator+toParameterDefinition_)
  - [.toString()](#JSCodeGenerator+toString) ⇒ <code>string</code>

<a name="new_JSCodeGenerator_new"></a>

### new JSCodeGenerator(name, validator)

| Param     | Type                            | Description      |
| --------- | ------------------------------- | ---------------- |
| name      | <code>string</code>             | A function name. |
| validator | <code>UniversalValidator</code> | A validator.     |

**Example**

```js
new JSCodeGenerator("newPerson", "Creates a person", record({ name: str(), age: int() }))
```

<a name="JSCodeGenerator+filterPropertyDescriptions_"></a>

### jsCodeGenerator.filterPropertyDescriptions\_(properties)

**Kind**: instance method of [<code>JSCodeGenerator</code>](#JSCodeGenerator)

| Param      | Type                |
| ---------- | ------------------- |
| properties | <code>object</code> |

<a name="JSCodeGenerator+toParameterDefinition_"></a>

### jsCodeGenerator.toParameterDefinition\_(type, name, description)

**Kind**: instance method of [<code>JSCodeGenerator</code>](#JSCodeGenerator)

| Param       | Type                |
| ----------- | ------------------- |
| type        | <code>string</code> |
| name        | <code>string</code> |
| description | <code>string</code> |

<a name="JSCodeGenerator+toString"></a>

### jsCodeGenerator.toString() ⇒ <code>string</code>

Converts object to string.

**Kind**: instance method of [<code>JSCodeGenerator</code>](#JSCodeGenerator)\
**Returns**: <code>string</code> - A string representation.\
**Example**

```js
new JSCodeGenerator("Person", record({ name: str(), age: int() })).toString()
```

<a name="JSDocGenerator"></a>

## JSDocGenerator

A JSDoc generator that creates simple JSDoc from a validator.

**Kind**: global class\
**Summary**: Generates JSDoc objects.

- [JSDocGenerator](#JSDocGenerator)
  - [new JSDocGenerator(A, validator)](#new_JSDocGenerator_new)
  - [.mapTypeData\_(value, \[prefix\])](#JSDocGenerator+mapTypeData_) ⇒ <code>Object.\<string, any></code>
  - [.mapDescriptionData\_(value, \[prefix\])](#JSDocGenerator+mapDescriptionData_) ⇒ <code>Object.\<string, any></code>
  - [.toPropertyDefinition\_(type, name, description)](#JSDocGenerator+toPropertyDefinition_)
  - [.toString()](#JSDocGenerator+toString) ⇒ <code>string</code>

<a name="new_JSDocGenerator_new"></a>

### new JSDocGenerator(A, validator)

| Param     | Type                            | Description  |
| --------- | ------------------------------- | ------------ |
| A         | <code>string</code>             | type name.   |
| validator | <code>UniversalValidator</code> | A validator. |

**Example**

```js
new JSDocGenerator("Person", record({ name: str(), age: int() }))
```

<a name="JSDocGenerator+mapTypeData_"></a>

### jsDocGenerator.mapTypeData\_(value, \[prefix\]) ⇒ <code>Object.\<string, any></code>

**Kind**: instance method of [<code>JSDocGenerator</code>](#JSDocGenerator)

| Param      | Type                | Default                       |
| ---------- | ------------------- | ----------------------------- |
| value      | <code>object</code> |                               |
| \[prefix\] | <code>string</code> | <code>"\&quot;\&quot;"</code> |

<a name="JSDocGenerator+mapDescriptionData_"></a>

### jsDocGenerator.mapDescriptionData\_(value, \[prefix\]) ⇒ <code>Object.\<string, any></code>

**Kind**: instance method of [<code>JSDocGenerator</code>](#JSDocGenerator)

| Param      | Type                | Default                       |
| ---------- | ------------------- | ----------------------------- |
| value      | <code>object</code> |                               |
| \[prefix\] | <code>string</code> | <code>"\&quot;\&quot;"</code> |

<a name="JSDocGenerator+toPropertyDefinition_"></a>

### jsDocGenerator.toPropertyDefinition\_(type, name, description)

**Kind**: instance method of [<code>JSDocGenerator</code>](#JSDocGenerator)

| Param       | Type                |
| ----------- | ------------------- |
| type        | <code>string</code> |
| name        | <code>string</code> |
| description | <code>string</code> |

<a name="JSDocGenerator+toString"></a>

### jsDocGenerator.toString() ⇒ <code>string</code>

Converts object to string.

**Kind**: instance method of [<code>JSDocGenerator</code>](#JSDocGenerator)\
**Returns**: <code>string</code> - A string representation.\
**Example**

```js
new JSDocGenerator("Person", record({ name: str(), age: int() })).toString()
```

<a name="asJSDoc"></a>

## asJSDoc(A, validator) ⇒ <code>string</code>

Convert a validator to JSDoc representation.

**Kind**: global function\
**Returns**: <code>string</code> - The validator.

| Param     | Type                            | Description  |
| --------- | ------------------------------- | ------------ |
| A         | <code>string</code>             | type name.   |
| validator | <code>UniversalValidator</code> | A validator. |

**Example**

```js
asJSDoc("Person", record({ name: str(), age: int() }))
```

<a name="ObjectUtils"></a>

## ObjectUtils

Object utilities.

**Kind**: global class

- [ObjectUtils](#ObjectUtils)
  - [.clone(value)](#ObjectUtils.clone) ⇒ <code>object</code>
  - [.cloneWhenObject\_(value)](#ObjectUtils.cloneWhenObject_) ⇒ <code>any</code>
  - [.merge(first, second)](#ObjectUtils.merge) ⇒ <code>object</code>
  - [.propertyNames(value, \[prefix\])](#ObjectUtils.propertyNames) ⇒ <code>Array.\<string></code>
  - [.mapProperties(value, converter)](#ObjectUtils.mapProperties) ⇒ <code>object</code>
  - [.filterProperties(value, predicate)](#ObjectUtils.filterProperties) ⇒ <code>object</code>

<a name="ObjectUtils.clone"></a>

### ObjectUtils.clone(value) ⇒ <code>object</code>

Clone an object deeply.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)\
**Returns**: <code>object</code> - A deep copy.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| value | <code>object</code> | An object.  |

**Example**

```js
ObjectUtils.clone({ name: "Emily" })
```

<a name="ObjectUtils.cloneWhenObject_"></a>

### ObjectUtils.cloneWhenObject\_(value) ⇒ <code>any</code>

Clone a `value` deeply.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)\
**Returns**: <code>any</code> - A deep copy.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="ObjectUtils.merge"></a>

### ObjectUtils.merge(first, second) ⇒ <code>object</code>

Merge two objects deeply.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)\
**Returns**: <code>object</code> - A deep merge.

| Param  | Type                | Description      |
| ------ | ------------------- | ---------------- |
| first  | <code>object</code> | A first object.  |
| second | <code>object</code> | A second object. |

**Example**

```js
ObjectUtils.merge({ name: "Emily" }, { age: 28 })
```

<a name="ObjectUtils.propertyNames"></a>

### ObjectUtils.propertyNames(value, \[prefix\]) ⇒ <code>Array.\<string></code>

Get object's property names.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)\
**Returns**: <code>Array.\<string></code> - Property names.

| Param      | Type                | Default                       | Description |
| ---------- | ------------------- | ----------------------------- | ----------- |
| value      | <code>object</code> |                               | An object.  |
| \[prefix\] | <code>string</code> | <code>"\&quot;\&quot;"</code> | A prefix.   |

**Example**

```js
ObjectUtils.propertyNames({ name: "Emily" })
```

<a name="ObjectUtils.mapProperties"></a>

### ObjectUtils.mapProperties(value, converter) ⇒ <code>object</code>

Map object's properties.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)\
**Returns**: <code>object</code> - A new object.

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| value     | <code>object</code>    | An object.   |
| converter | <code>Converter</code> | A converter. |

**Example**

```js
ObjectUtils.mapProperties({ age: 24 }, value => value + 1)
```

<a name="ObjectUtils.filterProperties"></a>

### ObjectUtils.filterProperties(value, predicate) ⇒ <code>object</code>

Filter object's properties.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)\
**Returns**: <code>object</code> - A new object.

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| value     | <code>object</code>    | An object.   |
| predicate | <code>Predicate</code> | A converter. |

**Example**

```js
ObjectUtils.filterProperties({ age: 24 }, value => value > 20)
```

## Functions

<dl>
<dt><a href="#validatorFromValueType_">validatorFromValueType_(value)</a> ⇒ <code>UniversalValidator</code></dt>
<dd></dd>
<dt><a href="#regexPreprocessor_">regexPreprocessor_(regex)</a> ⇒ <code>UniversalValidator</code></dt>
<dd></dd>
<dt><a href="#enumPreprocessor_">enumPreprocessor_(values)</a> ⇒ <code>UniversalValidator</code></dt>
<dd></dd>
<dt><a href="#rangePreprocessor_">rangePreprocessor_(range)</a> ⇒ <code>UniversalValidator</code></dt>
<dd></dd>
<dt><a href="#negativeRegexPreprocessor_">negativeRegexPreprocessor_(regexOptions)</a> ⇒ <code>UniversalValidator</code></dt>
<dd></dd>
<dt><a href="#negativeEnumPreprocessor_">negativeEnumPreprocessor_(valuesOptions)</a> ⇒ <code>UniversalValidator</code></dt>
<dd></dd>
<dt><a href="#negativeRangePreprocessor_">negativeRangePreprocessor_(rangeOptions)</a> ⇒ <code>UniversalValidator</code></dt>
<dd></dd>
</dl>

<a name="validatorFromValueType_"></a>

## validatorFromValueType\_(value) ⇒ <code>UniversalValidator</code>

**Kind**: global function

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="regexPreprocessor_"></a>

## regexPreprocessor\_(regex) ⇒ <code>UniversalValidator</code>

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| regex | <code>RegExp</code> |

<a name="enumPreprocessor_"></a>

## enumPreprocessor\_(values) ⇒ <code>UniversalValidator</code>

**Kind**: global function

| Param  | Type               |
| ------ | ------------------ |
| values | <code>Array</code> |

<a name="rangePreprocessor_"></a>

## rangePreprocessor\_(range) ⇒ <code>UniversalValidator</code>

**Kind**: global function

| Param | Type               |
| ----- | ------------------ |
| range | <code>Range</code> |

<a name="negativeRegexPreprocessor_"></a>

## negativeRegexPreprocessor\_(regexOptions) ⇒ <code>UniversalValidator</code>

**Kind**: global function

| Param        | Type                                        |
| ------------ | ------------------------------------------- |
| regexOptions | <code>NegativeRegexPreprocessorInput</code> |

<a name="negativeEnumPreprocessor_"></a>

## negativeEnumPreprocessor\_(valuesOptions) ⇒ <code>UniversalValidator</code>

**Kind**: global function

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| valuesOptions | <code>NegativeEnumPreprocessorInput</code> |

<a name="negativeRangePreprocessor_"></a>

## negativeRangePreprocessor\_(rangeOptions) ⇒ <code>UniversalValidator</code>

**Kind**: global function

| Param        | Type                                        |
| ------------ | ------------------------------------------- |
| rangeOptions | <code>NegativeRangePreprocessorInput</code> |

<a name="ReadonlyActionInfo_"></a>

## ReadonlyActionInfo\_

A validation action information.
Used to store validation functions for validators and their explanations.

**Kind**: global class\
<a name="new_ReadonlyActionInfo__new"></a>

### new ReadonlyActionInfo\_(operation, target, value, validation)

| Param      | Type                               | Description                                  |
| ---------- | ---------------------------------- | -------------------------------------------- |
| operation  | <code>JoinType\_</code>            | An operation.                                |
| target     | <code>OperationTargetType\_</code> | An operation target.                         |
| value      | <code>any</code>                   | An operation constant or list of properties. |
| validation | <code>Predicate</code>             | A function that implements an operation.     |

<a name="ReadonlySupportedTypeMapping_"></a>

## ReadonlySupportedTypeMapping\_

Mapping from a BaseType to JSON schema type.
Predicate is used to check whether some value is of a specified type.

**Kind**: global class\
<a name="new_ReadonlySupportedTypeMapping__new"></a>

### new ReadonlySupportedTypeMapping\_(jsonType, jsPredicate)

| Param       | Type                   |
| ----------- | ---------------------- |
| jsonType    | <code>string</code>    |
| jsPredicate | <code>Predicate</code> |

<a name="RecordEntry"></a>

## RecordEntry

A record entry that allows faster schema creation for simple cases.

**Kind**: global class

- [RecordEntry](#RecordEntry)
  - [new RecordEntry(name, validator)](#new_RecordEntry_new)
  - [.positive](#RecordEntry+positive) : [<code>RecordEntry</code>](#RecordEntry)
  - [.zero](#RecordEntry+zero) : [<code>RecordEntry</code>](#RecordEntry)
  - [.negative](#RecordEntry+negative) : [<code>RecordEntry</code>](#RecordEntry)
  - [.filled](#RecordEntry+filled) : [<code>RecordEntry</code>](#RecordEntry)

<a name="new_RecordEntry_new"></a>

### new RecordEntry(name, validator)

| Param     | Type                            | Description     |
| --------- | ------------------------------- | --------------- |
| name      | <code>string</code>             | A property name |
| validator | <code>UniversalValidator</code> | A validator     |

<a name="RecordEntry+positive"></a>

### recordEntry.positive : [<code>RecordEntry</code>](#RecordEntry)

Require property to be positive.

**Kind**: instance property of [<code>RecordEntry</code>](#RecordEntry)\
<a name="RecordEntry+zero"></a>

### recordEntry.zero : [<code>RecordEntry</code>](#RecordEntry)

Require property to be zero.

**Kind**: instance property of [<code>RecordEntry</code>](#RecordEntry)\
<a name="RecordEntry+negative"></a>

### recordEntry.negative : [<code>RecordEntry</code>](#RecordEntry)

Require property to be negative.

**Kind**: instance property of [<code>RecordEntry</code>](#RecordEntry)\
<a name="RecordEntry+filled"></a>

### recordEntry.filled : [<code>RecordEntry</code>](#RecordEntry)

Require property not to be an empty string.

**Kind**: instance property of [<code>RecordEntry</code>](#RecordEntry)

## Functions

<dl>
<dt><a href="#bool">bool()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require a value to be a boolean.</p>
</dd>
<dt><a href="#num">num()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require a value to be a number.</p>
</dd>
<dt><a href="#int">int()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require a value to be an integer.</p>
</dd>
<dt><a href="#str">str()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require a value to be a string.</p>
</dd>
<dt><a href="#record">record(properties)</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require a value to be an object with just required properties and nothing else.</p>
</dd>
</dl>

<a name="bool"></a>

## bool() ⇒ <code>UniversalValidator</code>

Require a value to be a boolean.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
**Example**

```js
record({ visible: bool() })
```

<a name="num"></a>

## num() ⇒ <code>UniversalValidator</code>

Require a value to be a number.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
**Example**

```js
record({ from: num(), to: num() })
```

<a name="int"></a>

## int() ⇒ <code>UniversalValidator</code>

Require a value to be an integer.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
**Example**

```js
record({ from: int(), to: int() })
```

<a name="str"></a>

## str() ⇒ <code>UniversalValidator</code>

Require a value to be a string.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
**Example**

```js
record({ name: str() })
```

<a name="record"></a>

## record(properties) ⇒ <code>UniversalValidator</code>

Require a value to be an object with just required properties and nothing else.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param      | Type                                                                             | Description        |
| ---------- | -------------------------------------------------------------------------------- | ------------------ |
| properties | <code>Object.\<string, (UniversalValidator\|Array.\<UniversalValidator>)></code> | Record properties. |

**Example**

```js
record({ name: str(), age: int() })
```

**Example**

```js
record({ names: [str()] })
```

## Functions

<dl>
<dt><a href="#entry_">entry_(name, validator)</a> ⇒ <code>RecordEntry</code></dt>
<dd></dd>
<dt><a href="#bool">bool(name)</a> ⇒ <code>RecordEntry</code></dt>
<dd><p>Create a record property of a boolean type.</p>
</dd>
<dt><a href="#num">num(name)</a> ⇒ <code>RecordEntry</code></dt>
<dd><p>Create a record property of a number type.</p>
</dd>
<dt><a href="#int">int(name)</a> ⇒ <code>RecordEntry</code></dt>
<dd><p>Create a record property of an integer type.</p>
</dd>
<dt><a href="#str">str(name)</a> ⇒ <code>RecordEntry</code></dt>
<dd><p>Create a record property of a string type.</p>
</dd>
<dt><a href="#record">record(name)</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Create a record from a record data.</p>
</dd>
</dl>

<a name="entry_"></a>

## entry\_(name, validator) ⇒ <code>RecordEntry</code>

**Kind**: global function

| Param     | Type                            |
| --------- | ------------------------------- |
| name      | <code>string</code>             |
| validator | <code>UniversalValidator</code> |

<a name="bool"></a>

## bool(name) ⇒ <code>RecordEntry</code>

Create a record property of a boolean type.

**Kind**: global function\
**Returns**: <code>RecordEntry</code> - The record data.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| name  | <code>string</code> | A property name. |

<a name="num"></a>

## num(name) ⇒ <code>RecordEntry</code>

Create a record property of a number type.

**Kind**: global function\
**Returns**: <code>RecordEntry</code> - The record data.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| name  | <code>string</code> | A property name. |

<a name="int"></a>

## int(name) ⇒ <code>RecordEntry</code>

Create a record property of an integer type.

**Kind**: global function\
**Returns**: <code>RecordEntry</code> - The record data.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| name  | <code>string</code> | A property name. |

<a name="str"></a>

## str(name) ⇒ <code>RecordEntry</code>

Create a record property of a string type.

**Kind**: global function\
**Returns**: <code>RecordEntry</code> - The record data.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| name  | <code>string</code> | A property name. |

<a name="record"></a>

## record(name) ⇒ <code>UniversalValidator</code>

Create a record from a record data.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param | Type                              | Description             |
| ----- | --------------------------------- | ----------------------- |
| name  | <code>Array.\<RecordEntry></code> | Record properties data. |

<a name="StringifiedTypes_"></a>

## StringifiedTypes\_

Stringified type representations.

**Kind**: global class

- [StringifiedTypes\_](#StringifiedTypes_)
  - [.baseTypes\_](#StringifiedTypes_.baseTypes_) : <code>Array.\<string></code>
  - [.baseComparableTypes\_](#StringifiedTypes_.baseComparableTypes_) : <code>Array.\<string></code>
  - [.baseTypeIdentifiers\_](#StringifiedTypes_.baseTypeIdentifiers_) : <code>Array.\<string></code>
  - [.baseComparableTypeIdentifiers\_](#StringifiedTypes_.baseComparableTypeIdentifiers_) : <code>Array.\<string></code>

<a name="StringifiedTypes_.baseTypes_"></a>

### StringifiedTypes\_.baseTypes\_ : <code>Array.\<string></code>

**Kind**: static property of [<code>StringifiedTypes\_</code>](#StringifiedTypes_)\
<a name="StringifiedTypes_.baseComparableTypes_"></a>

### StringifiedTypes\_.baseComparableTypes\_ : <code>Array.\<string></code>

**Kind**: static property of [<code>StringifiedTypes\_</code>](#StringifiedTypes_)\
<a name="StringifiedTypes_.baseTypeIdentifiers_"></a>

### StringifiedTypes\_.baseTypeIdentifiers\_ : <code>Array.\<string></code>

**Kind**: static property of [<code>StringifiedTypes\_</code>](#StringifiedTypes_)\
<a name="StringifiedTypes_.baseComparableTypeIdentifiers_"></a>

### StringifiedTypes\_.baseComparableTypeIdentifiers\_ : <code>Array.\<string></code>

**Kind**: static property of [<code>StringifiedTypes\_</code>](#StringifiedTypes_)

## Typedefs

<dl>
<dt><a href="#Predicate">Predicate</a> ⇒ <code>boolean</code></dt>
<dd><p>A predicate.</p>
</dd>
<dt><a href="#WherePredicate">WherePredicate</a> ⇒ <code>Array.&lt;boolean&gt;</code></dt>
<dd><p>A where predicate.</p>
</dd>
<dt><a href="#Converter">Converter</a> ⇒ <code>any</code></dt>
<dd><p>A converter.</p>
</dd>
<dt><a href="#PropertyPreprocessor">PropertyPreprocessor</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>A property preprocessor.
It&#39;s used to convert arbitrary values into validators.
If a preprocessor can&#39;t convert some value it should return null, it can&#39;t throw exceptions.</p>
</dd>
<dt><a href="#BaseType">BaseType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;integer&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code> | <code>&quot;symbol&quot;</code> | <code>&quot;array&quot;</code> | <code>&quot;object&quot;</code></dt>
<dd><p>A basic type.</p>
</dd>
<dt><a href="#BaseComparableType">BaseComparableType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;integer&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code> | <code>&quot;symbol&quot;</code></dt>
<dd><p>A basic comparable type.</p>
</dd>
<dt><a href="#Range">Range</a></dt>
<dd><p>A range.</p>
</dd>
<dt><a href="#NegativeRegexPreprocessorInput">NegativeRegexPreprocessorInput</a></dt>
<dd><p>A negative regular expression preprocessor input.</p>
</dd>
<dt><a href="#NegativeEnumPreprocessorInput">NegativeEnumPreprocessorInput</a></dt>
<dd><p>A negative enum preprocessor input.</p>
</dd>
<dt><a href="#NegativeRangePreprocessorInput">NegativeRangePreprocessorInput</a></dt>
<dd><p>A negative range preprocessor input.</p>
</dd>
<dt><a href="#JoinType_">JoinType_</a></dt>
<dd><p>A schema join type.</p>
</dd>
<dt><a href="#OperationType_">OperationType_</a></dt>
<dd><p>An operation.</p>
</dd>
<dt><a href="#OperationTargetType_">OperationTargetType_</a></dt>
<dd><p>An operation.</p>
</dd>
</dl>

<a name="Predicate"></a>

## Predicate ⇒ <code>boolean</code>

A predicate.

**Kind**: global typedef\
**Returns**: <code>boolean</code> - Whether condition is true.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| input | <code>any</code> | An input.   |

<a name="WherePredicate"></a>

## WherePredicate ⇒ <code>Array.\<boolean></code>

A where predicate.

**Kind**: global typedef\
**Returns**: <code>Array.\<boolean></code> - Whether conditions are true.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| input | <code>object</code> | An input.   |

<a name="Converter"></a>

## Converter ⇒ <code>any</code>

A converter.

**Kind**: global typedef\
**Returns**: <code>any</code> - An output.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| input | <code>any</code> | An input.   |

<a name="PropertyPreprocessor"></a>

## PropertyPreprocessor ⇒ <code>UniversalValidator</code>

A property preprocessor.
It's used to convert arbitrary values into validators.
If a preprocessor can't convert some value it should return null, it can't throw exceptions.

**Kind**: global typedef\
**Returns**: <code>UniversalValidator</code> - A validator.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| input | <code>any</code> | An input.   |

<a name="BaseType"></a>

## BaseType : <code>"boolean"</code> | <code>"number"</code> | <code>"integer"</code> | <code>"string"</code> | <code>"bigint"</code> | <code>"symbol"</code> | <code>"array"</code> | <code>"object"</code>

A basic type.

**Kind**: global typedef\
<a name="BaseComparableType"></a>

## BaseComparableType : <code>"boolean"</code> | <code>"number"</code> | <code>"integer"</code> | <code>"string"</code> | <code>"bigint"</code> | <code>"symbol"</code>

A basic comparable type.

**Kind**: global typedef\
<a name="Range"></a>

## Range

A range.

**Kind**: global typedef\
**Properties**

| Name     | Type                | Description         |
| -------- | ------------------- | ------------------- |
| \[from\] | <code>number</code> | A lowest boundary.  |
| \[to\]   | <code>number</code> | A highest boundary. |

<a name="NegativeRegexPreprocessorInput"></a>

## NegativeRegexPreprocessorInput

A negative regular expression preprocessor input.

**Kind**: global typedef\
**Properties**

| Name | Type                | Description                   |
| ---- | ------------------- | ----------------------------- |
| not  | <code>RegExp</code> | A negated regular expression. |

<a name="NegativeEnumPreprocessorInput"></a>

## NegativeEnumPreprocessorInput

A negative enum preprocessor input.

**Kind**: global typedef\
**Properties**

| Name | Type               | Description            |
| ---- | ------------------ | ---------------------- |
| not  | <code>Array</code> | A negated enum values. |

<a name="NegativeRangePreprocessorInput"></a>

## NegativeRangePreprocessorInput

A negative range preprocessor input.

**Kind**: global typedef\
**Properties**

| Name | Type                         | Description      |
| ---- | ---------------------------- | ---------------- |
| not  | [<code>Range</code>](#Range) | A negated range. |

<a name="JoinType_"></a>

## JoinType\_

A schema join type.

**Kind**: global typedef\
**Properties**

| Name   | Type                | Description                                         |
| ------ | ------------------- | --------------------------------------------------- |
| ANY_OF | <code>symbol</code> | Requires at least one of nested schemas to succeed. |
| ONE_OF | <code>symbol</code> | Requires at one of nested schemas to succeed.       |
| ALL_OF | <code>symbol</code> | Requires all of nested schemas to succeed.          |

<a name="OperationType_"></a>

## OperationType\_

An operation.

**Kind**: global typedef\
**Properties**

| Name                     | Type                | Description                                                                       |
| ------------------------ | ------------------- | --------------------------------------------------------------------------------- |
| LESS_THAN                | <code>symbol</code> | Requires a value or its characteristic to be less than a constant.                |
| GREATER_THAN             | <code>symbol</code> | Requires a value or its characteristic to be greater than a constant.             |
| LESS_THAN_OR_EQUAL_TO    | <code>symbol</code> | Requires a value or its characteristic to be less than or equal to a constant.    |
| GREATER_THAN_OR_EQUAL_TO | <code>symbol</code> | Requires a value or its characteristic to be greater than or equal to a constant. |
| EQUAL_TO                 | <code>symbol</code> | Requires a value or its characteristic to be equal to a constant.                 |
| NOT_EQUAL_TO             | <code>symbol</code> | Requires a value or its characteristic to be not equal to a constant.             |
| IN_RANGE                 | <code>symbol</code> | Requires a value or its characteristic to be in a range.                          |
| NOT_IN_RANGE             | <code>symbol</code> | Requires a value or its characteristic to be not in a range.                      |
| BE_ONE_OF                | <code>symbol</code> | Requires a value to be one of constants.                                          |
| NOT_BE_ONE_OF            | <code>symbol</code> | Requires a value to be not one of constants.                                      |
| MATCH                    | <code>symbol</code> | Requires a value to match a regular expression.                                   |
| NOT_MATCH                | <code>symbol</code> | Requires a value not to match a regular expression.                               |
| BE                       | <code>symbol</code> | Requires a value to be items or properties with specific characteristics.         |
| NOT_HAVE                 | <code>symbol</code> | Requires a value to not to have properties with specific characteristics.         |

<a name="OperationTargetType_"></a>

## OperationTargetType\_

An operation.

**Kind**: global typedef\
**Properties**

| Name                  | Type                | Description                                          |
| --------------------- | ------------------- | ---------------------------------------------------- |
| TYPE                  | <code>symbol</code> | Apply operation to a value type.                     |
| VALUE                 | <code>symbol</code> | Apply operation to a value.                          |
| LENGTH                | <code>symbol</code> | Apply operation to a value length.                   |
| ITEM_COUNT            | <code>symbol</code> | Apply operation to a value's item count.             |
| PROPERTY_COUNT        | <code>symbol</code> | Apply operation to a value's property count.         |
| ITEMS                 | <code>symbol</code> | Apply operation to a value items.                    |
| PROPERTIES            | <code>symbol</code> | Apply operation to an value items.                   |
| REQUIRED_PROPERTIES   | <code>symbol</code> | Apply operation to an value's required properties.   |
| OPTIONAL_PROPERTIES   | <code>symbol</code> | Apply operation to an value's optional properties.   |
| ADDITIONAL_PROPERTIES | <code>symbol</code> | Apply operation to an value's additional properties. |

<a name="UniversalValidator"></a>

## UniversalValidator

A validator that checks objects against schemas created by itself.
JSON schema and JSDoc generation is also supported from schemas.

**Kind**: global class\
**Summary**: Validates objects.

- [UniversalValidator](#UniversalValidator)
  - [new UniversalValidator(type)](#new_UniversalValidator_new)
  - [.requiredPropertiesDescriptionsData\_](#UniversalValidator+requiredPropertiesDescriptionsData_) : <code>object</code>
  - [.optionalPropertiesDescriptionsData\_](#UniversalValidator+optionalPropertiesDescriptionsData_) : <code>object</code>
  - [.requiredPropertiesValidators\_](#UniversalValidator+requiredPropertiesValidators_) : <code>Object.\<string, UniversalValidator></code>
  - [.optionalPropertiesValidators\_](#UniversalValidator+optionalPropertiesValidators_) : <code>Object.\<string, UniversalValidator></code>
  - [.propertyPreprocessors\_](#UniversalValidator+propertyPreprocessors_) : <code>Array.\<PropertyPreprocessor></code>
  - [.alreadyInvoked\_](#UniversalValidator+alreadyInvoked_) : <code>Set.\<string></code>
  - [.nestedValidators\_](#UniversalValidator+nestedValidators_) : [<code>Array.\<UniversalValidator></code>](#UniversalValidator)
  - [.descriptionData](#UniversalValidator+descriptionData) : <code>string</code>
  - [.containsNestedValidators](#UniversalValidator+containsNestedValidators) : <code>boolean</code>
  - [.typesData](#UniversalValidator+typesData) : <code>Array.\<string></code>
  - [.jsTypesData](#UniversalValidator+jsTypesData) : <code>Array.\<string></code>
  - [.requiredPropertiesData](#UniversalValidator+requiredPropertiesData) : <code>object</code>
  - [.optionalPropertiesData](#UniversalValidator+optionalPropertiesData) : <code>object</code>
  - [.requiredPropertiesDescriptionsData](#UniversalValidator+requiredPropertiesDescriptionsData) : <code>object</code>
  - [.optionalPropertiesDescriptionsData](#UniversalValidator+optionalPropertiesDescriptionsData) : <code>object</code>
  - [.isPrivateProperty\_(property)](#UniversalValidator+isPrivateProperty_)
  - [.isReservedProperty\_(property)](#UniversalValidator+isReservedProperty_)
  - [.requireSameType\_(input)](#UniversalValidator+requireSameType_)
  - [.requirePublicProperties\_(properties)](#UniversalValidator+requirePublicProperties_)
  - [.requireNotReservedProperties\_(properties)](#UniversalValidator+requireNotReservedProperties_)
  - [.requireTrue\_(value)](#UniversalValidator+requireTrue_)
  - [.requireCount\_(value, argumentName)](#UniversalValidator+requireCount_)
  - [.requireRange\_(from, to)](#UniversalValidator+requireRange_)
  - [.requireValidValidators\_(properties)](#UniversalValidator+requireValidValidators_)
  - [.deleteValidatorPlaceholders\_(properties)](#UniversalValidator+deleteValidatorPlaceholders_)
  - [.tryInvoke\_(name)](#UniversalValidator+tryInvoke_)
  - [.regexToPlainString\_(regex)](#UniversalValidator+regexToPlainString_)
  - [.addValueConstraints\_(schema, simpleSubschemas, action)](#UniversalValidator+addValueConstraints_)
  - [.addLengthConstraints\_(schema, simpleSubschemas, action)](#UniversalValidator+addLengthConstraints_)
  - [.addItemCountConstraints\_(schema, simpleSubschemas, action)](#UniversalValidator+addItemCountConstraints_)
  - [.addPropertyCountConstraints\_(schema, simpleSubschemas, action)](#UniversalValidator+addPropertyCountConstraints_)
  - [.addProperties\_(schema, action)](#UniversalValidator+addProperties_)
  - [.preprocessValue\_(value)](#UniversalValidator+preprocessValue_) ⇒ <code>any</code>
  - [.preprocessProperties\_(value)](#UniversalValidator+preprocessProperties_)
  - [.isIterable\_(value)](#UniversalValidator+isIterable_)
  - [.clone()](#UniversalValidator+clone) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withDescription(description)](#UniversalValidator+withDescription) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withDefault(value)](#UniversalValidator+withDefault) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.lessThan(constant)](#UniversalValidator+lessThan) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.greaterThan(constant)](#UniversalValidator+greaterThan) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.lessThanOrEqualTo(constant)](#UniversalValidator+lessThanOrEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.greaterThanOrEqualTo(constant)](#UniversalValidator+greaterThanOrEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.equalTo(constant)](#UniversalValidator+equalTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.notEqualTo(constant)](#UniversalValidator+notEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.inRange(from, to)](#UniversalValidator+inRange) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.notInRange(from, to)](#UniversalValidator+notInRange) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withValueOneOf(...constants)](#UniversalValidator+withValueOneOf) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withValueNotOneOf(...constants)](#UniversalValidator+withValueNotOneOf) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withLengthLessThan(count)](#UniversalValidator+withLengthLessThan) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withLengthGreaterThan(count)](#UniversalValidator+withLengthGreaterThan) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withLengthLessThanOrEqualTo(count)](#UniversalValidator+withLengthLessThanOrEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withLengthGreaterThanOrEqualTo(count)](#UniversalValidator+withLengthGreaterThanOrEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withLengthEqualTo(count)](#UniversalValidator+withLengthEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withLengthNotEqualTo(count)](#UniversalValidator+withLengthNotEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withLengthInRange(from, to)](#UniversalValidator+withLengthInRange) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withLengthNotInRange(from, to)](#UniversalValidator+withLengthNotInRange) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.matching(regex)](#UniversalValidator+matching) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.notMatching(regex)](#UniversalValidator+notMatching) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItems(items)](#UniversalValidator+withItems) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItemCountLessThan(count)](#UniversalValidator+withItemCountLessThan) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItemCountGreaterThan(count)](#UniversalValidator+withItemCountGreaterThan) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItemCountLessThanOrEqualTo(count)](#UniversalValidator+withItemCountLessThanOrEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItemCountGreaterThanOrEqualTo(count)](#UniversalValidator+withItemCountGreaterThanOrEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItemCountEqualTo(count)](#UniversalValidator+withItemCountEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItemCountNotEqualTo(count)](#UniversalValidator+withItemCountNotEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItemCountInRange(from, to)](#UniversalValidator+withItemCountInRange) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withItemCountNotInRange(from, to)](#UniversalValidator+withItemCountNotInRange) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyPreprocessors(...preprocessors)](#UniversalValidator+withPropertyPreprocessors) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withAddedPropertyPreprocessors(...preprocessors)](#UniversalValidator+withAddedPropertyPreprocessors) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withNotPropertyPreprocessors()](#UniversalValidator+withNotPropertyPreprocessors) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withRequiredProperties(properties)](#UniversalValidator+withRequiredProperties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withOptionalProperties(properties)](#UniversalValidator+withOptionalProperties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withAdditionalProperties(properties)](#UniversalValidator+withAdditionalProperties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withNotAdditionalProperties()](#UniversalValidator+withNotAdditionalProperties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyCountLessThan(count)](#UniversalValidator+withPropertyCountLessThan) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyCountGreaterThan(count)](#UniversalValidator+withPropertyCountGreaterThan) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyCountLessThanOrEqualTo(count)](#UniversalValidator+withPropertyCountLessThanOrEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyCountGreaterThanOrEqualTo(count)](#UniversalValidator+withPropertyCountGreaterThanOrEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyCountEqualTo(count)](#UniversalValidator+withPropertyCountEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyCountNotEqualTo(count)](#UniversalValidator+withPropertyCountNotEqualTo) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyCountInRange(from, to)](#UniversalValidator+withPropertyCountInRange) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withPropertyCountNotInRange(from, to)](#UniversalValidator+withPropertyCountNotInRange) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - ~~[.where(predicate)](#UniversalValidator+where) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)~~
  - [.whereValue(predicate)](#UniversalValidator+whereValue) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.withSubvalidators(...nestedValidators)](#UniversalValidator+withSubvalidators) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
  - [.validate(input)](#UniversalValidator+validate) ⇒ <code>boolean</code>
  - [.toString()](#UniversalValidator+toString) ⇒ <code>string</code>
  - [.toJSONSchema()](#UniversalValidator+toJSONSchema) ⇒ <code>object</code>
  - [.toJSONSchema\_()](#UniversalValidator+toJSONSchema_) ⇒ <code>object</code>

<a name="new_UniversalValidator_new"></a>

### new UniversalValidator(type)

| Param | Type                                             | Description |
| ----- | ------------------------------------------------ | ----------- |
| type  | <code>BaseType</code> \| <code>JoinType\_</code> | A type.     |

**Example**

```js
isBoolean()
```

<a name="UniversalValidator+requiredPropertiesDescriptionsData_"></a>

### universalValidator.requiredPropertiesDescriptionsData\_ : <code>object</code>

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+optionalPropertiesDescriptionsData_"></a>

### universalValidator.optionalPropertiesDescriptionsData\_ : <code>object</code>

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+requiredPropertiesValidators_"></a>

### universalValidator.requiredPropertiesValidators\_ : <code>Object.\<string, UniversalValidator></code>

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+optionalPropertiesValidators_"></a>

### universalValidator.optionalPropertiesValidators\_ : <code>Object.\<string, UniversalValidator></code>

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+propertyPreprocessors_"></a>

### universalValidator.propertyPreprocessors\_ : <code>Array.\<PropertyPreprocessor></code>

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+alreadyInvoked_"></a>

### universalValidator.alreadyInvoked\_ : <code>Set.\<string></code>

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+nestedValidators_"></a>

### universalValidator.nestedValidators\_ : [<code>Array.\<UniversalValidator></code>](#UniversalValidator)

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+descriptionData"></a>

### universalValidator.descriptionData : <code>string</code>

A description.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
**Example**

```js
isBoolean().withDescription("Whether to remove .exe after compilation").descriptionData
```

<a name="UniversalValidator+containsNestedValidators"></a>

### universalValidator.containsNestedValidators : <code>boolean</code>

Whether validator contains nested anyOf|oneOf|allOf validators.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
**Example**

```js
isAnyOf(isInteger(), isBoolean()).containsNestedValidators
```

<a name="UniversalValidator+typesData"></a>

### universalValidator.typesData : <code>Array.\<string></code>

Expected types.
If nested validators contain just nested validators an empty array is returned.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
**Example**

```js
isAnyOf(isInteger(), isBoolean()).typesData
```

<a name="UniversalValidator+jsTypesData"></a>

### universalValidator.jsTypesData : <code>Array.\<string></code>

Expected JS types.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
**Example**

```js
isAnyOf(isInteger(), isBoolean()).jsTypesData
```

<a name="UniversalValidator+requiredPropertiesData"></a>

### universalValidator.requiredPropertiesData : <code>object</code>

Required properties.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
**Example**

```js
record({
  name: isString(),
  age: isInteger()
}).requiredPropertiesData
```

<a name="UniversalValidator+optionalPropertiesData"></a>

### universalValidator.optionalPropertiesData : <code>object</code>

An optional properties tree.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
**Example**

```js
isObject().withOptionalProperties({
  name: isString(),
  age: isInteger()
}).optionalPropertiesData
 
```

<a name="UniversalValidator+requiredPropertiesDescriptionsData"></a>

### universalValidator.requiredPropertiesDescriptionsData : <code>object</code>

Required property's descriptions.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
**Example**

```js
record({
  name: isString().withDescription("A name"),
  age: isInteger().withDescription("An age")
}).requiredPropertiesDescriptionsData
```

<a name="UniversalValidator+optionalPropertiesDescriptionsData"></a>

### universalValidator.optionalPropertiesDescriptionsData : <code>object</code>

Optional property's descriptions.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
**Example**

```js
isObject().withOptionalProperties({
  name: isString().withDescription("A name"),
  age: isInteger().withDescription("An age")
}).optionalPropertiesDescriptionsData
```

<a name="UniversalValidator+isPrivateProperty_"></a>

### universalValidator.isPrivateProperty\_(property)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param    | Type                |
| -------- | ------------------- |
| property | <code>string</code> |

<a name="UniversalValidator+isReservedProperty_"></a>

### universalValidator.isReservedProperty\_(property)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param    | Type                |
| -------- | ------------------- |
| property | <code>string</code> |

<a name="UniversalValidator+requireSameType_"></a>

### universalValidator.requireSameType\_(input)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param | Type             |
| ----- | ---------------- |
| input | <code>any</code> |

<a name="UniversalValidator+requirePublicProperties_"></a>

### universalValidator.requirePublicProperties\_(properties)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param      | Type                |
| ---------- | ------------------- |
| properties | <code>object</code> |

<a name="UniversalValidator+requireNotReservedProperties_"></a>

### universalValidator.requireNotReservedProperties\_(properties)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param      | Type                |
| ---------- | ------------------- |
| properties | <code>object</code> |

<a name="UniversalValidator+requireTrue_"></a>

### universalValidator.requireTrue\_(value)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="UniversalValidator+requireCount_"></a>

### universalValidator.requireCount\_(value, argumentName)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param        | Type                |
| ------------ | ------------------- |
| value        | <code>string</code> |
| argumentName | <code>string</code> |

<a name="UniversalValidator+requireRange_"></a>

### universalValidator.requireRange\_(from, to)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param | Type             |
| ----- | ---------------- |
| from  | <code>any</code> |
| to    | <code>any</code> |

<a name="UniversalValidator+requireValidValidators_"></a>

### universalValidator.requireValidValidators\_(properties)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param      | Type                                                         |
| ---------- | ------------------------------------------------------------ |
| properties | <code>Object.\<string, (UniversalValidator\|boolean)></code> |

<a name="UniversalValidator+deleteValidatorPlaceholders_"></a>

### universalValidator.deleteValidatorPlaceholders\_(properties)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param      | Type                |
| ---------- | ------------------- |
| properties | <code>object</code> |

<a name="UniversalValidator+tryInvoke_"></a>

### universalValidator.tryInvoke\_(name)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param | Type                |
| ----- | ------------------- |
| name  | <code>string</code> |

<a name="UniversalValidator+regexToPlainString_"></a>

### universalValidator.regexToPlainString\_(regex)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param | Type                |
| ----- | ------------------- |
| regex | <code>RegExp</code> |

<a name="UniversalValidator+addValueConstraints_"></a>

### universalValidator.addValueConstraints\_(schema, simpleSubschemas, action)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param            | Type                              |
| ---------------- | --------------------------------- |
| schema           | <code>object</code>               |
| simpleSubschemas | <code>object</code>               |
| action           | <code>ReadonlyActionInfo\_</code> |

<a name="UniversalValidator+addLengthConstraints_"></a>

### universalValidator.addLengthConstraints\_(schema, simpleSubschemas, action)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param            | Type                              |
| ---------------- | --------------------------------- |
| schema           | <code>object</code>               |
| simpleSubschemas | <code>object</code>               |
| action           | <code>ReadonlyActionInfo\_</code> |

<a name="UniversalValidator+addItemCountConstraints_"></a>

### universalValidator.addItemCountConstraints\_(schema, simpleSubschemas, action)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param            | Type                              |
| ---------------- | --------------------------------- |
| schema           | <code>object</code>               |
| simpleSubschemas | <code>object</code>               |
| action           | <code>ReadonlyActionInfo\_</code> |

<a name="UniversalValidator+addPropertyCountConstraints_"></a>

### universalValidator.addPropertyCountConstraints\_(schema, simpleSubschemas, action)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param            | Type                              |
| ---------------- | --------------------------------- |
| schema           | <code>object</code>               |
| simpleSubschemas | <code>object</code>               |
| action           | <code>ReadonlyActionInfo\_</code> |

<a name="UniversalValidator+addProperties_"></a>

### universalValidator.addProperties\_(schema, action)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param  | Type                              |
| ------ | --------------------------------- |
| schema | <code>object</code>               |
| action | <code>ReadonlyActionInfo\_</code> |

<a name="UniversalValidator+preprocessValue_"></a>

### universalValidator.preprocessValue\_(value) ⇒ <code>any</code>

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="UniversalValidator+preprocessProperties_"></a>

### universalValidator.preprocessProperties\_(value)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param | Type                |
| ----- | ------------------- |
| value | <code>object</code> |

<a name="UniversalValidator+isIterable_"></a>

### universalValidator.isIterable\_(value)

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="UniversalValidator+clone"></a>

### universalValidator.clone() ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Clone the current validator.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - A validator clone.\
**Example**

```js
isBoolean().clone()
```

<a name="UniversalValidator+withDescription"></a>

### universalValidator.withDescription(description) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Add a description.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param       | Type                | Description    |
| ----------- | ------------------- | -------------- |
| description | <code>string</code> | A description. |

**Example**

```js
isBoolean().withDescription("Whether to remove .exe after compilation")
```

<a name="UniversalValidator+withDefault"></a>

### universalValidator.withDefault(value) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Add a default value.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| value | <code>string</code> | A default value. |

**Example**

```js
isBoolean().withDefault(true)
```

<a name="UniversalValidator+lessThan"></a>

### universalValidator.lessThan(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be less than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isNumber().lessThan(0)
```

<a name="UniversalValidator+greaterThan"></a>

### universalValidator.greaterThan(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be greater than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isNumber().greaterThan(0)
```

<a name="UniversalValidator+lessThanOrEqualTo"></a>

### universalValidator.lessThanOrEqualTo(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be less than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isNumber().lessThanOrEqualTo(0)
```

<a name="UniversalValidator+greaterThanOrEqualTo"></a>

### universalValidator.greaterThanOrEqualTo(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be greater than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isNumber().greaterThanOrEqualTo(0)
```

<a name="UniversalValidator+equalTo"></a>

### universalValidator.equalTo(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isNumber().equalTo(0)
```

<a name="UniversalValidator+notEqualTo"></a>

### universalValidator.notEqualTo(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be not equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isNumber().notEqualTo(0)
```

<a name="UniversalValidator+inRange"></a>

### universalValidator.inRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be within a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

**Example**

```js
isNumber().inRange(0, 10)
```

<a name="UniversalValidator+notInRange"></a>

### universalValidator.notInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be outside of a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

**Example**

```js
isNumber().notInRange(0, 10)
```

<a name="UniversalValidator+withValueOneOf"></a>

### universalValidator.withValueOneOf(...constants) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be equal to one of constants.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

**Example**

```js
isNumber().withValueOneOf(0, 2, 4)
```

<a name="UniversalValidator+withValueNotOneOf"></a>

### universalValidator.withValueNotOneOf(...constants) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be not equal to one of constants.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

**Example**

```js
isNumber().withValueNotOneOf(0, 2, 4)
```

<a name="UniversalValidator+withLengthLessThan"></a>

### universalValidator.withLengthLessThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be shorter than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isString().withLengthLessThan(5)
```

<a name="UniversalValidator+withLengthGreaterThan"></a>

### universalValidator.withLengthGreaterThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be longer than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isString().withLengthGreaterThan(5)
```

<a name="UniversalValidator+withLengthLessThanOrEqualTo"></a>

### universalValidator.withLengthLessThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be shorter than or is a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isString({ to: 5 })
```

<a name="UniversalValidator+withLengthGreaterThanOrEqualTo"></a>

### universalValidator.withLengthGreaterThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be longer than or is a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isString({ from: 5 })
```

<a name="UniversalValidator+withLengthEqualTo"></a>

### universalValidator.withLengthEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isString(5)
```

<a name="UniversalValidator+withLengthNotEqualTo"></a>

### universalValidator.withLengthNotEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length not to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isString().withLengthNotEqualTo(5)
```

<a name="UniversalValidator+withLengthInRange"></a>

### universalValidator.withLengthInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be within a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

**Example**

```js
isString(1, 5)
```

<a name="UniversalValidator+withLengthNotInRange"></a>

### universalValidator.withLengthNotInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be outside of a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

**Example**

```js
isString().withLengthNotInRange(1, 5)
```

<a name="UniversalValidator+matching"></a>

### universalValidator.matching(regex) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to match a regular expression.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

**Example**

```js
isString().matching(/Emily/)
```

<a name="UniversalValidator+notMatching"></a>

### universalValidator.notMatching(regex) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value not to match a regular expression.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

**Example**

```js
isString().notMatching(/Emily/)
```

<a name="UniversalValidator+withItems"></a>

### universalValidator.withItems(items) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require items to satisfy their constraints.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                                                   | Description  |
| ----- | ------------------------------------------------------ | ------------ |
| items | [<code>UniversalValidator</code>](#UniversalValidator) | Constraints. |

**Example**

```js
isArray().withItems(isBoolean())
```

<a name="UniversalValidator+withItemCountLessThan"></a>

### universalValidator.withItemCountLessThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be less than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isArray().withItemCountLessThan(5)
```

<a name="UniversalValidator+withItemCountGreaterThan"></a>

### universalValidator.withItemCountGreaterThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be greater than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isArray().withItemCountGreaterThan(5)
```

<a name="UniversalValidator+withItemCountLessThanOrEqualTo"></a>

### universalValidator.withItemCountLessThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be less than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isArray({ to: 5 })
```

<a name="UniversalValidator+withItemCountGreaterThanOrEqualTo"></a>

### universalValidator.withItemCountGreaterThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be greater than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isArray({ from: 5 })
```

<a name="UniversalValidator+withItemCountEqualTo"></a>

### universalValidator.withItemCountEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isArray(5)
```

<a name="UniversalValidator+withItemCountNotEqualTo"></a>

### universalValidator.withItemCountNotEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count not to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

**Example**

```js
isArray().withItemCountNotEqualTo(5)
```

<a name="UniversalValidator+withItemCountInRange"></a>

### universalValidator.withItemCountInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be within a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

**Example**

```js
isArray(1, 5)
```

<a name="UniversalValidator+withItemCountNotInRange"></a>

### universalValidator.withItemCountNotInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be outside of a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

**Example**

```js
isArray().withItemCountNotInRange(1, 5)
```

<a name="UniversalValidator+withPropertyPreprocessors"></a>

### universalValidator.withPropertyPreprocessors(...preprocessors) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Inject specified property preprocessors which are used to convert arbitrary values to validators in
`withRequiredProperties` and `withOptionalProperties` methods.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param            | Type                                       | Description             |
| ---------------- | ------------------------------------------ | ----------------------- |
| ...preprocessors | <code>Array.\<PropertyPreprocessor></code> | Property preprocessors. |

**Example**

```js
record({ pattern: "*" }).withPropertyPreprocessors(globPreprocessor)
```

<a name="UniversalValidator+withAddedPropertyPreprocessors"></a>

### universalValidator.withAddedPropertyPreprocessors(...preprocessors) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Inject specified property preprocessors which are used to convert arbitrary values to validators in
`withRequiredProperties` and `withOptionalProperties` methods.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param            | Type                                       | Description             |
| ---------------- | ------------------------------------------ | ----------------------- |
| ...preprocessors | <code>Array.\<PropertyPreprocessor></code> | Property preprocessors. |

**Example**

```js
record({ pattern: "*" }).withAddedPropertyPreprocessors(globPreprocessor)
```

<a name="UniversalValidator+withNotPropertyPreprocessors"></a>

### universalValidator.withNotPropertyPreprocessors() ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Disable property preprocessors.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.\
**Example**

```js
record({ name: isString() }).withNotPropertyPreprocessors()
```

<a name="UniversalValidator+withRequiredProperties"></a>

### universalValidator.withRequiredProperties(properties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require specified properties.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param      | Type                                              | Description   |
| ---------- | ------------------------------------------------- | ------------- |
| properties | <code>Object.\<string, UniversalValidator></code> | A constraint. |

**Example**

```js
record({
  name: isString(),
  age: isInteger()
})
```

<a name="UniversalValidator+withOptionalProperties"></a>

### universalValidator.withOptionalProperties(properties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Permit specified optional properties.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param      | Type                                              | Description   |
| ---------- | ------------------------------------------------- | ------------- |
| properties | <code>Object.\<string, UniversalValidator></code> | A constraint. |

**Example**

```js
isObject().withOptionalProperties({
  name: isString(),
  age: isInteger()
})
```

<a name="UniversalValidator+withAdditionalProperties"></a>

### universalValidator.withAdditionalProperties(properties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Permit additional properties.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param      | Type                                                   | Description   |
| ---------- | ------------------------------------------------------ | ------------- |
| properties | [<code>UniversalValidator</code>](#UniversalValidator) | A constraint. |

**Example**

```js
isObject().withAdditionalProperties(isBoolean())
```

<a name="UniversalValidator+withNotAdditionalProperties"></a>

### universalValidator.withNotAdditionalProperties() ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require no additional properties.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.\
**Example**

```js
record({
  name: isString(),
  age: isInteger()
})
```

<a name="UniversalValidator+withPropertyCountLessThan"></a>

### universalValidator.withPropertyCountLessThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be less than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isObject().withPropertyCountLessThan(5)
```

<a name="UniversalValidator+withPropertyCountGreaterThan"></a>

### universalValidator.withPropertyCountGreaterThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be greater than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isObject().withPropertyCountGreaterThan(5)
```

<a name="UniversalValidator+withPropertyCountLessThanOrEqualTo"></a>

### universalValidator.withPropertyCountLessThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be less than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isObject({ to: 5 })
```

<a name="UniversalValidator+withPropertyCountGreaterThanOrEqualTo"></a>

### universalValidator.withPropertyCountGreaterThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be greater than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isObject({ from: 5 })
```

<a name="UniversalValidator+withPropertyCountEqualTo"></a>

### universalValidator.withPropertyCountEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isObject(5)
```

<a name="UniversalValidator+withPropertyCountNotEqualTo"></a>

### universalValidator.withPropertyCountNotEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount not to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

**Example**

```js
isObject().withPropertyCountNotEqualTo(5)
```

<a name="UniversalValidator+withPropertyCountInRange"></a>

### universalValidator.withPropertyCountInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be within a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

**Example**

```js
isObject(1, 5)
```

<a name="UniversalValidator+withPropertyCountNotInRange"></a>

### universalValidator.withPropertyCountNotInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be outside of a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

**Example**

```js
isObject().withPropertyCountNotInRange(1, 5)
```

<a name="UniversalValidator+where"></a>

### ~~universalValidator.where(predicate) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)~~

***Deprecated***

Require property relationships.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param     | Type                        | Description  |
| --------- | --------------------------- | ------------ |
| predicate | <code>WherePredicate</code> | A predicate. |

<a name="UniversalValidator+whereValue"></a>

### universalValidator.whereValue(predicate) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value constraints.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| predicate | <code>Predicate</code> | A predicate. |

**Example**

```js
isInteger().whereValue(value => value % 2 === 0)
```

<a name="UniversalValidator+withSubvalidators"></a>

### universalValidator.withSubvalidators(...nestedValidators) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require specified nested validators.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param               | Type                                                            | Description        |
| ------------------- | --------------------------------------------------------------- | ------------------ |
| ...nestedValidators | [<code>Array.\<UniversalValidator></code>](#UniversalValidator) | Nested validators. |

**Example**

```js
isAnyOf(isInteger(), isBoolean())
```

<a name="UniversalValidator+validate"></a>

### universalValidator.validate(input) ⇒ <code>boolean</code>

Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: <code>boolean</code> - Whether an input value satisfies all conditions.

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

**Example**

```js
checkWhether(true, isBoolean())
```

<a name="UniversalValidator+toString"></a>

### universalValidator.toString() ⇒ <code>string</code>

Converts object to string.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: <code>string</code> - A string representation.\
**Example**

```js
isBoolean().toString()
```

<a name="UniversalValidator+toJSONSchema"></a>

### universalValidator.toJSONSchema() ⇒ <code>object</code>

Convert object to JSON schema (draft 07) representation.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: <code>object</code> - JSON schema (draft 07) representation.\
**Example**

```js
isBoolean().toJSONSchema()
```

<a name="UniversalValidator+toJSONSchema_"></a>

### universalValidator.toJSONSchema\_() ⇒ <code>object</code>

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)

## Functions

<dl>
<dt><a href="#checkWhether">checkWhether(input, validator)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether <code>value</code> satisfies all conditions.</p>
</dd>
<dt><a href="#throwOnFailure">throwOnFailure(input, validator, message)</a></dt>
<dd><p>Check whether <code>value</code> satisfies all conditions and print error in case.</p>
</dd>
</dl>

<a name="checkWhether"></a>

## checkWhether(input, validator) ⇒ <code>boolean</code>

Check whether `value` satisfies all conditions.

**Kind**: global function\
**Returns**: <code>boolean</code> - Whether `value` satisfies all conditions.

| Param     | Type                            | Description  |
| --------- | ------------------------------- | ------------ |
| input     | <code>any</code>                | An input.    |
| validator | <code>UniversalValidator</code> | A validator. |

**Example**

```js
checkWhether(true, isBoolean())
```

<a name="throwOnFailure"></a>

## throwOnFailure(input, validator, message)

Check whether `value` satisfies all conditions and print error in case.

**Kind**: global function

| Param     | Type                            | Description  |
| --------- | ------------------------------- | ------------ |
| input     | <code>any</code>                | An input.    |
| validator | <code>UniversalValidator</code> | A validator. |
| message   | <code>string</code>             | A message.   |

**Example**

```js
throwOnFailure(true, isBoolean())
```

## Functions

<dl>
<dt><a href="#isBoolean">isBoolean()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be boolean.</p>
</dd>
<dt><a href="#isNumber">isNumber([from], [to])</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be number.</p>
</dd>
<dt><a href="#isInteger">isInteger([from], [to])</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be integer.</p>
</dd>
<dt><a href="#isString">isString([from], [to])</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be string.</p>
</dd>
<dt><a href="#isBigint">isBigint([from], [to])</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be bigint.</p>
</dd>
<dt><a href="#isSymbol">isSymbol()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be symbol.</p>
</dd>
<dt><a href="#isArray">isArray([from], [to])</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be array.</p>
</dd>
<dt><a href="#isObject">isObject([from], [to])</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be object.</p>
</dd>
<dt><a href="#isAnyOf">isAnyOf(...validators)</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require any of constraints to be satisfied.</p>
</dd>
<dt><a href="#isOneOf">isOneOf(...validators)</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require one of constraints to be satisfied.</p>
</dd>
<dt><a href="#isAllOf">isAllOf(...validators)</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require all of constraints to be satisfied.</p>
</dd>
</dl>

<a name="is"></a>

## ~~is~~

***Deprecated***

Get is\* functions.

**Kind**: global enum\
<a name="isBoolean"></a>

## isBoolean() ⇒ <code>UniversalValidator</code>

Require value to be boolean.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
**Example**

```js
isBoolean()
```

<a name="isNumber"></a>

## isNumber(\[from\], \[to\]) ⇒ <code>UniversalValidator</code>

Require value to be number.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param    | Type                                      | Description         |
| -------- | ----------------------------------------- | ------------------- |
| \[from\] | <code>number</code> \| <code>Range</code> | A lowest boundary.  |
| \[to\]   | <code>number</code>                       | A highest boundary. |

**Example**

```js
isNumber()
```

<a name="isInteger"></a>

## isInteger(\[from\], \[to\]) ⇒ <code>UniversalValidator</code>

Require value to be integer.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param    | Type                                      | Description         |
| -------- | ----------------------------------------- | ------------------- |
| \[from\] | <code>number</code> \| <code>Range</code> | A lowest boundary.  |
| \[to\]   | <code>number</code>                       | A highest boundary. |

**Example**

```js
isInteger()
```

<a name="isString"></a>

## isString(\[from\], \[to\]) ⇒ <code>UniversalValidator</code>

Require value to be string.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param    | Type                                      | Description         |
| -------- | ----------------------------------------- | ------------------- |
| \[from\] | <code>number</code> \| <code>Range</code> | A lowest boundary.  |
| \[to\]   | <code>number</code>                       | A highest boundary. |

**Example**

```js
isString()
```

<a name="isBigint"></a>

## isBigint(\[from\], \[to\]) ⇒ <code>UniversalValidator</code>

Require value to be bigint.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param    | Type                                      | Description         |
| -------- | ----------------------------------------- | ------------------- |
| \[from\] | <code>number</code> \| <code>Range</code> | A lowest boundary.  |
| \[to\]   | <code>number</code>                       | A highest boundary. |

**Example**

```js
isBigint()
```

<a name="isSymbol"></a>

## isSymbol() ⇒ <code>UniversalValidator</code>

Require value to be symbol.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
**Example**

```js
isSymbol()
```

<a name="isArray"></a>

## isArray(\[from\], \[to\]) ⇒ <code>UniversalValidator</code>

Require value to be array.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param    | Type                                      | Description         |
| -------- | ----------------------------------------- | ------------------- |
| \[from\] | <code>number</code> \| <code>Range</code> | A lowest boundary.  |
| \[to\]   | <code>number</code>                       | A highest boundary. |

**Example**

```js
isArray()
```

<a name="isObject"></a>

## isObject(\[from\], \[to\]) ⇒ <code>UniversalValidator</code>

Require value to be object.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param    | Type                                      | Description         |
| -------- | ----------------------------------------- | ------------------- |
| \[from\] | <code>number</code> \| <code>Range</code> | A lowest boundary.  |
| \[to\]   | <code>number</code>                       | A highest boundary. |

**Example**

```js
isObject()
```

<a name="isAnyOf"></a>

## isAnyOf(...validators) ⇒ <code>UniversalValidator</code>

Require any of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param         | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| ...validators | <code>Array.\<UniversalValidator></code> | Validators. |

**Example**

```js
isAnyOf(isBoolean(), isInteger())
```

<a name="isOneOf"></a>

## isOneOf(...validators) ⇒ <code>UniversalValidator</code>

Require one of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param         | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| ...validators | <code>Array.\<UniversalValidator></code> | Validators. |

**Example**

```js
isAnyOf(isBoolean(), isInteger())
```

<a name="isAllOf"></a>

## isAllOf(...validators) ⇒ <code>UniversalValidator</code>

Require all of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param         | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| ...validators | <code>Array.\<UniversalValidator></code> | Validators. |
