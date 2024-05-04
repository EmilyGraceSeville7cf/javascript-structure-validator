/**
 * Stringified type representations.
 */
class StringifiedTypes_ {
  /**
   * @type {Array.<string>}
   */
  static get baseTypes_() {
    return ["boolean", "number", "string", "bigint", "symbol", "object"]
  }

  /**
   * @type {Array.<string>}
   */
  static get baseComparableTypes_() {
    return ["boolean", "number", "string", "bigint", "symbol"]
  }

  /**
   * @type {Array.<string>}
   */
  static get baseTypeIdentifiers_() {
    return ["boolean", "number", "integer", "string", "bigint", "symbol", "array", "object"]
  }

  /**
   * @type {Array.<string>}
   */
  static get baseComparableTypeIdentifiers_() {
    return ["boolean", "number", "integer", "string", "bigint", "symbol"]
  }
}