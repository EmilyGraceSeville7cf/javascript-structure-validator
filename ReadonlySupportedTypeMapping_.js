/**
 * Mapping from a BaseType to JSON schema type.
 * Predicate is used to check whether some value is of a specified type.
 */
class ReadonlySupportedTypeMapping_ {
  /**
   * @param {string} jsonType
   * @param {Predicate} jsPredicate
   */
  constructor(jsonType, jsPredicate) {
    this.jsonType = jsonType
    this.jsPredicate = jsPredicate

    Object.freeze(this)
  }
}
