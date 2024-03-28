/**
 * Check whether a value is a boolean value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is a boolean value.
 */
function isBasicBoolean(value) {
  return typeof value === "boolean"
}

/**
 * Check whether a value is a number value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is a number value.
 */
function isBasicNumber(value) {
  return typeof value === "number"
}

/**
 * Check whether a value is a string value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is a string value.
 */
function isBasicString(value) {
  return typeof value === "string"
}

/**
 * Check whether a value is a bigint value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is a bigint value.
 */
function isBasicBigint(value) {
  return typeof value === "bigint"
}

/**
 * Check whether a value is an array value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is an array value.
 */
function isBasicArray(value) {
  return Array.isArray(value)
}

/**
 * Check whether a value is an object value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is an object value.
 */
function isBasicObject(value) {
  return typeof value === "object" && !isBasicArray(value)
}

/**
 * Check whether a value is a supported validator type value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is a supported validator type value.
 */
function isBasicSupported(value) {
  return [
    isBasicBoolean(value),
    isBasicNumber(value),
    isBasicString(value),
    isBasicBigint(value),
    isBasicArray(value),
    isBasicObject(value)
  ].some(result => result === true)
}

/**
 * Check whether a value is a supported comparable validator type value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is a supported comparable validator type value.
 */
function isBasicComparableSupported(value) {
  return [
    isBasicBoolean(value),
    isBasicNumber(value),
    isBasicString(value),
    isBasicBigint(value)
  ].some(result => result === true)
}

/**
 * Check whether a value is a validator value.
 * 
 * @param {any} value - A value.
 * 
 * @returns {boolean} - Whether a value is a validator value.
 */
function isBasicValidator(value) {
  return [Validator, SimpleValidator, ComplexValidator].includes(value.constructor)
}

/**
 * Check whether a value is a boolean value and throw if not.
 * 
 * @param {any} value - A value.
 * @param {string} argumentName - An argument name.
 * @param {number} [argumentIndex] - An argument index.
 */
function requireBasicBoolean(value, argumentName, argumentIndex) {
  if (typeof argumentIndex !== "undefined")
    argumentName = `${argumentName}[${argumentIndex}]`

  if (!isBasicBoolean(value))
    throw TypeError(`Value ${argumentName} expected to be a boolean value (actual value: ${value})`)
}

/**
 * Check whether a value is a number value and throw if not.
 * 
 * @param {any} value - A value.
 * @param {string} argumentName - An argument name.
 * @param {number} [argumentIndex] - An argument index.
 */
function requireBasicNumber(value, argumentName, argumentIndex) {
  if (typeof argumentIndex !== "undefined")
    argumentName = `${argumentName}[${argumentIndex}]`

  if (!isBasicNumber(value))
    throw TypeError(`Value ${argumentName} expected to be a number value (actual value: ${value})`)
}

/**
 * Check whether a value is a string value and throw if not.
 * 
 * @param {any} value - A value.
 * @param {string} argumentName - An argument name.
 * @param {number} [argumentIndex] - An argument index.
 */
function requireBasicString(value, argumentName, argumentIndex) {
  if (typeof argumentIndex !== "undefined")
    argumentName = `${argumentName}[${argumentIndex}]`

  if (!isBasicString(value))
    throw TypeError(`Value ${argumentName} expected to be a string value (actual value: ${value})`)
}

/**
 * Check whether a value is a bigint value and throw if not.
 * 
 * @param {any} value - A value.
 * @param {string} argumentName - An argument name.
 * @param {number} [argumentIndex] - An argument index.
 */
function requireBasicBigint(value, argumentName, argumentIndex) {
  if (typeof argumentIndex !== "undefined")
    argumentName = `${argumentName}[${argumentIndex}]`

  if (!isBasicBigint(value))
    throw TypeError(`Value ${argumentName} expected to be a bigint value (actual value: ${value})`)
}

/**
 * Check whether a value is an array value and throw if not.
 * 
 * @param {any} value - A value.
 * @param {string} argumentName - An argument name.
 * @param {number} [argumentIndex] - An argument index.
 */
function requireBasicArray(value, argumentName, argumentIndex) {
  if (typeof argumentIndex !== "undefined")
    argumentName = `${argumentName}[${argumentIndex}]`

  if (!isBasicArray(value))
    throw TypeError(`Value ${argumentName} expected to be an array value (actual value: ${value})`)
}

/**
 * Check whether a value is an object value and throw if not.
 * 
 * @param {any} value - A value.
 * @param {string} argumentName - An argument name.
 * @param {number} [argumentIndex] - An argument index.
 */
function requireBasicObject(value, argumentName, argumentIndex) {
  if (typeof argumentIndex !== "undefined")
    argumentName = `${argumentName}[${argumentIndex}]`

  if (!isBasicArray(value))
    throw TypeError(`Value ${argumentName} expected to be an object value (actual value: ${value})`)
}

/**
 * Check whether a value is a validator value and throw if not.
 * 
 * @param {any} value - A value.
 * @param {string} argumentName - An argument name.
 * @param {number} [argumentIndex] - An argument index.
 */
function requireBasicValidator(value, argumentName, argumentIndex) {
  if (typeof argumentIndex !== "undefined")
    argumentName = `${argumentName}[${argumentIndex}]`

  if (!isBasicValidator(value))
    throw TypeError(`Value ${argumentName} expected to be a validator value (actual value: ${value})`)
}