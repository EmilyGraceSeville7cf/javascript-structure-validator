/**
 * Basic validator.
 */
class Validator {
  /**
   * @param {string} type
   */
  throwWhenNotSupportedTypeError_(type) {
    if (!["bigint", "boolean", "number", "object", "string"].includes(type))
      throw new Error(`Type ${type} is not supported by validator`)
  }

  /**
   * @param {string} type
   */
  throwWhenNotCompatibleTypes_(type) {
    if (type !== this.type)
      throw new Error(`Types ${type} and ${this.type} are not compatible`)
  }

  throwWhenNotCompatibleTypeWithStringComparison_() {
    if (this.type !== "string")
      throw new Error(`Type ${this.type} is not compatible with string comparison`)
  }

  /**
   * @param {string} type
   */
  throwWhenNotNumber_(type) {
    if (type !== "number")
      throw new Error(`Length can't be of ${type} type`)
  }

  throwWhenNotCompatibleTypeWithObjectComparison_() {
    if (this.type !== "object")
      throw new Error(`Type ${this.type} is not compatible with object comparison`)
  }

  /**
   * @param {string} type
   */
  throwWhenNotObject_(type) {
    if (type !== "object")
      throw new Error(`Object can't be of ${type} type`)
  }

  throwWhenNoRequiredProperties_() {
    if (this.requiredProperties_.length === 0 && this.optionalProperties_.length === 0 && this.requiredPatternProperties.length === 0)
      throw new Error(`Object can't require no additional properties with no properties defined`)
  }

  /**
   * @param {any} value
   */
  throwWhenNotRegExp_(value) {
    if (typeof value !== "object" && value.constructor !== RegExp)
      throw new Error(`Object can't be of ${typeof value} type with ${value.constructor} constructor`)
  }

  /**
   * @param {any} value
   */
  throwWhenNotTrue_(value) {
    if (value !== true)
      throw new Error(`Boolean can't be of anything except true`)
  }

  /**
   * @param {any} value
   */
  throwWhenNotValidatorTypeError_(value) {
    if (![Validator, ComplexValidator].includes(value.constructor))
      throw new Error(`Type ${typeof value} with ${value.constructor} constructor is not supported by validator`)
  }

  throwWhenNotObjectFromGetter_() {
    if (this.type !== "object")
      throw new Error(`Getter can't be accessed when ${this.type} type is set`)
  }

  throwWhenNotPropertiesSetError_() {
    if (this.type === "object" && this.requiredProperties_.length === 0 && this.optionalProperties_.length === 0)
      throw new Error("Conditions can't be set when no properties are set")
  }

  /**
   * @param {string} type
   */
  throwWhenNotFunction_(type) {
    if (type !== "function")
      throw new Error(`Object can't be of ${type} type`)
  }

  throwWhenRequiredAndOptionPropertiesIntersect_() {
    if (this.requiredProperties_.filter(property => this.optionalProperties_.includes(property)).length !== 0)
      throw new Error("Required and optional properties can't intersect")
  }

  /**
   * @param {BaseType} type - A type.
   */
  constructor(type) {
    this.throwWhenNotSupportedTypeError_(type)

    this.type = type
    this.predicates_ = [input => typeof input === this.type]

    this.requiredProperties_ = []
    this.optionalProperties_ = []

    this.predicateDescriptions_ = [`is ${this.type}`]
  }

  /**
   * @param {object} input
   * @param {Object.<string, Validator | ComplexValidator>} propertiesConstraint
   * 
   * @returns {boolean}.
   */
  withRequiredProperties_(input, propertiesConstraint) {
    for (let requiredProperty in propertiesConstraint) {
      if (!input.hasOwnProperty(requiredProperty))
        return false

      let validator = propertiesConstraint[requiredProperty]

      if (typeof validator !== "boolean") {
        this.throwWhenNotValidatorTypeError_(validator)

        if (!validator.validate(input[requiredProperty]))
          return false
      } else
        this.throwWhenNotTrue_(validator)
    }

    return true
  }

