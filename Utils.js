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
 * Check whether value satisfies all conditions.
 * 
 * @param {any} input - An input.
 * @param {Validator} validator - A validator.
 * 
 * @returns {boolean} - Whether value satisfies all conditions.
 */
function checkWhether(input, validator) {
  return validator.validate(input)
}

/**
 * Check whether value satisfies all conditions and print error in case.
 * 
 * @param {any} input - An input.
 * @param {Validator} validator - A validator.
 */
function throwOnFailure(input, validator) {
  if (!validator.validate(input))
    throw new Error(`Expected object that: ${validator.description}`)
}