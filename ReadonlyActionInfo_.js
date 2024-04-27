/**
 * A validation action information.
 * Used to store validation functions for validators and their explanations.
 */
class ReadonlyActionInfo_ {
  /**
   * @param {JoinType_} operation An operation.
   * @param {OperationTargetType_} target An operation target.
   * @param {any} value An operation constant or list of properties.
   * @param {Predicate} validation A function that implements an operation.
   */
  constructor(operation, target, value, validation) {
    this.operation = operation
    this.target = target
    this.value = value
    this.validation = validation
    
    Object.freeze(this)
  }
}
