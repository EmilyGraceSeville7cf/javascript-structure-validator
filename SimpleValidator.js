/**
 * Basic validator.
 */
class SimpleValidator {
  /**
   * @param {string} property
   */
  isPrivateProperty_(property) {
    return property.endsWith("_")
  }

  requireSomeTypeMessage_() {
    return `Constraint, getter or input for ${this.jsonType_} is expected (constraint can't be set, getter can't be invoked, or input is not compatible with ${this.jsonType_} type)`
  }

  requireStringType_() {
    if (this.jsTypePredicate_ !== Basic.isString)
      throw new Error(this.requireSomeTypeMessage_())
  }

  requireObjectType_() {
    if (this.jsTypePredicate_ !== Basic.isObject)
      throw new Error(this.requireSomeTypeMessage_())
  }

  requireArrayType_() {
    if (this.jsTypePredicate_ !== Basic.isArray)
      throw new Error(this.requireSomeTypeMessage_())
  }

  /**
   * @param {any} input
   */
  requireSameType_(input) {
    if (!this.jsTypePredicate_(input))
      throw new Error(this.requireSomeTypeMessage_())
  }

  requirePropertiesSet_() {
    this.requireObjectType_()

    if (this.requiredProperties_.length === 0 && this.optionalProperties_.length === 0)
      throw new Error("Required or optional properties are expected to be defined (actual value: <no required and optional properties>)")
  }

  requireRequiredPropertiesAndOptionalNotIntersect_() {
    const intersection = this.requiredProperties_.filter(property => this.optionalProperties_.includes(property))

    const properties = JSON.stringify({
      required: this.requiredProperties_,
      optional: this.optionalProperties_
    })

    if (intersection.length !== 0)
      throw new Error(`Required and optional properties are expected not to intersect (actual value: ${properties})`)
  }

  /**
   * @param {object} properties
   */
  requirePublicProperties_(properties) {
    for (let property in properties)
      if (this.isPrivateProperty_(property))
        throw new Error(`Public properties without leading dash are expected (actual value: ${property})`)
  }

  /**
   * @param {any} value
   */
  requireTrue_(value) {
    if (value !== true)
      throw new Error(`Required or optional property constraint expected to be true value (actual value: ${value})`)
  }

  /**
   * @param {string} value
   * @param {string} argumentName
   */
  requireCount_(value, argumentName) {
    Basic.requireNumber(value, argumentName)

    if (value < 0)
      throw new Error(`Count expected to be a not negative number (actual value: ${value})`)
  }

  /**
   * @param {any} from
   * @param {any} to
   */
  requireRange_(from, to) {
    this.requireCount_(from, "from")
    this.requireCount_(to, "to")

    if (from > to)
      throw new Error(`Range expected to have correct boundaries (actual range: [${from}..${to}])`)
  }

  /**
   * @param {string} name
   */
  tryInvoke_(name) {
    if (this.alreadyInvoked_.has(name))
      throw new Error(`Method ${name} is already invoked, remove any futher calls`)

    this.alreadyInvoked_.add(name)
  }

  /**
   * @param {RegExp} regex
   */
  regexToPlainString_(regex) {
    return `${regex}`.replace(/^\/|\/$/g, "")
  }

