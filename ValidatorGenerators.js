/**
 * Require value to be boolean.
 * 
 * @returns {Validator} The validator.
 */
function isBoolean() {
  return new Validator("boolean")
}

/**
 * Require value to be number.
 * 
 * @returns {Validator} The validator.
 */
function isNumber() {
  return new Validator("number")
}

/**
 * Require value to be integer.
 * 
 * @returns {Validator} The validator.
 */
function isInteger() {
  return new Validator("integer")
}

/**
 * Require value to be string.
 * 
 * @returns {Validator} The validator.
 */
function isString() {
  return new Validator("string")
}

/**
 * Require value to be bigint.
 * 
 * @returns {Validator} The validator.
 */
function isBigint() {
  return new Validator("bigint")
}

/**
 * Require value to be symbol.
 * 
 * @returns {Validator} The validator.
 */
function isSymbol() {
  return new Validator("symbol")
}

/**
 * Require value to be array.
 * 
 * @returns {Validator} The validator.
 */
function isArray() {
  return new Validator("array")
}

/**
 * Require value to be object.
 * 
 * @returns {Validator} The validator.
 */
function isObject() {
  return new Validator("object")
}

/**
 * Require any of constraints to be satisfied.
 * 
 * @param {Array.<Validator>} validators Validators.
 * 
 * @returns {Validator} The validator.
 */
function isAnyOf(...validators) {
  return new Validator().anyOf(...validators)
}

/**
 * Require one of constraints to be satisfied.
 * 
 * @param {Array.<Validator>} validators Validators.
 * 
 * @returns {Validator} The validator.
 */
function isOneOf(...validators) {
  return new Validator().oneOf(...validators)
}

/**
 * Require all of constraints to be satisfied.
 * 
 * @param {Array.<Validator>} validators Validators.
 * 
 * @returns {Validator} The validator.
 */
function isAllOf(...validators) {
  return new Validator().allOf(...validators)
}

/**
 * Require value to be boolean array.
 * 
 * @returns {Validator} The validator.
 */
function isBooleanArray() {
  return isArray().withItems(isBoolean())
}

/**
 * Require value to be number array.
 * 
 * @returns {Validator} The validator.
 */
function isNumberArray() {
  return isArray().withItems(isNumber())
}

/**
 * Require value to be integer array.
 * 
 * @returns {Validator} The validator.
 */
function isIntegerArray() {
  return isArray().withItems(isInteger())
}

/**
 * Require value to be string array.
 * 
 * @returns {Validator} The validator.
 */
function isStringArray() {
  return isArray().withItems(isString())
}

/**
 * Require value to be bigint array.
 * 
 * @returns {Validator} The validator.
 */
function isBigintArray() {
  return isArray().withItems(isBigint())
}

/**
 * Creates object with required, optional, and additional properties.
 * 
 * @param {object} requiredProperties Required properties.
 * @param {object} optionalProperties Optional properties.
 * @param {object} additionalProperties Additional properties.
 * 
 * @returns {Validator} The validator.
 */
function isObjectWith(requiredProperties, optionalProperties, additionalProperties) {
  const validator = isObject()

  if (typeof requiredProperties !== "undefined")
    validator.withRequiredProperties(requiredProperties)
  if (typeof optionalProperties !== "undefined")
    validator.withOptionalProperties(optionalProperties)
  if (additionalProperties === false)
    validator.withNotAdditionalProperties()
  else if (typeof additionalProperties !== "undefined")
    validator.withAdditionalProperties(additionalProperties)

  return validator
}

const urlRegex_ = new RegExp("^https?://")

/**
 * @param {any} value
 */
function toBaseType_(value) {
  let type = typeof value
  if (Array.isArray(value))
    type = "array"
  else if (Number.isInteger(value))
    type = "integer"

  return type
}

/**
 * @param {string} url
 * 
 * @returns {boolean}
 */
function isExistingUrl_(url) {
  try {
    return UrlFetchApp.fetch(url, {
      muteHttpExceptions: true
    }).getResponseCode() === 200
  } catch {
    return false
  }
}

/**
 * Check whether object is true.
 *  
 * @returns {Validator} Check whether object is true.
 */
function isTrue() {
  return isBoolean().equalTo(true)
}

/**
 * Check whether object is false.
 *  
 * @returns {Validator} Check whether object is false.
 */
function isFalse() {
  return isBoolean().equalTo(false)
}

/**
 * Check whether object is a positive number.
 *  
 * @returns {Validator} Check whether object is a positive number.
 */
function isPositive() {
  return isNumber().greaterThan(0)
}

/**
 * Check whether object is a negative number.
 *  
 * @returns {Validator} Check whether object is a negative number.
 */
function isNegative() {
  return isNumber().lessThan(0)
}

