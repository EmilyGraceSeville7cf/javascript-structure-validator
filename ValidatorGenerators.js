const BOTH_OR_NONE_BOUNDS_ERROR_MESSAGE_ = "Either both range bounds are undefined, or none of them; if an object is passed instead of the first parameter it should contain either 'from' or 'to' property"

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
 * @param {number} from A lowest boundary.
 * @param {number} to A highest boundary.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isNumber(from, to) {
  if (typeof from !== "undefined" && typeof to !== "undefined") {
    BasicUtils.requireNumber(from, "from")
    BasicUtils.requireNumber(to, "to")

    return new UniversalValidator("number").inRange(from, to)
  }
  if (typeof from !== "undefined" && typeof to === "undefined") {
    if (BasicUtils.isNumber(from))
      return new UniversalValidator("number").equalTo(from)

    const options = from
    if (isObject().withRequiredProperties({
      from: isNumber()
    }).validate(options))
      return new UniversalValidator("number").greaterThanOrEqualTo(options.from)
    if (isObject().withRequiredProperties({
      to: isNumber()
    }).validate(options))
      return new UniversalValidator("number").lessThanOrEqualTo(options.to)
  }
  if (typeof from === "undefined" && typeof to === "undefined")
    return new UniversalValidator("number")

  throw new Error(BOTH_OR_NONE_BOUNDS_ERROR_MESSAGE_)
}

/**
 * Require value to be integer.
 * 
 * @param {number} from A lowest boundary.
 * @param {number} to A highest boundary.
 *
 * @returns {UniversalValidator} The validator.
 */
function isInteger(from, to) {
  if (typeof from !== "undefined" && typeof to !== "undefined") {
    BasicUtils.requireInteger(from, "from")
    BasicUtils.requireInteger(to, "to")

    return new UniversalValidator("integer").inRange(from, to)
  }
  if (typeof from !== "undefined" && typeof to === "undefined") {
    if (BasicUtils.isInteger(from))
      return new UniversalValidator("integer").equalTo(from)

    const options = from
    if (isObject().withRequiredProperties({
      from: isInteger()
    }).validate(options))
      return new UniversalValidator("integer").greaterThanOrEqualTo(options.from)
    if (isObject().withRequiredProperties({
      to: isInteger()
    }).validate(options))
      return new UniversalValidator("integer").lessThanOrEqualTo(options.to)
  }
  if (typeof from === "undefined" && typeof to === "undefined")
    return new UniversalValidator("integer")

  throw new Error(BOTH_OR_NONE_BOUNDS_ERROR_MESSAGE_)
}

/**
 * Require value to be string.
 * 
 * @param {number} from A lowest boundary.
 * @param {number} to A highest boundary. 
 *
 * @returns {UniversalValidator} The validator.
 */
function isString(from, to) {
  if (typeof from !== "undefined" && typeof to !== "undefined") {
    BasicUtils.requireInteger(from, "from")
    BasicUtils.requireInteger(to, "to")

    return new UniversalValidator("string").withLengthInRange(from, to)
  }
  if (typeof from !== "undefined" && typeof to === "undefined") {
    if (BasicUtils.isInteger(from))
      return new UniversalValidator("string").withLengthEqualTo(from)

    const options = from
    if (isObject().withRequiredProperties({
      from: isInteger()
    }).validate(options))
      return new UniversalValidator("string").withLengthGreaterThanOrEqualTo(options.from)
    if (isObject().withRequiredProperties({
      to: isInteger()
    }).validate(options))
      return new UniversalValidator("string").withLengthLessThanOrEqualTo(options.to)
  }
  if (typeof from === "undefined" && typeof to === "undefined")
    return new UniversalValidator("string")

  throw new Error(BOTH_OR_NONE_BOUNDS_ERROR_MESSAGE_)
}

/**
 * Require value to be bigint.
 * 
 * @param {number} from A lowest boundary.
 * @param {number} to A highest boundary. 
 * 
 * @returns {UniversalValidator} The validator.
 */
function isBigint(from, to) {
  if (typeof from !== "undefined" && typeof to !== "undefined") {
    BasicUtils.requireBigint(from, "from")
    BasicUtils.requireBigint(to, "to")

    return new UniversalValidator("bigint").inRange(from, to)
  }
  if (typeof from !== "undefined" && typeof to === "undefined") {
    if (BasicUtils.isBigint(from))
      return new UniversalValidator("bigint").equalTo(from)

    const options = from
    if (isObject().withRequiredProperties({
      from: isBigint()
    }).validate(options))
      return new UniversalValidator("bigint").greaterThanOrEqualTo(options.from)
    if (isObject().withRequiredProperties({
      to: isBigint()
    }).validate(options))
      return new UniversalValidator("bigint").lessThanOrEqualTo(options.to)
  }
  if (typeof from === "undefined" && typeof to === "undefined")
    return new UniversalValidator("bigint")

  throw new Error(BOTH_OR_NONE_BOUNDS_ERROR_MESSAGE_)
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
 * @param {number} from A lowest boundary.
 * @param {number} to A highest boundary.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isArray(from, to) {
  if (typeof from !== "undefined" && typeof to !== "undefined") {
    BasicUtils.requireInteger(from, "from")
    BasicUtils.requireInteger(to, "to")

    return new UniversalValidator("array").withItemCountInRange(from, to)
  }
  if (typeof from !== "undefined" && typeof to === "undefined") {
    if (BasicUtils.isInteger(from))
      return new UniversalValidator("array").withItemCountEqualTo(from)

    const options = from
    if (isObject().withRequiredProperties({
      from: isInteger()
    }).validate(options))
      return new UniversalValidator("array").withItemCountGreaterThanOrEqualTo(options.from)
    if (isObject().withRequiredProperties({
      to: isInteger()
    }).validate(options))
      return new UniversalValidator("array").withItemCountLessThanOrEqualTo(options.to)
  }
  if (typeof from === "undefined" && typeof to === "undefined")
    return new UniversalValidator("array")

  throw new Error(BOTH_OR_NONE_BOUNDS_ERROR_MESSAGE_)
}

/**
 * Require value to be object.
 * 
 * @param {number} from A lowest boundary.
 * @param {number} to A highest boundary.
 * 
 * @returns {UniversalValidator} The validator.
 */
function isObject(from, to) {
  if (typeof from !== "undefined" && typeof to !== "undefined") {
    BasicUtils.requireInteger(from, "from")
    BasicUtils.requireInteger(to, "to")

    return new UniversalValidator("object").withPropertyCountInRange(from, to)
  }
  if (typeof from !== "undefined" && typeof to === "undefined") {
    if (BasicUtils.isInteger(from))
      return new UniversalValidator("object").withPropertyCountEqualTo(from)

    const options = from
    if (isObject().withRequiredProperties({
      from: isInteger()
    }).validate(options))
      return new UniversalValidator("object").withPropertyCountGreaterThanOrEqualTo(options.from)
    if (isObject().withRequiredProperties({
      to: isInteger()
    }).validate(options))
      return new UniversalValidator("object").withPropertyCountLessThanOrEqualTo(options.to)
  }
  if (typeof from === "undefined" && typeof to === "undefined")
    return new UniversalValidator("object")

  throw new Error(BOTH_OR_NONE_BOUNDS_ERROR_MESSAGE_)
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
 * 
 * @deprecated Use is* functions instead as they provide more flexibility. This object will remain for the backward compatibility purposes.
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
  },
  get anyOf() {
    return isAnyOf
  },
  get oneOf() {
    return isOneOf
  },
  get allOf() {
    return isAllOf
  }
})