  /**
   * @param {object} schema
   * @param {object} simpleSubschemas
   * @param {ActionInfo_} action
   */
  addValueConstraints_(schema, simpleSubschemas, action) {
    switch (action.kind) {
      case ActionMode.LESS_THAN:
        schema.exclusiveMaximum = action.value
        break
      case ActionMode.GREATER_THAN:
        schema.exclusiveMinimum = action.value
        break
      case ActionMode.LESS_THAN_OR_EQUAL_TO:
        schema.maximum = action.value
        break
      case ActionMode.GREATER_THAN_OR_EQUAL_TO:
        schema.minimum = action.value
        break
      case ActionMode.EQUAL_TO:
        schema.const = action.value
        break
      case ActionMode.NOT_EQUAL_TO:
        simpleSubschemas.push({
          not: {
            const: action.value
          }
        })
        break
      case ActionMode.IN_RANGE:
        schema.minimum = action.value[0]
        schema.maximum = action.value[1]
        break
      case ActionMode.NOT_IN_RANGE:
        simpleSubschemas.push({
          not: {
            minimum: action.value[0],
            maximum: action.value[1]
          }
        })
        break
      case ActionMode.MATCH:
        schema.pattern = `${this.regexToPlainString_(action.value)}`
        break
      case ActionMode.NOT_MATCH:
        simpleSubschemas.push({
          not: {
            pattern: `${this.regexToPlainString_(action.value)}`
          }
        })
        break
      case ActionMode.BE_ONE_OF:
        schema.enum = action.value
        break
      case ActionMode.NOT_BE_ONE_OF:
        simpleSubschemas.push({
          not: {
            enum: action.value
          }
        })
        break
    }
  }

  /**
   * @param {object} schema
   * @param {object} simpleSubschemas
   * @param {ActionInfo_} action
   */
  addLengthConstraints_(schema, simpleSubschemas, action) {
    switch (action.kind) {
      case ActionMode.LESS_THAN:
        schema.maxLength = action.value - 1
        break
      case ActionMode.GREATER_THAN:
        schema.minLength = action.value + 1
        break
      case ActionMode.LESS_THAN_OR_EQUAL_TO:
        schema.maxLength = action.value
        break
      case ActionMode.GREATER_THAN_OR_EQUAL_TO:
        schema.minLength = action.value
        break
      case ActionMode.EQUAL_TO:
        schema.minLength = action.value
        schema.maxLength = action.value
        break
      case ActionMode.NOT_EQUAL_TO:
        simpleSubschemas.push({
          not: {
            minLength: action.value,
            maxLength: action.value
          }
        })
        break
      case ActionMode.IN_RANGE:
        schema.minLength = action.value[0]
        schema.maxLength = action.value[1]
        break
      case ActionMode.NOT_IN_RANGE:
        simpleSubschemas.push({
          not: {
            minLength: action.value[0],
            maxLength: action.value[1]
          }
        })
        break
    }
  }

  /**
   * @param {object} schema
   * @param {object} simpleSubschemas
   * @param {ActionInfo_} action
   */
  addItemCountConstraints_(schema, simpleSubschemas, action) {
    switch (action.kind) {
      case ActionMode.LESS_THAN:
        schema.maxItems = action.value - 1
        break
      case ActionMode.GREATER_THAN:
        schema.minItems = action.value + 1
        break
      case ActionMode.LESS_THAN_OR_EQUAL_TO:
        schema.maxItems = action.value
        break
      case ActionMode.GREATER_THAN_OR_EQUAL_TO:
        schema.minItems = action.value
        break
      case ActionMode.EQUAL_TO:
        schema.minItems = action.value
        schema.maxItems = action.value
        break
      case ActionMode.NOT_EQUAL_TO:
        simpleSubschemas.push({
          not: {
            minItems: action.value,
            maxItems: action.value
          }
        })
        break
      case ActionMode.IN_RANGE:
        schema.minItems = action.value[0]
        schema.maxItems = action.value[1]
        break
      case ActionMode.NOT_IN_RANGE:
        simpleSubschemas.push({
          not: {
            minItems: action.value[0],
            maxItems: action.value[1]
          }
        })
        break
    }
  }

  /**
   * @param {object} schema
   * @param {object} simpleSubschemas
   * @param {ActionInfo_} action
   */
  addPropertyCountConstraints_(schema, simpleSubschemas, action) {
    switch (action.kind) {
      case ActionMode.LESS_THAN:
        schema.maxProperties = action.value - 1
        break
      case ActionMode.GREATER_THAN:
        schema.minProperties = action.value + 1
        break
      case ActionMode.LESS_THAN_OR_EQUAL_TO:
        schema.maxProperties = action.value
        break
      case ActionMode.GREATER_THAN_OR_EQUAL_TO:
        schema.minProperties = action.value
        break
      case ActionMode.EQUAL_TO:
        schema.minProperties = action.value
        schema.maxProperties = action.value
        break
      case ActionMode.NOT_EQUAL_TO:
        simpleSubschemas.push({
          not: {
            minProperties: action.value,
            maxProperties: action.value
          }
        })
        break
      case ActionMode.IN_RANGE:
        schema.minProperties = action.value[0]
        schema.maxProperties = action.value[1]
        break
      case ActionMode.NOT_IN_RANGE:
        simpleSubschemas.push({
          not: {
            minProperties: action.value[0],
            maxProperties: action.value[1]
          }
        })
        break
    }
  }

