
<a name="ComplexValidator"></a>

## ComplexValidator
Complex validator.

**Kind**: global class  

* [ComplexValidator](#ComplexValidator)
    * [new ComplexValidator(mode)](#new_ComplexValidator_new)
    * [.description](#ComplexValidator+description) : <code>string</code>
    * [.throwWhenNotSupportedTypeError_(value)](#ComplexValidator+throwWhenNotSupportedTypeError_)
    * [.add(validator)](#ComplexValidator+add) ⇒ <code>Validator</code>
    * [.validate(input)](#ComplexValidator+validate) ⇒ <code>boolean</code>
    * [.toString()](#ComplexValidator+toString) ⇒ <code>string</code>

<a name="new_ComplexValidator_new"></a>

### new ComplexValidator(mode)

| Param | Type                | Description                   |
| ----- | ------------------- | ----------------------------- |
| mode  | <code>object</code> | A condition combination mode. |

<a name="ComplexValidator+description"></a>

### complexValidator.description : <code>string</code>
A description.

**Kind**: instance property of [<code>ComplexValidator</code>](#ComplexValidator)  
<a name="ComplexValidator+throwWhenNotSupportedTypeError_"></a>

### complexValidator.throwWhenNotSupportedTypeError\_(value)
**Kind**: instance method of [<code>ComplexValidator</code>](#ComplexValidator)  

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="ComplexValidator+add"></a>

### complexValidator.add(validator) ⇒ <code>Validator</code>
Add a validator.

**Kind**: instance method of [<code>ComplexValidator</code>](#ComplexValidator)  
**Returns**: <code>Validator</code> - - The validator.  

| Param     | Type                                                                         | Description  |
| --------- | ---------------------------------------------------------------------------- | ------------ |
| validator | <code>Validator</code> \| [<code>ComplexValidator</code>](#ComplexValidator) | A validator. |

<a name="ComplexValidator+validate"></a>

### complexValidator.validate(input) ⇒ <code>boolean</code>
Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>ComplexValidator</code>](#ComplexValidator)  

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

<a name="ComplexValidator+toString"></a>

### complexValidator.toString() ⇒ <code>string</code>
Converts object to string.

**Kind**: instance method of [<code>ComplexValidator</code>](#ComplexValidator)  
**Returns**: <code>string</code> - - A string representation.  
<a name="Mode"></a>

## Mode
Complex validator mode.

**Kind**: global variable  
## Functions

<dl>
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
<dt><a href="#isIn">isIn(fromConstraint, toConstraint)</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is a number in range.</p>
</dd>
<dt><a href="#isNotEmptyString">isNotEmptyString()</a> ⇒ <code>Validator</code></dt>
<dd><p>Check whether object is not an empty string.</p>
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

## isIn(fromConstraint, toConstraint) ⇒ <code>Validator</code>
Check whether object is a number in range.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is a number in range.  

| Param          | Type                            | Description           |
| -------------- | ------------------------------- | --------------------- |
| fromConstraint | <code>BaseComparableType</code> | A lowest constraint.  |
| toConstraint   | <code>BaseComparableType</code> | A highest constraint. |

<a name="isNotEmptyString"></a>

## isNotEmptyString() ⇒ <code>Validator</code>
Check whether object is not an empty string.

**Kind**: global function  
**Returns**: <code>Validator</code> - - Check whether object is not an empty string.  
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
<dt><a href="#isAnyOf">isAnyOf()</a> ⇒ <code>Array.&lt;(Validator|ComplexValidator)&gt;</code></dt>
<dd><p>Require value to be any of.</p>
</dd>
<dt><a href="#isOneOf">isOneOf()</a> ⇒ <code>Array.&lt;(Validator|ComplexValidator)&gt;</code></dt>
<dd><p>Require value to be one of.</p>
</dd>
<dt><a href="#isAllOf">isAllOf()</a> ⇒ <code>Array.&lt;(Validator|ComplexValidator)&gt;</code></dt>
<dd><p>Require value to be all of.</p>
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

## isAnyOf() ⇒ <code>Array.&lt;(Validator\|ComplexValidator)&gt;</code>
Require value to be any of.

**Kind**: global function  
**Returns**: <code>Array.&lt;(Validator\|ComplexValidator)&gt;</code> - - The validator.  
<a name="isOneOf"></a>

## isOneOf() ⇒ <code>Array.&lt;(Validator\|ComplexValidator)&gt;</code>
Require value to be one of.

**Kind**: global function  
**Returns**: <code>Array.&lt;(Validator\|ComplexValidator)&gt;</code> - - The validator.  
<a name="isAllOf"></a>

## isAllOf() ⇒ <code>Array.&lt;(Validator\|ComplexValidator)&gt;</code>
Require value to be all of.

**Kind**: global function  
**Returns**: <code>Array.&lt;(Validator\|ComplexValidator)&gt;</code> - - The validator.  
<a name="checkWhether"></a>

## checkWhether(input, validator) ⇒ <code>boolean</code>
Check whether value satisfies all conditions.

**Kind**: global function  
**Returns**: <code>boolean</code> - - Whether value satisfies all conditions.  

| Param     | Type                                                    | Description  |
| --------- | ------------------------------------------------------- | ------------ |
| input     | <code>any</code>                                        | An input.    |
| validator | <code>Validator</code> \| <code>ComplexValidator</code> | A validator. |

<a name="throwOnFailure"></a>

## throwOnFailure(input, validator)
Check whether value satisfies all conditions and print error in case.

**Kind**: global function  

| Param     | Type                                                    | Description  |
| --------- | ------------------------------------------------------- | ------------ |
| input     | <code>any</code>                                        | An input.    |
| validator | <code>Validator</code> \| <code>ComplexValidator</code> | A validator. |

<a name="Validator"></a>

## Validator
Basic validator.

**Kind**: global class  

- [ComplexValidator](#complexvalidator)
  - [new ComplexValidator(mode)](#new-complexvalidatormode)
  - [complexValidator.description : string](#complexvalidatordescription--string)
  - [complexValidator.throwWhenNotSupportedTypeError\_(value)](#complexvalidatorthrowwhennotsupportedtypeerror_value)
  - [complexValidator.add(validator) ⇒ Validator](#complexvalidatoraddvalidator--validator)
  - [complexValidator.validate(input) ⇒ boolean](#complexvalidatorvalidateinput--boolean)
  - [complexValidator.toString() ⇒ string](#complexvalidatortostring--string)
- [Mode](#mode)
- [Functions](#functions)
- [isTrue() ⇒ Validator](#istrue--validator)
- [isFalse() ⇒ Validator](#isfalse--validator)
- [isPositive() ⇒ Validator](#ispositive--validator)
- [isNegative() ⇒ Validator](#isnegative--validator)
- [isIn(fromConstraint, toConstraint) ⇒ Validator](#isinfromconstraint-toconstraint--validator)
- [isNotEmptyString() ⇒ Validator](#isnotemptystring--validator)
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
- [isAnyOf() ⇒ Array.\<(Validator|ComplexValidator)\>](#isanyof--arrayvalidatorcomplexvalidator)
- [isOneOf() ⇒ Array.\<(Validator|ComplexValidator)\>](#isoneof--arrayvalidatorcomplexvalidator)
- [isAllOf() ⇒ Array.\<(Validator|ComplexValidator)\>](#isallof--arrayvalidatorcomplexvalidator)
- [checkWhether(input, validator) ⇒ boolean](#checkwhetherinput-validator--boolean)
- [throwOnFailure(input, validator)](#throwonfailureinput-validator)
- [Validator](#validator)
  - [new Validator(type)](#new-validatortype)
  - [validator.expectedType : string](#validatorexpectedtype--string)
  - [validator.expectedRequiredProperties : Array.\<string\>](#validatorexpectedrequiredproperties--arraystring)
  - [validator.expectedOptionalProperties : Array.\<string\>](#validatorexpectedoptionalproperties--arraystring)
  - [validator.description : string](#validatordescription--string)
  - [validator.requireSomeTypeMessage\_(type)](#validatorrequiresometypemessage_type)
  - [validator.throwWhenInputTypeIsNotCompatible\_(input)](#validatorthrowwheninputtypeisnotcompatible_input)
  - [validator.requireCount\_(value)](#validatorrequirecount_value)
  - [validator.requirePattern\_(value)](#validatorrequirepattern_value)
  - [validator.requireTrue\_(value)](#validatorrequiretrue_value)
  - [validator.requireRange\_(from, to)](#validatorrequirerange_from-to)
  - [validator.requireValidator\_(value)](#validatorrequirevalidator_value)
  - [validator.requireProperties\_(value)](#validatorrequireproperties_value)
  - [validator.requirePredicate\_(value)](#validatorrequirepredicate_value)
  - [validator.withAdditionalProperties\_(input, propertiesConstraint) ⇒ boolean](#validatorwithadditionalproperties_input-propertiesconstraint--boolean)
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
  - [validator.withPropertyCountLessThan(constant) ⇒ Validator](#validatorwithpropertycountlessthanconstant--validator)
  - [validator.withPropertyCountGreaterThan(constant) ⇒ Validator](#validatorwithpropertycountgreaterthanconstant--validator)
  - [validator.withPropertyCountLessThanOrEqualTo(constant) ⇒ Validator](#validatorwithpropertycountlessthanorequaltoconstant--validator)
  - [validator.withPropertyCountGreaterThanOrEqualTo(constant) ⇒ Validator](#validatorwithpropertycountgreaterthanorequaltoconstant--validator)
  - [validator.withPropertyCountEqualTo(constant) ⇒ Validator](#validatorwithpropertycountequaltoconstant--validator)
  - [validator.notWithPropertyCountEqualTo(constant) ⇒ Validator](#validatornotwithpropertycountequaltoconstant--validator)
  - [validator.withPropertyCountInRange(from, to) ⇒ Validator](#validatorwithpropertycountinrangefrom-to--validator)
  - [validator.withPropertyCountNotInRange(from, to) ⇒ Validator](#validatorwithpropertycountnotinrangefrom-to--validator)
  - [validator.where(predicate) ⇒ Validator](#validatorwherepredicate--validator)
  - [validator.validate(input) ⇒ boolean](#validatorvalidateinput--boolean)
  - [validator.toString() ⇒ string](#validatortostring--string)

<a name="new_Validator_new"></a>

### new Validator(type)

| Param | Type                  | Description |
| ----- | --------------------- | ----------- |
| type  | <code>BaseType</code> | A type.     |

<a name="Validator+expectedType"></a>

### validator.expectedType : <code>string</code>
An expected type.

**Kind**: instance property of [<code>Validator</code>](#Validator)  
<a name="Validator+expectedRequiredProperties"></a>

### validator.expectedRequiredProperties : <code>Array.&lt;string&gt;</code>
Required properties.

**Kind**: instance property of [<code>Validator</code>](#Validator)  
<a name="Validator+expectedOptionalProperties"></a>

### validator.expectedOptionalProperties : <code>Array.&lt;string&gt;</code>
Optional properties.

**Kind**: instance property of [<code>Validator</code>](#Validator)  
<a name="Validator+description"></a>

### validator.description : <code>string</code>
A description.

**Kind**: instance property of [<code>Validator</code>](#Validator)  
<a name="Validator+requireSomeTypeMessage_"></a>

### validator.requireSomeTypeMessage\_(type)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                  |
| ----- | --------------------- |
| type  | <code>BaseType</code> |

<a name="Validator+throwWhenInputTypeIsNotCompatible_"></a>

### validator.throwWhenInputTypeIsNotCompatible\_(input)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                |
| ----- | ------------------- |
| input | <code>string</code> |

<a name="Validator+requireCount_"></a>

### validator.requireCount\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                |
| ----- | ------------------- |
| value | <code>string</code> |

<a name="Validator+requirePattern_"></a>

### validator.requirePattern\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="Validator+requireTrue_"></a>

### validator.requireTrue\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="Validator+requireRange_"></a>

### validator.requireRange\_(from, to)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             |
| ----- | ---------------- |
| from  | <code>any</code> |
| to    | <code>any</code> |

<a name="Validator+requireValidator_"></a>

### validator.requireValidator\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="Validator+requireProperties_"></a>

### validator.requireProperties\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="Validator+requirePredicate_"></a>

### validator.requirePredicate\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                |
| ----- | ------------------- |
| value | <code>string</code> |

<a name="Validator+withAdditionalProperties_"></a>

### validator.withAdditionalProperties\_(input, propertiesConstraint) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param                | Type                                                                  |
| -------------------- | --------------------------------------------------------------------- |
| input                | <code>object</code>                                                   |
| propertiesConstraint | [<code>Validator</code>](#Validator) \| <code>ComplexValidator</code> |

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

| Param | Type                                                                  | Description  |
| ----- | --------------------------------------------------------------------- | ------------ |
| items | [<code>Validator</code>](#Validator) \| <code>ComplexValidator</code> | Constraints. |

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

| Param      | Type                                                                  | Description   |
| ---------- | --------------------------------------------------------------------- | ------------- |
| properties | [<code>Validator</code>](#Validator) \| <code>ComplexValidator</code> | A constraint. |

<a name="Validator+withNotAdditionalProperties"></a>

### validator.withNotAdditionalProperties() ⇒ [<code>Validator</code>](#Validator)
Require no additional properties.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  
<a name="Validator+withPropertyCountLessThan"></a>

### validator.withPropertyCountLessThan(constant) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be less than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountGreaterThan"></a>

### validator.withPropertyCountGreaterThan(constant) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be greater than a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountLessThanOrEqualTo"></a>

### validator.withPropertyCountLessThanOrEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be less than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountGreaterThanOrEqualTo"></a>

### validator.withPropertyCountGreaterThanOrEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be greater than or equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+withPropertyCountEqualTo"></a>

### validator.withPropertyCountEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)
Require property amount to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

<a name="Validator+notWithPropertyCountEqualTo"></a>

### validator.notWithPropertyCountEqualTo(constant) ⇒ [<code>Validator</code>](#Validator)
Require property amount not to be equal to a constant.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param    | Type                            | Description |
| -------- | ------------------------------- | ----------- |
| constant | <code>BaseComparableType</code> | A constant. |

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

<a name="Validator+validate"></a>

### validator.validate(input) ⇒ <code>boolean</code>
Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

<a name="Validator+toString"></a>

### validator.toString() ⇒ <code>string</code>
Converts object to string.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: <code>string</code> - - A string representation.  
