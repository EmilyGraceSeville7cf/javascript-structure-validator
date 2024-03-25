/**
 * Basic validator.
 */
class Validator {
  /**
   * @param {BaseType} type
   */
  requireSomeTypeMessage_(type) {
    const validationType = this.isArray ? "array" : this.type
    return `Constraint for ${validationType} is expected, but constraint for ${type} is met, use another is* function at the beginning to set it`
  }

  requireStringType_() {
    if (this.type !== "string")
      throw new Error(this.requireSomeTypeMessage_("string"))
  }

  requireObjectType_() {
    if (this.type !== "object")
      throw new Error(this.requireSomeTypeMessage_("object"))
  }

  requireArrayType_() {
    if (!this.isArray)
      throw new Error(this.requireSomeTypeMessage_("array"))
  }

  requirePropertiesSet_() {
    if (this.type === "object" && this.requiredProperties_.length === 0 && this.optionalProperties_.length === 0)
      throw new Error("Required or optional properties are expected to be defined")
  }

  requireObjectTypeForGetter_() {
    if (this.type !== "object")
      throw new Error(`Getter can't be accessed when ${this.type} type is set`)
  }

  requireRequiredPropertiesAndOptionalNotIntersect_() {
    if (this.requiredProperties_.filter(property => this.optionalProperties_.includes(property)).length !== 0)
      throw new Error("Required and optional properties can't intersect")
  }

  /**
   * @param {string} input
   */
  throwWhenInputTypeIsNotCompatible_(input) {
    if (typeof input !== this.type)
      throw new Error(`Types ${typeof input} and ${this.type} are not compatible, value of ${this.type} is expected (actual value: ${input})`)
  }

  /**
   * @param {string} value
   */
  requireCount_(value) {
    if (typeof value !== "number" || value < 0)
      throw new Error(`Count can't be ${typeof value} or negative number (actual value: ${value})`)
  }

  /**
   * @param {any} value
   */
  requirePattern_(value) {
    if (value.constructor !== RegExp)
      throw new Error(`Pattern of RegExp type is expected (actual constructor: ${value.constructor})`)
  }

  /**
   * @param {any} value
   */
  requireTrue_(value) {
    if (value !== true)
      throw new Error(`true value is expected for property without any constraint (actual value: ${value})`)
  }

  /**
   * @param {any} from
   * @param {any} to
   */
  requireRange_(from, to) {
    this.requireCount_(from)
    this.requireCount_(to)

    if (from > to)
      throw new Error(`Range [${to}..${from}] is expected, swap boundaries (actual range: [${from}..${to}])`)
  }

  /**
   * @param {any} value
   */
  requireValidator_(value) {
    if (![Validator, ComplexValidator].includes(value.constructor))
      throw new Error(`Validator of Validator or ComplexValidator type is expected (actual constructor: ${value.constructor})`)
  }

  /**
   * @param {any} value
   */
  requireProperties_(value) {
    if (typeof value !== "object")
      throw new Error(`Property definitions presented as object are expected (actual value: ${value})`)
  }

  /**
   * @param {string} value
   */
  requirePredicate_(value) {
    if (typeof value !== "function")
      throw new Error(`Object can't be of ${typeof value} type`)
  }

  /**
   * @param {BaseType} type - A type.
   */
  constructor(type) {
    if (!["bigint", "boolean", "number", "object", "string", "array"].includes(type))
      throw new TypeError(`Type ${type} is not supported by validator`)

    this.type = type
    this.predicates_ = [input => typeof input === this.type]
    this.isArray = false
    this.predicateDescriptions_ = [`is ${this.type}`]

    if (type === "array") {
      this.type = "object"
      this.predicates_ = [input => Array.isArray(input)]
      this.isArray = true
      this.predicateDescriptions_ = ["is array"]
    }

    this.requiredProperties_ = []
    this.optionalProperties_ = []
  }

  /**
   * @param {object} input
   * @param {Validator | ComplexValidator} propertiesConstraint
   * 
   * @returns {boolean}
   */
  withAdditionalProperties_(input, propertiesConstraint) {
    const additionalProperties = Object.keys(input).filter(property => {
      return !this.requiredProperties_.includes(property) && !this.optionalProperties_.includes(property)
    })

    for (let additionalProperty of additionalProperties)
      if (!propertiesConstraint.validate(input[additionalProperty]))
        return false

    return true
  }