  /**
   * @param {object} schema
   * @param {ActionInfo_} action
   */
  addProperties_(schema, action) {
    let propertySchemas = {}
    Object.keys(action.value).forEach(property => propertySchemas[property] = action.value[property].toJSONSchema())
    schema.properties = propertySchemas
  }

  /**
   * @param {BaseType} type - A type.
   */
  constructor(type) {
    Basic.requireSupported(type, "type")

    /**
     * @type {Set.<string>}
     */
    this.alreadyInvoked_ = new Set()

    let supportedTypes = {
      boolean: new SupportedTypeMapping_("boolean", Basic.isBoolean),
      number: new SupportedTypeMapping_("number", Basic.isNumber),
      integer: new SupportedTypeMapping_("integer", Basic.isInteger),
      string: new SupportedTypeMapping_("string", Basic.isString),
      bigint: new SupportedTypeMapping_("number", Basic.isBigint),
      array: new SupportedTypeMapping_("array", Basic.isArray),
      object: new SupportedTypeMapping_("object", Basic.isObject)
    }

    this.validatorType_ = type
    this.jsonType_ = supportedTypes[type].jsonType
    this.jsTypePredicate_ = supportedTypes[type].jsPredicate

    this.actions_ = [new ActionInfo_(ActionMode.EQUAL_TO,
      ActionTargetMode.TYPE,
      null,
      this.jsTypePredicate_)]

    this.requiredProperties_ = []
    this.optionalProperties_ = []
    this.minimumExample_ = undefined
    this.maximumExample_ = undefined
    this.description_ = undefined
    this.default_ = undefined
  }

  /**
   * Clone the current validator.
   * 
   * @returns {SimpleValidator} - A validator clone.
   */
  clone() {
    let validator = new SimpleValidator(this.validatorType_)
    validator.alreadyInvoked_ = new Set(this.alreadyInvoked_)
    validator.actions_ = Array.from(this.actions_)
    validator.requiredProperties_ = Array.from(this.requiredProperties_)
    validator.optionalProperties_ = Array.from(this.optionalProperties_)
    validator.minimumExample_ = this.minimumExample_
    validator.maximumExample_ = this.maximumExample_
    validator.description_ = this.description_
    validator.default_ = this.default_

    return validator
  }

