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

<a name="BasicUtils"></a>

## BasicUtils

Basic validation tools.

**Kind**: global class

- [BasicUtils](#BasicUtils)
  - [.safeToString\_(value)](#BasicUtils.safeToString_)
  - [.isBoolean(value)](#BasicUtils.isBoolean) ⇒ <code>boolean</code>
  - [.isNumber(value)](#BasicUtils.isNumber) ⇒ <code>boolean</code>
  - [.isInteger(value)](#BasicUtils.isInteger) ⇒ <code>boolean</code>
  - [.isString(value)](#BasicUtils.isString) ⇒ <code>boolean</code>
  - [.isBigint(value)](#BasicUtils.isBigint) ⇒ <code>boolean</code>
  - [.isSymbol(value)](#BasicUtils.isSymbol) ⇒ <code>boolean</code>
  - [.isArray(value)](#BasicUtils.isArray) ⇒ <code>boolean</code>
  - [.isObject(value)](#BasicUtils.isObject) ⇒ <code>boolean</code>
  - [.isRegExp(value)](#BasicUtils.isRegExp) ⇒ <code>boolean</code>
  - [.isFunction(value)](#BasicUtils.isFunction) ⇒ <code>boolean</code>
  - [.isExisting(value)](#BasicUtils.isExisting) ⇒ <code>boolean</code>
  - [.isSupported(value)](#BasicUtils.isSupported) ⇒ <code>boolean</code>
  - [.isComparableSupported(value)](#BasicUtils.isComparableSupported) ⇒ <code>boolean</code>
  - [.isSupportedTypeIdentifier(identifier)](#BasicUtils.isSupportedTypeIdentifier) ⇒ <code>boolean</code>
  - [.isComparableSupportedTypeIdentifier(identifier)](#BasicUtils.isComparableSupportedTypeIdentifier) ⇒ <code>boolean</code>
  - [.isValidator(value)](#BasicUtils.isValidator) ⇒ <code>boolean</code>
  - [.requireTypeByPredicate\_(predicate, value, argumentName, argumentIndex)](#BasicUtils.requireTypeByPredicate_)
  - [.requireTypeIdentifierByPredicate\_(predicate, identifier, argumentName, argumentIndex)](#BasicUtils.requireTypeIdentifierByPredicate_)
  - [.requireBoolean(value, argumentName, argumentIndex)](#BasicUtils.requireBoolean)
  - [.requireNumber(value, argumentName, argumentIndex)](#BasicUtils.requireNumber)
  - [.requireInteger(value, argumentName, argumentIndex)](#BasicUtils.requireInteger)
  - [.requireString(value, argumentName, argumentIndex)](#BasicUtils.requireString)
  - [.requireBigint(value, argumentName, argumentIndex)](#BasicUtils.requireBigint)
  - [.requireSymbol(value, argumentName, argumentIndex)](#BasicUtils.requireSymbol)
  - [.requireArray(value, argumentName, argumentIndex)](#BasicUtils.requireArray)
  - [.requireObject(value, argumentName, argumentIndex)](#BasicUtils.requireObject)
  - [.requireRegExp(value, argumentName, argumentIndex)](#BasicUtils.requireRegExp)
  - [.requireFunction(value, argumentName, argumentIndex)](#BasicUtils.requireFunction)
  - [.requireExisting(value, argumentName, argumentIndex)](#BasicUtils.requireExisting)
  - [.requireSupported(value, argumentName, argumentIndex)](#BasicUtils.requireSupported)
  - [.requireComparableSupported(value, argumentName, argumentIndex)](#BasicUtils.requireComparableSupported)
  - [.requireSupportedTypeIdentifier(identifier, argumentName, argumentIndex)](#BasicUtils.requireSupportedTypeIdentifier)
  - [.requireComparableSupportedTypeIdentifier(identifier, argumentName, argumentIndex)](#BasicUtils.requireComparableSupportedTypeIdentifier)
  - [.requireValidator(value, argumentName, argumentIndex)](#BasicUtils.requireValidator)

<a name="BasicUtils.safeToString_"></a>

### BasicUtils.safeToString\_(value)

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="BasicUtils.isBoolean"></a>

### BasicUtils.isBoolean(value) ⇒ <code>boolean</code>

Check whether a `value` is a boolean value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a boolean value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isNumber"></a>

### BasicUtils.isNumber(value) ⇒ <code>boolean</code>

Check whether a `value` is a number value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a number value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isInteger"></a>

### BasicUtils.isInteger(value) ⇒ <code>boolean</code>

Check whether a `value` is an integer value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an integer value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isString"></a>

### BasicUtils.isString(value) ⇒ <code>boolean</code>

Check whether a `value` is a string value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a string value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isBigint"></a>

### BasicUtils.isBigint(value) ⇒ <code>boolean</code>

Check whether a `value` is a bigint value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a bigint value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isSymbol"></a>

### BasicUtils.isSymbol(value) ⇒ <code>boolean</code>

Check whether a `value` is a symbol value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a symbol value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isArray"></a>

### BasicUtils.isArray(value) ⇒ <code>boolean</code>

Check whether a `value` is an array value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an array value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isObject"></a>

### BasicUtils.isObject(value) ⇒ <code>boolean</code>

Check whether a `value` is an object value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is an object value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isRegExp"></a>

### BasicUtils.isRegExp(value) ⇒ <code>boolean</code>

Check whether a `value` is a regular expression.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a regular expression.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isFunction"></a>

### BasicUtils.isFunction(value) ⇒ <code>boolean</code>

Check whether a `value` is a function.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a function.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isExisting"></a>

### BasicUtils.isExisting(value) ⇒ <code>boolean</code>

Check whether a `value` is neither undefined or null value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a not null or undefined value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isSupported"></a>

### BasicUtils.isSupported(value) ⇒ <code>boolean</code>

Check whether a `value` is a supported validator value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a supported validator type value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isComparableSupported"></a>

### BasicUtils.isComparableSupported(value) ⇒ <code>boolean</code>

Check whether a `value` is a supported comparable validator value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a supported comparable validator type value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="BasicUtils.isSupportedTypeIdentifier"></a>

### BasicUtils.isSupportedTypeIdentifier(identifier) ⇒ <code>boolean</code>

Check whether a `identifier` is a supported validator type identifier.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `identifier` is a supported validator type identifier.

| Param      | Type             | Description    |
| ---------- | ---------------- | -------------- |
| identifier | <code>any</code> | An identifier. |

<a name="BasicUtils.isComparableSupportedTypeIdentifier"></a>

### BasicUtils.isComparableSupportedTypeIdentifier(identifier) ⇒ <code>boolean</code>

Check whether a `identifier` is a supported comparable validator type identifier.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `identifier` is a supported comparable validator type identifier.

| Param      | Type             | Description    |
| ---------- | ---------------- | -------------- |
| identifier | <code>any</code> | An identifier. |

<a name="BasicUtils.isValidator"></a>

### BasicUtils.isValidator(value) ⇒ <code>boolean</code>

Check whether a `value` is a validator value.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)\
**Returns**: <code>boolean</code> - Whether a `value` is a validator value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

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

### BasicUtils.requireBoolean(value, argumentName, argumentIndex)

Check whether a `value` is a boolean value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireNumber"></a>

### BasicUtils.requireNumber(value, argumentName, argumentIndex)

Check whether a `value` is a number value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireInteger"></a>

### BasicUtils.requireInteger(value, argumentName, argumentIndex)

Check whether a `value` is an integer value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireString"></a>

### BasicUtils.requireString(value, argumentName, argumentIndex)

Check whether a `value` is a string value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireBigint"></a>

### BasicUtils.requireBigint(value, argumentName, argumentIndex)

Check whether a `value` is a bigint value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireSymbol"></a>

### BasicUtils.requireSymbol(value, argumentName, argumentIndex)

Check whether a `value` is a symbol value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireArray"></a>

### BasicUtils.requireArray(value, argumentName, argumentIndex)

Check whether a `value` is an array value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireObject"></a>

### BasicUtils.requireObject(value, argumentName, argumentIndex)

Check whether a `value` is an object value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireRegExp"></a>

### BasicUtils.requireRegExp(value, argumentName, argumentIndex)

Check whether a `value` is a regular expression value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireFunction"></a>

### BasicUtils.requireFunction(value, argumentName, argumentIndex)

Check whether a `value` is a function value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireExisting"></a>

### BasicUtils.requireExisting(value, argumentName, argumentIndex)

Check whether a `value` is neither undefined or null value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireSupported"></a>

### BasicUtils.requireSupported(value, argumentName, argumentIndex)

Check whether a `value` is a supported validator value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireComparableSupported"></a>

### BasicUtils.requireComparableSupported(value, argumentName, argumentIndex)

Check whether a `value` is a basic supported comparable validator value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireSupportedTypeIdentifier"></a>

### BasicUtils.requireSupportedTypeIdentifier(identifier, argumentName, argumentIndex)

Check whether a `identifier` is a supported validator type identifier and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| identifier    | <code>any</code>    | An identifier.     |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireComparableSupportedTypeIdentifier"></a>

### BasicUtils.requireComparableSupportedTypeIdentifier(identifier, argumentName, argumentIndex)

Check whether a `identifier` is a supported comparable validator type value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| identifier    | <code>any</code>    | An identifier.     |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="BasicUtils.requireValidator"></a>

### BasicUtils.requireValidator(value, argumentName, argumentIndex)

Check whether a `value` is a validator value and throw if not.

**Kind**: static method of [<code>BasicUtils</code>](#BasicUtils)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

## Functions

<dl>
<dt><a href="#getBasicUtils">getBasicUtils()</a> ⇒ <code>BasicUtils</code></dt>
<dd><p>Return <code>BasicUtils</code> class.</p>
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
<a name="getObjectUtils"></a>

## getObjectUtils() ⇒ <code>ObjectUtils</code>

Return `ObjectUtils` class.

**Kind**: global function\
<a name="getUniversalValidator"></a>

## getUniversalValidator() ⇒ <code>UniversalValidator</code>

Return `UniversalValidator` class.

**Kind**: global function\
<a name="getJSDocGenerator"></a>

## getJSDocGenerator() ⇒ <code>JSDocGenerator</code>

Return `JSDocGenerator` class.

**Kind**: global function

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
<a name="JSDocGenerator"></a>

## JSDocGenerator

A JSDoc generator that creates simple JSDoc from a validator.

**Kind**: global class\
**Summary**: Generates JSDoc objects.

- [JSDocGenerator](#JSDocGenerator)
  - [new JSDocGenerator(A, validator)](#new_JSDocGenerator_new)
  - [.mapTypeData\_(value, prefix)](#JSDocGenerator+mapTypeData_) ⇒ <code>Object.\<string, any></code>
  - [.mapDescriptionData\_(value, prefix)](#JSDocGenerator+mapDescriptionData_) ⇒ <code>Object.\<string, any></code>
  - [.toPropertyDefinition\_(type, name, description)](#JSDocGenerator+toPropertyDefinition_)
  - [.toString()](#JSDocGenerator+toString) ⇒ <code>string</code>

<a name="new_JSDocGenerator_new"></a>

### new JSDocGenerator(A, validator)

| Param     | Type                            | Description  |
| --------- | ------------------------------- | ------------ |
| A         | <code>string</code>             | type name.   |
| validator | <code>UniversalValidator</code> | A validator. |

<a name="JSDocGenerator+mapTypeData_"></a>

### jsDocGenerator.mapTypeData\_(value, prefix) ⇒ <code>Object.\<string, any></code>

**Kind**: instance method of [<code>JSDocGenerator</code>](#JSDocGenerator)

| Param  | Type                |
| ------ | ------------------- |
| value  | <code>object</code> |
| prefix | <code>string</code> |

<a name="JSDocGenerator+mapDescriptionData_"></a>

### jsDocGenerator.mapDescriptionData\_(value, prefix) ⇒ <code>Object.\<string, any></code>

**Kind**: instance method of [<code>JSDocGenerator</code>](#JSDocGenerator)

| Param  | Type                |
| ------ | ------------------- |
| value  | <code>object</code> |
| prefix | <code>string</code> |

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
<a name="asJSDoc"></a>

## asJSDoc(A, validator) ⇒ <code>string</code>

Convert a validator to JSDoc representation.

**Kind**: global function\
**Returns**: <code>string</code> - The validator.

| Param     | Type                            | Description  |
| --------- | ------------------------------- | ------------ |
| A         | <code>string</code>             | type name.   |
| validator | <code>UniversalValidator</code> | A validator. |

<a name="ObjectUtils"></a>

## ObjectUtils

Object utilities.

**Kind**: global class

- [ObjectUtils](#ObjectUtils)
  - [.clone(value)](#ObjectUtils.clone) ⇒ <code>object</code>
  - [.cloneWhenObject(value)](#ObjectUtils.cloneWhenObject) ⇒ <code>any</code>
  - [.merge(first, second)](#ObjectUtils.merge) ⇒ <code>object</code>
  - [.propertyNames(value, prefix)](#ObjectUtils.propertyNames) ⇒ <code>Array.\<string></code>

<a name="ObjectUtils.clone"></a>

### ObjectUtils.clone(value) ⇒ <code>object</code>

Clone an object deeply.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)\
**Returns**: <code>object</code> - A deep copy.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| value | <code>object</code> | An object.  |

<a name="ObjectUtils.cloneWhenObject"></a>

### ObjectUtils.cloneWhenObject(value) ⇒ <code>any</code>

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

<a name="ObjectUtils.propertyNames"></a>

### ObjectUtils.propertyNames(value, prefix) ⇒ <code>Array.\<string></code>

Get object's property names.

**Kind**: static method of [<code>ObjectUtils</code>](#ObjectUtils)\
**Returns**: <code>Array.\<string></code> - Property names.

| Param  | Type                | Description |
| ------ | ------------------- | ----------- |
| value  | <code>object</code> | An object.  |
| prefix | <code>string</code> | A prefix.   |

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

<a name="StringifiedTypes"></a>

## StringifiedTypes

Stringified type representations.

**Kind**: global class

- [StringifiedTypes](#StringifiedTypes)
  - [.baseTypes](#StringifiedTypes.baseTypes) : <code>Array.\<string></code>
  - [.baseComparableTypes](#StringifiedTypes.baseComparableTypes) : <code>Array.\<string></code>
  - [.baseTypeIdentifiers](#StringifiedTypes.baseTypeIdentifiers) : <code>Array.\<string></code>
  - [.baseComparableTypeIdentifiers](#StringifiedTypes.baseComparableTypeIdentifiers) : <code>Array.\<string></code>

<a name="StringifiedTypes.baseTypes"></a>

### StringifiedTypes.baseTypes : <code>Array.\<string></code>

Base supported types.

**Kind**: static property of [<code>StringifiedTypes</code>](#StringifiedTypes)\
<a name="StringifiedTypes.baseComparableTypes"></a>

### StringifiedTypes.baseComparableTypes : <code>Array.\<string></code>

Base supported comparable types.

**Kind**: static property of [<code>StringifiedTypes</code>](#StringifiedTypes)\
<a name="StringifiedTypes.baseTypeIdentifiers"></a>

### StringifiedTypes.baseTypeIdentifiers : <code>Array.\<string></code>

Base supported type identifiers.

**Kind**: static property of [<code>StringifiedTypes</code>](#StringifiedTypes)\
<a name="StringifiedTypes.baseComparableTypeIdentifiers"></a>

### StringifiedTypes.baseComparableTypeIdentifiers : <code>Array.\<string></code>

Base supported comparable type identifiers.

**Kind**: static property of [<code>StringifiedTypes</code>](#StringifiedTypes)\
<a name="Sample"></a>

## Sample

**Kind**: global typedef\
**Properties**

| Name | Type                         | Description |
| ---- | ---------------------------- | ----------- |
| a    | <code>number</code>          |             |
| b    | <code>Array.\<number></code> | Property b  |
| c    | <code>object</code>          | Property c  |
| c.d  | <code>number</code>          |             |
| e    | <code>any</code>             | X           |

## Typedefs

<dl>
<dt><a href="#Predicate">Predicate</a> ⇒ <code>boolean</code></dt>
<dd><p>A predicate.</p>
</dd>
<dt><a href="#WherePredicate">WherePredicate</a> ⇒ <code>Array.&lt;boolean&gt;</code></dt>
<dd><p>A where predicate.</p>
</dd>
<dt><a href="#BaseType">BaseType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;integer&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code> | <code>&quot;symbol&quot;</code> | <code>&quot;array&quot;</code> | <code>&quot;object&quot;</code></dt>
<dd><p>A basic type.</p>
</dd>
<dt><a href="#BaseComparableType">BaseComparableType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;integer&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code> | <code>&quot;symbol&quot;</code></dt>
<dd><p>A basic comparable type.</p>
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

<a name="BaseType"></a>

## BaseType : <code>"boolean"</code> | <code>"number"</code> | <code>"integer"</code> | <code>"string"</code> | <code>"bigint"</code> | <code>"symbol"</code> | <code>"array"</code> | <code>"object"</code>

A basic type.

**Kind**: global typedef\
<a name="BaseComparableType"></a>

## BaseComparableType : <code>"boolean"</code> | <code>"number"</code> | <code>"integer"</code> | <code>"string"</code> | <code>"bigint"</code> | <code>"symbol"</code>

A basic comparable type.

**Kind**: global typedef\
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
  - [.deleteValidatorPlaceholders\_(properties)](#UniversalValidator+deleteValidatorPlaceholders_)
  - [.tryInvoke\_(name)](#UniversalValidator+tryInvoke_)
  - [.regexToPlainString\_(regex)](#UniversalValidator+regexToPlainString_)
  - [.addValueConstraints\_(schema, simpleSubschemas, action)](#UniversalValidator+addValueConstraints_)
  - [.addLengthConstraints\_(schema, simpleSubschemas, action)](#UniversalValidator+addLengthConstraints_)
  - [.addItemCountConstraints\_(schema, simpleSubschemas, action)](#UniversalValidator+addItemCountConstraints_)
  - [.addPropertyCountConstraints\_(schema, simpleSubschemas, action)](#UniversalValidator+addPropertyCountConstraints_)
  - [.addProperties\_(schema, action)](#UniversalValidator+addProperties_)
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
  - [.where(predicate)](#UniversalValidator+where) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)
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
<a name="UniversalValidator+containsNestedValidators"></a>

### universalValidator.containsNestedValidators : <code>boolean</code>

Whether validator contains nested anyOf|oneOf|allOf validators.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+typesData"></a>

### universalValidator.typesData : <code>Array.\<string></code>

Expected types.
If nested validators contain just nested validators an empty array is returned.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+jsTypesData"></a>

### universalValidator.jsTypesData : <code>Array.\<string></code>

Expected JS types.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+requiredPropertiesData"></a>

### universalValidator.requiredPropertiesData : <code>object</code>

Required properties.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+optionalPropertiesData"></a>

### universalValidator.optionalPropertiesData : <code>object</code>

An optional properties tree.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+requiredPropertiesDescriptionsData"></a>

### universalValidator.requiredPropertiesDescriptionsData : <code>object</code>

Required property's descriptions.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
<a name="UniversalValidator+optionalPropertiesDescriptionsData"></a>

### universalValidator.optionalPropertiesDescriptionsData : <code>object</code>

Optional property's descriptions.

**Kind**: instance property of [<code>UniversalValidator</code>](#UniversalValidator)\
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

<a name="UniversalValidator+clone"></a>

### universalValidator.clone() ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Clone the current validator.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - A validator clone.\
<a name="UniversalValidator+withDescription"></a>

### universalValidator.withDescription(description) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Add a description.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param       | Type                | Description    |
| ----------- | ------------------- | -------------- |
| description | <code>string</code> | A description. |

<a name="UniversalValidator+withDefault"></a>

### universalValidator.withDefault(value) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Add a default value.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| value | <code>string</code> | A default value. |

<a name="UniversalValidator+lessThan"></a>

### universalValidator.lessThan(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be less than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+greaterThan"></a>

### universalValidator.greaterThan(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be greater than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+lessThanOrEqualTo"></a>

### universalValidator.lessThanOrEqualTo(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be less than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+greaterThanOrEqualTo"></a>

### universalValidator.greaterThanOrEqualTo(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be greater than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+equalTo"></a>

### universalValidator.equalTo(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+notEqualTo"></a>

### universalValidator.notEqualTo(constant) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be not equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+inRange"></a>

### universalValidator.inRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be within a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="UniversalValidator+notInRange"></a>

### universalValidator.notInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be outside of a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="UniversalValidator+withValueOneOf"></a>

### universalValidator.withValueOneOf(...constants) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be equal to one of constants.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

<a name="UniversalValidator+withValueNotOneOf"></a>

### universalValidator.withValueNotOneOf(...constants) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to be not equal to one of constants.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

<a name="UniversalValidator+withLengthLessThan"></a>

### universalValidator.withLengthLessThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be shorter than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withLengthGreaterThan"></a>

### universalValidator.withLengthGreaterThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be longer than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withLengthLessThanOrEqualTo"></a>

### universalValidator.withLengthLessThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be shorter than or is a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withLengthGreaterThanOrEqualTo"></a>

### universalValidator.withLengthGreaterThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be longer than or is a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withLengthEqualTo"></a>

### universalValidator.withLengthEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withLengthNotEqualTo"></a>

### universalValidator.withLengthNotEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length not to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withLengthInRange"></a>

### universalValidator.withLengthInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be within a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="UniversalValidator+withLengthNotInRange"></a>

### universalValidator.withLengthNotInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be outside of a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="UniversalValidator+matching"></a>

### universalValidator.matching(regex) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value to match a regular expression.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="UniversalValidator+notMatching"></a>

### universalValidator.notMatching(regex) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require value not to match a regular expression.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="UniversalValidator+withItems"></a>

### universalValidator.withItems(items) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require items to satisfy their constraints.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                                                   | Description  |
| ----- | ------------------------------------------------------ | ------------ |
| items | [<code>UniversalValidator</code>](#UniversalValidator) | Constraints. |

<a name="UniversalValidator+withItemCountLessThan"></a>

### universalValidator.withItemCountLessThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be less than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withItemCountGreaterThan"></a>

### universalValidator.withItemCountGreaterThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be greater than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withItemCountLessThanOrEqualTo"></a>

### universalValidator.withItemCountLessThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be less than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withItemCountGreaterThanOrEqualTo"></a>

### universalValidator.withItemCountGreaterThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be greater than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withItemCountEqualTo"></a>

### universalValidator.withItemCountEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withItemCountNotEqualTo"></a>

### universalValidator.withItemCountNotEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require item count not to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="UniversalValidator+withItemCountInRange"></a>

### universalValidator.withItemCountInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be within a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="UniversalValidator+withItemCountNotInRange"></a>

### universalValidator.withItemCountNotInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require length to be outside of a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="UniversalValidator+withRequiredProperties"></a>

### universalValidator.withRequiredProperties(properties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require specified properties.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param      | Type                                              | Description   |
| ---------- | ------------------------------------------------- | ------------- |
| properties | <code>Object.\<string, UniversalValidator></code> | A constraint. |

<a name="UniversalValidator+withOptionalProperties"></a>

### universalValidator.withOptionalProperties(properties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Permit specified optional properties.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param      | Type                                              | Description   |
| ---------- | ------------------------------------------------- | ------------- |
| properties | <code>Object.\<string, UniversalValidator></code> | A constraint. |

<a name="UniversalValidator+withAdditionalProperties"></a>

### universalValidator.withAdditionalProperties(properties) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Permit additional properties.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param      | Type                                                   | Description   |
| ---------- | ------------------------------------------------------ | ------------- |
| properties | [<code>UniversalValidator</code>](#UniversalValidator) | A constraint. |

<a name="UniversalValidator+withNotAdditionalProperties"></a>

### universalValidator.withNotAdditionalProperties() ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require no additional properties.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.\
<a name="UniversalValidator+withPropertyCountLessThan"></a>

### universalValidator.withPropertyCountLessThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be less than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+withPropertyCountGreaterThan"></a>

### universalValidator.withPropertyCountGreaterThan(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be greater than a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+withPropertyCountLessThanOrEqualTo"></a>

### universalValidator.withPropertyCountLessThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be less than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+withPropertyCountGreaterThanOrEqualTo"></a>

### universalValidator.withPropertyCountGreaterThanOrEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be greater than or equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+withPropertyCountEqualTo"></a>

### universalValidator.withPropertyCountEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+withPropertyCountNotEqualTo"></a>

### universalValidator.withPropertyCountNotEqualTo(count) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount not to be equal to a constant.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="UniversalValidator+withPropertyCountInRange"></a>

### universalValidator.withPropertyCountInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be within a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="UniversalValidator+withPropertyCountNotInRange"></a>

### universalValidator.withPropertyCountNotInRange(from, to) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require property amount to be outside of a range.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="UniversalValidator+where"></a>

### universalValidator.where(predicate) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

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

<a name="UniversalValidator+withSubvalidators"></a>

### universalValidator.withSubvalidators(...nestedValidators) ⇒ [<code>UniversalValidator</code>](#UniversalValidator)

Require specified nested validators.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: [<code>UniversalValidator</code>](#UniversalValidator) - The current validator.

| Param               | Type                                                            | Description        |
| ------------------- | --------------------------------------------------------------- | ------------------ |
| ...nestedValidators | [<code>Array.\<UniversalValidator></code>](#UniversalValidator) | Nested validators. |

<a name="UniversalValidator+validate"></a>

### universalValidator.validate(input) ⇒ <code>boolean</code>

Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: <code>boolean</code> - Whether an input value satisfies all conditions.

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

<a name="UniversalValidator+toString"></a>

### universalValidator.toString() ⇒ <code>string</code>

Converts object to string.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: <code>string</code> - A string representation.\
<a name="UniversalValidator+toJSONSchema"></a>

### universalValidator.toJSONSchema() ⇒ <code>object</code>

Convert object to JSON schema (draft 07) representation.

**Kind**: instance method of [<code>UniversalValidator</code>](#UniversalValidator)\
**Returns**: <code>object</code> - JSON schema (draft 07) representation.\
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

<a name="throwOnFailure"></a>

## throwOnFailure(input, validator, message)

Check whether `value` satisfies all conditions and print error in case.

**Kind**: global function

| Param     | Type                            | Description  |
| --------- | ------------------------------- | ------------ |
| input     | <code>any</code>                | An input.    |
| validator | <code>UniversalValidator</code> | A validator. |
| message   | <code>string</code>             | A message.   |

## Functions

<dl>
<dt><a href="#isBoolean">isBoolean()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be boolean.</p>
</dd>
<dt><a href="#isNumber">isNumber()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be number.</p>
</dd>
<dt><a href="#isInteger">isInteger()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be integer.</p>
</dd>
<dt><a href="#isString">isString()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be string.</p>
</dd>
<dt><a href="#isBigint">isBigint()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be bigint.</p>
</dd>
<dt><a href="#isSymbol">isSymbol()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be symbol.</p>
</dd>
<dt><a href="#isArray">isArray()</a> ⇒ <code>UniversalValidator</code></dt>
<dd><p>Require value to be array.</p>
</dd>
<dt><a href="#isObject">isObject()</a> ⇒ <code>UniversalValidator</code></dt>
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

## is

Get is\* functions.

**Kind**: global enum\
<a name="isBoolean"></a>

## isBoolean() ⇒ <code>UniversalValidator</code>

Require value to be boolean.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
<a name="isNumber"></a>

## isNumber() ⇒ <code>UniversalValidator</code>

Require value to be number.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
<a name="isInteger"></a>

## isInteger() ⇒ <code>UniversalValidator</code>

Require value to be integer.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
<a name="isString"></a>

## isString() ⇒ <code>UniversalValidator</code>

Require value to be string.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
<a name="isBigint"></a>

## isBigint() ⇒ <code>UniversalValidator</code>

Require value to be bigint.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
<a name="isSymbol"></a>

## isSymbol() ⇒ <code>UniversalValidator</code>

Require value to be symbol.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
<a name="isArray"></a>

## isArray() ⇒ <code>UniversalValidator</code>

Require value to be array.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
<a name="isObject"></a>

## isObject() ⇒ <code>UniversalValidator</code>

Require value to be object.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.\
<a name="isAnyOf"></a>

## isAnyOf(...validators) ⇒ <code>UniversalValidator</code>

Require any of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param         | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| ...validators | <code>Array.\<UniversalValidator></code> | Validators. |

<a name="isOneOf"></a>

## isOneOf(...validators) ⇒ <code>UniversalValidator</code>

Require one of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param         | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| ...validators | <code>Array.\<UniversalValidator></code> | Validators. |

<a name="isAllOf"></a>

## isAllOf(...validators) ⇒ <code>UniversalValidator</code>

Require all of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>UniversalValidator</code> - The validator.

| Param         | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| ...validators | <code>Array.\<UniversalValidator></code> | Validators. |