  /**
   * @param {object} input
   * @param {Object.<string, Validator | ComplexValidator>} propertiesConstraint
   * 
   * @returns {boolean}.
   */
  withOptionalProperties_(input, propertiesConstraint) {
    for (let optionalProperty in propertiesConstraint) {
      let validator = propertiesConstraint[optionalProperty]

      if (typeof validator !== "boolean") {
        this.throwWhenNotValidatorTypeError_(validator)

        if (input.hasOwnProperty(optionalProperty) && !validator.validate(input[optionalProperty]))
          return false
      } else
        this.throwWhenNotTrue_(validator)
    }

    return true
  }

  /**
   * Require value to be less than a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  lessThan(constraint) {
    this.throwWhenNotCompatibleTypes_(typeof constraint)
    this.predicates_.push(input => input < constraint)
    this.predicateDescriptions_.push(`less than ${constraint}`)
    return this
  }

  /**
   * Require value to be greater than a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  greaterThan(constraint) {
    this.throwWhenNotCompatibleTypes_(typeof constraint)
    this.predicates_.push(input => input > constraint)
    this.predicateDescriptions_.push(`greater than ${constraint}`)
    return this
  }

  /**
   * Require value to be less than or equal to a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  lessThanOrEqualTo(constraint) {
    this.throwWhenNotCompatibleTypes_(typeof constraint)
    this.predicates_.push(input => input <= constraint)
    this.predicateDescriptions_.push(`less than or equal to ${constraint}`)
    return this
  }

  /**
   * Require value to be greater than or equal to a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  greaterThanOrEqualTo(constraint) {
    this.throwWhenNotCompatibleTypes_(typeof constraint)
    this.predicates_.push(input => input >= constraint)
    this.predicateDescriptions_.push(`greater than or equal to ${constraint}`)
    return this
  }

  /**
   * Require value to be equal to a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  equalTo(constraint) {
    this.throwWhenNotCompatibleTypes_(typeof constraint)
    this.predicates_.push(input => input === constraint)
    this.predicateDescriptions_.push(`equal to ${constraint}`)
    return this
  }

  /**
   * Require value to be not equal to a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  notEqualTo(constraint) {
    this.throwWhenNotCompatibleTypes_(typeof constraint)
    this.predicates_.push(input => input !== constraint)
    this.predicateDescriptions_.push(`not equal to ${constraint}`)
    return this
  }

  /**
   * Require value to be within a constraint range.
   * 
   * @param {BaseComparableType} fromConstraint - A lowest constraint.
   * @param {BaseComparableType} toConstraint - A highest constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  inRange(fromConstraint, toConstraint) {
    return this.greaterThanOrEqualTo(fromConstraint).lessThanOrEqualTo(toConstraint)
  }

  /**
   * Require value to be outside of a constraint range.
   * 
   * @param {BaseComparableType} fromConstraint - A lowest constraint.
   * @param {BaseComparableType} toConstraint - A highest constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  notInRange(fromConstraint, toConstraint) {
    this.throwWhenNotCompatibleTypes_(typeof fromConstraint)
    this.throwWhenNotCompatibleTypes_(typeof toConstraint)
    this.predicates_.push(input => input < fromConstraint || input > toConstraint)
    this.predicateDescriptions_.push(`less than ${fromConstraint} || greater than ${toConstraint}`)
    return this
  }

  /**
   * Require value length to be shorter than a constraint.
   * 
   * @param {number} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  shorterThan(constraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => input.length < constraint)
    this.predicateDescriptions_.push(`shorter than ${constraint}`)
    return this
  }

  /**
   * Require value length to be longer than a constraint.
   * 
   * @param {number} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  longerThan(constraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => input.length > constraint)
    this.predicateDescriptions_.push(`longer than ${constraint}`)
    return this
  }

  /**
   * Require value length to be shorter than or is a constraint.
   * 
   * @param {number} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  shorterThanOrIs(constraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => input.length <= constraint)
    this.predicateDescriptions_.push(`shorter than or is ${constraint}`)
    return this
  }

  /**
   * Require value length to be longer than or is a constraint.
   * 
   * @param {number} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  longerThanOrIs(constraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => input.length >= constraint)
    this.predicateDescriptions_.push(`longer than or is ${constraint}`)
    return this
  }

  /**
   * Require value length to be a constraint.
   * 
   * @param {number} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withLength(constraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => input.length === constraint)
    this.predicateDescriptions_.push(`with length equal to ${constraint}`)
    return this
  }

  /**
   * Require value length to be not a constraint.
   * 
   * @param {number} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  notWithLength(constraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => input.length !== constraint)
    this.predicateDescriptions_.push(`with length not equal to ${constraint}`)
    return this
  }

  /**
   * Require value length to be within a constraint range.
   * 
   * @param {number} fromConstraint - A lowest constraint.
   * @param {number} toConstraint - A highest constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withLengthInRange(fromConstraint, toConstraint) {
    return this.longerThanOrIs(fromConstraint).shorterThanOrIs(toConstraint)
  }

  /**
   * Require value length to be outside of a constraint range.
   * 
   * @param {number} fromConstraint - A lowest constraint.
   * @param {number} toConstraint - A highest constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  notWithLengthInRange(fromConstraint, toConstraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotNumber_(typeof fromConstraint)
    this.throwWhenNotNumber_(typeof toConstraint)
    this.predicates_.push(input => input.length < fromConstraint || input.length > toConstraint)
    this.predicateDescriptions_.push(`shorter than ${fromConstraint} || longer than ${toConstraint}`)
    return this
  }

  /**
   * Require value to match a constraint.
   * 
   * @param {RegExp} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  matching(constraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotRegExp_(constraint)
    this.predicates_.push(input => constraint.test(input))
    this.predicateDescriptions_.push(`matching ${constraint} pattern`)
    return this
  }

  /**
   * Require value not to match a constraint.
   * 
   * @param {RegExp} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  notMatching(constraint) {
    this.throwWhenNotCompatibleTypeWithStringComparison_()
    this.throwWhenNotRegExp_(constraint)
    this.predicates_.push(input => !constraint.test(input))
    this.predicateDescriptions_.push(`not matching ${constraint} pattern`)
    return this
  }

  /**
   * Require value to have all required properties and satisfy their constraints.
   * 
   * @param {Object.<string, Validator>} propertiesConstraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withRequiredProperties(propertiesConstraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotObject_(typeof propertiesConstraint)

    for (let requiredProperty in propertiesConstraint)
      this.requiredProperties_.push(requiredProperty)

    this.throwWhenRequiredAndOptionPropertiesIntersect_()

    const nestedDescriptions = []
    Object.keys(propertiesConstraint).forEach(property => nestedDescriptions.push(`${property}: ${propertiesConstraint[property].description}`))
    this.predicateDescriptions_.push(`with required properties: (${nestedDescriptions.join(", ")})`)

    this.predicates_.push(input => this.withRequiredProperties_(input, propertiesConstraint))
    return this
  }

  /**
   * Require value to have all optional properties and satisfy their constraints.
   * 
   * @param {Object.<string, Validator>} propertiesConstraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withOptionalProperties(propertiesConstraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotObject_(typeof propertiesConstraint)

    for (let optionalProperty in propertiesConstraint)
      this.optionalProperties_.push(optionalProperty)

    this.throwWhenRequiredAndOptionPropertiesIntersect_()

    const nestedDescriptions = []
    Object.keys(propertiesConstraint).forEach(property => nestedDescriptions.push(`${property}: ${propertiesConstraint[property].description}`))
    this.predicateDescriptions_.push(`with optional properties: (${nestedDescriptions.join(", ")})`)

    this.predicates_.push(input => this.withOptionalProperties_(input, propertiesConstraint))
    return this
  }

  /**
   * Require value to doesn't have additional properties except ones specified via withRequiredProperties.
   * 
   * @returns {Validator} - The current validator.
   */
  notWithAdditionalProperties() {
    this.throwWhenNoRequiredProperties_()

    this.predicates_.push(input => {
      for (let inputProperty in input)
        if (!this.requiredProperties_.includes(inputProperty) && !this.optionalProperties_.includes(inputProperty))
          return false

      return true
    })
    return this
  }

