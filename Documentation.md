<a name="arraysEqual_"></a>

## arraysEqual\_(first, second) ⇒ <code>boolean</code>

Check whether two arrays are equal.

**Kind**: global function\
**Returns**: <code>boolean</code> - Whether two arrays are equal.

| Param  | Type               | Description     |
| ------ | ------------------ | --------------- |
| first  | <code>Array</code> | A first array.  |
| second | <code>Array</code> | A second array. |

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
  - [.isSymbol(value)](#Basic.isSymbol) ⇒ <code>boolean</code>
  - [.isArray(value)](#Basic.isArray) ⇒ <code>boolean</code>
  - [.isObject(value)](#Basic.isObject) ⇒ <code>boolean</code>
  - [.isRegExp(value)](#Basic.isRegExp) ⇒ <code>boolean</code>
  - [.isFunction(value)](#Basic.isFunction) ⇒ <code>boolean</code>
  - [.isExisting(value)](#Basic.isExisting) ⇒ <code>boolean</code>
  - [.isSupported(value)](#Basic.isSupported) ⇒ <code>boolean</code>
  - [.isComparableSupported(value)](#Basic.isComparableSupported) ⇒ <code>boolean</code>
  - [.isValidator(value)](#Basic.isValidator) ⇒ <code>boolean</code>
  - [.requireTypeByPredicate\_(predicate, value, argumentName, argumentIndex)](#Basic.requireTypeByPredicate_)
  - [.requireBoolean(value, argumentName, argumentIndex)](#Basic.requireBoolean)
  - [.requireNumber(value, argumentName, argumentIndex)](#Basic.requireNumber)
  - [.requireInteger(value, argumentName, argumentIndex)](#Basic.requireInteger)
  - [.requireString(value, argumentName, argumentIndex)](#Basic.requireString)
  - [.requireBigint(value, argumentName, argumentIndex)](#Basic.requireBigint)
  - [.requireSymbol(value, argumentName, argumentIndex)](#Basic.requireSymbol)
  - [.requireArray(value, argumentName, argumentIndex)](#Basic.requireArray)
  - [.requireObject(value, argumentName, argumentIndex)](#Basic.requireObject)
  - [.requireRegExp(value, argumentName, argumentIndex)](#Basic.requireRegExp)
  - [.requireFunction(value, argumentName, argumentIndex)](#Basic.requireFunction)
  - [.requireExisting(value, argumentName, argumentIndex)](#Basic.requireExisting)
  - [.requireSupported(value, argumentName, argumentIndex)](#Basic.requireSupported)
  - [.requireComparableSupported(value, argumentName, argumentIndex)](#Basic.requireComparableSupported)
  - [.requireValidator(value, argumentName, argumentIndex)](#Basic.requireValidator)

<a name="Basic.isBoolean"></a>

### Basic.isBoolean(value) ⇒ <code>boolean</code>

Check whether a value is a boolean value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a boolean value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isNumber"></a>

### Basic.isNumber(value) ⇒ <code>boolean</code>

Check whether a value is a number value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a number value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isInteger"></a>

### Basic.isInteger(value) ⇒ <code>boolean</code>

Check whether a value is an integer value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is an integer value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isString"></a>

### Basic.isString(value) ⇒ <code>boolean</code>

Check whether a value is a string value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a string value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isBigint"></a>

### Basic.isBigint(value) ⇒ <code>boolean</code>

Check whether a value is a bigint value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a bigint value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isSymbol"></a>

### Basic.isSymbol(value) ⇒ <code>boolean</code>

Check whether a value is a symbol value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a symbol value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isArray"></a>

### Basic.isArray(value) ⇒ <code>boolean</code>

Check whether a value is an array value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is an array value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isObject"></a>

### Basic.isObject(value) ⇒ <code>boolean</code>

Check whether a value is an object value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is an object value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isRegExp"></a>

### Basic.isRegExp(value) ⇒ <code>boolean</code>

Check whether a value is a regular expression.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a regular expression.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isFunction"></a>

### Basic.isFunction(value) ⇒ <code>boolean</code>

Check whether a value is a function.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a function.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isExisting"></a>

### Basic.isExisting(value) ⇒ <code>boolean</code>

Check whether a value is not null or undefined value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a not null or undefined value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isSupported"></a>

### Basic.isSupported(value) ⇒ <code>boolean</code>

Check whether a value is a supported validator type value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a supported validator type value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isComparableSupported"></a>

### Basic.isComparableSupported(value) ⇒ <code>boolean</code>

Check whether a value is a supported comparable validator type value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a supported comparable validator type value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.isValidator"></a>

### Basic.isValidator(value) ⇒ <code>boolean</code>

Check whether a value is a validator value.

**Kind**: static method of [<code>Basic</code>](#Basic)\
**Returns**: <code>boolean</code> - Whether a value is a validator value.

| Param | Type             | Description |
| ----- | ---------------- | ----------- |
| value | <code>any</code> | A value.    |

<a name="Basic.requireTypeByPredicate_"></a>

### Basic.requireTypeByPredicate\_(predicate, value, argumentName, argumentIndex)

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                   | Description        |
| ------------- | ---------------------- | ------------------ |
| predicate     | <code>Predicate</code> | A predicate.       |
| value         | <code>any</code>       | A value.           |
| argumentName  | <code>string</code>    | An argument name.  |
| argumentIndex | <code>number</code>    | An argument index. |

<a name="Basic.requireBoolean"></a>

### Basic.requireBoolean(value, argumentName, argumentIndex)

Check whether a value is a boolean value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireNumber"></a>

### Basic.requireNumber(value, argumentName, argumentIndex)

Check whether a value is a number value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireInteger"></a>

### Basic.requireInteger(value, argumentName, argumentIndex)

Check whether a value is an integer value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireString"></a>

### Basic.requireString(value, argumentName, argumentIndex)

Check whether a value is a string value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireBigint"></a>

### Basic.requireBigint(value, argumentName, argumentIndex)

Check whether a value is a bigint value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireSymbol"></a>

### Basic.requireSymbol(value, argumentName, argumentIndex)

Check whether a value is a symbol value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireArray"></a>

### Basic.requireArray(value, argumentName, argumentIndex)

Check whether a value is an array value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireObject"></a>

### Basic.requireObject(value, argumentName, argumentIndex)

Check whether a value is an object value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireRegExp"></a>

### Basic.requireRegExp(value, argumentName, argumentIndex)

Check whether a value is a regular expression value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireFunction"></a>

### Basic.requireFunction(value, argumentName, argumentIndex)

Check whether a value is a function value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireExisting"></a>

### Basic.requireExisting(value, argumentName, argumentIndex)

Check whether a value is not an undefined or null value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireSupported"></a>

### Basic.requireSupported(value, argumentName, argumentIndex)

Check whether a value is a basic supported validator type value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireComparableSupported"></a>

### Basic.requireComparableSupported(value, argumentName, argumentIndex)

Check whether a value is a basic supported comparable validator type value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

<a name="Basic.requireValidator"></a>

### Basic.requireValidator(value, argumentName, argumentIndex)

Check whether a value is a validator value and throw if not.

**Kind**: static method of [<code>Basic</code>](#Basic)

| Param         | Type                | Description        |
| ------------- | ------------------- | ------------------ |
| value         | <code>any</code>    | A value.           |
| argumentName  | <code>string</code> | An argument name.  |
| argumentIndex | <code>number</code> | An argument index. |

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

**Kind**: global function\
<a name="ComplexValidator_"></a>

## ComplexValidator\_

Complex validator.

**Kind**: global class

- [ComplexValidator\_](#ComplexValidator_)
  - [new ComplexValidator\_(validators, mode)](#new_ComplexValidator__new)
  - [.expectedJSType](#ComplexValidator_+expectedJSType) : <code>string</code>
  - [.expectedRequiredPropertiesTree](#ComplexValidator_+expectedRequiredPropertiesTree) : <code>object</code>
  - [.expectedOptionalPropertiesTree](#ComplexValidator_+expectedOptionalPropertiesTree) : <code>object</code>
  - [.clone()](#ComplexValidator_+clone) ⇒ [<code>ComplexValidator\_</code>](#ComplexValidator_)
  - [.validate(input)](#ComplexValidator_+validate) ⇒ <code>boolean</code>
  - [.toString()](#ComplexValidator_+toString) ⇒ <code>string</code>
  - [.toJSONSchema\_()](#ComplexValidator_+toJSONSchema_) ⇒ <code>object</code>

<a name="new_ComplexValidator__new"></a>

### new ComplexValidator\_(validators, mode)

| Param      | Type                                                                     | Description                   |
| ---------- | ------------------------------------------------------------------------ | ----------------------------- |
| validators | <code>Array.\<(Validator\|SimpleValidator\_\|ComplexValidator\_)></code> | Validators.                   |
| mode       | <code>object</code>                                                      | A condition combination mode. |

<a name="ComplexValidator_+expectedJSType"></a>

### complexValidator\_.expectedJSType : <code>string</code>

An expected type.

**Kind**: instance property of [<code>ComplexValidator\_</code>](#ComplexValidator_)\
<a name="ComplexValidator_+expectedRequiredPropertiesTree"></a>

### complexValidator\_.expectedRequiredPropertiesTree : <code>object</code>

A required properties tree.

**Kind**: instance property of [<code>ComplexValidator\_</code>](#ComplexValidator_)\
<a name="ComplexValidator_+expectedOptionalPropertiesTree"></a>

### complexValidator\_.expectedOptionalPropertiesTree : <code>object</code>

An optional properties tree.

**Kind**: instance property of [<code>ComplexValidator\_</code>](#ComplexValidator_)\
<a name="ComplexValidator_+clone"></a>

### complexValidator\_.clone() ⇒ [<code>ComplexValidator\_</code>](#ComplexValidator_)

Clone the current validator.

**Kind**: instance method of [<code>ComplexValidator\_</code>](#ComplexValidator_)\
**Returns**: [<code>ComplexValidator\_</code>](#ComplexValidator_) - A validator clone.\
<a name="ComplexValidator_+validate"></a>

### complexValidator\_.validate(input) ⇒ <code>boolean</code>

Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>ComplexValidator\_</code>](#ComplexValidator_)\
**Returns**: <code>boolean</code> - Whether an input value satisfies all conditions.

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

<a name="ComplexValidator_+toString"></a>

### complexValidator\_.toString() ⇒ <code>string</code>

Converts object to string.

**Kind**: instance method of [<code>ComplexValidator\_</code>](#ComplexValidator_)\
**Returns**: <code>string</code> - A string representation.\
<a name="ComplexValidator_+toJSONSchema_"></a>

### complexValidator\_.toJSONSchema\_() ⇒ <code>object</code>

Convert object to JSON schema (draft 07) representation.

**Kind**: instance method of [<code>ComplexValidator\_</code>](#ComplexValidator_)\
**Returns**: <code>object</code> - JSON schema (draft 07) representation.\
<a name="ComplexValidatorMode"></a>

## ComplexValidatorMode : <code>enum</code>

Complex validator mode.

**Kind**: global enum\
<a name="ActionMode"></a>

## ActionMode : <code>enum</code>

Action constraint mode.

**Kind**: global enum\
<a name="ActionTargetMode"></a>

## ActionTargetMode : <code>enum</code>

Action target mode.

**Kind**: global enum

## Functions

<dl>
<dt><a href="#deepCopy_">deepCopy_(value)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Copy an object deeply.</p>
</dd>
<dt><a href="#deepMerge_">deepMerge_(first, second)</a> ⇒ <code>object</code></dt>
<dd><p>Merge several objects deeply together.</p>
</dd>
<dt><a href="#propertyNames_">propertyNames_(value, prefix)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get object&#39;s property names.</p>
</dd>
</dl>

<a name="deepCopy_"></a>

## deepCopy\_(value) ⇒ <code>Array.\<string></code>

Copy an object deeply.

**Kind**: global function\
**Returns**: <code>Array.\<string></code> - A deep copy.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| value | <code>object</code> | An object.  |

<a name="deepMerge_"></a>

## deepMerge\_(first, second) ⇒ <code>object</code>

Merge several objects deeply together.

**Kind**: global function\
**Returns**: <code>object</code> - A deep merge.

| Param  | Type                | Description      |
| ------ | ------------------- | ---------------- |
| first  | <code>object</code> | A first object.  |
| second | <code>object</code> | A second object. |

<a name="propertyNames_"></a>

## propertyNames\_(value, prefix) ⇒ <code>Array.\<string></code>

Get object's property names.

**Kind**: global function\
**Returns**: <code>Array.\<string></code> - Property names.

| Param  | Type                | Description     |
| ------ | ------------------- | --------------- |
| value  | <code>object</code> | A first object. |
| prefix | <code>string</code> | A prefix.       |

<a name="SimpleValidator_"></a>

## SimpleValidator\_

Basic validator.

**Kind**: global class

- [SimpleValidator\_](#SimpleValidator_)
  - [new SimpleValidator\_(type)](#new_SimpleValidator__new)
  - [.alreadyInvoked\_](#SimpleValidator_+alreadyInvoked_) : <code>Set.\<string></code>
  - [.expectedJSType](#SimpleValidator_+expectedJSType) : <code>string</code>
  - [.expectedRequiredPropertiesTree](#SimpleValidator_+expectedRequiredPropertiesTree) : <code>object</code>
  - [.expectedOptionalPropertiesTree](#SimpleValidator_+expectedOptionalPropertiesTree) : <code>object</code>
  - [.isPrivateProperty\_(property)](#SimpleValidator_+isPrivateProperty_)
  - [.requireSameType\_(input)](#SimpleValidator_+requireSameType_)
  - [.requirePublicProperties\_(properties)](#SimpleValidator_+requirePublicProperties_)
  - [.requireTrue\_(value)](#SimpleValidator_+requireTrue_)
  - [.requireCount\_(value, argumentName)](#SimpleValidator_+requireCount_)
  - [.requireRange\_(from, to)](#SimpleValidator_+requireRange_)
  - [.tryInvoke\_(name)](#SimpleValidator_+tryInvoke_)
  - [.regexToPlainString\_(regex)](#SimpleValidator_+regexToPlainString_)
  - [.addValueConstraints\_(schema, simpleSubschemas, action)](#SimpleValidator_+addValueConstraints_)
  - [.addLengthConstraints\_(schema, simpleSubschemas, action)](#SimpleValidator_+addLengthConstraints_)
  - [.addItemCountConstraints\_(schema, simpleSubschemas, action)](#SimpleValidator_+addItemCountConstraints_)
  - [.addPropertyCountConstraints\_(schema, simpleSubschemas, action)](#SimpleValidator_+addPropertyCountConstraints_)
  - [.addProperties\_(schema, action)](#SimpleValidator_+addProperties_)
  - [.clone()](#SimpleValidator_+clone) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withDescription(description)](#SimpleValidator_+withDescription) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withDefault(value)](#SimpleValidator_+withDefault) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.lessThan(constant)](#SimpleValidator_+lessThan) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.greaterThan(constant)](#SimpleValidator_+greaterThan) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.lessThanOrEqualTo(constant)](#SimpleValidator_+lessThanOrEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.greaterThanOrEqualTo(constant)](#SimpleValidator_+greaterThanOrEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.equalTo(constant)](#SimpleValidator_+equalTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.notEqualTo(constant)](#SimpleValidator_+notEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.inRange(from, to)](#SimpleValidator_+inRange) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.notInRange(from, to)](#SimpleValidator_+notInRange) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withValueOneOf(...constants)](#SimpleValidator_+withValueOneOf) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withValueNotOneOf(...constants)](#SimpleValidator_+withValueNotOneOf) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withLengthLessThan(count)](#SimpleValidator_+withLengthLessThan) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withLengthGreaterThan(count)](#SimpleValidator_+withLengthGreaterThan) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withLengthLessThanOrEqualTo(count)](#SimpleValidator_+withLengthLessThanOrEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withLengthGreaterThanOrEqualTo(count)](#SimpleValidator_+withLengthGreaterThanOrEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withLengthEqualTo(count)](#SimpleValidator_+withLengthEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withLengthNotEqualTo(count)](#SimpleValidator_+withLengthNotEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withLengthInRange(from, to)](#SimpleValidator_+withLengthInRange) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withLengthNotInRange(from, to)](#SimpleValidator_+withLengthNotInRange) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.matching(regex)](#SimpleValidator_+matching) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.notMatching(regex)](#SimpleValidator_+notMatching) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItems(items)](#SimpleValidator_+withItems) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItemCountLessThan(count)](#SimpleValidator_+withItemCountLessThan) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItemCountGreaterThan(count)](#SimpleValidator_+withItemCountGreaterThan) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItemCountLessThanOrEqualTo(count)](#SimpleValidator_+withItemCountLessThanOrEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItemCountGreaterThanOrEqualTo(count)](#SimpleValidator_+withItemCountGreaterThanOrEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItemCountEqualTo(count)](#SimpleValidator_+withItemCountEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItemCountNotEqualTo(count)](#SimpleValidator_+withItemCountNotEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItemCountInRange(from, to)](#SimpleValidator_+withItemCountInRange) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withItemCountNotInRange(from, to)](#SimpleValidator_+withItemCountNotInRange) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withRequiredProperties(properties)](#SimpleValidator_+withRequiredProperties) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withOptionalProperties(properties)](#SimpleValidator_+withOptionalProperties) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withAdditionalProperties(properties)](#SimpleValidator_+withAdditionalProperties) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withNotAdditionalProperties()](#SimpleValidator_+withNotAdditionalProperties) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withPropertyCountLessThan(count)](#SimpleValidator_+withPropertyCountLessThan) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withPropertyCountGreaterThan(count)](#SimpleValidator_+withPropertyCountGreaterThan) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withPropertyCountLessThanOrEqualTo(count)](#SimpleValidator_+withPropertyCountLessThanOrEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withPropertyCountGreaterThanOrEqualTo(count)](#SimpleValidator_+withPropertyCountGreaterThanOrEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withPropertyCountEqualTo(count)](#SimpleValidator_+withPropertyCountEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withPropertyCountNotEqualTo(count)](#SimpleValidator_+withPropertyCountNotEqualTo) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withPropertyCountInRange(from, to)](#SimpleValidator_+withPropertyCountInRange) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.withPropertyCountNotInRange(from, to)](#SimpleValidator_+withPropertyCountNotInRange) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.where(predicate)](#SimpleValidator_+where) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.whereValue(predicate)](#SimpleValidator_+whereValue) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)
  - [.validate(input)](#SimpleValidator_+validate) ⇒ <code>boolean</code>
  - [.toString()](#SimpleValidator_+toString) ⇒ <code>string</code>
  - [.toJSONSchema\_()](#SimpleValidator_+toJSONSchema_) ⇒ <code>object</code>

<a name="new_SimpleValidator__new"></a>

### new SimpleValidator\_(type)

| Param | Type                  | Description |
| ----- | --------------------- | ----------- |
| type  | <code>BaseType</code> | A type.     |

<a name="SimpleValidator_+alreadyInvoked_"></a>

### simpleValidator\_.alreadyInvoked\_ : <code>Set.\<string></code>

**Kind**: instance property of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
<a name="SimpleValidator_+expectedJSType"></a>

### simpleValidator\_.expectedJSType : <code>string</code>

An expected type.

**Kind**: instance property of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
<a name="SimpleValidator_+expectedRequiredPropertiesTree"></a>

### simpleValidator\_.expectedRequiredPropertiesTree : <code>object</code>

A required properties tree.

**Kind**: instance property of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
<a name="SimpleValidator_+expectedOptionalPropertiesTree"></a>

### simpleValidator\_.expectedOptionalPropertiesTree : <code>object</code>

An optional properties tree.

**Kind**: instance property of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
<a name="SimpleValidator_+isPrivateProperty_"></a>

### simpleValidator\_.isPrivateProperty\_(property)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param    | Type                |
| -------- | ------------------- |
| property | <code>string</code> |

<a name="SimpleValidator_+requireSameType_"></a>

### simpleValidator\_.requireSameType\_(input)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param | Type             |
| ----- | ---------------- |
| input | <code>any</code> |

<a name="SimpleValidator_+requirePublicProperties_"></a>

### simpleValidator\_.requirePublicProperties\_(properties)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param      | Type                |
| ---------- | ------------------- |
| properties | <code>object</code> |

<a name="SimpleValidator_+requireTrue_"></a>

### simpleValidator\_.requireTrue\_(value)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="SimpleValidator_+requireCount_"></a>

### simpleValidator\_.requireCount\_(value, argumentName)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param        | Type                |
| ------------ | ------------------- |
| value        | <code>string</code> |
| argumentName | <code>string</code> |

<a name="SimpleValidator_+requireRange_"></a>

### simpleValidator\_.requireRange\_(from, to)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param | Type             |
| ----- | ---------------- |
| from  | <code>any</code> |
| to    | <code>any</code> |

<a name="SimpleValidator_+tryInvoke_"></a>

### simpleValidator\_.tryInvoke\_(name)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param | Type                |
| ----- | ------------------- |
| name  | <code>string</code> |

<a name="SimpleValidator_+regexToPlainString_"></a>

### simpleValidator\_.regexToPlainString\_(regex)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param | Type                |
| ----- | ------------------- |
| regex | <code>RegExp</code> |

<a name="SimpleValidator_+addValueConstraints_"></a>

### simpleValidator\_.addValueConstraints\_(schema, simpleSubschemas, action)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param            | Type                      |
| ---------------- | ------------------------- |
| schema           | <code>object</code>       |
| simpleSubschemas | <code>object</code>       |
| action           | <code>ActionInfo\_</code> |

<a name="SimpleValidator_+addLengthConstraints_"></a>

### simpleValidator\_.addLengthConstraints\_(schema, simpleSubschemas, action)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param            | Type                      |
| ---------------- | ------------------------- |
| schema           | <code>object</code>       |
| simpleSubschemas | <code>object</code>       |
| action           | <code>ActionInfo\_</code> |

<a name="SimpleValidator_+addItemCountConstraints_"></a>

### simpleValidator\_.addItemCountConstraints\_(schema, simpleSubschemas, action)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param            | Type                      |
| ---------------- | ------------------------- |
| schema           | <code>object</code>       |
| simpleSubschemas | <code>object</code>       |
| action           | <code>ActionInfo\_</code> |

<a name="SimpleValidator_+addPropertyCountConstraints_"></a>

### simpleValidator\_.addPropertyCountConstraints\_(schema, simpleSubschemas, action)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param            | Type                      |
| ---------------- | ------------------------- |
| schema           | <code>object</code>       |
| simpleSubschemas | <code>object</code>       |
| action           | <code>ActionInfo\_</code> |

<a name="SimpleValidator_+addProperties_"></a>

### simpleValidator\_.addProperties\_(schema, action)

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)

| Param  | Type                      |
| ------ | ------------------------- |
| schema | <code>object</code>       |
| action | <code>ActionInfo\_</code> |

<a name="SimpleValidator_+clone"></a>

### simpleValidator\_.clone() ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Clone the current validator.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - A validator clone.\
<a name="SimpleValidator_+withDescription"></a>

### simpleValidator\_.withDescription(description) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Add a description.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param       | Type                | Description    |
| ----------- | ------------------- | -------------- |
| description | <code>string</code> | A description. |

<a name="SimpleValidator_+withDefault"></a>

### simpleValidator\_.withDefault(value) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Add a default value.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| value | <code>string</code> | A default value. |

<a name="SimpleValidator_+lessThan"></a>

### simpleValidator\_.lessThan(constant) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be less than a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+greaterThan"></a>

### simpleValidator\_.greaterThan(constant) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be greater than a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+lessThanOrEqualTo"></a>

### simpleValidator\_.lessThanOrEqualTo(constant) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be less than or equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+greaterThanOrEqualTo"></a>

### simpleValidator\_.greaterThanOrEqualTo(constant) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be greater than or equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+equalTo"></a>

### simpleValidator\_.equalTo(constant) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+notEqualTo"></a>

### simpleValidator\_.notEqualTo(constant) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be not equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+inRange"></a>

### simpleValidator\_.inRange(from, to) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be within a range.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="SimpleValidator_+notInRange"></a>

### simpleValidator\_.notInRange(from, to) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be outside of a range.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="SimpleValidator_+withValueOneOf"></a>

### simpleValidator\_.withValueOneOf(...constants) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be equal to one of constants.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

<a name="SimpleValidator_+withValueNotOneOf"></a>

### simpleValidator\_.withValueNotOneOf(...constants) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to be not equal to one of constants.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

<a name="SimpleValidator_+withLengthLessThan"></a>

### simpleValidator\_.withLengthLessThan(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be shorter than a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withLengthGreaterThan"></a>

### simpleValidator\_.withLengthGreaterThan(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be longer than a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withLengthLessThanOrEqualTo"></a>

### simpleValidator\_.withLengthLessThanOrEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be shorter than or is a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withLengthGreaterThanOrEqualTo"></a>

### simpleValidator\_.withLengthGreaterThanOrEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be longer than or is a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withLengthEqualTo"></a>

### simpleValidator\_.withLengthEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withLengthNotEqualTo"></a>

### simpleValidator\_.withLengthNotEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length not to be equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withLengthInRange"></a>

### simpleValidator\_.withLengthInRange(from, to) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be within a range.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="SimpleValidator_+withLengthNotInRange"></a>

### simpleValidator\_.withLengthNotInRange(from, to) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be outside of a range.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="SimpleValidator_+matching"></a>

### simpleValidator\_.matching(regex) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value to match a regular expression.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="SimpleValidator_+notMatching"></a>

### simpleValidator\_.notMatching(regex) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value not to match a regular expression.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="SimpleValidator_+withItems"></a>

### simpleValidator\_.withItems(items) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require items to satisfy their constraints.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                                                                                   | Description  |
| ----- | -------------------------------------------------------------------------------------- | ------------ |
| items | [<code>SimpleValidator\_</code>](#SimpleValidator_) \| <code>ComplexValidator\_</code> | Constraints. |

<a name="SimpleValidator_+withItemCountLessThan"></a>

### simpleValidator\_.withItemCountLessThan(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require item count to be less than a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withItemCountGreaterThan"></a>

### simpleValidator\_.withItemCountGreaterThan(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require item count to be greater than a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withItemCountLessThanOrEqualTo"></a>

### simpleValidator\_.withItemCountLessThanOrEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require item count to be less than or equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withItemCountGreaterThanOrEqualTo"></a>

### simpleValidator\_.withItemCountGreaterThanOrEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require item count to be greater than or equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withItemCountEqualTo"></a>

### simpleValidator\_.withItemCountEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require item count to be equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withItemCountNotEqualTo"></a>

### simpleValidator\_.withItemCountNotEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require item count not to be equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="SimpleValidator_+withItemCountInRange"></a>

### simpleValidator\_.withItemCountInRange(from, to) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be within a range.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="SimpleValidator_+withItemCountNotInRange"></a>

### simpleValidator\_.withItemCountNotInRange(from, to) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require length to be outside of a range.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="SimpleValidator_+withRequiredProperties"></a>

### simpleValidator\_.withRequiredProperties(properties) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require specified properties.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param      | Type                                                                              | Description   |
| ---------- | --------------------------------------------------------------------------------- | ------------- |
| properties | <code>Object.\<string, (Validator\|SimpleValidator\_\|ComplexValidator\_)></code> | A constraint. |

<a name="SimpleValidator_+withOptionalProperties"></a>

### simpleValidator\_.withOptionalProperties(properties) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Permit specified optional properties.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param      | Type                                                                              | Description   |
| ---------- | --------------------------------------------------------------------------------- | ------------- |
| properties | <code>Object.\<string, (Validator\|SimpleValidator\_\|ComplexValidator\_)></code> | A constraint. |

<a name="SimpleValidator_+withAdditionalProperties"></a>

### simpleValidator\_.withAdditionalProperties(properties) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Permit additional properties.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param      | Type                                                                                                             | Description   |
| ---------- | ---------------------------------------------------------------------------------------------------------------- | ------------- |
| properties | <code>Validator</code> \| [<code>SimpleValidator\_</code>](#SimpleValidator_) \| <code>ComplexValidator\_</code> | A constraint. |

<a name="SimpleValidator_+withNotAdditionalProperties"></a>

### simpleValidator\_.withNotAdditionalProperties() ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require no additional properties.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.\
<a name="SimpleValidator_+withPropertyCountLessThan"></a>

### simpleValidator\_.withPropertyCountLessThan(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property amount to be less than a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+withPropertyCountGreaterThan"></a>

### simpleValidator\_.withPropertyCountGreaterThan(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property amount to be greater than a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+withPropertyCountLessThanOrEqualTo"></a>

### simpleValidator\_.withPropertyCountLessThanOrEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property amount to be less than or equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+withPropertyCountGreaterThanOrEqualTo"></a>

### simpleValidator\_.withPropertyCountGreaterThanOrEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property amount to be greater than or equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+withPropertyCountEqualTo"></a>

### simpleValidator\_.withPropertyCountEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property amount to be equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+withPropertyCountNotEqualTo"></a>

### simpleValidator\_.withPropertyCountNotEqualTo(count) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property amount not to be equal to a constant.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="SimpleValidator_+withPropertyCountInRange"></a>

### simpleValidator\_.withPropertyCountInRange(from, to) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property amount to be within a range.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="SimpleValidator_+withPropertyCountNotInRange"></a>

### simpleValidator\_.withPropertyCountNotInRange(from, to) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property amount to be outside of a range.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="SimpleValidator_+where"></a>

### simpleValidator\_.where(predicate) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require property relationships.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param     | Type                        | Description  |
| --------- | --------------------------- | ------------ |
| predicate | <code>WherePredicate</code> | A predicate. |

<a name="SimpleValidator_+whereValue"></a>

### simpleValidator\_.whereValue(predicate) ⇒ [<code>SimpleValidator\_</code>](#SimpleValidator_)

Require value constraints.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: [<code>SimpleValidator\_</code>](#SimpleValidator_) - The current validator.

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| predicate | <code>Predicate</code> | A predicate. |

<a name="SimpleValidator_+validate"></a>

### simpleValidator\_.validate(input) ⇒ <code>boolean</code>

Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: <code>boolean</code> - Whether an input value satisfies all conditions.

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

<a name="SimpleValidator_+toString"></a>

### simpleValidator\_.toString() ⇒ <code>string</code>

Converts object to string.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: <code>string</code> - A string representation.\
<a name="SimpleValidator_+toJSONSchema_"></a>

### simpleValidator\_.toJSONSchema\_() ⇒ <code>object</code>

Convert object to JSON schema (draft 07) representation.

**Kind**: instance method of [<code>SimpleValidator\_</code>](#SimpleValidator_)\
**Returns**: <code>object</code> - JSON schema (draft 07) representation.

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
<a name="Validator"></a>

## Validator

A validator.

**Kind**: global class

- [Validator](#Validator)
  - [new Validator(type)](#new_Validator_new)
  - [.expectedJSType](#Validator+expectedJSType) : <code>string</code>
  - [.expectedRequiredPropertiesTree](#Validator+expectedRequiredPropertiesTree) : <code>object</code>
  - [.expectedOptionalPropertiesTree](#Validator+expectedOptionalPropertiesTree) : <code>object</code>
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
  - [.toJSONSchemaString()](#Validator+toJSONSchemaString) ⇒ <code>string</code>
  - [.toJSDocString()](#Validator+toJSDocString) ⇒ <code>string</code>
  - [.toJSONSchema\_()](#Validator+toJSONSchema_) ⇒ <code>object</code>

<a name="new_Validator_new"></a>

### new Validator(type)

| Param | Type                  | Description |
| ----- | --------------------- | ----------- |
| type  | <code>BaseType</code> | A type.     |

<a name="Validator+expectedJSType"></a>

### validator.expectedJSType : <code>string</code>

An expected type.

**Kind**: instance property of [<code>Validator</code>](#Validator)\
<a name="Validator+expectedRequiredPropertiesTree"></a>

### validator.expectedRequiredPropertiesTree : <code>object</code>

A required properties tree.

**Kind**: instance property of [<code>Validator</code>](#Validator)\
<a name="Validator+expectedOptionalPropertiesTree"></a>

### validator.expectedOptionalPropertiesTree : <code>object</code>

An optional properties tree.

**Kind**: instance property of [<code>Validator</code>](#Validator)\
<a name="Validator+clone"></a>

### validator.clone() ⇒ [<code>Validator</code>](#Validator)

Clone the current validator.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - A validator clone.\
<a name="Validator+withDescription"></a>

### validator.withDescription(description) ⇒ [<code>Validator</code>](#Validator)

Add a description.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param       | Type                | Description    |
| ----------- | ------------------- | -------------- |
| description | <code>string</code> | A description. |

<a name="Validator+withDefault"></a>

### validator.withDefault(value) ⇒ [<code>Validator</code>](#Validator)

Add a default value.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| value | <code>string</code> | A default value. |

<a name="Validator+lessThan"></a>

### validator.lessThan(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+greaterThan"></a>

### validator.greaterThan(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+lessThanOrEqualTo"></a>

### validator.lessThanOrEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+greaterThanOrEqualTo"></a>

### validator.greaterThanOrEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+equalTo"></a>

### validator.equalTo(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+notEqualTo"></a>

### validator.notEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)

Require value to be not equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+inRange"></a>

### validator.inRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require value to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="Validator+notInRange"></a>

### validator.notInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require value to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                            | Description         |
| ----- | ------------------------------- | ------------------- |
| from  | <code>BaseComparableType</code> | A lowest boundary.  |
| to    | <code>BaseComparableType</code> | A highest boundary. |

<a name="Validator+withValueOneOf"></a>

### validator.withValueOneOf(...constants) ⇒ [<code>Validator</code>](#Validator)

Require value to be equal to one of constants.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

<a name="Validator+withValueNotOneOf"></a>

### validator.withValueNotOneOf(...constants) ⇒ [<code>Validator</code>](#Validator)

Require value to be not equal to one of constants.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param        | Type               | Description |
| ------------ | ------------------ | ----------- |
| ...constants | <code>Array</code> | Constants.  |

<a name="Validator+withLengthLessThan"></a>

### validator.withLengthLessThan(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be shorter than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthGreaterThan"></a>

### validator.withLengthGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be longer than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthLessThanOrEqualTo"></a>

### validator.withLengthLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be shorter than or is a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthGreaterThanOrEqualTo"></a>

### validator.withLengthGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be longer than or is a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthEqualTo"></a>

### validator.withLengthEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require length to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthNotEqualTo"></a>

### validator.withLengthNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require length not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withLengthInRange"></a>

### validator.withLengthInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require length to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withLengthNotInRange"></a>

### validator.withLengthNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require length to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+matching"></a>

### validator.matching(regex) ⇒ [<code>Validator</code>](#Validator)

Require value to match a regular expression.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="Validator+notMatching"></a>

### validator.notMatching(regex) ⇒ [<code>Validator</code>](#Validator)

Require value not to match a regular expression.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| regex | <code>RegExp</code> | A regular expression. |

<a name="Validator+withItems"></a>

### validator.withItems(items) ⇒ [<code>Validator</code>](#Validator)

Require items to satisfy their constraints.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                                 | Description  |
| ----- | ------------------------------------ | ------------ |
| items | [<code>Validator</code>](#Validator) | Constraints. |

<a name="Validator+withItemCountLessThan"></a>

### validator.withItemCountLessThan(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountGreaterThan"></a>

### validator.withItemCountGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountLessThanOrEqualTo"></a>

### validator.withItemCountLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountGreaterThanOrEqualTo"></a>

### validator.withItemCountGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountEqualTo"></a>

### validator.withItemCountEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require item count to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountNotEqualTo"></a>

### validator.withItemCountNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require item count not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| count | <code>number</code> | A constant. |

<a name="Validator+withItemCountInRange"></a>

### validator.withItemCountInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require length to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withItemCountNotInRange"></a>

### validator.withItemCountNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require length to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withRequiredProperties"></a>

### validator.withRequiredProperties(properties) ⇒ [<code>Validator</code>](#Validator)

Require specified properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param      | Type                                     | Description   |
| ---------- | ---------------------------------------- | ------------- |
| properties | <code>Object.\<string, Validator></code> | A constraint. |

<a name="Validator+withOptionalProperties"></a>

### validator.withOptionalProperties(properties) ⇒ [<code>Validator</code>](#Validator)

Permit specified optional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param      | Type                                     | Description   |
| ---------- | ---------------------------------------- | ------------- |
| properties | <code>Object.\<string, Validator></code> | A constraint. |

<a name="Validator+withAdditionalProperties"></a>

### validator.withAdditionalProperties(properties) ⇒ [<code>Validator</code>](#Validator)

Permit additional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param      | Type                                 | Description   |
| ---------- | ------------------------------------ | ------------- |
| properties | [<code>Validator</code>](#Validator) | A constraint. |

<a name="Validator+withNotAdditionalProperties"></a>

### validator.withNotAdditionalProperties() ⇒ [<code>Validator</code>](#Validator)

Require no additional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.\
<a name="Validator+withPropertyCountLessThan"></a>

### validator.withPropertyCountLessThan(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountGreaterThan"></a>

### validator.withPropertyCountGreaterThan(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountLessThanOrEqualTo"></a>

### validator.withPropertyCountLessThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountGreaterThanOrEqualTo"></a>

### validator.withPropertyCountGreaterThanOrEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountEqualTo"></a>

### validator.withPropertyCountEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountNotEqualTo"></a>

### validator.withPropertyCountNotEqualTo(count) ⇒ [<code>Validator</code>](#Validator)

Require property amount not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                            | Description |
| ----- | ------------------------------- | ----------- |
| count | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountInRange"></a>

### validator.withPropertyCountInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be within a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+withPropertyCountNotInRange"></a>

### validator.withPropertyCountNotInRange(from, to) ⇒ [<code>Validator</code>](#Validator)

Require property amount to be outside of a range.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| from  | <code>number</code> | A lowest boundary.  |
| to    | <code>number</code> | A highest boundary. |

<a name="Validator+where"></a>

### validator.where(predicate) ⇒ [<code>Validator</code>](#Validator)

Require property relationships.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param     | Type                        | Description  |
| --------- | --------------------------- | ------------ |
| predicate | <code>WherePredicate</code> | A predicate. |

<a name="Validator+whereValue"></a>

### validator.whereValue(predicate) ⇒ [<code>Validator</code>](#Validator)

Require value constraints.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| predicate | <code>Predicate</code> | A predicate. |

<a name="Validator+andAnyOf"></a>

### validator.andAnyOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require any of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+andOneOf"></a>

### validator.andOneOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+andAllOf"></a>

### validator.andAllOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+anyOf"></a>

### validator.anyOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require any of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+oneOf"></a>

### validator.oneOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+allOf"></a>

### validator.allOf(...validators) ⇒ [<code>Validator</code>](#Validator)

Require one of constraints to be satisfied.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: [<code>Validator</code>](#Validator) - The current validator.

| Param         | Type                                          | Description        |
| ------------- | --------------------------------------------- | ------------------ |
| ...validators | [<code>Array.\<Validator></code>](#Validator) | Nested validators. |

<a name="Validator+validate"></a>

### validator.validate(input) ⇒ <code>boolean</code>

Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: <code>boolean</code> - Whether an input value satisfies all conditions.

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

<a name="Validator+toJSONSchema"></a>

### validator.toJSONSchema() ⇒ <code>object</code>

Convert object to JSON schema (draft 07) representation.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: <code>object</code> - JSON schema (draft 07) representation.\
<a name="Validator+toJSONSchemaString"></a>

### validator.toJSONSchemaString() ⇒ <code>string</code>

Convert object to JSON schema (draft 07) representation.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: <code>string</code> - JSON schema (draft 07) representation.\
<a name="Validator+toJSDocString"></a>

### validator.toJSDocString() ⇒ <code>string</code>

Convert object to JSDoc representation.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: <code>string</code> - JSDoc representation.\
<a name="Validator+toJSONSchema_"></a>

### validator.toJSONSchema\_() ⇒ <code>object</code>

Convert object to JSON schema (draft 07) representation.

**Kind**: instance method of [<code>Validator</code>](#Validator)\
**Returns**: <code>object</code> - JSON schema (draft 07) representation.

## Functions

<dl>
<dt><a href="#checkWhether">checkWhether(input, validator)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether value satisfies all conditions.</p>
</dd>
<dt><a href="#throwOnFailure">throwOnFailure(input, validator, message)</a></dt>
<dd><p>Check whether value satisfies all conditions and print error in case.</p>
</dd>
</dl>

<a name="checkWhether"></a>

## checkWhether(input, validator) ⇒ <code>boolean</code>

Check whether value satisfies all conditions.

**Kind**: global function\
**Returns**: <code>boolean</code> - Whether value satisfies all conditions.

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| input     | <code>any</code>       | An input.    |
| validator | <code>Validator</code> | A validator. |

<a name="throwOnFailure"></a>

## throwOnFailure(input, validator, message)

Check whether value satisfies all conditions and print error in case.

**Kind**: global function

| Param     | Type                   | Description  |
| --------- | ---------------------- | ------------ |
| input     | <code>any</code>       | An input.    |
| validator | <code>Validator</code> | A validator. |
| message   | <code>string</code>    | A message.   |

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
<dt><a href="#isSymbol">isSymbol()</a> ⇒ <code>Validator</code></dt>
<dd><p>Require value to be symbol.</p>
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
</dl>

<a name="is"></a>

## is

Get is\* functions.

**Kind**: global enum\
<a name="isBoolean"></a>

## isBoolean() ⇒ <code>Validator</code>

Require value to be boolean.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.\
<a name="isNumber"></a>

## isNumber() ⇒ <code>Validator</code>

Require value to be number.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.\
<a name="isInteger"></a>

## isInteger() ⇒ <code>Validator</code>

Require value to be integer.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.\
<a name="isString"></a>

## isString() ⇒ <code>Validator</code>

Require value to be string.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.\
<a name="isBigint"></a>

## isBigint() ⇒ <code>Validator</code>

Require value to be bigint.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.\
<a name="isSymbol"></a>

## isSymbol() ⇒ <code>Validator</code>

Require value to be symbol.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.\
<a name="isArray"></a>

## isArray() ⇒ <code>Validator</code>

Require value to be array.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.\
<a name="isObject"></a>

## isObject() ⇒ <code>Validator</code>

Require value to be object.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.\
<a name="isAnyOf"></a>

## isAnyOf(...validators) ⇒ <code>Validator</code>

Require any of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.

| Param         | Type                            | Description |
| ------------- | ------------------------------- | ----------- |
| ...validators | <code>Array.\<Validator></code> | Validators. |

<a name="isOneOf"></a>

## isOneOf(...validators) ⇒ <code>Validator</code>

Require one of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.

| Param         | Type                            | Description |
| ------------- | ------------------------------- | ----------- |
| ...validators | <code>Array.\<Validator></code> | Validators. |

<a name="isAllOf"></a>

## isAllOf(...validators) ⇒ <code>Validator</code>

Require all of constraints to be satisfied.

**Kind**: global function\
**Returns**: <code>Validator</code> - The validator.

| Param         | Type                            | Description |
| ------------- | ------------------------------- | ----------- |
| ...validators | <code>Array.\<Validator></code> | Validators. |
