/**
 * Stringified type representations.
 */
class StringifiedTypes {
  /**
   * Base supported types.
   * 
   * @type {Array.<string>}
   */
  static get baseTypes() {
    return ["boolean", "number", "string", "bigint", "symbol", "object"]
  }

  /**
   * Base supported comparable types.
   * 
   * @type {Array.<string>}
   */
  static get baseComparableTypes() {
    return ["boolean", "number", "string", "bigint", "symbol"]
  }

  /**
   * Base supported type identifiers.
   * 
   * @type {Array.<string>}
   */
  static get baseTypeIdentifiers() {
    return ["boolean", "number", "integer", "string", "bigint", "symbol", "array", "object"]
  }

  /**
   * Base supported comparable type identifiers.
   * 
   * @type {Array.<string>}
   */
  static get baseComparableTypeIdentifiers() {
    return ["boolean", "number", "integer", "string", "bigint", "symbol"]
  }
}