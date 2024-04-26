/**
 * Require value to be boolean.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isBoolean() {
  return new UniversalValidator("boolean")
}

/**
 * Require value to be number.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isNumber() {
  return new UniversalValidator("number")
}

/**
 * Require value to be integer.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isInteger() {
  return new UniversalValidator("integer")
}

/**
 * Require value to be string.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isString() {
  return new UniversalValidator("string")
}

/**
 * Require value to be bigint.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isBigint() {
  return new UniversalValidator("bigint")
}

/**
 * Require value to be symbol.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isSymbol() {
  return new UniversalValidator("symbol")
}

/**
 * Require value to be array.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isArray() {
  return new UniversalValidator("array")
}

/**
 * Require value to be object.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isObject() {
  return new UniversalValidator("object")
}

/**
 * Require any of constraints to be satisfied.
 * 
 * @param {Array.<UniversalValidator>} validators Validators.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isAnyOf(...validators) {
  return new UniversalValidator(JoinType.ANY_OF).withSubvalidators(...validators)
}

/**
 * Require one of constraints to be satisfied.
 * 
 * @param {Array.<UniversalValidator>} validators Validators.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isOneOf(...validators) {
  return new UniversalValidator(JoinType.ONE_OF).withSubvalidators(...validators)
}

/**
 * Require all of constraints to be satisfied.
 * 
 * @param {Array.<UniversalValidator>} validators Validators.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isAllOf(...validators) {
  return new UniversalValidator(JoinType.ALL_OF).withSubvalidators(...validators)
}

/**
 * Get is* functions.
 * 
 * @enum
 */
var is = Object.freeze({
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