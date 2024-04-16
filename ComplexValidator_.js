/**
 * Complex validator.
 */
class ComplexValidator_ {
  /**
   * @param {Array.<Validator | SimpleValidator_ | ComplexValidator_>} validators Validators.
   * @param {object} mode A condition combination mode.
   */
  constructor(validators, mode) {
    Basic.requireArray(validators, "validators")
    validators.forEach((validator, index) => Basic.requireValidator(validator, "validators", index))

    this.validators_ = validators
    this.mode_ = mode
  }

  /**
   * An expected type.
   * 
   * @type {string}
   */
  get expectedJSType() {
    const types = [...new Set(this.validators_.map(validator => validator.expectedJSType))]
    
    if (types.length !== 1)
      return "any"
    
    return types[0]
  }

  /**
   * A required properties tree.
   * 
   * @type {object}
   */
  get expectedRequiredPropertiesTree() {
    if (this.expectedJSType !== "object")
      return null

    return this.validators_.map(validator => validator.expectedRequiredPropertiesTree)
      .reduce((previous, current) => deepMerge_(previous, current), {})
  }

  /**
   * An optional properties tree.
   * 
   * @type {object}
   */
  get expectedOptionalPropertiesTree() {
    if (this.expectedJSType !== "object")
      return null

    return this.validators_.map(validator => validator.expectedOptionalPropertiesTree)
      .reduce((previous, current) => deepMerge_(previous, current), {})
  }

  /**
   * Clone the current validator.
   * 
   * @returns {ComplexValidator_} A validator clone.
   */
  clone() {
    return new ComplexValidator_(this.validators_.map(validator => validator.clone()), this.mode_)
  }

  /**
   * Check whether an input value satisfies all conditions.
   * 
   * @param {any} input An input to validate.
   * 
   * @returns {boolean} Whether an input value satisfies all conditions.
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
   * Converts object to string.
   * 
   * @returns {string} A string representation.
   */
  toString() {
    return this.toJSONSchema_()
  }

  /**
   * Convert object to JSON schema (draft 07) representation.
   * 
   * @returns {object} JSON schema (draft 07) representation.
   */
  toJSONSchema_() {
    switch (this.mode_) {
      case ComplexValidatorMode.ANY_OF:
        return {
          anyOf: this.validators_.map(validator => validator.toJSONSchema_())
        }

      case ComplexValidatorMode.ONE_OF:
        return {
          oneOf: this.validators_.map(validator => validator.toJSONSchema_())
        }

      case ComplexValidatorMode.ALL_OF:
        return {
          allOf: this.validators_.map(validator => validator.toJSONSchema_())
        }
    }
  }
}
