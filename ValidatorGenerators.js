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
 * Get is* functions.
 * 
 * @enum
 */
let is = Object.freeze({
  get boolean() {
    return isBoolean()
  },
  get number() {
    return isNumber()
  },
  get integer() {
    return isInteger()
  },
  get string() {
    return isString()
  },
  get bigint() {
    return isBigint()
  },
  get symbol() {
    return isSymbol()
  },
  get array() {
    return isArray()
  },
  get object() {
    return isObject()
  }
})