/**
 * Check whether object is a number in range.
 * 
 * @param {BaseComparableType} from A lowest constraint.
 * @param {BaseComparableType} to A highest constraint.
 * 
 * @returns {Validator} Check whether object is a number in range.
 */
function isIn(from, to) {
  return isNumber().inRange(from, to)
}

/**
 * Check whether object is an empty string.
 *  
 * @returns {Validator} Check whether object is an empty string.
 */
function isEmptyString() {
  return isString().withLengthEqualTo(0)
}

/**
 * Check whether object is not an empty string.
 *  
 * @returns {Validator} Check whether object is not an empty string.
 */
function isNotEmptyString() {
  return isString().withLengthGreaterThan(0)
}

/**
 * Check whether object is a string matching regular expression.
 * 
 * @param {RegExp} regex A regular expression.
 *  
 * @returns {Validator} Check whether object is a string matching regular expression.
 */
function isMatching(regex) {
  return isString().matching(regex)
}

/**
 * Check whether object is a string not matching regular expression.
 * 
 * @param {RegExp} regex A regular expression.
 *  
 * @returns {Validator} Check whether object is a string not matching regular expression.
 */
function isNotMatching(regex) {
  return isString().notMatching(regex)
}

/**
 * Require value to be equal to one of constants.
 * 
 * @param {Array} values Constants.
 * 
 * @returns {Validator} The current validator.
 */
function isValueOneOf(...values) {
  Basic.requireArray(values)

  return new Validator(toBaseType_(values[0])).withValueOneOf(...values)
}

/**
 * Require value to be not equal to one of constants.
 * 
 * @param {Array} values Constants.
 * 
 * @returns {Validator} The current validator.
 */
function isValueNotOneOf(...values) {
  Basic.requireArray(values)

  return new Validator(toBaseType_(values[0])).withValueNotOneOf(...values)
}

/**
 * Check whether object is a URL string.
 * 
 * @returns {Validator} Check whether object is a URL string.
 */
function isUrl() {
  return isMatching(urlRegex_).whereValue(isExistingUrl_)
}

/**
 * Check whether object is not a URL string.
 * 
 * @returns {Validator} Check whether object is not a URL string.
 */
function isNotUrl() {
  return isNotMatching(urlRegex_)
}

/**
 * Check whether object is a 2D vector.
 * 
 * @returns {Validator} Check whether object is a 2D vector.
 */
function isVector2D() {
  return isObject().with({
    x: isNumber(),
    y: isNumber(),
  }).andNothingElse()
}

/**
 * Check whether object is a 3D vector.
 * 
 * @returns {Validator} Check whether object is a 3D vector.
 */
function isVector3D() {
  return isObject().withRequiredProperties({
    x: isNumber(),
    y: isNumber(),
    z: isNumber()
  }).withNotAdditionalProperties()
}

/**
 * Check whether object is a range.
 * 
 * @returns {Validator} Check whether object is a range.
 */
function isRange() {
  return isObject().withRequiredProperties({
    from: isNumber(),
    to: isNumber(),
  }).where(range => [range.from <= range.to])
    .withNotAdditionalProperties()
}

/**
 * Check whether object is a stepped range.
 * 
 * @returns {Validator} Check whether object is a stepped range.
 */
function isSteppedRange() {
  return isObject().withRequiredProperties({
    from: isNumber(),
    to: isNumber(),
    step: isNumber().greaterThan(0)
  }).where(range => [range.from <= range.to])
    .withNotAdditionalProperties()
}

/**
 * Check whether object is a 2D size.
 * 
 * @returns {Validator} Check whether object is a 2D size.
 */
function isSize2D() {
  return isObject().withRequiredProperties({
    width: isNumber().greaterThan(0),
    height: isNumber().greaterThan(0)
  }).withNotAdditionalProperties()
}

/**
 * Check whether object is a 3D size.
 * 
 * @returns {Validator} Check whether object is a 3D size.
 */
function isSize3D() {
  return isObject().withRequiredProperties({
    width: isNumber().greaterThan(0),
    height: isNumber().greaterThan(0),
    depth: isNumber().greaterThan(0)
  }).withNotAdditionalProperties()
}

/**
 * Check whether object is a color.
 * 
 * @returns {Validator} Check whether object is a color.
 */
function isColor() {
  return isObject().withRequiredProperties({
    red: isNumber().inRange(0, 255),
    green: isNumber().inRange(0, 255),
    blue: isNumber().inRange(0, 255)
  }).withNotAdditionalProperties()
}

/**
 * Check whether object is a Symbol-based enumeration.
 * 
 * @returns {Validator} Check whether object is a Symbol-based enumeration.
 */
function isEnum() {
  return isObject().withPropertyCountGreaterThan(0)
    .withAdditionalProperties(isSymbol())
}
