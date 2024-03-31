/**
 * Complex validator.
 */
class ComplexValidator {
  /**
   * @param {Array.<Validator>} validators - Validators.
   * @param {object} mode - A condition combination mode.
   */
  constructor(validators, mode) {
    Basic.requireArray(validators, "validators")
    validators.forEach((validator, index) => Basic.requireValidator(validator, "validators", index))

    this.validators_ = validators
    this.mode_ = mode
  }

  /**
   * Clone the current validator.
   * 
   * @returns {ComplexValidator} - A validator clone.
   */
  clone() {
    return new ComplexValidator(this.validators_.map(validator => validator.clone()), this.mode_)
  }

  /**
   * Check whether an input value satisfies all conditions.
   * 
   * @param {any} input - An input to validate.
   * 
   * @returns {boolean}
   */
  validate(input) {
    let results = this.validators_.map(validator => validator.validate(input))

    switch (this.mode_) {
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
    switch (this.mode_) {
      case ComplexValidatorMode.ANY_OF:
        return {
          anyOf: this.validators_.map(validator => validator.toJSONSchema())
        }

      case ComplexValidatorMode.ONE_OF:
        return {
          oneOf: this.validators_.map(validator => validator.toJSONSchema())
        }

      case ComplexValidatorMode.ALL_OF:
        return {
          allOf: this.validators_.map(validator => validator.toJSONSchema())
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
