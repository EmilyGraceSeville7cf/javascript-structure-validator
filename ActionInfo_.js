/**
 * A validation action.
 */
class ActionInfo_ {
  /**
   * @param {object} kind An action kind.
   * @param {object} target An action target.
   * @param {any} value An action constant or list of properties.
   * @param {Predicate} validation A action validation predicate.
   */
  constructor(kind, target, value, validation) {
    this.kind = kind
    this.target = target
    this.value = value
    this.validation = validation
    
    Object.freeze(this)
  }
}
