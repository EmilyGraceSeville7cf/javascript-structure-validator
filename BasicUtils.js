/**
 * Basic validation tools.
 */
class BasicUtils {
  /**
   * @param {any} value
   */
  static safeToString_(value) {
    if (typeof value === "symbol")
      return value.description
    if (typeof value === "object")
      return JSON.stringify(value)
    
    return value.toString()
  }

  /**
   * Check whether a `value` is a boolean value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a boolean value.
   */
  static isBoolean(value) {
    return typeof value === "boolean"
  }

  /**
   * Check whether a `value` is a number value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a number value.
   */
  static isNumber(value) {
    return typeof value === "number"
  }

  /**
   * Check whether a `value` is an integer value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is an integer value.
   */
  static isInteger(value) {
    return Number.isInteger(value)
  }

  /**
   * Check whether a `value` is a string value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a string value.
   */
  static isString(value) {
    return typeof value === "string"
  }

  /**
   * Check whether a `value` is a bigint value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a bigint value.
   */
  static isBigint(value) {
    return typeof value === "bigint"
  }

  /**
   * Check whether a `value` is a symbol value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a symbol value.
   */
  static isSymbol(value) {
    return typeof value === "symbol"
  }

  /**
   * Check whether a `value` is an array value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is an array value.
   */
  static isArray(value) {
    return Array.isArray(value)
  }

  /**
   * Check whether a `value` is an object value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is an object value.
   */
  static isObject(value) {
    return typeof value === "object" && !Array.isArray(value)
  }

  /**
   * Check whether a `value` is a regular expression.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a regular expression.
   */
  static isRegExp(value) {
    return value?.constructor.toString() == "function RegExp() { [native code] }"
  }

  /**
   * Check whether a `value` is a function.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a function.
   */
  static isFunction(value) {
    return typeof value === "function"
  }

  /**
   * Check whether a `value` is neither undefined or null value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a not null or undefined value.
   */
  static isExisting(value) {
    return typeof value !== "undefined" && value !== null
  }

  /**
   * Check whether a `value` is a supported validator value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a supported validator type value.
   */
  static isSupported(value) {
    return [
      typeof value === "boolean",
      typeof value === "number",
      typeof value === "string",
      typeof value === "bigint",
      typeof value === "symbol",
      typeof value === "object",
    ].some(result => result === true)
  }

  /**
   * Check whether a `value` is a supported comparable validator value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a supported comparable validator type value.
   */
  static isComparableSupported(value) {
    return [
      typeof value === "boolean",
      typeof value === "number",
      typeof value === "string",
      typeof value === "bigint",
      typeof value === "symbol"
    ].some(result => result === true)
  }

  /**
   * Check whether a `identifier` is a supported validator type identifier.
   * 
   * @param {any} identifier An identifier.
   * 
   * @returns {boolean} Whether a `identifier` is a supported validator type identifier.
   */
  static isSupportedTypeIdentifier(identifier) {
    return StringifiedTypes.baseTypeIdentifiers.includes(identifier)
  }

  /**
   * Check whether a `identifier` is a supported comparable validator type identifier.
   * 
   * @param {any} identifier An identifier.
   * 
   * @returns {boolean} Whether a `identifier` is a supported comparable validator type identifier.
   */
  static isComparableSupportedTypeIdentifier(identifier) {
    return StringifiedTypes.baseComparableTypeIdentifiers.includes(identifier)
  }

  /**
   * Check whether a `value` is a validator value.
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a validator value.
   */
  static isValidator(value) {
    return value instanceof UniversalValidator
  }

  /**
   * @param {Predicate} predicate A predicate.
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireTypeByPredicate_(predicate, expectedTypeName, value, argumentName, argumentIndex) {
    if (typeof argumentName === "undefined")
      throw Error('Argument name expected to be neither undefined or null')
    
    if (typeof argumentIndex !== "undefined")
      argumentName = `${argumentName}[${argumentIndex}]`

    if (!predicate(value))
      throw TypeError(`Value ${argumentName} expected to be a ${expectedTypeName} value (actual value: ${this.safeToString_(value)})`)
  }

  /**
   * @param {Predicate} predicate A predicate.
   * @param {any} identifier An identifier.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireTypeIdentifierByPredicate_(predicate, expectedTypeName, identifier, argumentName, argumentIndex) {
    if (typeof argumentName === "undefined")
      throw Error('Argument name expected to be neither undefined or null')
    
    if (typeof argumentIndex !== "undefined")
      argumentName = `${argumentName}[${argumentIndex}]`

    if (!predicate(identifier))
      throw TypeError(`Identifier ${argumentName} expected to be a ${expectedTypeName} identifier (actual value: ${this.safeToString_(value)})`)
  }

  /**
   * Check whether a `value` is a boolean value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireBoolean(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isBoolean, "boolean", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a number value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireNumber(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isNumber, "number", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is an integer value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireInteger(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isInteger, "integer", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a string value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireString(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isString, "string", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a bigint value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireBigint(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isBigint, "bigint", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a symbol value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireSymbol(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isSymbol, "symbol", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is an array value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireArray(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isArray, "array", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is an object value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireObject(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isObject, "object", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a regular expression value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireRegExp(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isRegExp, "regular expression", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a function value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireFunction(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isFunction, "function", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is neither undefined or null value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireExisting(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isExisting, "neither undefined or null", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a supported validator value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireSupported(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isSupported, StringifiedTypes.baseTypes.join(" | "), value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a basic supported comparable validator value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireComparableSupported(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isComparableSupported, StringifiedTypes.baseComparableTypes.join(" | "), value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `identifier` is a supported validator type identifier and throw if not.
   * 
   * @param {any} identifier An identifier.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireSupportedTypeIdentifier(identifier, argumentName, argumentIndex) {
    this.requireTypeIdentifierByPredicate_(this.isSupportedTypeIdentifier, StringifiedTypes.baseTypeIdentifiers.join(" | "), identifier, argumentName, argumentIndex)
  }

  /**
   * Check whether a `identifier` is a supported comparable validator type value and throw if not.
   * 
   * @param {any} identifier An identifier.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireComparableSupportedTypeIdentifier(identifier, argumentName, argumentIndex) {
    this.requireTypeIdentifierByPredicate_(this.isComparableSupportedTypeIdentifier, StringifiedTypes.baseComparableTypeIdentifiers.join(" | "), identifier, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a validator value and throw if not.
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireValidator(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isValidator, "UniversalValidator", value, argumentName, argumentIndex)
  }
}