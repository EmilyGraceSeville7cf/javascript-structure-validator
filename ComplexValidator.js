/**
 * Complex validator.
 */
class ComplexValidator {
  /**
   * @param {any} value
   */
  throwWhenNotSupportedTypeError_(value) {
    if (value.constructor !== Validator)
      throw new Error(`Type ${typeof value} with ${value.constructor} constructor is not supported by complex validator`)
  }

  /**
   * @param {object} mode - A condition combination mode.
   */
  constructor(mode) {
    this.validators = []
    this.mode = mode
  }

  /**
   * Add a validator.
   * 
   * @param {Validator | ComplexValidator} validator - A validator.
   * 
  * @returns {Validator} - The validator.
   */
  add(validator) {
    this.throwWhenNotSupportedTypeError_(validator)

    this.validators.push(validator)
  }

  /**
   * Check whether an input value satisfies all conditions.
   * 
   * @param {any} input - An input to validate.
   * 
   * @returns {boolean}
   */
  validate(input) {
    let results = this.validators.map(validator => validator.validate(input))
    switch (this.mode) {
      case Mode.ANY_OF:
        return results.some(result => result === true)

      case Mode.ONE_OF:
        return results.filter(result => result === true).length === 1

      case Mode.ALL_OF:
        return results.all(result => result === true)
    }
  }

  /**
   * A description.
   * 
   * @type {string}
   */
  get description() {
    return `${this.mode.description}: [${this.validators.map(validator => validator.description).join(", ")}]`
  }

  /**
   * Converts object to string.
   * 
   * @returns {string} - A string representation.
   */
  toString() {
    return this.description
  }
}