  /**
   * Require value to be less than a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  lessThan(constant) {
    this.throwWhenInputTypeIsNotCompatible_(constant)

    this.predicates_.push(input => input < constant)
    this.predicateDescriptions_.push(`less than ${constant}`)

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
    this.throwWhenInputTypeIsNotCompatible_(constant)

    this.predicates_.push(input => input > constant)
    this.predicateDescriptions_.push(`greater than ${constant}`)

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
    this.throwWhenInputTypeIsNotCompatible_(constant)

    this.predicates_.push(input => input <= constant)
    this.predicateDescriptions_.push(`less than or equal to ${constant}`)

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
    this.throwWhenInputTypeIsNotCompatible_(typeof constant)

    this.predicates_.push(input => input >= constant)
    this.predicateDescriptions_.push(`greater than or equal to ${constant}`)

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
    this.throwWhenInputTypeIsNotCompatible_(constant)

    this.predicates_.push(input => input === constant)
    this.predicateDescriptions_.push(`equal to ${constant}`)

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
    this.throwWhenInputTypeIsNotCompatible_(constant)

    this.predicates_.push(input => input !== constant)
    this.predicateDescriptions_.push(`not equal to ${constant}`)

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
    this.throwWhenInputTypeIsNotCompatible_(from)
    this.throwWhenInputTypeIsNotCompatible_(to)

    this.predicates_.push(input => input >= from && input <= to)
    this.predicateDescriptions_.push(`in [${from}..${to}] range`)

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
    this.throwWhenInputTypeIsNotCompatible_(from)
    this.throwWhenInputTypeIsNotCompatible_(to)

    this.predicates_.push(input => input < from || input > to)
    this.predicateDescriptions_.push(`not in [${from}..${to}] range`)

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
    this.requireStringType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length < count)
    this.predicateDescriptions_.push(`shorter than ${count}`)

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
    this.requireStringType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length > count)
    this.predicateDescriptions_.push(`longer than ${count}`)

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
    this.requireStringType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length <= count)
    this.predicateDescriptions_.push(`shorter than or is ${count}`)

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
    this.requireStringType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length >= count)
    this.predicateDescriptions_.push(`longer than or is ${count}`)

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
    this.requireStringType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length === count)
    this.predicateDescriptions_.push(`with length equal to ${count}`)

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
    this.requireStringType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length !== count)
    this.predicateDescriptions_.push(`with length not equal to ${count}`)

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
    this.requireStringType_()
    this.requireRange_(from, to)

    this.predicates_.push(input => input.length >= from && input.length <= to)
    this.predicateDescriptions_.push(`with length in [${from}..${to}] range`)

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
    this.requireStringType_()
    this.requireRange_(from, to)

    this.predicates_.push(input => input.length < from || input.length > to)
    this.predicateDescriptions_.push(`with length not in [${from}..${to}] range`)

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
    this.requireStringType_()
    this.requirePattern_(regex)

    this.predicates_.push(input => regex.test(input))
    this.predicateDescriptions_.push(`matching ${regex} pattern`)

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
    this.requireStringType_()
    this.requirePattern_(regex)

    this.predicates_.push(input => !regex.test(input))
    this.predicateDescriptions_.push(`not matching ${regex} pattern`)

    return this
  }

  /**
   * Require items to satisfy their constraints.
   * 
   * @param {Validator | ComplexValidator} items - Constraints.
   * 
   * @returns {Validator} - The current validator.
   */
  withItems(items) {
    this.requireArrayType_()
    this.requireValidator_(items)

    this.predicates_.push(input => {
      for (let item of input)
        if (!items.validate(item))
          return false

      return true
    })

    this.predicateDescriptions_.push(`with items: ${items.description}`)

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
    this.requireArrayType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length < count)
    this.predicateDescriptions_.push(`with item count less than ${count}`)

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
    this.requireArrayType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length > count)
    this.predicateDescriptions_.push(`with item count less than ${count}`)

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
    this.requireArrayType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length <= count)
    this.predicateDescriptions_.push(`with item count less than or equal to ${count}`)

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
    this.requireArrayType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length >= count)
    this.predicateDescriptions_.push(`with item count greater than or equal to ${count}`)

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
    this.requireArrayType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length === count)
    this.predicateDescriptions_.push(`with item count not equal to ${count}`)

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
    this.requireArrayType_()
    this.requireCount_(count)

    this.predicates_.push(input => input.length === count)
    this.predicateDescriptions_.push(`with item count equal to ${count}`)

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
    this.requireArrayType_()
    this.requireRange_(from, to)

    this.predicates_.push(input => input.length >= from && input.length <= to)
    this.predicateDescriptions_.push(`with item count in [${from}..${to}] range`)

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
    this.requireArrayType_()
    this.requireRange_(from, to)

    this.predicates_.push(input => input.length < from || input.length > to)
    this.predicateDescriptions_.push(`with item count not in [${from}..${to}] range`)

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
    this.requireObjectType_()
    this.requireProperties_(properties)

    for (let requiredProperty in properties)
      this.requiredProperties_.push(requiredProperty)

    this.requireRequiredPropertiesAndOptionalNotIntersect_()

    const nestedDescriptions = []
    Object.keys(properties).forEach(property => nestedDescriptions.push(`${property}: ${properties[property].description}`))
    this.predicateDescriptions_.push(`with required properties: (${nestedDescriptions.join(", ")})`)

    this.predicates_.push(input => {
      for (let requiredProperty in properties) {
        if (!input.hasOwnProperty(requiredProperty))
          return false

        let validator = properties[requiredProperty]

        if (typeof validator !== "boolean") {
          this.requireValidator_(validator)

          if (!validator.validate(input[requiredProperty]))
            return false
        } else
          this.requireTrue_(validator)
      }

      return true
    })
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
    this.requireObjectType_()
    this.requireProperties_(properties)

    for (let optionalProperty in properties)
      this.optionalProperties_.push(optionalProperty)

    this.requireRequiredPropertiesAndOptionalNotIntersect_()

    const nestedDescriptions = []
    Object.keys(properties).forEach(property => nestedDescriptions.push(`${property}: ${properties[property].description}`))
    this.predicateDescriptions_.push(`with optional properties: (${nestedDescriptions.join(", ")})`)

    this.predicates_.push(input => {
      for (let optionalProperty in properties) {
        let validator = properties[optionalProperty]

        if (typeof validator !== "boolean") {
          this.requireValidator_(validator)

          if (input.hasOwnProperty(optionalProperty) && !validator.validate(input[optionalProperty]))
            return false
        } else
          this.requireTrue_(validator)
      }

      return true
    })
    return this
  }

  /**
   * Permit additional properties.
   * 
   * @param {Validator | ComplexValidator} properties - A constraint.
   * 
   * @returns {Validator} - The current validator.
   */
  withAdditionalProperties(properties) {
    this.requireObjectType_()
    this.requireValidator_(properties)

    this.predicates_.push(input => {
      const additionalProperties = Object.keys(input).filter(property => {
        return !this.requiredProperties_.includes(property) && !this.optionalProperties_.includes(property)
      })

      for (let additionalProperty of additionalProperties)
        if (!properties.validate(input[additionalProperty]))
          return false

      return true
    })
    
    this.predicateDescriptions_.push(`with additional properties: (${properties.description})`)

    return this
  }

  /**
   * Require no additional properties.
   * 
   * @returns {Validator} - The current validator.
   */
  withNotAdditionalProperties() {
    this.requirePropertiesSet_()

    this.predicates_.push(input => {
      for (let inputProperty in input)
        if (!this.requiredProperties_.includes(inputProperty) && !this.optionalProperties_.includes(inputProperty))
          return false

      return true
    })

    return this
  }

  /**
   * Require property amount to be less than a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountLessThan(constant) {
    this.requireObjectType_()
    this.requireCount_(constant)

    this.predicates_.push(input => Object.keys(input).length < constant)
    this.predicateDescriptions_.push(`with property amount less than ${constant}`)

    return this
  }

  /**
   * Require property amount to be greater than a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountGreaterThan(constant) {
    this.requireObjectType_()
    this.requireCount_(constant)

    this.predicates_.push(input => Object.keys(input).length > constant)
    this.predicateDescriptions_.push(`with property amount greater than ${constant}`)

    return this
  }

  /**
   * Require property amount to be less than or equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountLessThanOrEqualTo(constant) {
    this.requireObjectType_()
    this.requireCount_(constant)

    this.predicates_.push(input => Object.keys(input).length <= constant)
    this.predicateDescriptions_.push(`with property amount less than or equal to ${constant}`)

    return this
  }

  /**
   * Require property amount to be greater than or equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountGreaterThanOrEqualTo(constant) {
    this.requireObjectType_()
    this.requireCount_(constant)

    this.predicates_.push(input => Object.keys(input).length >= constant)
    this.predicateDescriptions_.push(`with property amount greater than or equal to ${constant}`)

    return this
  }

  /**
   * Require property amount to be equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  withPropertyCountEqualTo(constant) {
    this.requireObjectType_()
    this.requireCount_(constant)

    this.predicates_.push(input => Object.keys(input).length === constant)
    this.predicateDescriptions_.push(`with property amount equal to ${constant}`)

    return this
  }

  /**
   * Require property amount not to be equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {Validator} - The current validator.
   */
  notWithPropertyCountEqualTo(constant) {
    this.requireObjectType_()
    this.requireCount_(constant)

    this.predicates_.push(input => Object.keys(input).length !== constant)
    this.predicateDescriptions_.push(`with property amount not equal to ${constant}`)

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
    this.requireObjectType_()
    this.requireCount_(from)
    this.requireCount_(to)

    this.predicates_.push(input => {
      const count = Object.keys(input).length
      return count >= from && count <= to
    })
    this.predicateDescriptions_.push(`with property amount in [${from}..${to}] range`)
    
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
    this.requireObjectType_()
    this.requireCount_(from)
    this.requireCount_(to)

    this.predicates_.push(input => {
      const count = Object.keys(input).length
      return count < from || count > to
    })
    this.predicateDescriptions_.push(`with property amount not in [${from}..${to}] range`)

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
    this.requirePredicate_(predicate)
    this.requirePropertiesSet_()

    this.predicates_.push(input => Object.values(predicate(input)).every(condition => condition === true))
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
    this.requireObjectTypeForGetter_()
    return [...this.requiredProperties_]
  }

  /**
   * Optional properties.
   * 
   * @type {Array.<string>}
   */
  get expectedOptionalProperties() {
    this.requireObjectTypeForGetter_()
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

  /**
   * Converts object to string.
   * 
   * @returns {string} - A string representation.
   */
  toString() {
    return this.description
  }
}
