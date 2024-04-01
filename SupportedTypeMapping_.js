/**
 * Mapping from BaseType
 */
class SupportedTypeMapping {
  /**
   * @param {string} jsonType
   * @param {Predicate} jsPredicate
   */
  constructor(jsonType, jsPredicate) {
    this.jsonType = jsonType
    this.jsPredicate = jsPredicate
  }
}
