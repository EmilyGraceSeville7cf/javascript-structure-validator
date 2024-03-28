/**
 * A validator.
 */
class Validator {
  /**
   * @param {BaseType} type - A type.
   */
  constructor(type) {
    this.simpleValidator_ = new SimpleValidator(type)
    this.complexValidators_ = []
  }

  /**
   * Require value to be less than a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  lessThan(constant) {
    this.simpleValidator_.lessThan(constant)
    return this
  }

  /**
   * Require value to be greater than a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  greaterThan(constant) {
    this.simpleValidator_.greaterThan(constant)
    return this
  }

  /**
   * Require value to be less than or equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  lessThanOrEqualTo(constant) {
    this.simpleValidator_.lessThanOrEqualTo(constant)
    return this
  }

  /**
   * Require value to be greater than or equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  greaterThanOrEqualTo(constant) {
    this.simpleValidator_.greaterThanOrEqualTo(constant)
    return this
  }

  /**
   * Require value to be equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  equalTo(constant) {
    this.simpleValidator_.equalTo(constant)
    return this
  }

  /**
   * Require value to be not equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  notEqualTo(constant) {
    this.simpleValidator_.notEqualTo(constant)
    return this
  }

  /**
   * Require value to be within a range.
   * 
   * @param {BaseComparableType} from - A lowest boundary.
   * @param {BaseComparableType} to - A highest boundary.
   * 
   * @returns {Validator} - The current validator.
   */
  inRange(from, to) {
    this.simpleValidator_.inRange(from, to)
    return this
  }

  /**
   * Require value to be outside of a range.
   * 
   * @param {BaseComparableType} from - A lowest boundary.
   * @param {BaseComparableType} to - A highest boundary.
   * 
   * @returns {Validator} - The current validator.
   */
  notInRange(from, to) {
    this.simpleValidator_.notInRange(from, to)
    return this
  }

  /**
   * Require length to be shorter than a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthLessThan(count) {
    this.simpleValidator_.withLengthLessThan(count)
    return this
  }

  /**
   * Require length to be longer than a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthGreaterThan(count) {
    this.simpleValidator_.withLengthGreaterThan(count)
    return this
  }

  /**
   * Require length to be shorter than or is a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthLessThanOrEqualTo(count) {
    this.simpleValidator_.withLengthLessThanOrEqualTo(count)
    return this
  }

  /**
   * Require length to be longer than or is a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthGreaterThanOrEqualTo(count) {
    this.simpleValidator_.withLengthGreaterThanOrEqualTo(count)
    return this
  }

  /**
   * Require length to be equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthEqualTo(count) {
    this.simpleValidator_.withLengthEqualTo(count)
    return this
  }

  /**
   * Require length not to be equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthNotEqualTo(count) {
    this.simpleValidator_.withLengthNotEqualTo(count)
    return this
  }

  /**
   * Require length to be within a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthInRange(from, to) {
    this.simpleValidator_.withLengthInRange(from, to)
    return this
  }

  /**
   * Require length to be outside of a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthNotInRange(from, to) {
    this.simpleValidator_.withLengthNotInRange(from, to)
    return this
  }

  /**
   * Require value to match a regular expression.
   * 
   * @param {RegExp} regex - A regular expression.
   * 
   * @returns {Validator} - The current validator.
   */
  matching(regex) {
    this.simpleValidator_.matching(regex)
    return this
  }

  /**
   * Require value not to match a regular expression.
   * 
   * @param {RegExp} regex - A regular expression.
   * 
   * @returns {Validator} - The current validator.
   */
  notMatching(regex) {
    this.simpleValidator_.notMatching(regex)
    return this
  }

  /**
   * Require items to satisfy their constraints.
   * 
   * @param {Validator} items - Constraints.
   * 
   * @returns {Validator} - The current validator.
   */
  withItems(items) {
    this.simpleValidator_.withItems(items)
    return this
  }

  /**
   * Require item count to be less than a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withItemCountLessThan(count) {
    this.simpleValidator_.withItemCountLessThan(count)
    return this
  }

  /**
   * Require item count to be greater than a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withItemCountGreaterThan(count) {
    this.simpleValidator_.withItemCountGreaterThan(count)
    return this
  }

  /**
   * Require item count to be less than or equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withItemCountLessThanOrEqualTo(count) {
    this.simpleValidator_.withItemCountLessThanOrEqualTo(count)
    return this
  }

  /**
   * Require item count to be greater than or equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withItemCountGreaterThanOrEqualTo(count) {
    this.simpleValidator_.withItemCountGreaterThanOrEqualTo(count)
    return this
  }

  /**
   * Require item count to be equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withItemCountEqualTo(count) {
    this.simpleValidator_.withItemCountEqualTo(count)
    return this
  }

  /**
   * Require item count not to be equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withItemCountNotEqualTo(count) {
    this.simpleValidator_.withItemCountNotEqualTo(count)
    return this
  }

  /**
   * Require length to be within a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {Validator} - The current validator.
   */
  withItemCountInRange(from, to) {
    this.simpleValidator_.withItemCountInRange(from, to)
    return this
  }