  /**
   * Add a description.
   * 
   * @param {string} description - A description.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withDescription(description) {
    this.tryInvoke_("withDescription")
    Basic.requireString(description, "description")

    this.description_ = description

    return this
  }

  /**
   * Add a default value.
   * 
   * @param {string} value - A default value.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withDefault(value) {
    this.tryInvoke_("withDefault")
    this.requireSameType_(value)

    this.default_ = value
    return this
  }

  /**
   * Require value to be less than a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  lessThan(constant) {
    this.tryInvoke_("lessThan")
    this.requireSameType_(constant)

    this.actions_.push(new ActionInfo_(ActionMode.LESS_THAN,
      ActionTargetMode.VALUE,
      constant,
      input => input < constant))

    this.maximumExample_ = constant - 1

    return this
  }

  /**
   * Require value to be greater than a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  greaterThan(constant) {
    this.tryInvoke_("greaterThan")
    this.requireSameType_(constant)

    this.actions_.push(new ActionInfo_(ActionMode.GREATER_THAN,
      ActionTargetMode.VALUE,
      constant,
      input => input > constant))

    this.minimumExample_ = constant + 1

    return this
  }

  /**
   * Require value to be less than or equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  lessThanOrEqualTo(constant) {
    this.tryInvoke_("lessThanOrEqualTo")
    this.requireSameType_(constant)

    this.actions_.push(new ActionInfo_(ActionMode.LESS_THAN_OR_EQUAL_TO,
      ActionTargetMode.VALUE,
      constant,
      input => input <= constant))

    this.maximumExample_ = constant

    return this
  }

  /**
   * Require value to be greater than or equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  greaterThanOrEqualTo(constant) {
    this.tryInvoke_("greaterThanOrEqualTo")
    this.requireSameType_(constant)

    this.actions_.push(new ActionInfo_(ActionMode.GREATER_THAN_OR_EQUAL_TO,
      ActionTargetMode.VALUE,
      constant,
      input => input >= constant))

    this.minimumExample_ = constant

    return this
  }

  /**
   * Require value to be equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  equalTo(constant) {
    this.tryInvoke_("equalTo")
    this.requireSameType_(constant)

    this.actions_.push(new ActionInfo_(ActionMode.EQUAL_TO,
      ActionTargetMode.VALUE,
      constant,
      input => input === constant))

    this.minimumExample_ = constant
    this.maximumExample_ = constant

    return this
  }

  /**
   * Require value to be not equal to a constant.
   * 
   * @param {BaseComparableType} constant - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  notEqualTo(constant) {
    this.requireSameType_(constant)

    this.actions_.push(new ActionInfo_(ActionMode.NOT_EQUAL_TO,
      ActionTargetMode.VALUE,
      constant,
      input => input !== constant))

    return this
  }

  /**
   * Require value to be within a range.
   * 
   * @param {BaseComparableType} from - A lowest boundary.
   * @param {BaseComparableType} to - A highest boundary.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  inRange(from, to) {
    this.tryInvoke_("inRange")
    this.requireSameType_(from)
    this.requireSameType_(to)

    if (from > to)
      throw new Error(`Range expected to have correct boundaries (actual range: [${from}..${to}])`)

    this.actions_.push(new ActionInfo_(ActionMode.IN_RANGE,
      ActionTargetMode.VALUE,
      [from, to],
      input => input >= from && input <= to))

    this.minimumExample_ = from
    this.maximumExample_ = to

    return this
  }

  /**
   * Require value to be outside of a range.
   * 
   * @param {BaseComparableType} from - A lowest boundary.
   * @param {BaseComparableType} to - A highest boundary.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  notInRange(from, to) {
    this.requireSameType_(from)
    this.requireSameType_(to)

    this.actions_.push(new ActionInfo_(ActionMode.NOT_IN_RANGE,
      ActionTargetMode.VALUE,
      [from, to],
      input => input < from || input > to))

    return this
  }

  /**
   * Require value to be equal to one of constants.
   * 
   * @param {Array} constants - Constants.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withValueOneOf(...constants) {
    Basic.requireArray(constants, "constants")
    constants.forEach(item => this.requireSameType_(item))

    this.actions_.push(new ActionInfo_(ActionMode.BE_ONE_OF,
      ActionTargetMode.VALUE,
      constants,
      input => constants.includes(input)))

    return this
  }

  /**
   * Require value to be not equal to one of constants.
   * 
   * @param {Array} constants - Constants.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withValueNotOneOf(...constants) {
    Basic.requireArray(constants, "constants")
    constants.forEach(item => this.requireSameType_(item))

    this.actions_.push(new ActionInfo_(ActionMode.NOT_BE_ONE_OF,
      ActionTargetMode.VALUE,
      constants,
      input => !constants.includes(input)))

    return this
  }

  /**
   * Require length to be shorter than a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withLengthLessThan(count) {
    this.tryInvoke_("withLengthLessThan")
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.LESS_THAN,
      ActionTargetMode.LENGTH,
      count,
      input => input.length < count))

    return this
  }

  /**
   * Require length to be longer than a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withLengthGreaterThan(count) {
    this.tryInvoke_("withLengthGreaterThan")
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.GREATER_THAN,
      ActionTargetMode.LENGTH,
      count,
      input => input.length > count))

    return this
  }

  /**
   * Require length to be shorter than or is a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withLengthLessThanOrEqualTo(count) {
    this.tryInvoke_("withLengthLessThanOrEqualTo")
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.LESS_THAN_OR_EQUAL_TO,
      ActionTargetMode.LENGTH,
      count,
      input => input.length <= count))

    return this
  }

  /**
   * Require length to be longer than or is a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withLengthGreaterThanOrEqualTo(count) {
    this.tryInvoke_("withLengthGreaterThanOrEqualTo")
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.GREATER_THAN_OR_EQUAL_TO,
      ActionTargetMode.LENGTH,
      count,
      input => input.length >= count))

    return this
  }

  /**
   * Require length to be equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withLengthEqualTo(count) {
    this.tryInvoke_("withLengthEqualTo")
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.EQUAL_TO,
      ActionTargetMode.LENGTH,
      count,
      input => input.length === count))

    return this
  }

  /**
   * Require length not to be equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withLengthNotEqualTo(count) {
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.predicates_.push(input => input.length !== count)
    this.actions_.push(new ActionInfo_(ActionMode.NOT_EQUAL_TO,
      ActionTargetMode.LENGTH,
      count,
      input => input.length !== count))

    return this
  }

  /**
   * Require length to be within a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withLengthInRange(from, to) {
    this.tryInvoke_("withLengthInRange")
    this.requireStringType_()
    this.requireRange_(from, to)

    this.actions_.push(new ActionInfo_(ActionMode.IN_RANGE,
      ActionTargetMode.LENGTH,
      [from, to],
      input => input.length >= from && input.length <= to))

    return this
  }

  /**
   * Require length to be outside of a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withLengthNotInRange(from, to) {
    this.requireStringType_()
    this.requireRange_(from, to)

    this.actions_.push(new ActionInfo_(ActionMode.NOT_IN_RANGE,
      ActionTargetMode.LENGTH,
      [from, to],
      input => input.length < from || input.length > to))

    return this
  }

  /**
   * Require value to match a regular expression.
   * 
   * @param {RegExp} regex - A regular expression.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  matching(regex) {
    this.tryInvoke_("matching")
    this.requireStringType_()
    Basic.requireRegExp(regex, "regex")

    this.actions_.push(new ActionInfo_(ActionMode.MATCH,
      ActionTargetMode.VALUE,
      regex,
      input => regex.test(input)))

    return this
  }

  /**
   * Require value not to match a regular expression.
   * 
   * @param {RegExp} regex - A regular expression.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  notMatching(regex) {
    this.requireStringType_()
    Basic.requireRegExp(regex, "regex")

    this.actions_.push(new ActionInfo_(ActionMode.NOT_MATCH,
      ActionTargetMode.VALUE,
      regex,
      input => !regex.test(input)))

    return this
  }

  /**
   * Require items to satisfy their constraints.
   * 
   * @param {SimpleValidator | ComplexValidator} items - Constraints.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItems(items) {
    this.tryInvoke_("withItems")
    this.requireArrayType_()
    Basic.requireValidator(items, "items")

    this.actions_.push(new ActionInfo_(ActionMode.BE,
      ActionTargetMode.ITEMS,
      items,
      input => {
        for (let item of input)
          if (!items.validate(item))
            return false

        return true
      }))

    return this
  }

  /**
   * Require item count to be less than a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItemCountLessThan(count) {
    this.tryInvoke_("withItemCountLessThan")
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.LESS_THAN,
      ActionTargetMode.ITEM_COUNT,
      count,
      input => input.length < count))

    return this
  }

  /**
   * Require item count to be greater than a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItemCountGreaterThan(count) {
    this.tryInvoke_("withItemCountGreaterThan")
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.GREATER_THAN,
      ActionTargetMode.ITEM_COUNT,
      count,
      input => input.length > count))

    return this
  }

  /**
   * Require item count to be less than or equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItemCountLessThanOrEqualTo(count) {
    this.tryInvoke_("withItemCountLessThanOrEqualTo")
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.LESS_THAN_OR_EQUAL_TO,
      ActionTargetMode.ITEM_COUNT,
      count,
      input => input.length <= count))

    return this
  }

  /**
   * Require item count to be greater than or equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItemCountGreaterThanOrEqualTo(count) {
    this.tryInvoke_("withItemCountGreaterThanOrEqualTo")
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.GREATER_THAN_OR_EQUAL_TO,
      ActionTargetMode.ITEM_COUNT,
      count,
      input => input.length >= count))

    return this
  }

  /**
   * Require item count to be equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItemCountEqualTo(count) {
    this.tryInvoke_("withItemCountEqualTo")
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.EQUAL_TO,
      ActionTargetMode.ITEM_COUNT,
      count,
      input => input.length === count))

    return this
  }

  /**
   * Require item count not to be equal to a constant.
   * 
   * @param {number} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItemCountNotEqualTo(count) {
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.NOT_EQUAL_TO,
      ActionTargetMode.ITEM_COUNT,
      count,
      input => input.length !== count))

    return this
  }

  /**
   * Require length to be within a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItemCountInRange(from, to) {
    this.tryInvoke_("withItemCountInRange")
    this.requireArrayType_()
    this.requireRange_(from, to)

    this.actions_.push(new ActionInfo_(ActionMode.IN_RANGE,
      ActionTargetMode.ITEM_COUNT,
      [from, to],
      input => input.length >= from && input.length <= to))

    return this
  }

  /**
   * Require length to be outside of a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withItemCountNotInRange(from, to) {
    this.requireArrayType_()
    this.requireRange_(from, to)

    this.actions_.push(new ActionInfo_(ActionMode.NOT_IN_RANGE,
      ActionTargetMode.ITEM_COUNT,
      [from, to],
      input => input.length < from || input.length > to))

    return this
  }

  /**
   * Require specified properties.
   * 
   * @param {Object.<string, SimpleValidator>} properties - A constraint.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withRequiredProperties(properties) {
    this.tryInvoke_("withRequiredProperties")
    this.requireObjectType_()
    Basic.requireObject(properties, "properties")
    this.requirePublicProperties_(properties)

    for (let requiredProperty in properties)
      this.requiredProperties_.push(requiredProperty)

    this.requireRequiredPropertiesAndOptionalNotIntersect_()

    const nestedDescriptions = []
    Object.keys(properties).forEach(property => nestedDescriptions.push(`${property}: ${properties[property].description}`))

    this.actions_.push(new ActionInfo_(ActionMode.BE,
      ActionTargetMode.REQUIRED_PROPERTIES,
      properties,
      input => {
        for (let requiredProperty in properties) {
          if (!input.hasOwnProperty(requiredProperty))
            return false

          let validator = properties[requiredProperty]

          if (typeof validator !== "boolean") {
            Basic.requireValidator(validator, "validator")

            if (!validator.validate(input[requiredProperty]))
              return false
          } else
            this.requireTrue_(validator)
        }

        return true
      }))

    return this
  }

  /**
   * Permit specified optional properties.
   * 
   * @param {Object.<string, SimpleValidator>} properties - A constraint.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withOptionalProperties(properties) {
    this.tryInvoke_("withOptionalProperties")
    this.requireObjectType_()
    Basic.requireObject(properties, "properties")
    this.requirePublicProperties_(properties)

    for (let optionalProperty in properties)
      this.optionalProperties_.push(optionalProperty)

    this.requireRequiredPropertiesAndOptionalNotIntersect_()

    const nestedDescriptions = []
    Object.keys(properties).forEach(property => nestedDescriptions.push(`${property}: ${properties[property].description}`))

    this.actions_.push(new ActionInfo_(ActionMode.BE,
      ActionTargetMode.OPTIONAL_PROPERTIES,
      properties,
      input => {
        for (let optionalProperty in properties) {
          let validator = properties[optionalProperty]

          if (typeof validator !== "boolean") {
            Basic.requireValidator(validator, "validator")

            if (input.hasOwnProperty(optionalProperty) && !validator.validate(input[optionalProperty]))
              return false
          } else
            this.requireTrue_(validator)
        }

        return true
      }
    ))

    return this
  }

  /**
   * Permit additional properties.
   * 
   * @param {SimpleValidator | ComplexValidator} properties - A constraint.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withAdditionalProperties(properties) {
    this.tryInvoke_("withAdditionalProperties")
    this.requireObjectType_()
    Basic.requireValidator(properties, "properties")

    this.actions_.push(new ActionInfo_(ActionMode.BE,
      ActionTargetMode.ADDITIONAL_PROPERTIES,
      properties,
      input => {
        const additionalProperties = Object.keys(input).filter(property => {
          return !this.requiredProperties_.includes(property) && !this.optionalProperties_.includes(property)
        })

        for (let additionalProperty of additionalProperties)
          if (!properties.validate(input[additionalProperty]))
            return false

        return true
      }
    ))

    return this
  }

  /**
   * Require no additional properties.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withNotAdditionalProperties() {
    this.tryInvoke_("withNotAdditionalProperties")
    this.requirePropertiesSet_()

    this.actions_.push(new ActionInfo_(ActionMode.NOT_HAVE,
      ActionTargetMode.ADDITIONAL_PROPERTIES,
      null,
      input => {
        for (let inputProperty in input) {
          if (this.isPrivateProperty_(inputProperty))
            continue

          if (!this.requiredProperties_.includes(inputProperty) && !this.optionalProperties_.includes(inputProperty))
            return false
        }

        return true
      }
    ))

    return this
  }

  /**
   * Require property amount to be less than a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withPropertyCountLessThan(count) {
    this.tryInvoke_("withPropertyCountLessThan")
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.LESS_THAN,
      ActionTargetMode.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length < count))

    return this
  }

  /**
   * Require property amount to be greater than a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withPropertyCountGreaterThan(count) {
    this.tryInvoke_("withPropertyCountGreaterThan")
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.GREATER_THAN,
      ActionTargetMode.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length > count))

    return this
  }

  /**
   * Require property amount to be less than or equal to a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withPropertyCountLessThanOrEqualTo(count) {
    this.tryInvoke_("withPropertyCountLessThanOrEqualTo")
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.LESS_THAN_OR_EQUAL_TO,
      ActionTargetMode.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length <= count))

    return this
  }

  /**
   * Require property amount to be greater than or equal to a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withPropertyCountGreaterThanOrEqualTo(count) {
    this.tryInvoke_("withPropertyCountGreaterThanOrEqualTo")
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.GREATER_THAN_OR_EQUAL_TO,
      ActionTargetMode.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length >= count))

    return this
  }

  /**
   * Require property amount to be equal to a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withPropertyCountEqualTo(count) {
    this.tryInvoke_("withPropertyCountEqualTo")
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.EQUAL_TO,
      ActionTargetMode.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length === count))

    return this
  }

  /**
   * Require property amount not to be equal to a constant.
   * 
   * @param {BaseComparableType} count - A constant.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withPropertyCountNotEqualTo(count) {
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ActionInfo_(ActionMode.NOT_EQUAL_TO,
      ActionTargetMode.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length !== count))

    return this
  }

  /**
   * Require property amount to be within a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withPropertyCountInRange(from, to) {
    this.tryInvoke_("withPropertyCountInRange")
    this.requireObjectType_()
    this.requireRange_(from, to)

    this.actions_.push(new ActionInfo_(ActionMode.IN_RANGE,
      ActionTargetMode.PROPERTY_COUNT,
      [from, to],
      input => {
        const count = Object.keys(input).length
        return count >= from && count <= to
      }))

    return this
  }

  /**
   * Require property amount to be outside of a range.
   * 
   * @param {number} from - A lowest boundary.
   * @param {number} to - A highest boundary.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  withPropertyCountNotInRange(from, to) {
    this.requireObjectType_()
    this.requireRange_(from, to)

    this.actions_.push(new ActionInfo_(ActionMode.NOT_IN_RANGE,
      ActionTargetMode.PROPERTY_COUNT,
      [from, to],
      input => {
        const count = Object.keys(input).length
        return count < from || count > to
      }))

    return this
  }

  /**
   * Require property relationships.
   * 
   * @param {WherePredicate} predicate - A predicate.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  where(predicate) {
    this.tryInvoke_("where")
    Basic.requireFunction(predicate, "predicate")
    this.requirePropertiesSet_()

    this.actions_.push(new ActionInfo_(ActionMode.BE,
      ActionTargetMode.PROPERTIES,
      predicate,
      input => Object.values(predicate(input)).every(condition => condition === true)))

    return this
  }

  /**
   * Require value constraints.
   * 
   * @param {Predicate} predicate - A predicate.
   * 
   * @returns {SimpleValidator} - The current validator.
   */
  whereValue(predicate) {
    this.tryInvoke_("whereValue")
    Basic.requireFunction(predicate, "predicate")

    this.actions_.push(new ActionInfo_(ActionMode.BE,
      ActionTargetMode.VALUE,
      predicate,
      predicate))

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
    return this.actions_.map(action => action.validation(input)).every(result => result === true)
  }

