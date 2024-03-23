
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
<dt><a href="#BaseType">BaseType</a> : <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;bigint&quot;</code> | <code>&quot;object&quot;</code></dt>
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

## BaseType : <code>&quot;boolean&quot;</code> \| <code>&quot;number&quot;</code> \| <code>&quot;string&quot;</code> \| <code>&quot;bigint&quot;</code> \| <code>&quot;object&quot;</code>
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
- [BaseType : "boolean" | "number" | "string" | "bigint" | "object"](#basetype--boolean--number--string--bigint--object)
- [BaseComparableType : "boolean" | "number" | "string" | "bigint"](#basecomparabletype--boolean--number--string--bigint)
- [Functions](#functions-1)
- [isBoolean() ⇒ Validator](#isboolean--validator)
- [isNumber() ⇒ Validator](#isnumber--validator)
- [isString() ⇒ Validator](#isstring--validator)
- [isBigint() ⇒ Validator](#isbigint--validator)
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
  - [validator.throwWhenNotSupportedTypeError\_(type)](#validatorthrowwhennotsupportedtypeerror_type)
  - [validator.throwWhenNotCompatibleTypes\_(type)](#validatorthrowwhennotcompatibletypes_type)
  - [validator.throwWhenNotNumber\_(type)](#validatorthrowwhennotnumber_type)
  - [validator.throwWhenNotObject\_(type)](#validatorthrowwhennotobject_type)
  - [validator.throwWhenNotRegExp\_(value)](#validatorthrowwhennotregexp_value)
  - [validator.throwWhenNotTrue\_(value)](#validatorthrowwhennottrue_value)
  - [validator.throwWhenNotValidatorTypeError\_(value)](#validatorthrowwhennotvalidatortypeerror_value)
  - [validator.throwWhenNotFunction\_(type)](#validatorthrowwhennotfunction_type)
  - [validator.withRequiredProperties\_(input, propertiesConstraint) ⇒ boolean](#validatorwithrequiredproperties_input-propertiesconstraint--boolean)
  - [validator.withOptionalProperties\_(input, propertiesConstraint) ⇒ boolean](#validatorwithoptionalproperties_input-propertiesconstraint--boolean)
  - [validator.lessThan(constraint) ⇒ Validator](#validatorlessthanconstraint--validator)
  - [validator.greaterThan(constraint) ⇒ Validator](#validatorgreaterthanconstraint--validator)
  - [validator.lessThanOrEqualTo(constraint) ⇒ Validator](#validatorlessthanorequaltoconstraint--validator)
  - [validator.greaterThanOrEqualTo(constraint) ⇒ Validator](#validatorgreaterthanorequaltoconstraint--validator)
  - [validator.equalTo(constraint) ⇒ Validator](#validatorequaltoconstraint--validator)
  - [validator.notEqualTo(constraint) ⇒ Validator](#validatornotequaltoconstraint--validator)
  - [validator.inRange(fromConstraint, toConstraint) ⇒ Validator](#validatorinrangefromconstraint-toconstraint--validator)
  - [validator.notInRange(fromConstraint, toConstraint) ⇒ Validator](#validatornotinrangefromconstraint-toconstraint--validator)
  - [validator.shorterThan(constraint) ⇒ Validator](#validatorshorterthanconstraint--validator)
  - [validator.longerThan(constraint) ⇒ Validator](#validatorlongerthanconstraint--validator)
  - [validator.shorterThanOrIs(constraint) ⇒ Validator](#validatorshorterthanorisconstraint--validator)
  - [validator.longerThanOrIs(constraint) ⇒ Validator](#validatorlongerthanorisconstraint--validator)
  - [validator.withLength(constraint) ⇒ Validator](#validatorwithlengthconstraint--validator)
  - [validator.notWithLength(constraint) ⇒ Validator](#validatornotwithlengthconstraint--validator)
  - [validator.withLengthInRange(fromConstraint, toConstraint) ⇒ Validator](#validatorwithlengthinrangefromconstraint-toconstraint--validator)
  - [validator.notWithLengthInRange(fromConstraint, toConstraint) ⇒ Validator](#validatornotwithlengthinrangefromconstraint-toconstraint--validator)
  - [validator.matching(constraint) ⇒ Validator](#validatormatchingconstraint--validator)
  - [validator.notMatching(constraint) ⇒ Validator](#validatornotmatchingconstraint--validator)
  - [validator.withRequiredProperties(propertiesConstraint) ⇒ Validator](#validatorwithrequiredpropertiespropertiesconstraint--validator)
  - [validator.withOptionalProperties(propertiesConstraint) ⇒ Validator](#validatorwithoptionalpropertiespropertiesconstraint--validator)
  - [validator.notWithAdditionalProperties() ⇒ Validator](#validatornotwithadditionalproperties--validator)
  - [validator.withPropertyCountLessThan(constraint) ⇒ Validator](#validatorwithpropertycountlessthanconstraint--validator)
  - [validator.withPropertyCountGreaterThan(constraint) ⇒ Validator](#validatorwithpropertycountgreaterthanconstraint--validator)
  - [validator.withPropertyCountLessThanOrEqualTo(constraint) ⇒ Validator](#validatorwithpropertycountlessthanorequaltoconstraint--validator)
  - [validator.withPropertyCountGreaterThanOrEqualTo(constraint) ⇒ Validator](#validatorwithpropertycountgreaterthanorequaltoconstraint--validator)
  - [validator.withPropertyCountEqualTo(constraint) ⇒ Validator](#validatorwithpropertycountequaltoconstraint--validator)
  - [validator.notWithPropertyCountEqualTo(constraint) ⇒ Validator](#validatornotwithpropertycountequaltoconstraint--validator)
  - [validator.withPropertyCountInRange(fromConstraint, toConstraint) ⇒ Validator](#validatorwithpropertycountinrangefromconstraint-toconstraint--validator)
  - [validator.notWithPropertyCountInRange(fromConstraint, toConstraint) ⇒ Validator](#validatornotwithpropertycountinrangefromconstraint-toconstraint--validator)
  - [validator.where(predicate) ⇒ Validator](#validatorwherepredicate--validator)
  - [validator.and() ⇒ Validator](#validatorand--validator)
  - [validator.with(propertiesConstraint) ⇒ Validator](#validatorwithpropertiesconstraint--validator)
  - [validator.andNothingElse() ⇒ Validator](#validatorandnothingelse--validator)
  - [validator.validate(input) ⇒ boolean](#validatorvalidateinput--boolean)

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
<a name="Validator+throwWhenNotSupportedTypeError_"></a>

### validator.throwWhenNotSupportedTypeError\_(type)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                |
| ----- | ------------------- |
| type  | <code>string</code> |

<a name="Validator+throwWhenNotCompatibleTypes_"></a>

### validator.throwWhenNotCompatibleTypes\_(type)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                |
| ----- | ------------------- |
| type  | <code>string</code> |

<a name="Validator+throwWhenNotNumber_"></a>

### validator.throwWhenNotNumber\_(type)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                |
| ----- | ------------------- |
| type  | <code>string</code> |

<a name="Validator+throwWhenNotObject_"></a>

### validator.throwWhenNotObject\_(type)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                |
| ----- | ------------------- |
| type  | <code>string</code> |

<a name="Validator+throwWhenNotRegExp_"></a>

### validator.throwWhenNotRegExp\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="Validator+throwWhenNotTrue_"></a>

### validator.throwWhenNotTrue\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="Validator+throwWhenNotValidatorTypeError_"></a>

### validator.throwWhenNotValidatorTypeError\_(value)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="Validator+throwWhenNotFunction_"></a>

### validator.throwWhenNotFunction\_(type)
**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type                |
| ----- | ------------------- |
| type  | <code>string</code> |

<a name="Validator+withRequiredProperties_"></a>

### validator.withRequiredProperties\_(input, propertiesConstraint) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: <code>boolean</code> - .  

| Param                | Type                                                              |
| -------------------- | ----------------------------------------------------------------- |
| input                | <code>object</code>                                               |
| propertiesConstraint | <code>Object.&lt;string, (Validator\|ComplexValidator)&gt;</code> |

<a name="Validator+withOptionalProperties_"></a>

### validator.withOptionalProperties\_(input, propertiesConstraint) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: <code>boolean</code> - .  

| Param                | Type                                                              |
| -------------------- | ----------------------------------------------------------------- |
| input                | <code>object</code>                                               |
| propertiesConstraint | <code>Object.&lt;string, (Validator\|ComplexValidator)&gt;</code> |

<a name="Validator+lessThan"></a>

### validator.lessThan(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to be less than a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+greaterThan"></a>

### validator.greaterThan(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to be greater than a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+lessThanOrEqualTo"></a>

### validator.lessThanOrEqualTo(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to be less than or equal to a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+greaterThanOrEqualTo"></a>

### validator.greaterThanOrEqualTo(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to be greater than or equal to a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+equalTo"></a>

### validator.equalTo(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to be equal to a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+notEqualTo"></a>

### validator.notEqualTo(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to be not equal to a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+inRange"></a>

### validator.inRange(fromConstraint, toConstraint) ⇒ [<code>Validator</code>](#Validator)
Require value to be within a constraint range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param          | Type                            | Description           |
| -------------- | ------------------------------- | --------------------- |
| fromConstraint | <code>BaseComparableType</code> | A lowest constraint.  |
| toConstraint   | <code>BaseComparableType</code> | A highest constraint. |

<a name="Validator+notInRange"></a>

### validator.notInRange(fromConstraint, toConstraint) ⇒ [<code>Validator</code>](#Validator)
Require value to be outside of a constraint range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param          | Type                            | Description           |
| -------------- | ------------------------------- | --------------------- |
| fromConstraint | <code>BaseComparableType</code> | A lowest constraint.  |
| toConstraint   | <code>BaseComparableType</code> | A highest constraint. |

<a name="Validator+shorterThan"></a>

### validator.shorterThan(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value length to be shorter than a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| constraint | <code>number</code> | A constraint. |

<a name="Validator+longerThan"></a>

### validator.longerThan(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value length to be longer than a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| constraint | <code>number</code> | A constraint. |

<a name="Validator+shorterThanOrIs"></a>

### validator.shorterThanOrIs(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value length to be shorter than or is a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| constraint | <code>number</code> | A constraint. |

<a name="Validator+longerThanOrIs"></a>

### validator.longerThanOrIs(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value length to be longer than or is a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| constraint | <code>number</code> | A constraint. |

<a name="Validator+withLength"></a>

### validator.withLength(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value length to be a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| constraint | <code>number</code> | A constraint. |

<a name="Validator+notWithLength"></a>

### validator.notWithLength(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value length to be not a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| constraint | <code>number</code> | A constraint. |

<a name="Validator+withLengthInRange"></a>

### validator.withLengthInRange(fromConstraint, toConstraint) ⇒ [<code>Validator</code>](#Validator)
Require value length to be within a constraint range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param          | Type                | Description           |
| -------------- | ------------------- | --------------------- |
| fromConstraint | <code>number</code> | A lowest constraint.  |
| toConstraint   | <code>number</code> | A highest constraint. |

<a name="Validator+notWithLengthInRange"></a>

### validator.notWithLengthInRange(fromConstraint, toConstraint) ⇒ [<code>Validator</code>](#Validator)
Require value length to be outside of a constraint range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param          | Type                | Description           |
| -------------- | ------------------- | --------------------- |
| fromConstraint | <code>number</code> | A lowest constraint.  |
| toConstraint   | <code>number</code> | A highest constraint. |

<a name="Validator+matching"></a>

### validator.matching(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to match a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| constraint | <code>RegExp</code> | A constraint. |

<a name="Validator+notMatching"></a>

### validator.notMatching(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value not to match a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                | Description   |
| ---------- | ------------------- | ------------- |
| constraint | <code>RegExp</code> | A constraint. |

<a name="Validator+withRequiredProperties"></a>

### validator.withRequiredProperties(propertiesConstraint) ⇒ [<code>Validator</code>](#Validator)
Require value to have all required properties and satisfy their constraints.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param                | Type                                          | Description   |
| -------------------- | --------------------------------------------- | ------------- |
| propertiesConstraint | <code>Object.&lt;string, Validator&gt;</code> | A constraint. |

<a name="Validator+withOptionalProperties"></a>

### validator.withOptionalProperties(propertiesConstraint) ⇒ [<code>Validator</code>](#Validator)
Require value to have all optional properties and satisfy their constraints.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param                | Type                                          | Description   |
| -------------------- | --------------------------------------------- | ------------- |
| propertiesConstraint | <code>Object.&lt;string, Validator&gt;</code> | A constraint. |

<a name="Validator+notWithAdditionalProperties"></a>

### validator.notWithAdditionalProperties() ⇒ [<code>Validator</code>](#Validator)
Require value to doesn't have additional properties except ones specified via withRequiredProperties.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  
<a name="Validator+withPropertyCountLessThan"></a>

### validator.withPropertyCountLessThan(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to contain property amount less than a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+withPropertyCountGreaterThan"></a>

### validator.withPropertyCountGreaterThan(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to contain property amount greater than a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+withPropertyCountLessThanOrEqualTo"></a>

### validator.withPropertyCountLessThanOrEqualTo(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to contain property amount less than or equal to a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+withPropertyCountGreaterThanOrEqualTo"></a>

### validator.withPropertyCountGreaterThanOrEqualTo(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to contain property amount greater than or equal to a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+withPropertyCountEqualTo"></a>

### validator.withPropertyCountEqualTo(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value to contain property amount equal to a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+notWithPropertyCountEqualTo"></a>

### validator.notWithPropertyCountEqualTo(constraint) ⇒ [<code>Validator</code>](#Validator)
Require value not to contain property amount equal to a constraint.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param      | Type                            | Description   |
| ---------- | ------------------------------- | ------------- |
| constraint | <code>BaseComparableType</code> | A constraint. |

<a name="Validator+withPropertyCountInRange"></a>

### validator.withPropertyCountInRange(fromConstraint, toConstraint) ⇒ [<code>Validator</code>](#Validator)
Require value to contain property amount within a constraint range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param          | Type                | Description           |
| -------------- | ------------------- | --------------------- |
| fromConstraint | <code>number</code> | A lowest constraint.  |
| toConstraint   | <code>number</code> | A highest constraint. |

<a name="Validator+notWithPropertyCountInRange"></a>

### validator.notWithPropertyCountInRange(fromConstraint, toConstraint) ⇒ [<code>Validator</code>](#Validator)
Require value to contain property amount outside of a constraint range.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param          | Type                | Description           |
| -------------- | ------------------- | --------------------- |
| fromConstraint | <code>number</code> | A lowest constraint.  |
| toConstraint   | <code>number</code> | A highest constraint. |

<a name="Validator+where"></a>

### validator.where(predicate) ⇒ [<code>Validator</code>](#Validator)
Require property relationships.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param     | Type                        | Description  |
| --------- | --------------------------- | ------------ |
| predicate | <code>WherePredicate</code> | A predicate. |

<a name="Validator+and"></a>

### validator.and() ⇒ [<code>Validator</code>](#Validator)
Used for readability.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  
<a name="Validator+with"></a>

### validator.with(propertiesConstraint) ⇒ [<code>Validator</code>](#Validator)
Used for readability.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  

| Param                | Type                                          | Description   |
| -------------------- | --------------------------------------------- | ------------- |
| propertiesConstraint | <code>Object.&lt;string, Validator&gt;</code> | A constraint. |

<a name="Validator+andNothingElse"></a>

### validator.andNothingElse() ⇒ [<code>Validator</code>](#Validator)
Used for readability.

**Kind**: instance method of [<code>Validator</code>](#Validator)  
**Returns**: [<code>Validator</code>](#Validator) - - The current validator.  
<a name="Validator+validate"></a>

### validator.validate(input) ⇒ <code>boolean</code>
Check whether an input value satisfies all conditions.

**Kind**: instance method of [<code>Validator</code>](#Validator)  

| Param | Type             | Description           |
| ----- | ---------------- | --------------------- |
| input | <code>any</code> | An input to validate. |