  /**
   * Require value to contain property amount less than a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountLessThan(constraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => Object.keys(input).length < constraint)
    this.predicateDescriptions_.push(`with property amount less than ${constraint}`)
    return this
  }

  /**
   * Require value to contain property amount greater than a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountGreaterThan(constraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => Object.keys(input).length > constraint)
    this.predicateDescriptions_.push(`with property amount greater than ${constraint}`)
    return this
  }

  /**
   * Require value to contain property amount less than or equal to a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountLessThanOrEqualTo(constraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => Object.keys(input).length <= constraint)
    this.predicateDescriptions_.push(`with property amount less than or equal to ${constraint}`)
    return this
  }

  /**
   * Require value to contain property amount greater than or equal to a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountGreaterThanOrEqualTo(constraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => Object.keys(input).length >= constraint)
    this.predicateDescriptions_.push(`with property amount greater than or equal to ${constraint}`)
    return this
  }

  /**
   * Require value to contain property amount equal to a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountEqualTo(constraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => Object.keys(input).length === constraint)
    this.predicateDescriptions_.push(`with property amount equal to ${constraint}`)
    return this
  }

  /**
   * Require value not to contain property amount equal to a constraint.
   * 
   * @param {BaseComparableType} constraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  notWithPropertyCountEqualTo(constraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotNumber_(typeof constraint)
    this.predicates_.push(input => Object.keys(input).length !== constraint)
    this.predicateDescriptions_.push(`with property amount not equal to ${constraint}`)
    return this
  }

  /**
   * Require value to contain property amount within a constraint range.
   * 
   * @param {number} fromConstraint - A lowest constraint.
   * @param {number} toConstraint - A highest constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountInRange(fromConstraint, toConstraint) {
    return this.withPropertyCountGreaterThanOrEqualTo(fromConstraint).withPropertyCountLessThanOrEqualTo(toConstraint)
  }

  /**
   * Require value to contain property amount outside of a constraint range.
   * 
   * @param {number} fromConstraint - A lowest constraint.
   * @param {number} toConstraint - A highest constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  notWithPropertyCountInRange(fromConstraint, toConstraint) {
    this.throwWhenNotCompatibleTypeWithObjectComparison_()
    this.throwWhenNotNumber_(typeof fromConstraint)
    this.throwWhenNotNumber_(typeof toConstraint)
    this.predicates_.push(input => {
      const count = Object.keys(input).length
      return count < fromConstraint || count > toConstraint
    })
    this.predicateDescriptions_.push(`with property amount less than ${fromConstraint} || greater than ${toConstraint}`)
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
    this.throwWhenNotFunction_(typeof predicate)
    this.throwWhenNotPropertiesSetError_()

    this.predicates_.push(input => Object.values(predicate(input)).every(condition => condition === true))
    return this
  }

  /**
   * Used for readability.
   * 
   * @returns {Validator} - The current validator.
   */
  and() {
    return this
  }