  /**
   * An expected type.
   * 
   * @type {string}
   */
  get expectedType() {
    return this.validatorType_
  }

  /**
   * Required properties.
   * 
   * @type {Array.<string>}
   */
  get expectedRequiredProperties() {
    this.requireObjectType_()
    return [...this.requiredProperties_]
  }

  /**
   * Optional properties.
   * 
   * @type {Array.<string>}
   */
  get expectedOptionalProperties() {
    this.requireObjectType_()
    return [...this.optionalProperties_]
  }

  /**
   * Convert object to JSON schema (draft 07) representation.
   * 
   * @returns {object}
   */
  toJSONSchema() {
    let schema = {}
    let simpleSubschemas = []

    if (typeof this.description_ !== "undefined")
      schema.description = this.description_
    if (typeof this.default_ !== "undefined")
      schema.default = this.default_

    let examples = []
    if (typeof this.minimumExample_ !== "undefined")
      examples.push(this.minimumExample_)
    if (typeof this.maximumExample_ !== "undefined")
      examples.push(this.maximumExample_)

    if (examples.length > 0)
      schema.examples = examples

    this.actions_.forEach(action => {
      switch (action.target) {
        case ActionTargetMode.TYPE:
          schema.type = this.jsonType_
          break

        case ActionTargetMode.VALUE:
          this.addValueConstraints_(schema, simpleSubschemas, action)
          break

        case ActionTargetMode.LENGTH:
          this.addLengthConstraints_(schema, simpleSubschemas, action)
          break

        case ActionTargetMode.ITEM_COUNT:
          this.addItemCountConstraints_(schema, simpleSubschemas, action)
          break

        case ActionTargetMode.PROPERTY_COUNT:
          this.addPropertyCountConstraints_(schema, simpleSubschemas, action)
          break

        case ActionTargetMode.ITEMS:
          schema.type = "array"
          schema.items = action.value.toJSONSchema()
          break

        case ActionTargetMode.REQUIRED_PROPERTIES:
          this.addProperties_(schema, action)
          schema.required = Object.keys(action.value)
          break

        case ActionTargetMode.OPTIONAL_PROPERTIES:
          this.addProperties_(schema, action)
          break

        case ActionTargetMode.ADDITIONAL_PROPERTIES:
          switch (action.kind) {
            case ActionMode.BE:
              schema.additionalProperties = action.value.toJSONSchema()
              break
            case ActionMode.NOT_HAVE:
              schema.additionalProperties = false
              break
          }
          break

        case ActionTargetMode.PROPERTIES:
          schema.$comment = "This schema doesn't contain validations performed in JavaScript as they can't expressed within JSON schema (predicate-based validation is omitted)"
          break
      }
    })

    if (simpleSubschemas.length > 0)
      schema.allOf = simpleSubschemas

    return schema
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
