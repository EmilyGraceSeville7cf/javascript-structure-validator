/**
 * Complex validator.
 */
class ComplexValidator {
  /**
   * @param {Array.<Validator>} validators - Validators.
   * @param {object} mode - A condition combination mode.
   */
  constructor(validators, mode) {
    if (!Array.isArray(validators))
      throw new Error("Validator's array expected")
    if (validators.filter(validator => ![Validator, SimpleValidator, ComplexValidator].includes(validator.constructor)).length !== 0)
      throw new Error("Validators with Validator constructor are expected")

    this.validators = validators
    this.mode = mode
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
      case ComplexValidatorMode.ANY_OF:
        return results.some(result => result === true)

      case ComplexValidatorMode.ONE_OF:
        return results.filter(result => result === true).length === 1

      case ComplexValidatorMode.ALL_OF:
        return results.all(result => result === true)
    }
  }

  /**
   * Convert object to JSON schema (draft 07) representation.
   * 
   * @returns {object}
   */
  toJSONSchema() {
    switch (this.mode) {
      case ComplexValidatorMode.ANY_OF:
        return {
          anyOf: this.validators.map(validator => validator.toJSONSchema())
        }

      case ComplexValidatorMode.ONE_OF:
        return {
          oneOf: this.validators.map(validator => validator.toJSONSchema())
        }

      case ComplexValidatorMode.ALL_OF:
        return {
          allOf: this.validators.map(validator => validator.toJSONSchema())
        }
    }
  }

  /**
   * Converts object to string.
   * 
   * @returns {string} - A string representation.
   */
  toString() {
    return this.toJSONSchema()
  }
}
