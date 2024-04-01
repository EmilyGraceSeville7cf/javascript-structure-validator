/**
 * Basic validation tools.
 */
class Basic {
  /**
   * Check whether a value is a boolean value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a boolean value.
   */
  static isBoolean(value) {
    return typeof value === "boolean"
  }

  /**
   * Check whether a value is a number value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a number value.
   */
  static isNumber(value) {
    return typeof value === "number"
  }

  /**
   * Check whether a value is an integer value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is an integer value.
   */
  static isInteger(value) {
    return Number.isInteger(value)
  }

  /**
   * Check whether a value is a string value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a string value.
   */
  static isString(value) {
    return typeof value === "string"
  }

  /**
   * Check whether a value is a bigint value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a bigint value.
   */
  static isBigint(value) {
    return typeof value === "bigint"
  }

  /**
   * Check whether a value is an array value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is an array value.
   */
  static isArray(value) {
    return Array.isArray(value)
  }

  /**
   * Check whether a value is an object value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is an object value.
   */
  static isObject(value) {
    return typeof value === "object" && !Array.isArray(value)
  }

  /**
   * Check whether a value is a regular expression.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a regular expression.
   */
  static isRegExp(value) {
    return value?.constructor === RegExp
  }

  /**
   * Check whether a value is a function.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a function.
   */
  static isFunction(value) {
    return typeof value === "function"
  }

  /**
   * Check whether a value is a supported validator type value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a supported validator type value.
   */
  static isSupported(value) {
    return [
      typeof value === "boolean",
      typeof value === "number",
      typeof value === "string",
      typeof value === "bigint",
      typeof value === "object",
    ].some(result => result === true)
  }

  /**
   * Check whether a value is a supported comparable validator type value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a supported comparable validator type value.
   */
  static isComparableSupported(value) {
    return [
      typeof value === "boolean",
      typeof value === "number",
      typeof value === "string",
      typeof value === "bigint",
    ].some(result => result === true)
  }

  /**
   * Check whether a value is a validator value.
   * 
   * @param {any} value - A value.
   * 
   * @returns {boolean} - Whether a value is a validator value.
   */
  static isValidator(value) {
    return [Validator, SimpleValidator, ComplexValidator].includes(value?.constructor)
  }

  /**
   * @param {Predicate} predicate - A predicate.
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireTypeByPredicate_(predicate, expectedTypeName, value, argumentName, argumentIndex) {
    if (typeof argumentIndex !== "undefined")
      argumentName = `${argumentName}[${argumentIndex}]`

    if (!predicate(value))
      throw TypeError(`Value ${argumentName} expected to be a ${expectedTypeName} value (actual value: ${value?.toString()})`)
  }

  /**
   * Check whether a value is a boolean value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireBoolean(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isBoolean, "boolean", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is a number value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireNumber(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isNumber, "number", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is an integer value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireInteger(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isInteger, "integer", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is a string value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireString(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isString, "string", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is a bigint value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireBigint(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.Bigint, "bigint", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is an array value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireArray(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isArray, "array", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is an object value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireObject(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isObject, "object", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is a regular expression value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireRegExp(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isRegExp, "regular expression", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is a function value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireFunction(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isFunction, "function", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is a basic supported validator type value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireSupported(value, argumentName, argumentIndex) {
    /**
     * @type {Array.<BaseType>}
     */
    const types = ["boolean", "number", "string", "bigint", "array", "object"]
    this.requireTypeByPredicate_(this.isSupported, types.join(" | "), value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is a basic supported comparable validator type value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireComparableSupported(value, argumentName, argumentIndex) {
    /**
     * @type {Array.<BaseComparableType>}
     */
    const types = ["boolean", "number", "string", "bigint"]
    this.requireTypeByPredicate_(this.isComparableSupported, types.join(" | "), value, argumentName, argumentIndex)
  }

  /**
   * Check whether a value is a validator value and throw if not.
   * 
   * @param {any} value - A value.
   * @param {string} argumentName - An argument name.
   * @param {number} [argumentIndex] - An argument index.
   */
  static requireValidator(value, argumentName, argumentIndex) {
    const types = [Validator, SimpleValidator, ComplexValidator].map(constructor => constructor?.name)
    this.requireTypeByPredicate_(this.isValidator, types.join(" | "), value, argumentName, argumentIndex)
  }
}