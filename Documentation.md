<a name="Basic"></a>

## Basic

Basic validation tools.

**Kind**: global class

- [Basic](#Basic)
  - [.isBoolean(value)](#Basic.isBoolean) ⇒ <code>boolean</code>
  - [.isNumber(value)](#Basic.isNumber) ⇒ <code>boolean</code>
  - [.isInteger(value)](#Basic.isInteger) ⇒ <code>boolean</code>
  - [.isString(value)](#Basic.isString) ⇒ <code>boolean</code>
  - [.isBigint(value)](#Basic.isBigint) ⇒ <code>boolean</code>
  - [.isArray(value)](#Basic.isArray) ⇒ <code>boolean</code>
  - [.isObject(value)](#Basic.isObject) ⇒ <code>boolean</code>
  - [.isRegExp(value)](#Basic.isRegExp) ⇒ <code>boolean</code>
  - [.isFunction(value)](#Basic.isFunction) ⇒ <code>boolean</code>
  - [.isSupported(value)](#Basic.isSupported) ⇒ <code>boolean</code>
  - [.isComparableSupported(value)](#Basic.isComparableSupported) ⇒ <code>boolean</code>
  - [.isValidator(value)](#Basic.isValidator) ⇒ <code>boolean</code>
  - [.requireTypeByPredicate\_(predicate, value, argumentName, \[argumentIndex\])](#Basic.requireTypeByPredicate_)
  - [.requireBoolean(value, argumentName, \[argumentIndex\])](#Basic.requireBoolean)
  - [.requireNumber(value, argumentName, \[argumentIndex\])](#Basic.requireNumber)
  - [.requireInteger(value, argumentName, \[argumentIndex\])](#Basic.requireInteger)
  - [.requireString(value, argumentName, \[argumentIndex\])](#Basic.requireString)
  - [.requireBigint(value, argumentName, \[argumentIndex\])](#Basic.requireBigint)
  - [.requireArray(value, argumentName, \[argumentIndex\])](#Basic.requireArray)
  - [.requireObject(value, argumentName, \[argumentIndex\])](#Basic.requireObject)
  - [.requireRegExp(value, argumentName, \[argumentIndex\])](#Basic.requireRegExp)
  - [.requireFunction(value, argumentName, \[argumentIndex\])](#Basic.requireFunction)
  - [.requireSupported(value, argumentName, \[argumentIndex\])](#Basic.requireSupported)
  - [.requireComparableSupported(value, argumentName, \[argumentIndex\])](#Basic.requireComparableSupported)
  - [.requireValidator(value, argumentName, \[argumentIndex\])](#Basic.requireValidator)

<a name="Basic.isBoolean"></a>

### Basic.isBoolean(value) ⇒ <code>boolean</code>

Check whether a value is a boolean value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a boolean value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isNumber"></a>

### Basic.isNumber(value) ⇒ <code>boolean</code>

Check whether a value is a number value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a number value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isInteger"></a>

### Basic.isInteger(value) ⇒ <code>boolean</code>

Check whether a value is an integer value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is an integer value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isString"></a>

### Basic.isString(value) ⇒ <code>boolean</code>

Check whether a value is a string value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a string value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isBigint"></a>

### Basic.isBigint(value) ⇒ <code>boolean</code>

Check whether a value is a bigint value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a bigint value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isArray"></a>

### Basic.isArray(value) ⇒ <code>boolean</code>

Check whether a value is an array value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is an array value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isObject"></a>

### Basic.isObject(value) ⇒ <code>boolean</code>

Check whether a value is an object value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is an object value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isRegExp"></a>

### Basic.isRegExp(value) ⇒ <code>boolean</code>

Check whether a value is a regular expression.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a regular expression.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isFunction"></a>

### Basic.isFunction(value) ⇒ <code>boolean</code>

Check whether a value is a function.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a function.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isSupported"></a>

### Basic.isSupported(value) ⇒ <code>boolean</code>

Check whether a value is a supported validator type value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a supported validator type value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isComparableSupported"></a>

### Basic.isComparableSupported(value) ⇒ <code>boolean</code>

Check whether a value is a supported comparable validator type value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a supported comparable validator type value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isValidator"></a>

### Basic.isValidator(value) ⇒ <code>boolean</code>

Check whether a value is a validator value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - - Whether a value is a validator value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.requireTypeByPredicate_"></a>

### Basic.requireTypeByPredicate\_(predicate, value, argumentName, \[argumentIndex\])

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                   | Description        |
| ----------------- | ---------------------- | ------------------ |
| predicate         | <code>Predicate</code> | A predicate.       |
| value             | <code>any</code>       | A value.           |
| argumentName      | <code>string</code>    | An argument name.  |
| \[argumentIndex\] | <code>number</code>    | An argument index. |

<a name="Basic.requireBoolean"></a>

### Basic.requireBoolean(value, argumentName, \[argumentIndex\])

Check whether a value is a boolean value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireNumber"></a>

### Basic.requireNumber(value, argumentName, \[argumentIndex\])

Check whether a value is a number value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireInteger"></a>

### Basic.requireInteger(value, argumentName, \[argumentIndex\])

Check whether a value is an integer value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireString"></a>

### Basic.requireString(value, argumentName, \[argumentIndex\])

Check whether a value is a string value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireBigint"></a>

### Basic.requireBigint(value, argumentName, \[argumentIndex\])

Check whether a value is a bigint value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireArray"></a>

### Basic.requireArray(value, argumentName, \[argumentIndex\])

Check whether a value is an array value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireObject"></a>

### Basic.requireObject(value, argumentName, \[argumentIndex\])

Check whether a value is an object value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireRegExp"></a>

### Basic.requireRegExp(value, argumentName, \[argumentIndex\])

Check whether a value is a regular expression value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireFunction"></a>

### Basic.requireFunction(value, argumentName, \[argumentIndex\])

Check whether a value is a function value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireSupported"></a>

### Basic.requireSupported(value, argumentName, \[argumentIndex\])

Check whether a value is a basic supported validator type value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireComparableSupported"></a>

### Basic.requireComparableSupported(value, argumentName, \[argumentIndex\])

Check whether a value is a basic supported comparable validator type value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

<a name="Basic.requireValidator"></a>

### Basic.requireValidator(value, argumentName, \[argumentIndex\])

Check whether a value is a validator value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param             | Type                | Description        |
| ----------------- | ------------------- | ------------------ |
| value             | <code>any</code>    | A value.           |
| argumentName      | <code>string</code> | An argument name.  |
| \[argumentIndex\] | <code>number</code> | An argument index. |

## Members

<dl>
<dt><a href="#ComplexValidatorMode">ComplexValidatorMode</a></dt>
<dd><p>Complex validator mode.</p>
</dd>
<dt><a href="#ActionMode">ActionMode</a></dt>
<dd><p>Action constraint mode.</p>
</dd>
<dt><a href="#ActionTargetMode">ActionTargetMode</a></dt>
<dd><p>Action target mode.</p>
</dd>
</dl>

<a name="ComplexValidatorMode"></a>

## ComplexValidatorMode

Complex validator mode.

**Kind**: global variable\
<a name="ActionMode"></a>

## ActionMode

Action constraint mode.

**Kind**: global variable\
<a name="ActionTargetMode"></a>

## ActionTargetMode

Action target mode.

**Kind**: global variable

## Functions

<dl>
<dt><a href="#toBaseType_">toBaseType_(value)</a></dt>
<dd></dd>
<dt><a href="#isExistingUrl_">isExistingUrl_(url)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isTrue">isTrue()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is true.</p>
</dd>
<dt><a href="#isFalse">isFalse()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is false.</p>
</dd>
<dt><a href="#isPositive">isPositive()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a positive number.</p>
</dd>
<dt><a href="#isNegative">isNegative()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a negative number.</p>
</dd>
<dt><a href="#isIn">isIn(from, to)</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a number in range.</p>
</dd>
<dt><a href="#isEmptyString">isEmptyString()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is an empty string.</p>
</dd>
<dt><a href="#isNotEmptyString">isNotEmptyString()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is not an empty string.</p>
</dd>
<dt><a href="#isMatching">isMatching(regex)</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a string matching regular expression.</p>
</dd>
<dt><a href="#isNotMatching">isNotMatching(regex)</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a string not matching regular expression.</p>
</dd>
<dt><a href="#isValueOneOf">isValueOneOf(...values)</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be equal to one of constants.</p>
</dd>
<dt><a href="#isValueNotOneOf">isValueNotOneOf(...values)</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be not equal to one of constants.</p>
</dd>
<dt><a href="#isUrl">isUrl()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a URL string.</p>
</dd>
<dt><a href="#isNotUrl">isNotUrl()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is not a URL string.</p>
</dd>
<dt><a href="#isVector2D">isVector2D()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a 2D vector.</p>
</dd>
<dt><a href="#isVector3D">isVector3D()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a 3D vector.</p>
</dd>
<dt><a href="#isRange">isRange()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a range.</p>
</dd>
<dt><a href="#isSteppedRange">isSteppedRange()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a stepped range.</p>
</dd>
<dt><a href="#isSize2D">isSize2D()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a 2D size.</p>
</dd>
<dt><a href="#isSize3D">isSize3D()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a 3D size.</p>
</dd>
<dt><a href="#isColor">isColor()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a color.</p>
</dd>
</dl>

<a name="toBaseType_"></a>

## toBaseType\_(value)

**Kind**: global function

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="isExistingUrl_"></a>

## isExistingUrl\_(url) ⇒ <code>boolean</code>

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| url   | <code>string</code> |

<a name="isTrue"></a>

## isTrue() ⇒ <code>Validator</code>

Check whether object is true.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is true.\
<a name="isFalse"></a>

## isFalse() ⇒ <code>Validator</code>

Check whether object is false.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is false.\
<a name="isPositive"></a>

## isPositive() ⇒ <code>Validator</code>

Check whether object is a positive number.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a positive number.\
<a name="isNegative"></a>

## isNegative() ⇒ <code>Validator</code>

Check whether object is a negative number.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a negative number.\
<a name="isIn"></a>

## isIn(from, to) ⇒ <code>Validator</code>

Check whether object is a number in range.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a number in range.

| Param | Type                            | Description           |
| ----- | ------------------------------- | --------------------- |
| from  | <code>BaseComparableType</code> | A lowest constraint.  |
| to    | <code>BaseComparableType</code> | A highest constraint. |

<a name="isEmptyString"></a>

## isEmptyString() ⇒ <code>Validator</code>

Check whether object is an empty string.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is an empty string.\
<a name="isNotEmptyString"></a>

## isNotEmptyString() ⇒ <code>Validator</code>

Check whether object is not an empty string.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is not an empty string.\
<a name="isMatching"></a>

## isMatching(regex) ⇒ <code>Validator</code>

Check whether object is a string matching regular expression.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a string matching regular expression.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="isNotMatching"></a>

## isNotMatching(regex) ⇒ <code>Validator</code>

Check whether object is a string not matching regular expression.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a string not matching regular expression.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="isValueOneOf"></a>

## isValueOneOf(...values) ⇒ <code>Validator</code>

Require value to be equal to one of constants.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The current validator.

| Param     | Type               | Description |
| --------- | ------------------ | ----------- |
| ...values | <code>Array</code> | Constants.  |

<a name="isValueNotOneOf"></a>

## isValueNotOneOf(...values) ⇒ <code>Validator</code>

Require value to be not equal to one of constants.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The current validator.

| Param     | Type               | Description |
| --------- | ------------------ | ----------- |
| ...values | <code>Array</code> | Constants.  |

<a name="isUrl"></a>

## isUrl() ⇒ <code>Validator</code>

Check whether object is a URL string.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a URL string.\
<a name="isNotUrl"></a>

## isNotUrl() ⇒ <code>Validator</code>

Check whether object is not a URL string.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is not a URL string.\
<a name="isVector2D"></a>

## isVector2D() ⇒ <code>Validator</code>

Check whether object is a 2D vector.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a 2D vector.\
<a name="isVector3D"></a>

## isVector3D() ⇒ <code>Validator</code>

Check whether object is a 3D vector.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a 3D vector.\
<a name="isRange"></a>

## isRange() ⇒ <code>Validator</code>

Check whether object is a range.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a range.\
<a name="isSteppedRange"></a>

## isSteppedRange() ⇒ <code>Validator</code>

Check whether object is a stepped range.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a stepped range.\
<a name="isSize2D"></a>

## isSize2D() ⇒ <code>Validator</code>

Check whether object is a 2D size.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a 2D size.\
<a name="isSize3D"></a>

## isSize3D() ⇒ <code>Validator</code>

Check whether object is a 3D size.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a 3D size.\
<a name="isColor"></a>

## isColor() ⇒ <code>Validator</code>

Check whether object is a color.

**Kind**: global function\
**Returns**: <code>Validator</code> - - Check whether object is a color.

## Typedefs

<dl>
<dt><a href="#Predicate">Predicate</a> ⇒ <code>boolean</code></dt>
<dd><p>A predicate.</p>
</dd>
<dt><a href="#WherePredicate">WherePredicate</a> ⇒ <code>Array.&lt;boolean&gt;</code></dt>
<dd><p>A where predicate.</p>
</dd>
<dt><a href="#BaseType">BaseType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;integer&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code> | <code>&quot;array&quot;</code> | <code>&quot;object&quot;</code></dt>
<dd><p>A basic type.</p>
</dd>
<dt><a href="#BaseComparableType">BaseComparableType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;integer&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code></dt>
<dd><p>A basic comparable type.</p>
</dd>
</dl>

<a name="Predicate"></a>

## Predicate ⇒ <code>boolean</code>

A predicate.

**Kind**: global typedef\
**Returns**: <code>boolean</code> - - Whether condition is true.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| input | <code>any</code> | An input.   |

<a name="WherePredicate"></a>

## WherePredicate ⇒ <code>Array.\<boolean></code>

A where predicate.

**Kind**: global typedef\
**Returns**: <code>Array.\<boolean></code> - - Whether conditions are true.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| input | <code>object</code> | An input.   |

<a name="BaseType"></a>

## BaseType : <code>"boolean"</code> | <code>"number"</code> | <code>"integer"</code> | <code>"string"</code> | <code>"bigint"</code> | <code>"array"</code> | <code>"object"</code>

A basic type.

**Kind**: global typedef\
<a name="BaseComparableType"></a>

## BaseComparableType : <code>"boolean"</code> | <code>"number"</code> | <code>"integer"</code> | <code>"string"</code> | <code>"bigint"</code>

A basic comparable type.

**Kind**: global typedef

## Functions

<dl>
<dt><a href="#isBoolean">isBoolean()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be boolean.</p>
</dd>
<dt><a href="#isNumber">isNumber()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be number.</p>
</dd>
<dt><a href="#isInteger">isInteger()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be integer.</p>
</dd>
<dt><a href="#isString">isString()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be string.</p>
</dd>
<dt><a href="#isBigint">isBigint()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be bigint.</p>
</dd>
<dt><a href="#isArray">isArray()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be array.</p>
</dd>
<dt><a href="#isObject">isObject()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be object.</p>
</dd>
<dt><a href="#isAnyOf">isAnyOf(...validators)</a> ⇒ <code>Validator</code></dt>
<dd><p>Require any of constraints to be satisfied.</p>
</dd>
<dt><a href="#isOneOf">isOneOf(...validators)</a> ⇒ <code>Validator</code></dt>
<dd><p>Require one of constraints to be satisfied.</p>
</dd>
<dt><a href="#isAllOf">isAllOf(...validators)</a> ⇒ <code>Validator</code></dt>
<dd><p>Require all of constraints to be satisfied.</p>
</dd>
<dt><a href="#isBooleanArray">isBooleanArray()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be boolean array.</p>
</dd>
<dt><a href="#isNumberArray">isNumberArray()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be number array.</p>
</dd>
<dt><a href="#isIntegerArray">isIntegerArray()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be integer array.</p>
</dd>
<dt><a href="#isStringArray">isStringArray()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be string array.</p>
</dd>
<dt><a href="#isBigintArray">isBigintArray()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be bigint array.</p>
</dd>
<dt><a href="#isObjectWith">isObjectWith(requiredProperties, optionalProperties, additionalProperties)</a> ⇒ <code>Validator</code></dt>
<dd><p>Creates object with required, optional, and additional properties.</p>
</dd>
<dt><a href="#checkWhether">checkWhether(input, validator)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether value satisfies all conditions.</p>
</dd>
<dt><a href="#throwOnFailure">throwOnFailure(input, validator, [message])</a></dt>
<dd><p>Check whether value satisfies all conditions and print error in case.</p>
</dd>
</dl>

<a name="isBoolean"></a>

## isBoolean() ⇒ <code>Validator</code>

Require value to be boolean.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isNumber"></a>

## isNumber() ⇒ <code>Validator</code>

Require value to be number.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isInteger"></a>

## isInteger() ⇒ <code>Validator</code>

Require value to be integer.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isString"></a>

## isString() ⇒ <code>Validator</code>

Require value to be string.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isBigint"></a>

## isBigint() ⇒ <code>Validator</code>

Require value to be bigint.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isArray"></a>

## isArray() ⇒ <code>Validator</code>

Require value to be array.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isObject"></a>

## isObject() ⇒ <code>Validator</code>

Require value to be object.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isAnyOf"></a>

## isAnyOf(...validators) ⇒ <code>Validator</code>

Require any of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.

| Param         | Type                            | Description |
| ------------- | ------------------------------- | ----------- |
| ...validators | <code>Array.\<Validator></code> | Validators. |

<a name="isOneOf"></a>

## isOneOf(...validators) ⇒ <code>Validator</code>

Require one of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.

| Param         | Type                            | Description |
| ------------- | ------------------------------- | ----------- |
| ...validators | <code>Array.\<Validator></code> | Validators. |

<a name="isAllOf"></a>

## isAllOf(...validators) ⇒ <code>Validator</code>

Require all of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.

| Param         | Type                            | Description |
| ------------- | ------------------------------- | ----------- |
| ...validators | <code>Array.\<Validator></code> | Validators. |

<a name="isBooleanArray"></a>

## isBooleanArray() ⇒ <code>Validator</code>

Require value to be boolean array.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isNumberArray"></a>

## isNumberArray() ⇒ <code>Validator</code>

Require value to be number array.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isIntegerArray"></a>

## isIntegerArray() ⇒ <code>Validator</code>

Require value to be integer array.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isStringArray"></a>

## isStringArray() ⇒ <code>Validator</code>

Require value to be string array.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isBigintArray"></a>

## isBigintArray() ⇒ <code>Validator</code>

Require value to be bigint array.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.\
<a name="isObjectWith"></a>

## isObjectWith(requiredProperties, optionalProperties, additionalProperties) ⇒ <code>Validator</code>

Creates object with required, optional, and additional properties.

**Kind**: global function\
**Returns**: <code>Validator</code> - - The validator.

| Param                | Type                | Description            |
| -------------------- | ------------------- | ---------------------- |
| requiredProperties   | <code>object</code> | Required properties.   |
| optionalProperties   | <code>object</code> | Optional properties.   |
| additionalProperties | <code>object</code> | Additional properties. |

<a name="checkWhether"></a>

## checkWhether(input, validator) ⇒ <code>boolean</code>

Check whether value satisfies all conditions.

**Kind**: global function\
**Returns**: <code>boolean</code> - - Whether value satisfies all conditions.

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| input     | <code>any</code>       | An input.    |
| validator | <code>Validator</code> | A validator. |

<a name="throwOnFailure"></a>

## throwOnFailure(input, validator, \[message\])

Check whether value satisfies all conditions and print error in case.

**Kind**: global function

| Param       | Type                   | Description  |
| ----------- | ---------------------- | ------------ |
| input       | <code>any</code>       | An input.    |
| validator   | <code>Validator</code> | A validator. |
| \[message\] | <code>string</code>    | A message.   |

<a name="Validator"></a>

## Validator

A validator.

**Kind**: global class

- [Validator](#Validator)
  - [new Validator(type)](#new_Validator_new)
  - [.clone()](#Validator+clone) ⇒ [<code>Validator</code>](#Validator)
  - [.withDescription(description)](#Validator+withDescription) ⇒ [<code>Validator</code>](#Validator)
  - [.withDefault(value)](#Validator+withDefault) ⇒ [<code>Validator</code>](#Validator)
  - [.lessThan(constant)](#Validator+lessThan) ⇒ [<code>Validator</code>](#Validator)
  - [.greaterThan(constant)](#Validator+greaterThan) ⇒ [<code>Validator</code>](#Validator)
  - [.lessThanOrEqualTo(constant)](#Validator+lessThanOrEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.greaterThanOrEqualTo(constant)](#Validator+greaterThanOrEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.equalTo(constant)](#Validator+equalTo) ⇒ [<code>Validator</code>](#Validator)
  - [.notEqualTo(constant)](#Validator+notEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.inRange(from, to)](#Validator+inRange) ⇒ [<code>Validator</code>](#Validator)
  - [.notInRange(from, to)](#Validator+notInRange) ⇒ [<code>Validator</code>](#Validator)
  - [.withValueOneOf(...constants)](#Validator+withValueOneOf) ⇒ [<code>Validator</code>](#Validator)
  - [.withValueNotOneOf(...constants)](#Validator+withValueNotOneOf) ⇒ [<code>Validator</code>](#Validator)
  - [.withLengthLessThan(count)](#Validator+withLengthLessThan) ⇒ [<code>Validator</code>](#Validator)
  - [.withLengthGreaterThan(count)](#Validator+withLengthGreaterThan) ⇒ [<code>Validator</code>](#Validator)
  - [.withLengthLessThanOrEqualTo(count)](#Validator+withLengthLessThanOrEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withLengthGreaterThanOrEqualTo(count)](#Validator+withLengthGreaterThanOrEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withLengthEqualTo(count)](#Validator+withLengthEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withLengthNotEqualTo(count)](#Validator+withLengthNotEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withLengthInRange(from, to)](#Validator+withLengthInRange) ⇒ [<code>Validator</code>](#Validator)
  - [.withLengthNotInRange(from, to)](#Validator+withLengthNotInRange) ⇒ [<code>Validator</code>](#Validator)
  - [.matching(regex)](#Validator+matching) ⇒ [<code>Validator</code>](#Validator)
  - [.notMatching(regex)](#Validator+notMatching) ⇒ [<code>Validator</code>](#Validator)
  - [.withItems(items)](#Validator+withItems) ⇒ [<code>Validator</code>](#Validator)
  - [.withItemCountLessThan(count)](#Validator+withItemCountLessThan) ⇒ [<code>Validator</code>](#Validator)
  - [.withItemCountGreaterThan(count)](#Validator+withItemCountGreaterThan) ⇒ [<code>Validator</code>](#Validator)
  - [.withItemCountLessThanOrEqualTo(count)](#Validator+withItemCountLessThanOrEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withItemCountGreaterThanOrEqualTo(count)](#Validator+withItemCountGreaterThanOrEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withItemCountEqualTo(count)](#Validator+withItemCountEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withItemCountNotEqualTo(count)](#Validator+withItemCountNotEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withItemCountInRange(from, to)](#Validator+withItemCountInRange) ⇒ [<code>Validator</code>](#Validator)
  - [.withItemCountNotInRange(from, to)](#Validator+withItemCountNotInRange) ⇒ [<code>Validator</code>](#Validator)
  - [.withRequiredProperties(properties)](#Validator+withRequiredProperties) ⇒ [<code>Validator</code>](#Validator)
  - [.withOptionalProperties(properties)](#Validator+withOptionalProperties) ⇒ [<code>Validator</code>](#Validator)
  - [.withAdditionalProperties(properties)](#Validator+withAdditionalProperties) ⇒ [<code>Validator</code>](#Validator)
  - [.withNotAdditionalProperties()](#Validator+withNotAdditionalProperties) ⇒ [<code>Validator</code>](#Validator)
  - [.withPropertyCountLessThan(count)](#Validator+withPropertyCountLessThan) ⇒ [<code>Validator</code>](#Validator)
  - [.withPropertyCountGreaterThan(count)](#Validator+withPropertyCountGreaterThan) ⇒ [<code>Validator</code>](#Validator)
  - [.withPropertyCountLessThanOrEqualTo(count)](#Validator+withPropertyCountLessThanOrEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withPropertyCountGreaterThanOrEqualTo(count)](#Validator+withPropertyCountGreaterThanOrEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withPropertyCountEqualTo(count)](#Validator+withPropertyCountEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withPropertyCountNotEqualTo(count)](#Validator+withPropertyCountNotEqualTo) ⇒ [<code>Validator</code>](#Validator)
  - [.withPropertyCountInRange(from, to)](#Validator+withPropertyCountInRange) ⇒ [<code>Validator</code>](#Validator)
  - [.withPropertyCountNotInRange(from, to)](#Validator+withPropertyCountNotInRange) ⇒ [<code>Validator</code>](#Validator)
  - [.where(predicate)](#Validator+where) ⇒ [<code>Validator</code>](#Validator)
  - [.whereValue(predicate)](#Validator+whereValue) ⇒ [<code>Validator</code>](#Validator)
  - [.andAnyOf(...validators)](#Validator+andAnyOf) ⇒ [<code>Validator</code>](#Validator)
  - [.andOneOf(...validators)](#Validator+andOneOf) ⇒ [<code>Validator</code>](#Validator)
  - [.andAllOf(...validators)](#Validator+andAllOf) ⇒ [<code>Validator</code>](#Validator)
  - [.anyOf(...validators)](#Validator+anyOf) ⇒ [<code>Validator</code>](#Validator)
  - [.oneOf(...validators)](#Validator+oneOf) ⇒ [<code>Validator</code>](#Validator)
  - [.allOf(...validators)](#Validator+allOf) ⇒ [<code>Validator</code>](#Validator)
  - [.validate(input)](#Validator+validate) ⇒ <code>boolean</code>
  - [.toJSONSchema()](#Validator+toJSONSchema) ⇒ <code>object</code>

<a name="new_Validator_new"></a>

### new Validator(type)

| Param | Type                  | Description |
| ----- | --------------------- | ----------- |
| type  | <code>BaseType</code> | A type.     |

<a name="Validator+clone"></a>

### validator.clone() ⇒ [<code>Validator</code>](#Validator)

Clone the current validator.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - A validator clone.\
<a name="Validator+withDescription"></a>

### validator.withDescription(description) ⇒ [<code>Validator</code>](#Validator)

Add a description.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param       | Type                | Description    |
| ----------- | ------------------- | -------------- |
| description | <code>string</code> | A description. |

<a name="Validator+withDefault"></a>

### validator.withDefault(value) ⇒ [<code>Validator</code>](#Validator)

Add a default value.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| value | <code>string</code> | A default value. |

<a name="Validator+lessThan"></a>

### validator.lessThan(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+greaterThan"></a>

### validator.greaterThan(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+lessThanOrEqualTo"></a>

### validator.lessThanOrEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+greaterThanOrEqualTo"></a>

### validator.greaterThanOrEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+equalTo"></a>

### validator.equalTo(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+notEqualTo"></a>

### validator.notEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be not equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+inRange"></a>

### validator.inRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require value to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="Validator+notInRange"></a>

### validator.notInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require value to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="Validator+withValueOneOf"></a>

### validator.withValueOneOf(...constants) ⇒ [<code>Validator</code>](#Validator)

Require value to be equal to one of constants.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

<a name="Validator+withValueNotOneOf"></a>

### validator.withValueNotOneOf(...constants) ⇒ [<code>Validator</code>](#Validator)

Require value to be not equal to one of constants.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

<a name="Validator+withLengthLessThan"></a>

### validator.withLengthLessThan(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be shorter than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthGreaterThan"></a>

### validator.withLengthGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be longer than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthLessThanOrEqualTo"></a>

### validator.withLengthLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be shorter than or is a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthGreaterThanOrEqualTo"></a>

### validator.withLengthGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be longer than or is a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthEqualTo"></a>

### validator.withLengthEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthNotEqualTo"></a>

### validator.withLengthNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require length not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthInRange"></a>

### validator.withLengthInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require length to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withLengthNotInRange"></a>

### validator.withLengthNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require length to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+matching"></a>

### validator.matching(regex) ⇒ [<code>Validator</code>](#Validator)

Require value to match a regular expression.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="Validator+notMatching"></a>

### validator.notMatching(regex) ⇒ [<code>Validator</code>](#Validator)

Require value not to match a regular expression.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="Validator+withItems"></a>

### validator.withItems(items) ⇒ [<code>Validator</code>](#Validator)

Require items to satisfy their constraints.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                                 | Description  |
| ----- | ------------------------------------ | ------------ |
| items | [<code>Validator</code>](#Validator) | Constraints. |

<a name="Validator+withItemCountLessThan"></a>

### validator.withItemCountLessThan(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountGreaterThan"></a>

### validator.withItemCountGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountLessThanOrEqualTo"></a>

### validator.withItemCountLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountGreaterThanOrEqualTo"></a>

### validator.withItemCountGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountEqualTo"></a>

### validator.withItemCountEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountNotEqualTo"></a>

### validator.withItemCountNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require item count not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountInRange"></a>

### validator.withItemCountInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require length to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withItemCountNotInRange"></a>

### validator.withItemCountNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require length to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withRequiredProperties"></a>

### validator.withRequiredProperties(properties) ⇒ [<code>Validator</code>](#Validator)

Require specified properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param      | Type                                     | Description   |
| ---------- | ---------------------------------------- | ------------- |
| properties | <code>Object.\<string, Validator></code> | A constraint. |

<a name="Validator+withOptionalProperties"></a>

### validator.withOptionalProperties(properties) ⇒ [<code>Validator</code>](#Validator)

Permit specified optional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param      | Type                                     | Description   |
| ---------- | ---------------------------------------- | ------------- |
| properties | <code>Object.\<string, Validator></code> | A constraint. |

<a name="Validator+withAdditionalProperties"></a>

### validator.withAdditionalProperties(properties) ⇒ [<code>Validator</code>](#Validator)

Permit additional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param      | Type                                 | Description   |
| ---------- | ------------------------------------ | ------------- |
| properties | [<code>Validator</code>](#Validator) | A constraint. |

<a name="Validator+withNotAdditionalProperties"></a>

### validator.withNotAdditionalProperties() ⇒ [<code>Validator</code>](#Validator)

Require no additional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.\
<a name="Validator+withPropertyCountLessThan"></a>

### validator.withPropertyCountLessThan(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountGreaterThan"></a>

### validator.withPropertyCountGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountLessThanOrEqualTo"></a>

### validator.withPropertyCountLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountGreaterThanOrEqualTo"></a>

### validator.withPropertyCountGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountEqualTo"></a>

### validator.withPropertyCountEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountNotEqualTo"></a>

### validator.withPropertyCountNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountInRange"></a>

### validator.withPropertyCountInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withPropertyCountNotInRange"></a>

### validator.withPropertyCountNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+where"></a>

### validator.where(predicate) ⇒ [<code>Validator</code>](#Validator)

Require property relationships.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param     | Type                        | Description  |
| --------- | --------------------------- | ------------ |
| predicate | <code>WherePredicate</code> | A predicate. |

<a name="Validator+whereValue"></a>

### validator.whereValue(predicate) ⇒ [<code>Validator</code>](#Validator)

Require value constraints.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| predicate | <code>Predicate</code> | A predicate. |

<a name="Validator+andAnyOf"></a>

### validator.andAnyOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require any of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+andOneOf"></a>

### validator.andOneOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+andAllOf"></a>

### validator.andAllOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+anyOf"></a>

### validator.anyOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require any of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+oneOf"></a>

### validator.oneOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+allOf"></a>

### validator.allOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+validate"></a>

### validator.validate(input) ⇒ <code>boolean</code>

Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>Validator</code>](#Validator)

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

<a name="Validator+toJSONSchema"></a>

### validator.toJSONSchema() ⇒ <code>object</code>

Convert object to JSON schema (draft 04) representation.

**Kind**: instance method of [<code>Validator</code>](#Validator)

## Functions

<dl>
<dt><a href="#getBasic">getBasic()</a> ⇒ <code>Basic</code></dt>
<dd><p>Return Basic class.</p>
</dd>
<dt><a href="#getValidator">getValidator()</a> ⇒ <code>Validator</code></dt>
<dd><p>Return Validator class.</p>
</dd>
</dl>

<a name="getBasic"></a>

## getBasic() ⇒ <code>Basic</code>

Return Basic class.

**Kind**: global function\
<a name="getValidator"></a>

## getValidator() ⇒ <code>Validator</code>

Return Validator class.

**Kind**: global function
