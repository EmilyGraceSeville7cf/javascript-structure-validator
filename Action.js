/**
 * A validation action.
 */
class ActionInfo {
  /**
   * @param {object} kind - An action kind.
   * @param {object} target - An action target.
   * @param {any} value - An action constant or list of properties.
   * @param {Predicate} validation - A action validation predicate.
   */
  constructor(kind, target, value, validation) {
    this.kind = kind
    this.target = target
    this.value = value
    this.validation = validation
  }

  /**
   * An action description
   * 
   * @type {string}
   */
  get description() {
    /*
       For property validation description is not used as it requires recursion calls in SimpleValidator
       and data outside of the action scope.

       The same applies for item constraints.
    */

    let value = this.value

    if ([ActionMode.IN_RANGE, ActionMode.NOT_IN_RANGE].includes(this.kind))
      value = `[${value[0]}..${value[1]}]`
    else if (Array.isArray(value))
      value = value.join(", ")

    return `${this.target.description} ${this.kind.description} ${value}`
  }
}
