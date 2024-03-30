
<a name="Basic"></a>

## Basic
Basic validation tools.

**Kind**: global class  

* [Basic](#Basic)
    * [.isBoolean(value)](#Basic.isBoolean) ⇒ <code>boolean</code>
    * [.isNumber(value)](#Basic.isNumber) ⇒ <code>boolean</code>
    * [.isString(value)](#Basic.isString) ⇒ <code>boolean</code>
    * [.isBigint(value)](#Basic.isBigint) ⇒ <code>boolean</code>
    * [.isArray(value)](#Basic.isArray) ⇒ <code>boolean</code>
    * [.isObject(value)](#Basic.isObject) ⇒ <code>boolean</code>
    * [.isSupported(value)](#Basic.isSupported) ⇒ <code>boolean</code>
    * [.isComparableSupported(value)](#Basic.isComparableSupported) ⇒ <code>boolean</code>
    * [.isValidator(value)](#Basic.isValidator) ⇒ <code>boolean</code>
    * [.requireTypeByPredicate_(predicate, value, argumentName, [argumentIndex])](#Basic.requireTypeByPredicate_)
    * [.requireBoolean(value, argumentName, [argumentIndex])](#Basic.requireBoolean)
    * [.requireNumber(value, argumentName, [argumentIndex])](#Basic.requireNumber)
    * [.requireString(value, argumentName, [argumentIndex])](#Basic.requireString)
    * [.requireBigint(value, argumentName, [argumentIndex])](#Basic.requireBigint)
    * [.requireArray(value, argumentName, [argumentIndex])](#Basic.requireArray)
    * [.requireObject(value, argumentName, [argumentIndex])](#Basic.requireObject)
    * [.requireSupported(value, argumentName, [argumentIndex])](#Basic.requireSupported)
    * [.requireComparableSupported(value, argumentName, [argumentIndex])](#Basic.requireComparableSupported)
    * [.requireValidator(value, argumentName, [argumentIndex])](#Basic.requireValidator)

<a name="Basic.isBoolean"></a>

### Basic.isBoolean(value) ⇒ <code>boolean</code>
Check whether a value is a boolean value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is a boolean value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isNumber"></a>

### Basic.isNumber(value) ⇒ <code>boolean</code>
Check whether a value is a number value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is a number value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isString"></a>

### Basic.isString(value) ⇒ <code>boolean</code>
Check whether a value is a string value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is a string value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isBigint"></a>

### Basic.isBigint(value) ⇒ <code>boolean</code>
Check whether a value is a bigint value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is a bigint value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isArray"></a>

### Basic.isArray(value) ⇒ <code>boolean</code>
Check whether a value is an array value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is an array value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isObject"></a>

### Basic.isObject(value) ⇒ <code>boolean</code>
Check whether a value is an object value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is an object value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isSupported"></a>

### Basic.isSupported(value) ⇒ <code>boolean</code>
Check whether a value is a supported validator type value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is a supported validator type value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isComparableSupported"></a>

### Basic.isComparableSupported(value) ⇒ <code>boolean</code>
Check whether a value is a supported comparable validator type value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is a supported comparable validator type value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isValidator"></a>

### Basic.isValidator(value) ⇒ <code>boolean</code>
Check whether a value is a validator value.

**Kind**: static method of [<code>Basic</code>](#Basic)  
**Returns**: <code>boolean</code> - - Whether a value is a validator value.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.requireTypeByPredicate_"></a>

### Basic.requireTypeByPredicate\_(predicate, value, argumentName, [argumentIndex])
**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                   | Description        |
| --------------- | ---------------------- | ------------------ |
| predicate       | <code>Predicate</code> | A predicate.       |
| value           | <code>any</code>       | A value.           |
| argumentName    | <code>string</code>    | An argument name.  |
| [argumentIndex] | <code>number</code>    | An argument index. |

<a name="Basic.requireBoolean"></a>

### Basic.requireBoolean(value, argumentName, [argumentIndex])
Check whether a value is a boolean value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

<a name="Basic.requireNumber"></a>

### Basic.requireNumber(value, argumentName, [argumentIndex])
Check whether a value is a number value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

<a name="Basic.requireString"></a>

### Basic.requireString(value, argumentName, [argumentIndex])
Check whether a value is a string value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

<a name="Basic.requireBigint"></a>

### Basic.requireBigint(value, argumentName, [argumentIndex])
Check whether a value is a bigint value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

<a name="Basic.requireArray"></a>

### Basic.requireArray(value, argumentName, [argumentIndex])
Check whether a value is an array value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

<a name="Basic.requireObject"></a>

### Basic.requireObject(value, argumentName, [argumentIndex])
Check whether a value is an object value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

<a name="Basic.requireSupported"></a>

### Basic.requireSupported(value, argumentName, [argumentIndex])
Check whether a value is a basic supported validator type value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

<a name="Basic.requireComparableSupported"></a>

### Basic.requireComparableSupported(value, argumentName, [argumentIndex])
Check whether a value is a basic supported comparable validator type value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

<a name="Basic.requireValidator"></a>

### Basic.requireValidator(value, argumentName, [argumentIndex])
Check whether a value is a validator value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)  

| Param           | Type                | Description        |
| --------------- | ------------------- | ------------------ |
| value           | <code>any</code>    | A value.           |
| argumentName    | <code>string</code> | An argument name.  |
| [argumentIndex] | <code>number</code> | An argument index. |

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

**Kind**: global variable  
<a name="ActionMode"></a>

## ActionMode
Action constraint mode.

**Kind**: global variable  
<a name="ActionTargetMode"></a>

## ActionTargetMode
Action target mode.

**Kind**: global variable  
## Functions

<dl>
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

<a name="isExistingUrl_"></a>

## isExistingUrl\_(url) ⇒ <code>boolean</code>
**Kind**: global function  

| Param | Type                |
| ----- | ------------------- |
| url   | <code>string</code> |

<a name="isTrue"></a>

## isTrue() ⇒ <code>Validator</code>
Check whether object is true.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is true.  
<a name="isFalse"></a>

## isFalse() ⇒ <code>Validator</code>
Check whether object is false.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is false.  
<a name="isPositive"></a>

## isPositive() ⇒ <code>Validator</code>
Check whether object is a positive number.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a positive number.  
<a name="isNegative"></a>

## isNegative() ⇒ <code>Validator</code>
Check whether object is a negative number.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a negative number.  
<a name="isIn"></a>

## isIn(from, to) ⇒ <code>Validator</code>
Check whether object is a number in range.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a number in range.  

| Param | Type                            | Description           |
| ----- | ------------------------------- | --------------------- |
| from  | <code>BaseComparableType</code> | A lowest constraint.  |
| to    | <code>BaseComparableType</code> | A highest constraint. |

<a name="isEmptyString"></a>

## isEmptyString() ⇒ <code>Validator</code>
Check whether object is an empty string.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is an empty string.  
<a name="isNotEmptyString"></a>

## isNotEmptyString() ⇒ <code>Validator</code>
Check whether object is not an empty string.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is not an empty string.  
<a name="isMatching"></a>

## isMatching(regex) ⇒ <code>Validator</code>
Check whether object is a string matching regular expression.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a string matching regular expression.  

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="isNotMatching"></a>

## isNotMatching(regex) ⇒ <code>Validator</code>
Check whether object is a string not matching regular expression.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a string not matching regular expression.  

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="isUrl"></a>

## isUrl() ⇒ <code>Validator</code>
Check whether object is a URL string.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a URL string.  
<a name="isNotUrl"></a>

## isNotUrl() ⇒ <code>Validator</code>
Check whether object is not a URL string.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is not a URL string.  
<a name="isVector2D"></a>

## isVector2D() ⇒ <code>Validator</code>
Check whether object is a 2D vector.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a 2D vector.  
<a name="isVector3D"></a>

## isVector3D() ⇒ <code>Validator</code>
Check whether object is a 3D vector.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a 3D vector.  
<a name="isRange"></a>

## isRange() ⇒ <code>Validator</code>
Check whether object is a range.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a range.  
<a name="isSteppedRange"></a>

## isSteppedRange() ⇒ <code>Validator</code>
Check whether object is a stepped range.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a stepped range.  
<a name="isSize2D"></a>

## isSize2D() ⇒ <code>Validator</code>
Check whether object is a 2D size.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a 2D size.  
<a name="isSize3D"></a>

## isSize3D() ⇒ <code>Validator</code>
Check whether object is a 3D size.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a 3D size.  
<a name="isColor"></a>

## isColor() ⇒ <code>Validator</code>
Check whether object is a color.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a color.  
## Typedefs

<dl>
<dt><a href="#Predicate">Predicate</a> ⇒ <code>boolean</code></dt>
<dd><p>A predicate.</p>
</dd>
<dt><a href="#WherePredicate">WherePredicate</a> ⇒ <code>Array.&lt;boolean&gt;</code></dt>
<dd><p>A where predicate.</p>
</dd>
<dt><a href="#BaseType">BaseType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code> | <code>&quot;array&quot;</code> | <code>&quot;object&quot;</code></dt>
<dd><p>A basic type.</p>
</dd>
<dt><a href="#BaseComparableType">BaseComparableType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code></dt>
<dd><p>A basic comparable type.</p>
</dd>
</dl>

<a name="Predicate"></a>

## Predicate ⇒ <code>boolean</code>
A predicate.

**Kind**: global typedef  
**Returns**: <code>boolean</code> - - Whether condition is true.  

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| input | <code>any</code> | An input.   |

<a name="WherePredicate"></a>

## WherePredicate ⇒ <code>Array.&lt;boolean&gt;</code>
A where predicate.

**Kind**: global typedef  
**Returns**: <code>Array.&lt;boolean&gt;</code> - - Whether conditions are true.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| input | <code>object</code> | An input.   |

<a name="BaseType"></a>

## BaseType : <code>&quot;boolean&quot;</code> \| <code>&quot;number&quot;</code> \| <code>&quot;string&quot;</code> \| <code>&quot;bigint&quot;</code> \| <code>&quot;array&quot;</code> \| <code>&quot;object&quot;</code>
A basic type.

**Kind**: global typedef  
<a name="BaseComparableType"></a>

## BaseComparableType : <code>&quot;boolean&quot;</code> \| <code>&quot;number&quot;</code> \| <code>&quot;string&quot;</code> \| <code>&quot;bigint&quot;</code>
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
<dt><a href="#checkWhether">checkWhether(input, validator)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether value satisfies all conditions.</p>
</dd>
<dt><a href="#throwOnFailure">throwOnFailure(input, validator)</a></dt>
<dd><p>Check whether value satisfies all conditions and print error in case.</p>
</dd>
</dl>

<a name="isBoolean"></a>

## isBoolean() ⇒ <code>Validator</code>
Require value to be boolean.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  
<a name="isNumber"></a>

## isNumber() ⇒ <code>Validator</code>
Require value to be number.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  
<a name="isString"></a>

## isString() ⇒ <code>Validator</code>
Require value to be string.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  
<a name="isBigint"></a>

## isBigint() ⇒ <code>Validator</code>
Require value to be bigint.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  
<a name="isArray"></a>

## isArray() ⇒ <code>Validator</code>
Require value to be array.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  
<a name="isObject"></a>

## isObject() ⇒ <code>Validator</code>
Require value to be object.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  
<a name="isAnyOf"></a>

## isAnyOf(...validators) ⇒ <code>Validator</code>
Require any of constraints to be satisfied.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  

| Param         | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| ...validators | <code>Array.&lt;Validator&gt;</code> | Validators. |

<a name="isOneOf"></a>

## isOneOf(...validators) ⇒ <code>Validator</code>
Require one of constraints to be satisfied.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  

| Param         | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| ...validators | <code>Array.&lt;Validator&gt;</code> | Validators. |

<a name="isAllOf"></a>

## isAllOf(...validators) ⇒ <code>Validator</code>
Require all of constraints to be satisfied.

**Kind**: global function  
**Returns**: <code>Validator</code> - - The validator.  

| Param         | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| ...validators | <code>Array.&lt;Validator&gt;</code> | Validators. |

<a name="checkWhether"></a>

## checkWhether(input, validator) ⇒ <code>boolean</code>
Check whether value satisfies all conditions.

**Kind**: global function  
**Returns**: <code>boolean</code> - - Whether value satisfies all conditions.  

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| input     | <code>any</code>       | An input.    |
| validator | <code>Validator</code> | A validator. |

<a name="throwOnFailure"></a>

## throwOnFailure(input, validator)
Check whether value satisfies all conditions and print error in case.

**Kind**: global function  

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| input     | <code>any</code>       | An input.    |
| validator | <code>Validator</code> | A validator. |

<a name="Validator"></a>

## Validator
A validator.

**Kind**: global class  

- [Basic](#basic)
  - [Basic.isBoolean(value) ⇒ boolean](#basicisbooleanvalue--boolean)
  - [Basic.isNumber(value) ⇒ boolean](#basicisnumbervalue--boolean)
  - [Basic.isString(value) ⇒ boolean](#basicisstringvalue--boolean)
  - [Basic.isBigint(value) ⇒ boolean](#basicisbigintvalue--boolean)
  - [Basic.isArray(value) ⇒ boolean](#basicisarrayvalue--boolean)
  - [Basic.isObject(value) ⇒ boolean](#basicisobjectvalue--boolean)
  - [Basic.isSupported(value) ⇒ boolean](#basicissupportedvalue--boolean)
  - [Basic.isComparableSupported(value) ⇒ boolean](#basiciscomparablesupportedvalue--boolean)
  - [Basic.isValidator(value) ⇒ boolean](#basicisvalidatorvalue--boolean)
  - [Basic.requireTypeByPredicate\_(predicate, value, argumentName, \[argumentIndex\])](#basicrequiretypebypredicate_predicate-value-argumentname-argumentindex)
  - [Basic.requireBoolean(value, argumentName, \[argumentIndex\])](#basicrequirebooleanvalue-argumentname-argumentindex)
  - [Basic.requireNumber(value, argumentName, \[argumentIndex\])](#basicrequirenumbervalue-argumentname-argumentindex)
  - [Basic.requireString(value, argumentName, \[argumentIndex\])](#basicrequirestringvalue-argumentname-argumentindex)
  - [Basic.requireBigint(value, argumentName, \[argumentIndex\])](#basicrequirebigintvalue-argumentname-argumentindex)
  - [Basic.requireArray(value, argumentName, \[argumentIndex\])](#basicrequirearrayvalue-argumentname-argumentindex)
  - [Basic.requireObject(value, argumentName, \[argumentIndex\])](#basicrequireobjectvalue-argumentname-argumentindex)
  - [Basic.requireSupported(value, argumentName, \[argumentIndex\])](#basicrequiresupportedvalue-argumentname-argumentindex)
  - [Basic.requireComparableSupported(value, argumentName, \[argumentIndex\])](#basicrequirecomparablesupportedvalue-argumentname-argumentindex)
  - [Basic.requireValidator(value, argumentName, \[argumentIndex\])](#basicrequirevalidatorvalue-argumentname-argumentindex)
- [Members](#members)
- [ComplexValidatorMode](#complexvalidatormode)
- [ActionMode](#actionmode)
- [ActionTargetMode](#actiontargetmode)
- [Functions](#functions)
- [isExistingUrl\_(url) ⇒ boolean](#isexistingurl_url--boolean)
- [isTrue() ⇒ Validator](#istrue--validator)
- [isFalse() ⇒ Validator](#isfalse--validator)
- [isPositive() ⇒ Validator](#ispositive--validator)
- [isNegative() ⇒ Validator](#isnegative--validator)
- [isIn(from, to) ⇒ Validator](#isinfrom-to--validator)
- [isEmptyString() ⇒ Validator](#isemptystring--validator)
- [isNotEmptyString() ⇒ Validator](#isnotemptystring--validator)
- [isMatching(regex) ⇒ Validator](#ismatchingregex--validator)
- [isNotMatching(regex) ⇒ Validator](#isnotmatchingregex--validator)
- [isUrl() ⇒ Validator](#isurl--validator)
- [isNotUrl() ⇒ Validator](#isnoturl--validator)
- [isVector2D() ⇒ Validator](#isvector2d--validator)
- [isVector3D() ⇒ Validator](#isvector3d--validator)
- [isRange() ⇒ Validator](#isrange--validator)
- [isSteppedRange() ⇒ Validator](#issteppedrange--validator)
- [isSize2D() ⇒ Validator](#issize2d--validator)
- [isSize3D() ⇒ Validator](#issize3d--validator)
- [isColor() ⇒ Validator](#iscolor--validator)
- [Typedefs](#typedefs)
- [Predicate ⇒ boolean](#predicate--boolean)
- [WherePredicate ⇒ Array.\<boolean\>](#wherepredicate--arrayboolean)
- [BaseType : "boolean" | "number" | "string" | "bigint" | "array" | "object"](#basetype--boolean--number--string--bigint--array--object)
- [BaseComparableType : "boolean" | "number" | "string" | "bigint"](#basecomparabletype--boolean--number--string--bigint)
- [Functions](#functions-1)
- [isBoolean() ⇒ Validator](#isboolean--validator)
- [isNumber() ⇒ Validator](#isnumber--validator)
- [isString() ⇒ Validator](#isstring--validator)
- [isBigint() ⇒ Validator](#isbigint--validator)
- [isArray() ⇒ Validator](#isarray--validator)
- [isObject() ⇒ Validator](#isobject--validator)
- [isAnyOf(...validators) ⇒ Validator](#isanyofvalidators--validator)
- [isOneOf(...validators) ⇒ Validator](#isoneofvalidators--validator)
- [isAllOf(...validators) ⇒ Validator](#isallofvalidators--validator)
- [checkWhether(input, validator) ⇒ boolean](#checkwhetherinput-validator--boolean)
- [throwOnFailure(input, validator)](#throwonfailureinput-validator)
- [Validator](#validator)
  - [new Validator(type)](#new-validatortype)
  - [validator.lessThan(constant) ⇒ Validator](#validatorlessthanconstant--validator)
  - [validator.greaterThan(constant) ⇒ Validator](#validatorgreaterthanconstant--validator)
  - [validator.lessThanOrEqualTo(constant) ⇒ Validator](#validatorlessthanorequaltoconstant--validator)
  - [validator.greaterThanOrEqualTo(constant) ⇒ Validator](#validatorgreaterthanorequaltoconstant--validator)
  - [validator.equalTo(constant) ⇒ Validator](#validatorequaltoconstant--validator)
  - [validator.notEqualTo(constant) ⇒ Validator](#validatornotequaltoconstant--validator)
  - [validator.inRange(from, to) ⇒ Validator](#validatorinrangefrom-to--validator)
  - [validator.notInRange(from, to) ⇒ Validator](#validatornotinrangefrom-to--validator)
  - [validator.withLengthLessThan(count) ⇒ Validator](#validatorwithlengthlessthancount--validator)
  - [validator.withLengthGreaterThan(count) ⇒ Validator](#validatorwithlengthgreaterthancount--validator)
  - [validator.withLengthLessThanOrEqualTo(count) ⇒ Validator](#validatorwithlengthlessthanorequaltocount--validator)
  - [validator.withLengthGreaterThanOrEqualTo(count) ⇒ Validator](#validatorwithlengthgreaterthanorequaltocount--validator)
  - [validator.withLengthEqualTo(count) ⇒ Validator](#validatorwithlengthequaltocount--validator)
  - [validator.withLengthNotEqualTo(count) ⇒ Validator](#validatorwithlengthnotequaltocount--validator)
  - [validator.withLengthInRange(from, to) ⇒ Validator](#validatorwithlengthinrangefrom-to--validator)
  - [validator.withLengthNotInRange(from, to) ⇒ Validator](#validatorwithlengthnotinrangefrom-to--validator)
  - [validator.matching(regex) ⇒ Validator](#validatormatchingregex--validator)
  - [validator.notMatching(regex) ⇒ Validator](#validatornotmatchingregex--validator)
  - [validator.withItems(items) ⇒ Validator](#validatorwithitemsitems--validator)
  - [validator.withItemCountLessThan(count) ⇒ Validator](#validatorwithitemcountlessthancount--validator)
  - [validator.withItemCountGreaterThan(count) ⇒ Validator](#validatorwithitemcountgreaterthancount--validator)
  - [validator.withItemCountLessThanOrEqualTo(count) ⇒ Validator](#validatorwithitemcountlessthanorequaltocount--validator)
  - [validator.withItemCountGreaterThanOrEqualTo(count) ⇒ Validator](#validatorwithitemcountgreaterthanorequaltocount--validator)
  - [validator.withItemCountEqualTo(count) ⇒ Validator](#validatorwithitemcountequaltocount--validator)
  - [validator.withItemCountNotEqualTo(count) ⇒ Validator](#validatorwithitemcountnotequaltocount--validator)
  - [validator.withItemCountInRange(from, to) ⇒ Validator](#validatorwithitemcountinrangefrom-to--validator)
  - [validator.withItemCountNotInRange(from, to) ⇒ Validator](#validatorwithitemcountnotinrangefrom-to--validator)
  - [validator.withRequiredProperties(properties) ⇒ Validator](#validatorwithrequiredpropertiesproperties--validator)
  - [validator.withOptionalProperties(properties) ⇒ Validator](#validatorwithoptionalpropertiesproperties--validator)
  - [validator.withAdditionalProperties(properties) ⇒ Validator](#validatorwithadditionalpropertiesproperties--validator)
  - [validator.withNotAdditionalProperties() ⇒ Validator](#validatorwithnotadditionalproperties--validator)
  - [validator.withPropertyCountLessThan(count) ⇒ Validator](#validatorwithpropertycountlessthancount--validator)
  - [validator.withPropertyCountGreaterThan(count) ⇒ Validator](#validatorwithpropertycountgreaterthancount--validator)
  - [validator.withPropertyCountLessThanOrEqualTo(count) ⇒ Validator](#validatorwithpropertycountlessthanorequaltocount--validator)
  - [validator.withPropertyCountGreaterThanOrEqualTo(count) ⇒ Validator](#validatorwithpropertycountgreaterthanorequaltocount--validator)
  - [validator.withPropertyCountEqualTo(count) ⇒ Validator](#validatorwithpropertycountequaltocount--validator)
  - [validator.withPropertyCountNotEqualTo(count) ⇒ Validator](#validatorwithpropertycountnotequaltocount--validator)
  - [validator.withPropertyCountInRange(from, to) ⇒ Validator](#validatorwithpropertycountinrangefrom-to--validator)
  - [validator.withPropertyCountNotInRange(from, to) ⇒ Validator](#validatorwithpropertycountnotinrangefrom-to--validator)
  - [validator.where(predicate) ⇒ Validator](#validatorwherepredicate--validator)
  - [validator.andAnyOf(...validators) ⇒ Validator](#validatorandanyofvalidators--validator)
  - [validator.andOneOf(...validators) ⇒ Validator](#validatorandoneofvalidators--validator)
  - [validator.andAllOf(...validators) ⇒ Validator](#validatorandallofvalidators--validator)
  - [validator.anyOf(...validators) ⇒ Validator](#validatoranyofvalidators--validator)
  - [validator.oneOf(...validators) ⇒ Validator](#validatoroneofvalidators--validator)
  - [validator.allOf(...validators) ⇒ Validator](#validatorallofvalidators--validator)
  - [validator.validate(input) ⇒ boolean](#validatorvalidateinput--boolean)
  - [validator.toJSONSchema() ⇒ object](#validatortojsonschema--object)

<a name="new_Validator_new"></a>

### new Validator(type)

| Param | Type                  | Description |
| ----- | --------------------- | ----------- |
| type  | <code>BaseType</code> | A type.     |

<a name="Validator+lessThan"></a>

### validator.lessThan(constant) ⇒ [<code>Validator</code>](#Validator)
Require value to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+greaterThan"></a>

### validator.greaterThan(constant) ⇒ [<code>Validator</code>](#Validator)
Require value to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+lessThanOrEqualTo"></a>

### validator.lessThanOrEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)
Require value to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+greaterThanOrEqualTo"></a>

### validator.greaterThanOrEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)
Require value to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+equalTo"></a>

### validator.equalTo(constant) ⇒ [<code>Validator</code>](#Validator)
Require value to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+notEqualTo"></a>

### validator.notEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)
Require value to be not equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+inRange"></a>

### validator.inRange(from, to) ⇒ [<code>Validator</code>](#Validator)
Require value to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="Validator+notInRange"></a>

### validator.notInRange(from, to) ⇒ [<code>Validator</code>](#Validator)
Require value to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="Validator+withLengthLessThan"></a>

### validator.withLengthLessThan(count) ⇒ [<code>Validator</code>](#Validator)
Require length to be shorter than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthGreaterThan"></a>

### validator.withLengthGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)
Require length to be longer than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthLessThanOrEqualTo"></a>

### validator.withLengthLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require length to be shorter than or is a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthGreaterThanOrEqualTo"></a>

### validator.withLengthGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require length to be longer than or is a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthEqualTo"></a>

### validator.withLengthEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require length to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthNotEqualTo"></a>

### validator.withLengthNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require length not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthInRange"></a>

### validator.withLengthInRange(from, to) ⇒ [<code>Validator</code>](#Validator)
Require length to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withLengthNotInRange"></a>

### validator.withLengthNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)
Require length to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+matching"></a>

### validator.matching(regex) ⇒ [<code>Validator</code>](#Validator)
Require value to match a regular expression.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="Validator+notMatching"></a>

### validator.notMatching(regex) ⇒ [<code>Validator</code>](#Validator)
Require value not to match a regular expression.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="Validator+withItems"></a>

### validator.withItems(items) ⇒ [<code>Validator</code>](#Validator)
Require items to satisfy their constraints.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                                 | Description  |
| ----- | ------------------------------------ | ------------ |
| items | [<code>Validator</code>](#Validator) | Constraints. |

<a name="Validator+withItemCountLessThan"></a>

### validator.withItemCountLessThan(count) ⇒ [<code>Validator</code>](#Validator)
Require item count to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountGreaterThan"></a>

### validator.withItemCountGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)
Require item count to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountLessThanOrEqualTo"></a>

### validator.withItemCountLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require item count to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountGreaterThanOrEqualTo"></a>

### validator.withItemCountGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require item count to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountEqualTo"></a>

### validator.withItemCountEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require item count to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountNotEqualTo"></a>

### validator.withItemCountNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require item count not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountInRange"></a>

### validator.withItemCountInRange(from, to) ⇒ [<code>Validator</code>](#Validator)
Require length to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withItemCountNotInRange"></a>

### validator.withItemCountNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)
Require length to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withRequiredProperties"></a>

### validator.withRequiredProperties(properties) ⇒ [<code>Validator</code>](#Validator)
Require specified properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                                          | Description   |
| ---------- | --------------------------------------------- | ------------- |
| properties | <code>Object.&lt;string, Validator&gt;</code> | A constraint. |

<a name="Validator+withOptionalProperties"></a>

### validator.withOptionalProperties(properties) ⇒ [<code>Validator</code>](#Validator)
Permit specified optional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                                          | Description   |
| ---------- | --------------------------------------------- | ------------- |
| properties | <code>Object.&lt;string, Validator&gt;</code> | A constraint. |

<a name="Validator+withAdditionalProperties"></a>

### validator.withAdditionalProperties(properties) ⇒ [<code>Validator</code>](#Validator)
Permit additional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                                 | Description   |
| ---------- | ------------------------------------ | ------------- |
| properties | [<code>Validator</code>](#Validator) | A constraint. |

<a name="Validator+withNotAdditionalProperties"></a>

### validator.withNotAdditionalProperties() ⇒ [<code>Validator</code>](#Validator)
Require no additional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  
<a name="Validator+withPropertyCountLessThan"></a>

### validator.withPropertyCountLessThan(count) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountGreaterThan"></a>

### validator.withPropertyCountGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountLessThanOrEqualTo"></a>

### validator.withPropertyCountLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountGreaterThanOrEqualTo"></a>

### validator.withPropertyCountGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountEqualTo"></a>

### validator.withPropertyCountEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountNotEqualTo"></a>

### validator.withPropertyCountNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)
Require property amount not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountInRange"></a>

### validator.withPropertyCountInRange(from, to) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withPropertyCountNotInRange"></a>

### validator.withPropertyCountNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+where"></a>

### validator.where(predicate) ⇒ [<code>Validator</code>](#Validator)
Require property relationships.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param     | Type                        | Description  |
| --------- | --------------------------- | ------------ |
| predicate | <code>WherePredicate</code> | A predicate. |

<a name="Validator+andAnyOf"></a>

### validator.andAnyOf(...validators) ⇒ [<code>Validator</code>](#Validator)
Require any of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param         | Type                                               | Description        |
| ------------- | -------------------------------------------------- | ------------------ |
| ...validators | [<code>Array.&lt;Validator&gt;</code>](#Validator) | Nested validators. |

<a name="Validator+andOneOf"></a>

### validator.andOneOf(...validators) ⇒ [<code>Validator</code>](#Validator)
Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param         | Type                                               | Description        |
| ------------- | -------------------------------------------------- | ------------------ |
| ...validators | [<code>Array.&lt;Validator&gt;</code>](#Validator) | Nested validators. |

<a name="Validator+andAllOf"></a>

### validator.andAllOf(...validators) ⇒ [<code>Validator</code>](#Validator)
Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param         | Type                                               | Description        |
| ------------- | -------------------------------------------------- | ------------------ |
| ...validators | [<code>Array.&lt;Validator&gt;</code>](#Validator) | Nested validators. |

<a name="Validator+anyOf"></a>

### validator.anyOf(...validators) ⇒ [<code>Validator</code>](#Validator)
Require any of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param         | Type                                               | Description        |
| ------------- | -------------------------------------------------- | ------------------ |
| ...validators | [<code>Array.&lt;Validator&gt;</code>](#Validator) | Nested validators. |

<a name="Validator+oneOf"></a>

### validator.oneOf(...validators) ⇒ [<code>Validator</code>](#Validator)
Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param         | Type                                               | Description        |
| ------------- | -------------------------------------------------- | ------------------ |
| ...validators | [<code>Array.&lt;Validator&gt;</code>](#Validator) | Nested validators. |

<a name="Validator+allOf"></a>

### validator.allOf(...validators) ⇒ [<code>Validator</code>](#Validator)
Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param         | Type                                               | Description        |
| ------------- | -------------------------------------------------- | ------------------ |
| ...validators | [<code>Array.&lt;Validator&gt;</code>](#Validator) | Nested validators. |

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