  /**
   * Used for readability.
   * 
   * @param {Object.<string, Validator>} propertiesConstraint - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  with(propertiesConstraint) {
    return this.withRequiredProperties(propertiesConstraint)
  }

  /**
   * Used for readability.
   * 
   * @returns {Validator} - The current validator.
   */
  andNothingElse() {
    return this.notWithAdditionalProperties()
  }

  /**
   * Check whether an input value satisfies all conditions.
   * 
   * @param {any} input - An input to validate.
   * 
   * @returns {boolean}
   */
  validate(input) {
    return this.predicates_.map(predicate => predicate(input)).every(result => result === true)
  }

  /**
   * An expected type.
   * 
   * @type {string}
   */
  get expectedType() {
    return this.type
  }

  /**
   * Required properties.
   * 
   * @type {Array.<string>}
   */
  get expectedRequiredProperties() {
    this.throwWhenNotObjectFromGetter_()
    return [...this.requiredProperties_]
  }

  /**
   * Optional properties.
   * 
   * @type {Array.<string>}
   */
  get expectedOptionalProperties() {
    this.throwWhenNotObjectFromGetter_()
    return [...this.optionalProperties_]
  }

  /**
   * A description.
   * 
   * @type {string}
   */
  get description() {
    let prefix = ""
    let suffix = ""

    if (this.predicateDescriptions_.length > 1) {
      prefix = "(",
        suffix = ")"
    }

    return `${prefix}${this.predicateDescriptions_.join(", ")}${suffix}`
  }
}