  /**
   * Require length to be outside of a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {Validator} - The current validator.
   */
  withItemCountNotInRange(from, to) {
    this.simpleValidator_.withItemCountNotInRange(from, to)
    return this
  }

  /**
   * Require specified properties.
   * 
   * @param {Object.<string, Validator>} properties - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withRequiredProperties(properties) {
    this.simpleValidator_.withRequiredProperties(properties)
    return this
  }

  /**
   * Permit specified optional properties.
   * 
   * @param {Object.<string, Validator>} properties - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withOptionalProperties(properties) {
    this.simpleValidator_.withOptionalProperties(properties)
    return this
  }

  /**
   * Permit additional properties.
   * 
   * @param {Validator} properties - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withAdditionalProperties(properties) {
    this.simpleValidator_.withAdditionalProperties(properties)
    return this
  }

  /**
   * Require no additional properties.
   * 
   * @returns {Validator} - The current validator.
   */
  withNotAdditionalProperties() {
    this.simpleValidator_.withNotAdditionalProperties()
    return this
  }

  /**
   * Require property amount to be less than a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountLessThan(count) {
    this.simpleValidator_.withPropertyCountLessThan(count)
    return this
  }

  /**
   * Require property amount to be greater than a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountGreaterThan(count) {
    this.simpleValidator_.withPropertyCountGreaterThan(count)
    return this
  }

  /**
   * Require property amount to be less than or equal to a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountLessThanOrEqualTo(count) {
    this.simpleValidator_.withPropertyCountLessThanOrEqualTo(count)
    return this
  }

  /**
   * Require property amount to be greater than or equal to a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountGreaterThanOrEqualTo(count) {
    this.simpleValidator_.withPropertyCountGreaterThanOrEqualTo(count)
    return this
  }

  /**
   * Require property amount to be equal to a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountEqualTo(count) {
    this.simpleValidator_.withPropertyCountEqualTo(count)
    return this
  }

  /**
   * Require property amount not to be equal to a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  notWithPropertyCountEqualTo(count) {
    this.simpleValidator_.notWithPropertyCountEqualTo(count)
    return this
  }

  /**
   * Require property amount to be within a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountInRange(from, to) {
    this.simpleValidator_.withPropertyCountInRange(from, to)
    return this
  }

  /**
   * Require property amount to be outside of a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountNotInRange(from, to) {
    this.simpleValidator_.withPropertyCountNotInRange(from, to)
    return this
  }

  /**
   * Require property relationships.
   * 
   * @param {WherePredicate} predicate - A predicate.
   * 
   * @returns {Validator} - The current validator.
   */
  where(predicate) {
    this.simpleValidator_.where(predicate)
    return this
  }

  /**
   * Require any of constraints to be satisfied.
   * 
   * @param {Array.<Validator>} validators - Nested validators.
   * 
   * @returns {Validator} - The current validator.
   */
  andAnyOf(...validators) {
    this.complexValidators_.push(new ComplexValidator(validators, ComplexValidatorMode.ANY_OF))
    return this
  }

  /**
   * Require one of constraints to be satisfied.
   * 
   * @param {Array.<Validator>} validators - Nested validators.
   * 
   * @returns {Validator} - The current validator.
   */
  andOneOf(...validators) {
    this.complexValidators_.push(new ComplexValidator(validators, ComplexValidatorMode.ONE_OF))
    return this
  }

  /**
   * Require one of constraints to be satisfied.
   * 
   * @param {Array.<Validator>} validators - Nested validators.
   * 
   * @returns {Validator} - The current validator.
   */
  andAllOf(...validators) {
    this.complexValidators_.push(new ComplexValidator(validators, ComplexValidatorMode.ALL_OF))
    return this
  }

  /**
   * Check whether an input value satisfies all conditions.
   * 
   * @param {any} input - An input to validate.
   * 
   * @returns {boolean}
   */
  validate(input) {
    return this.simpleValidator_.validate(input) &&
      this.complexValidators_.map(validator => validator.validate(input)).every(result => result === true)
  }

  /**
   * Convert object to JSON schema (draft 04) representation.
   * 
   * @returns {object}
   */
  toJSONSchema() {
    let schema = {}

    Object.assign(schema, this.simpleValidator_.toJSONSchema())
    this.complexValidators_.forEach(validator => Object.assign(schema, validator.toJSONSchema()))

    return schema
  }
}
