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
    
    return value?.toString()
  }

  /**
   * Check whether a `value` is a boolean value.
   * 
   * @example
   * BasicUtils.isBoolean(true)
   * 
   * @example
   * getBasicUtils().isBoolean(true)
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
   * @example
   * BasicUtils.isNumber(1)
   * 
   * @example
   * getBasicUtils().isNumber(1)
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
   * @example
   * BasicUtils.isInteger(1)
   * 
   * @example
   * getBasicUtils().isInteger(1)
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
   * @example
   * BasicUtils.isString("Emily")
   * 
   * @example
   * getBasicUtils().isString("Emily")
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
   * @example
   * BasicUtils.isBigint(9007199254740991n)
   * 
   * @example
   * getBasicUtils().isBigint(9007199254740991n)
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
   * @example
   * BasicUtils.isSymbol(Symbol())
   * 
   * @example
   * getBasicUtils().isSymbol(Symbol())
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
   * @example
   * BasicUtils.isArray([1])
   * 
   * @example
   * getBasicUtils().isArray([1])
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
   * @example
   * BasicUtils.isObject({ name: "Emily" })
   * 
   * @example
   * getBasicUtils().isObject({ name: "Emily" })
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
   * @example
   * BasicUtils.isRegExp(/name/)
   * 
   * @example
   * getBasicUtils().isRegExp(/name/)
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a regular expression.
   */
  static isRegExp(value) {
    return value?.constructor.name === RegExp.name
  }

  /**
   * Check whether a `value` is a function.
   * 
   * @example
   * BasicUtils.isFunction(() => console.log("Emily"))
   * 
   * @example
   * getBasicUtils().isFunction(() => console.log("Emily"))
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
   * @example
   * BasicUtils.isExisting(true)
   * 
   * @example
   * getBasicUtils().isExisting(true)
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
   * @example
   * BasicUtils.isSupported(true)
   * 
   * @example
   * getBasicUtils().isSupported(true)
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
   * @example
   * BasicUtils.isComparableSupported(true)
   * 
   * @example
   * getBasicUtils().isComparableSupported(true)
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
   * @example
   * BasicUtils.isSupportedTypeIdentifier("boolean")
   * 
   * @example
   * getBasicUtils().isSupportedTypeIdentifier("boolean")
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
   * @example
   * BasicUtils.isComparableSupportedTypeIdentifier("boolean")
   * 
   * @example
   * getBasicUtils().isComparableSupportedTypeIdentifier("boolean")
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
   * @example
   * BasicUtils.isValidator(isBoolean())
   * 
   * @example
   * getBasicUtils().isValidator(isBoolean())
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a validator value.
   */
  static isValidator(value) {
    return value?.constructor.name === UniversalValidator.name
  }

  /**
   * Check whether a `value` is a boolean value or undefined.
   * 
   * @example
   * BasicUtils.isBooleanOrUndefined(true)
   * 
   * @example
   * getBasicUtils().isBooleanOrUndefined(true)
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a boolean value or undefined.
   */
  static isBooleanOrUndefined(value) {
    return typeof value === "boolean" || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is a number value or undefined.
   * 
   * @example
   * BasicUtils.isNumberOrUndefined(1)
   * 
   * @example
   * getBasicUtils().isNumberOrUndefined(1)
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a number value or undefined.
   */
  static isNumberOrUndefined(value) {
    return typeof value === "number" || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is an integer value or undefined.
   * 
   * @example
   * BasicUtils.isIntegerOrUndefined(1)
   * 
   * @example
   * getBasicUtils().isIntegerOrUndefined(1)
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is an integer value or undefined.
   */
  static isIntegerOrUndefined(value) {
    return Number.isInteger(value) || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is a string value or undefined.
   * 
   * @example
   * BasicUtils.isStringOrUndefined("Emily")
   * 
   * @example
   * getBasicUtils().isStringOrUndefined("Emily")
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a string value or undefined.
   */
  static isStringOrUndefined(value) {
    return typeof value === "string" || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is a bigint value or undefined.
   * 
   * @example
   * BasicUtils.isBigintOrUndefined(9007199254740991n)
   * 
   * @example
   * getBasicUtils().isBigintOrUndefined(9007199254740991n)
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a bigint value or undefined.
   */
  static isBigintOrUndefined(value) {
    return typeof value === "bigint" || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is a symbol value or undefined.
   * 
   * @example
   * BasicUtils.isSymbolOrUndefined(Symbol())
   * 
   * @example
   * getBasicUtils().isSymbolOrUndefined(Symbol())
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a symbol value or undefined.
   */
  static isSymbolOrUndefined(value) {
    return typeof value === "symbol" || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is an array value or undefined.
   * 
   * @example
   * BasicUtils.isArrayOrUndefined([1])
   * 
   * @example
   * getBasicUtils().isArrayOrUndefined([1])
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is an array value or undefined.
   */
  static isArrayOrUndefined(value) {
    return Array.isArray(value) || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is an object value or undefined.
   * 
   * @example
   * BasicUtils.isObjectOrUndefined({ name: "Emily" })
   * 
   * @example
   * getBasicUtils().isObjectOrUndefined({ name: "Emily" })
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is an object value or undefined.
   */
  static isObjectOrUndefined(value) {
    return (typeof value === "object" && !Array.isArray(value)) || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is a regular expression or undefined.
   * 
   * @example
   * BasicUtils.isRegExpOrUndefined(/name/)
   * 
   * @example
   * getBasicUtils().isRegExpOrUndefined(/name/)
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a regular expression or undefined.
   */
  static isRegExpOrUndefined(value) {
    return value?.constructor.name === RegExp.name || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is a function or undefined.
   * 
   * @example
   * BasicUtils.isFunctionOrUndefined(() => console.log("Emily"))
   * 
   * @example
   * getBasicUtils().isFunctionOrUndefined(() => console.log("Emily"))
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a function or undefined.
   */
  static isFunctionOrUndefined(value) {
    return typeof value === "function" || typeof value === "undefined"
  }

  /**
   * Check whether a `value` is a validator value or undefined.
   * 
   * @example
   * BasicUtils.isValidatorOrUndefined(isBoolean())
   * 
   * @example
   * getBasicUtils().isValidatorOrUndefined(isBoolean())
   * 
   * @param {any} value A value.
   * 
   * @returns {boolean} Whether a `value` is a validator value or undefined.
   */
  static isValidatorOrUndefined(value) {
    return value?.constructor.name === UniversalValidator.name || typeof value === "undefined"
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
   * @example
   * BasicUtils.requireBoolean(true, "parameter")
   * 
   * @example
   * getBasicUtils().requireBoolean(true, "parameter")
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
   * @example
   * BasicUtils.requireNumber(1, "parameter")
   * 
   * @example
   * getBasicUtils().requireNumber(1, "parameter")
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
   * @example
   * BasicUtils.requireInteger(1, "parameter")
   * 
   * @example
   * getBasicUtils().requireInteger(1, "parameter")
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
   * @example
   * BasicUtils.requireString("Emily", "parameter")
   * 
   * @example
   * getBasicUtils().requireString("Emily", "parameter")
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
   * @example
   * BasicUtils.requireBigint(9007199254740991n, "parameter")
   * 
   * @example
   * getBasicUtils().requireBigint(9007199254740991n, "parameter")
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
   * @example
   * BasicUtils.requireSymbol(Symbol(), "parameter")
   * 
   * @example
   * getBasicUtils().requireSymbol(Symbol(), "parameter")
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
   * @example
   * BasicUtils.requireArray([1], "parameter")
   * 
   * @example
   * getBasicUtils().requireArray([1], "parameter")
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
   * @example
   * BasicUtils.requireObject({ name: "Emily" }, "parameter")
   * 
   * @example
   * getBasicUtils().requireObject({ name: "Emily" }, "parameter")
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
   * @example
   * BasicUtils.requireRegExp(/name/, "parameter")
   * 
   * @example
   * getBasicUtils().requireRegExp(/name/, "parameter")
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
   * @example
   * BasicUtils.requireFunction(() => console.log("Emily"), "parameter")
   * 
   * @example
   * getBasicUtils().requireFunction(() => console.log("Emily"), "parameter")
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
   * @example
   * BasicUtils.requireExisting(true, "parameter")
   * 
   * @example
   * getBasicUtils().requireExisting(true, "parameter")
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
   * @example
   * BasicUtils.requireSupported(true, "parameter")
   * 
   * @example
   * getBasicUtils().requireSupported(true, "parameter")
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
   * @example
   * BasicUtils.requireComparableSupported(true, "parameter")
   * 
   * @example
   * getBasicUtils().requireComparableSupported(true, "parameter")
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
   * @example
   * BasicUtils.requireSupportedTypeIdentifier("boolean", "parameter")
   * 
   * @example
   * getBasicUtils().requireSupportedTypeIdentifier("boolean", "parameter")
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
   * @example
   * BasicUtils.requireComparableSupportedTypeIdentifier("boolean", "parameter")
   * 
   * @example
   * getBasicUtils().requireComparableSupportedTypeIdentifier("boolean", "parameter")
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
   * @example
   * BasicUtils.requireValidator(isBoolean(), "parameter")
   * 
   * @example
   * getBasicUtils().requireValidator(isBoolean(), "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireValidator(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isValidator, "UniversalValidator", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a boolean value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireBooleanOrUndefined(true, "parameter")
   * 
   * @example
   * getBasicUtils().requireBooleanOrUndefined(true, "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireBooleanOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isBooleanOrUndefined, "boolean | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a number value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireNumberOrUndefined(1, "parameter")
   * 
   * @example
   * getBasicUtils().requireNumberOrUndefined(1, "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireNumberOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isNumberOrUndefined, "number | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is an integer value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireIntegerOrUndefined(1, "parameter")
   * 
   * @example
   * getBasicUtils().requireIntegerOrUndefined(1, "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireIntegerOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isIntegerOrUndefined, "integer | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a string value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireStringOrUndefined("Emily", "parameter")
   * 
   * @example
   * getBasicUtils().requireStringOrUndefined("Emily", "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireStringOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isStringOrUndefined, "string | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a bigint value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireBigintOrUndefined(9007199254740991n, "parameter")
   * 
   * @example
   * getBasicUtils().requireBigintOrUndefined(9007199254740991n, "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireBigintOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isBigintOrUndefined, "bigint | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a symbol value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireSymbolOrUndefined(Symbol(), "parameter")
   * 
   * @example
   * getBasicUtils().requireSymbolOrUndefined(Symbol(), "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireSymbolOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isSymbolOrUndefined, "symbol | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is an array value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireArrayOrUndefined([1], "parameter")
   * 
   * @example
   * getBasicUtils().requireArrayOrUndefined([1], "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireArrayOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isArrayOrUndefined, "array | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is an object value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireObjectOrUndefined({ name: "Emily" }, "parameter")
   * 
   * @example
   * getBasicUtils().requireObjectOrUndefined({ name: "Emily" }, "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireObjectOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isObjectOrUndefined, "object | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a regular expression value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireRegExpOrUndefined(/name/, "parameter")
   * 
   * @example
   * getBasicUtils().requireRegExpOrUndefined(/name/, "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireRegExpOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isRegExpOrUndefined, "regular expression | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a function value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireFunctionOrUndefined(() => console.log("Emily"), "parameter")
   * 
   * @example
   * getBasicUtils().requireFunctionOrUndefined(() => console.log("Emily"), "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireFunctionOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isFunctionOrUndefined, "function | undefined", value, argumentName, argumentIndex)
  }

  /**
   * Check whether a `value` is a validator value or undefined and throw if not.
   * 
   * @example
   * BasicUtils.requireValidatorOrUndefined(isBoolean(), "parameter")
   * 
   * @example
   * getBasicUtils().requireValidatorOrUndefined(isBoolean(), "parameter")
   * 
   * @param {any} value A value.
   * @param {string} argumentName An argument name.
   * @param {number} argumentIndex An argument index.
   */
  static requireValidatorOrUndefined(value, argumentName, argumentIndex) {
    this.requireTypeByPredicate_(this.isValidatorOrUndefined, "UniversalValidator | undefined", value, argumentName, argumentIndex)
  }
}