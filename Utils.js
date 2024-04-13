/**
 * Require value to be boolean.
 * 
 * @returns {Validator} - The validator.
 */
function isBoolean() {
  return new Validator("boolean")
}

/**
 * Require value to be number.
 * 
 * @returns {Validator} - The validator.
 */
function isNumber() {
  return new Validator("number")
}

/**
 * Require value to be integer.
 * 
 * @returns {Validator} - The validator.
 */
function isInteger() {
  return new Validator("integer")
}

/**
 * Require value to be string.
 * 
 * @returns {Validator} - The validator.
 */
function isString() {
  return new Validator("string")
}

/**
 * Require value to be bigint.
 * 
 * @returns {Validator} - The validator.
 */
function isBigint() {
  return new Validator("bigint")
}

/**
 * Require value to be symbol.
 * 
 * @returns {Validator} - The validator.
 */
function isSymbol() {
  return new Validator("symbol")
}

/**
 * Require value to be array.
 * 
 * @returns {Validator} - The validator.
 */
function isArray() {
  return new Validator("array")
}

/**
 * Require value to be object.
 * 
 * @returns {Validator} - The validator.
 */
function isObject() {
  return new Validator("object")
}

/**
 * Require any of constraints to be satisfied.
 * 
 * @param {Array.<Validator>} validators - Validators.
 * 
 * @returns {Validator} - The validator.
 */
function isAnyOf(...validators) {
  return new Validator().anyOf(...validators)
}

/**
 * Require one of constraints to be satisfied.
 * 
 * @param {Array.<Validator>} validators - Validators.
 * 
 * @returns {Validator} - The validator.
 */
function isOneOf(...validators) {
  return new Validator().oneOf(...validators)
}

/**
 * Require all of constraints to be satisfied.
 * 
 * @param {Array.<Validator>} validators - Validators.
 * 
 * @returns {Validator} - The validator.
 */
function isAllOf(...validators) {
  return new Validator().allOf(...validators)
}

/**
 * Require value to be boolean array.
 * 
 * @returns {Validator} - The validator.
 */
function isBooleanArray() {
  return isArray().withItems(isBoolean())
}

/**
 * Require value to be number array.
 * 
 * @returns {Validator} - The validator.
 */
function isNumberArray() {
  return isArray().withItems(isNumber())
}

/**
 * Require value to be integer array.
 * 
 * @returns {Validator} - The validator.
 */
function isIntegerArray() {
  return isArray().withItems(isInteger())
}

/**
 * Require value to be string array.
 * 
 * @returns {Validator} - The validator.
 */
function isStringArray() {
  return isArray().withItems(isString())
}

/**
 * Require value to be bigint array.
 * 
 * @returns {Validator} - The validator.
 */
function isBigintArray() {
  return isArray().withItems(isBigint())
}

/**
 * Creates object with required, optional, and additional properties.
 * 
 * @param {object} requiredProperties - Required properties.
 * @param {object} optionalProperties - Optional properties.
 * @param {object} additionalProperties - Additional properties.
 * 
 * @returns {Validator} - The validator.
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

/**
 * Check whether value satisfies all conditions.
 * 
 * @param {any} input - An input.
 * @param {Validator} validator - A validator.
 * 
 * @returns {boolean} - Whether value satisfies all conditions.
 */
function checkWhether(input, validator) {
  Basic.requireValidator(validator, "validator")

  return validator.validate(input)
}

/**
 * Check whether value satisfies all conditions and print error in case.
 * 
 * @param {any} input - An input.
 * @param {Validator} validator - A validator.
 * @param {string} [message] - A message.
 */
function throwOnFailure(input, validator, message) {
  Basic.requireValidator(validator, "validator")

  if (!validator.validate(input))
    if (typeof message === "undefined")
      throw new Error(`Expected object that: ${JSON.stringify(validator.toJSONSchema())}`)
    else
      throw new Error(`Expected ${message}`)
}