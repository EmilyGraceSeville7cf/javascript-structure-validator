/**
 * A validator that checks objects against schemas created by itself.
 * JSON schema and JSDoc generation is also supported from schemas.
 * 
 * @summary Validates objects.
 */
class UniversalValidator {
  /**
   * @type {object}
   */
  get requiredPropertiesDescriptionsData_() {
    if (this.validatorType_ !== "object")
      return this.descriptionData

    let tree = {}
    for (let property in this.requiredPropertiesValidators_) {
      const validator = this.requiredPropertiesValidators_[property]

      if (!validator.containsNestedValidators) {
        if (!ArrayUtils.equal(validator.jsTypesData, ["object"]))
          tree[property] = validator.descriptionData
        else {
          tree[property] = validator.requiredPropertiesDescriptionsData_

          if (typeof validator.descriptionData !== "undefined")
            tree[property] = { $name: validator.descriptionData, ...tree[property] }
        }
      } else
        tree[property] = validator.requiredPropertiesDescriptionsData_
    }

    return tree
  }

  /**
   * @type {object}
   */
  get optionalPropertiesDescriptionsData_() {
    if (this.validatorType_ !== "object")
      return this.descriptionData

    let tree = {}
    for (let property in this.optionalPropertiesValidators_) {
      const validator = this.optionalPropertiesValidators_[property]

      if (!validator.containsNestedValidators) {
        if (!ArrayUtils.equal(validator.jsTypesData, ["object"]))
          tree[property] = validator.descriptionData
        else {
          tree[property] = validator.optionalPropertiesDescriptionsData_

          if (typeof validator.descriptionData !== "undefined")
            tree[property] = { $name: validator.descriptionData, ...tree[property] }
        }
      } else
        tree[property] = validator.optionalPropertiesDescriptionsData_
    }

    return tree
  }

  /**
   * @param {string} property
   */
  isPrivateProperty_(property) {
    return property.endsWith("_")
  }

  /**
   * @param {string} property
   */
  isReservedProperty_(property) {
    return ["$name"].includes(property)
  }

  requireSomeTypeMessage_() {
    return `Constraint, getter or input for ${this.jsonType_} is expected`
  }

  requireTypeMessage_() {
    return `Type in constructor is expected to be set`
  }

  requireStringType_() {
    if (this.jsTypePredicate_ !== BasicUtils.isString)
      throw new Error(this.requireSomeTypeMessage_())
  }

  requireObjectType_() {
    if (this.jsTypePredicate_ !== BasicUtils.isObject)
      throw new Error(this.requireSomeTypeMessage_())
  }

  requireArrayType_() {
    if (this.jsTypePredicate_ !== BasicUtils.isArray)
      throw new Error(this.requireSomeTypeMessage_())
  }

  requireNotSymbolType_() {
    if (this.jsTypePredicate_ === BasicUtils.isSymbol)
      throw new Error(`Constraint, getter or input for any type except symbol is expected`)
  }

  requireType_() {
    if (typeof this.jsTypePredicate_ === "undefined")
      throw new Error(this.requireTypeMessage_())
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
      throw new Error("Required or optional properties are expected to be defined")
  }

  requireRequiredPropertiesAndOptionalNotIntersect_() {
    const intersection = this.requiredProperties_.filter(property => this.optionalProperties_.includes(property))

    if (intersection.length !== 0)
      throw new Error(`Required and optional properties are expected not to intersect`)
  }

  /**
   * @param {object} properties
   */
  requirePublicProperties_(properties) {
    for (let property in properties)
      if (this.isPrivateProperty_(property))
        throw new Error(`Public properties without leading dash are expected`)
  }

  /**
   * @param {object} properties
   */
  requireNotReservedProperties_(properties) {
    for (let property in properties)
      if (this.isReservedProperty_(property))
        throw new Error(`Not reserved properties (not $name) expected`)
  }

  /**
   * @param {any} value
   */
  requireTrue_(value) {
    if (value !== true)
      throw new Error(`Required or optional property constraint expected to be true value`)
  }

  /**
   * @param {string} value
   * @param {string} argumentName
   */
  requireCount_(value, argumentName) {
    BasicUtils.requireNumber(value, argumentName)

    if (value < 0)
      throw new Error(`Count expected to be a not negative number`)
  }

  /**
   * @param {any} from
   * @param {any} to
   */
  requireRange_(from, to) {
    this.requireCount_(from, "from")
    this.requireCount_(to, "to")

    if (from > to)
      throw new Error(`Range expected to have correct boundaries`)
  }

  /**
   * @param {object} properties
   */
  deleteValidatorPlaceholders_(properties) {
    for (let property in properties)
      if (!BasicUtils.isValidator(properties[property]))
        delete properties[property]
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
   * @param {ReadonlyActionInfo_} action
   */
  addValueConstraints_(schema, simpleSubschemas, action) {
    switch (action.operation) {
      case OperationType.LESS_THAN:
        schema.exclusiveMaximum = action.value
        break
      case OperationType.GREATER_THAN:
        schema.exclusiveMinimum = action.value
        break
      case OperationType.LESS_THAN_OR_EQUAL_TO:
        schema.maximum = action.value
        break
      case OperationType.GREATER_THAN_OR_EQUAL_TO:
        schema.minimum = action.value
        break
      case OperationType.EQUAL_TO:
        schema.const = action.value
        break
      case OperationType.NOT_EQUAL_TO:
        simpleSubschemas.push({
          not: {
            const: action.value
          }
        })
        break
      case OperationType.IN_RANGE:
        schema.minimum = action.value[0]
        schema.maximum = action.value[1]
        break
      case OperationType.NOT_IN_RANGE:
        simpleSubschemas.push({
          not: {
            minimum: action.value[0],
            maximum: action.value[1]
          }
        })
        break
      case OperationType.MATCH:
        schema.pattern = `${this.regexToPlainString_(action.value)}`
        break
      case OperationType.NOT_MATCH:
        simpleSubschemas.push({
          not: {
            pattern: `${this.regexToPlainString_(action.value)}`
          }
        })
        break
      case OperationType.BE_ONE_OF:
        schema.enum = action.value
        break
      case OperationType.NOT_BE_ONE_OF:
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
   * @param {ReadonlyActionInfo_} action
   */
  addLengthConstraints_(schema, simpleSubschemas, action) {
    switch (action.operation) {
      case OperationType.LESS_THAN:
        schema.maxLength = action.value - 1
        break
      case OperationType.GREATER_THAN:
        schema.minLength = action.value + 1
        break
      case OperationType.LESS_THAN_OR_EQUAL_TO:
        schema.maxLength = action.value
        break
      case OperationType.GREATER_THAN_OR_EQUAL_TO:
        schema.minLength = action.value
        break
      case OperationType.EQUAL_TO:
        schema.minLength = action.value
        schema.maxLength = action.value
        break
      case OperationType.NOT_EQUAL_TO:
        simpleSubschemas.push({
          not: {
            minLength: action.value,
            maxLength: action.value
          }
        })
        break
      case OperationType.IN_RANGE:
        schema.minLength = action.value[0]
        schema.maxLength = action.value[1]
        break
      case OperationType.NOT_IN_RANGE:
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
   * @param {ReadonlyActionInfo_} action
   */
  addItemCountConstraints_(schema, simpleSubschemas, action) {
    switch (action.operation) {
      case OperationType.LESS_THAN:
        schema.maxItems = action.value - 1
        break
      case OperationType.GREATER_THAN:
        schema.minItems = action.value + 1
        break
      case OperationType.LESS_THAN_OR_EQUAL_TO:
        schema.maxItems = action.value
        break
      case OperationType.GREATER_THAN_OR_EQUAL_TO:
        schema.minItems = action.value
        break
      case OperationType.EQUAL_TO:
        schema.minItems = action.value
        schema.maxItems = action.value
        break
      case OperationType.NOT_EQUAL_TO:
        simpleSubschemas.push({
          not: {
            minItems: action.value,
            maxItems: action.value
          }
        })
        break
      case OperationType.IN_RANGE:
        schema.minItems = action.value[0]
        schema.maxItems = action.value[1]
        break
      case OperationType.NOT_IN_RANGE:
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
   * @param {ReadonlyActionInfo_} action
   */
  addPropertyCountConstraints_(schema, simpleSubschemas, action) {
    switch (action.operation) {
      case OperationType.LESS_THAN:
        schema.maxProperties = action.value - 1
        break
      case OperationType.GREATER_THAN:
        schema.minProperties = action.value + 1
        break
      case OperationType.LESS_THAN_OR_EQUAL_TO:
        schema.maxProperties = action.value
        break
      case OperationType.GREATER_THAN_OR_EQUAL_TO:
        schema.minProperties = action.value
        break
      case OperationType.EQUAL_TO:
        schema.minProperties = action.value
        schema.maxProperties = action.value
        break
      case OperationType.NOT_EQUAL_TO:
        simpleSubschemas.push({
          not: {
            minProperties: action.value,
            maxProperties: action.value
          }
        })
        break
      case OperationType.IN_RANGE:
        schema.minProperties = action.value[0]
        schema.maxProperties = action.value[1]
        break
      case OperationType.NOT_IN_RANGE:
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
   * @param {ReadonlyActionInfo_} action
   */
  addProperties_(schema, action) {
    let propertySchemas = {}
    Object.keys(action.value).forEach(property => propertySchemas[property] = action.value[property].toJSONSchema_())
    schema.properties = propertySchemas
  }

  /**
   * @param {any} value
   * 
   * @returns {any}
   */
  preprocessValue_(value) {
    if (this.propertyPreprocessors_.length === 0)
      return value

    let processedValue = null

    for (const preprocessor of this.propertyPreprocessors_) {
      processedValue = preprocessor(value)

      if (processedValue !== null && BasicUtils.isValidator(processedValue))
        return processedValue
    }

    throw new Error('No preprocessors handled the value successfully')
  }

  /**
   * @param {BaseType | JoinType_} type A type.
   */
  constructor(type) {
    if (BasicUtils.isSupportedTypeIdentifier(type)) {
      let supportedTypes = {
        boolean: new ReadonlySupportedTypeMapping_("boolean", BasicUtils.isBoolean),
        number: new ReadonlySupportedTypeMapping_("number", BasicUtils.isNumber),
        integer: new ReadonlySupportedTypeMapping_("integer", BasicUtils.isInteger),
        string: new ReadonlySupportedTypeMapping_("string", BasicUtils.isString),
        bigint: new ReadonlySupportedTypeMapping_("number", BasicUtils.isBigint),
        symbol: new ReadonlySupportedTypeMapping_(undefined, BasicUtils.isSymbol), // Symbols are not mappable to JSON schema
        array: new ReadonlySupportedTypeMapping_("array", BasicUtils.isArray),
        object: new ReadonlySupportedTypeMapping_("object", BasicUtils.isObject)
      }

      this.validatorType_ = type
      this.jsonType_ = supportedTypes[type].jsonType
      this.jsTypePredicate_ = supportedTypes[type].jsPredicate

      this.actions_ = [new ReadonlyActionInfo_(OperationType.EQUAL_TO,
        OperationTargetType.TYPE,
        null,
        this.jsTypePredicate_)]

      this.requiredProperties_ = []
      this.optionalProperties_ = []
      /**
       * @type {Object.<string, UniversalValidator>}
       */
      this.requiredPropertiesValidators_ = {}
      /**
       * @type {Object.<string, UniversalValidator>}
       */
      this.optionalPropertiesValidators_ = {}
      this.minimumExample_ = undefined
      this.maximumExample_ = undefined
      this.default_ = undefined
      this.itemValidator_ = undefined
      /**
       * @type {Array.<PropertyPreprocessor>}
       */
      this.propertyPreprocessors_ = []
    } else {
      const types = [...StringifiedTypes.baseTypeIdentifiers, "JoinType.ANY_OF", "JoinType.ONE_OF", "JoinType.ALL_OF"]

      if (![JoinType.ANY_OF, JoinType.ONE_OF, JoinType.ALL_OF].includes(type))
        throw TypeError(`Value type expected to be a ${types.join(" | ")} value (actual value: ${type})`)

      this.mode_ = type
    }

    /**
     * @type {Set.<string>}
     */
    this.alreadyInvoked_ = new Set()

    this.description_ = undefined

    /**
     * @type {Array.<UniversalValidator>}
     */
    this.nestedValidators_ = []
  }

  /**
   * A description.
   * 
   * @type {string}
   */
  get descriptionData() {
    return typeof this.description_ === "undefined" ? "" : this.description_
  }

  /**
   * Whether validator contains nested anyOf|oneOf|allOf validators.
   * 
   * @type {boolean}
   */
  get containsNestedValidators() {
    return typeof this.mode_ !== "undefined"
  }

  /**
   * Expected types.
   * If nested validators contain just nested validators an empty array is returned.
   * 
   * @type {Array.<string>}
   */
  get typesData() {
    if (!this.containsNestedValidators)
      return [this.validatorType_]

    const types = new Set(this.nestedValidators_.filter(validator => !validator.containsNestedValidators)
      .map(validator => validator.typesData).reduce((previous, current) => [...previous, ...current], []))

    return [...types]
  }

  /**
   * Expected JS types.
   * 
   * @type {Array.<string>}
   */
  get jsTypesData() {
    const supportedTypes = {
      boolean: "boolean",
      number: "number",
      integer: "number",
      string: "string",
      bigint: "bigint",
      symbol: "symbol",
      array: "Array",
      object: "object"
    }

    if (!this.containsNestedValidators) {
      if (this.validatorType_ !== "array" || typeof this.itemValidator_ === "undefined")
        return [supportedTypes[this.validatorType_]]

      if (!this.itemValidator_.containsNestedValidators)
        return [`Array.<${this.itemValidator_.jsTypesData[0]}>`]

      const simpleValidators = this.itemValidator_.nestedValidators_.filter(validator => !validator.containsNestedValidators)

      const types = new Set(simpleValidators
        .map(validator => validator.jsTypesData).reduce((previous, current) => [...previous, ...current], []))

      const result = [...types]
      if (result.length > 0)
        return [`Array.<${result.join(" | ")}>`]

      return ["Array"]
    }

    const simpleValidators = this.nestedValidators_.filter(validator => !validator.containsNestedValidators)
    const types = new Set(simpleValidators
      .map(validator => validator.jsTypesData).reduce((previous, current) => [...previous, ...current], []))

    const result = [...types]
    if (result.length > 0)
      return result

    return ["any"]
  }

  /**
   * Required properties.
   * 
   * @type {object}
   */
  get requiredPropertiesData() {
    if (this.validatorType_ !== "object")
      return {}

    let tree = {}
    for (let property in this.requiredPropertiesValidators_) {
      const validator = this.requiredPropertiesValidators_[property]

      if (!validator.containsNestedValidators) {
        if (!ArrayUtils.equal(validator.jsTypesData, ["object"]))
          tree[property] = validator.jsTypesData
        else
          tree[property] = validator.requiredPropertiesData
      } else
        tree[property] = validator.jsTypesData
    }

    return tree
  }

  /**
   * An optional properties tree.
   * 
   * @type {object}
   */
  get optionalPropertiesData() {
    if (this.validatorType_ !== "object")
      return {}

    let tree = {}
    for (let property in this.optionalPropertiesValidators_) {
      const validator = this.optionalPropertiesValidators_[property]

      if (!validator.containsNestedValidators) {
        if (!ArrayUtils.equal(validator.jsTypesData, ["object"]))
          tree[property] = validator.jsTypesData
        else
          tree[property] = validator.optionalPropertiesData
      } else
        tree[property] = validator.jsTypesData
    }

    return tree
  }

  /**
   * Required property's descriptions.
   * 
   * @type {object}
   */
  get requiredPropertiesDescriptionsData() {
    if (this.validatorType_ !== "object")
      return this.requiredPropertiesDescriptionsData_
    
    return {
      $name: this.descriptionData,
      ...this.requiredPropertiesDescriptionsData_
    }
  }

  /**
   * Optional property's descriptions.
   * 
   * @type {object}
   */
  get optionalPropertiesDescriptionsData() {
    if (this.validatorType_ !== "object")
      return this.optionalPropertiesDescriptionsData_
    
    return {
      $name: this.descriptionData,
      ...this.optionalPropertiesDescriptionsData_
    }
  }

  /**
   * Clone the current validator.
   * 
   * @returns {UniversalValidator} A validator clone.
   */
  clone() {
    let validator = new UniversalValidator(this.validatorType_)
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
   * @param {string} description A description.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withDescription(description) {
    this.tryInvoke_("withDescription")
    BasicUtils.requireString(description, "description")

    this.description_ = description

    return this
  }

  /**
   * Add a default value.
   * 
   * @param {string} value A default value.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withDefault(value) {
    this.tryInvoke_("withDefault")
    this.requireType_()
    this.requireNotSymbolType_()
    this.requireSameType_(value)

    this.default_ = value
    return this
  }

  /**
   * Require value to be less than a constant.
   * 
   * @param {BaseComparableType} constant A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  lessThan(constant) {
    this.tryInvoke_("lessThan")
    this.requireType_()
    this.requireNotSymbolType_()
    this.requireSameType_(constant)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.LESS_THAN,
      OperationTargetType.VALUE,
      constant,
      input => input < constant))

    this.maximumExample_ = constant - 1

    return this
  }

  /**
   * Require value to be greater than a constant.
   * 
   * @param {BaseComparableType} constant A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  greaterThan(constant) {
    this.tryInvoke_("greaterThan")
    this.requireType_()
    this.requireNotSymbolType_()
    this.requireSameType_(constant)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.GREATER_THAN,
      OperationTargetType.VALUE,
      constant,
      input => input > constant))

    this.minimumExample_ = constant + 1

    return this
  }

  /**
   * Require value to be less than or equal to a constant.
   * 
   * @param {BaseComparableType} constant A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  lessThanOrEqualTo(constant) {
    this.tryInvoke_("lessThanOrEqualTo")
    this.requireType_()
    this.requireNotSymbolType_()
    this.requireSameType_(constant)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.LESS_THAN_OR_EQUAL_TO,
      OperationTargetType.VALUE,
      constant,
      input => input <= constant))

    this.maximumExample_ = constant

    return this
  }

  /**
   * Require value to be greater than or equal to a constant.
   * 
   * @param {BaseComparableType} constant A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  greaterThanOrEqualTo(constant) {
    this.tryInvoke_("greaterThanOrEqualTo")
    this.requireType_()
    this.requireNotSymbolType_()
    this.requireSameType_(constant)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.GREATER_THAN_OR_EQUAL_TO,
      OperationTargetType.VALUE,
      constant,
      input => input >= constant))

    this.minimumExample_ = constant

    return this
  }

  /**
   * Require value to be equal to a constant.
   * 
   * @param {BaseComparableType} constant A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  equalTo(constant) {
    this.tryInvoke_("equalTo")
    this.requireType_()
    this.requireSameType_(constant)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.EQUAL_TO,
      OperationTargetType.VALUE,
      constant,
      input => input === constant))

    this.minimumExample_ = constant
    this.maximumExample_ = constant

    return this
  }

  /**
   * Require value to be not equal to a constant.
   * 
   * @param {BaseComparableType} constant A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  notEqualTo(constant) {
    this.requireSameType_(constant)
    this.requireType_()

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_EQUAL_TO,
      OperationTargetType.VALUE,
      constant,
      input => input !== constant))

    return this
  }

  /**
   * Require value to be within a range.
   * 
   * @param {BaseComparableType} from A lowest boundary.
   * @param {BaseComparableType} to A highest boundary.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  inRange(from, to) {
    this.tryInvoke_("inRange")
    this.requireType_()
    this.requireNotSymbolType_()
    this.requireSameType_(from)
    this.requireSameType_(to)

    if (from > to)
      throw new Error(`Range expected to have correct boundaries (actual range: [${from}..${to}])`)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.IN_RANGE,
      OperationTargetType.VALUE,
      [from, to],
      input => input >= from && input <= to))

    this.minimumExample_ = from
    this.maximumExample_ = to

    return this
  }

  /**
   * Require value to be outside of a range.
   * 
   * @param {BaseComparableType} from A lowest boundary.
   * @param {BaseComparableType} to A highest boundary.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  notInRange(from, to) {
    this.requireNotSymbolType_()
    this.requireType_()
    this.requireSameType_(from)
    this.requireSameType_(to)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_IN_RANGE,
      OperationTargetType.VALUE,
      [from, to],
      input => input < from || input > to))

    return this
  }

  /**
   * Require value to be equal to one of constants.
   * 
   * @param {Array} constants Constants.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withValueOneOf(...constants) {
    this.requireType_()
    BasicUtils.requireArray(constants, "constants")
    constants.forEach(item => this.requireSameType_(item))

    this.actions_.push(new ReadonlyActionInfo_(OperationType.BE_ONE_OF,
      OperationTargetType.VALUE,
      constants,
      input => constants.includes(input)))

    return this
  }

  /**
   * Require value to be not equal to one of constants.
   * 
   * @param {Array} constants Constants.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withValueNotOneOf(...constants) {
    this.requireType_()
    BasicUtils.requireArray(constants, "constants")
    constants.forEach(item => this.requireSameType_(item))

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_BE_ONE_OF,
      OperationTargetType.VALUE,
      constants,
      input => !constants.includes(input)))

    return this
  }

  /**
   * Require length to be shorter than a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withLengthLessThan(count) {
    this.tryInvoke_("withLengthLessThan")
    this.requireType_()
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.LESS_THAN,
      OperationTargetType.LENGTH,
      count,
      input => input.length < count))

    return this
  }

  /**
   * Require length to be longer than a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withLengthGreaterThan(count) {
    this.tryInvoke_("withLengthGreaterThan")
    this.requireType_()
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.GREATER_THAN,
      OperationTargetType.LENGTH,
      count,
      input => input.length > count))

    return this
  }

  /**
   * Require length to be shorter than or is a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withLengthLessThanOrEqualTo(count) {
    this.tryInvoke_("withLengthLessThanOrEqualTo")
    this.requireType_()
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.LESS_THAN_OR_EQUAL_TO,
      OperationTargetType.LENGTH,
      count,
      input => input.length <= count))

    return this
  }

  /**
   * Require length to be longer than or is a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withLengthGreaterThanOrEqualTo(count) {
    this.tryInvoke_("withLengthGreaterThanOrEqualTo")
    this.requireType_()
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.GREATER_THAN_OR_EQUAL_TO,
      OperationTargetType.LENGTH,
      count,
      input => input.length >= count))

    return this
  }

  /**
   * Require length to be equal to a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withLengthEqualTo(count) {
    this.tryInvoke_("withLengthEqualTo")
    this.requireType_()
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.EQUAL_TO,
      OperationTargetType.LENGTH,
      count,
      input => input.length === count))

    return this
  }

  /**
   * Require length not to be equal to a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withLengthNotEqualTo(count) {
    this.requireStringType_()
    this.requireCount_(count, "count")

    this.predicates_.push(input => input.length !== count)
    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_EQUAL_TO,
      OperationTargetType.LENGTH,
      count,
      input => input.length !== count))

    return this
  }

  /**
   * Require length to be within a range.
   * 
   * @param {number} from A lowest boundary.
   * @param {number} to A highest boundary.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withLengthInRange(from, to) {
    this.tryInvoke_("withLengthInRange")
    this.requireType_()
    this.requireStringType_()
    this.requireRange_(from, to)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.IN_RANGE,
      OperationTargetType.LENGTH,
      [from, to],
      input => input.length >= from && input.length <= to))

    return this
  }

  /**
   * Require length to be outside of a range.
   * 
   * @param {number} from A lowest boundary.
   * @param {number} to A highest boundary.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withLengthNotInRange(from, to) {
    this.requireType_()
    this.requireStringType_()
    this.requireRange_(from, to)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_IN_RANGE,
      OperationTargetType.LENGTH,
      [from, to],
      input => input.length < from || input.length > to))

    return this
  }

  /**
   * Require value to match a regular expression.
   * 
   * @param {RegExp} regex A regular expression.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  matching(regex) {
    this.tryInvoke_("matching")
    this.requireType_()
    this.requireStringType_()
    BasicUtils.requireRegExp(regex, "regex")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.MATCH,
      OperationTargetType.VALUE,
      regex,
      input => regex.test(input)))

    return this
  }

  /**
   * Require value not to match a regular expression.
   * 
   * @param {RegExp} regex A regular expression.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  notMatching(regex) {
    this.requireType_()
    this.requireStringType_()
    BasicUtils.requireRegExp(regex, "regex")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_MATCH,
      OperationTargetType.VALUE,
      regex,
      input => !regex.test(input)))

    return this
  }

  /**
   * Require items to satisfy their constraints.
   * 
   * @param {UniversalValidator} items Constraints.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItems(items) {
    this.tryInvoke_("withItems")
    this.requireType_()
    this.requireArrayType_()
    BasicUtils.requireValidator(items, "items")

    this.itemValidator_ = items

    this.actions_.push(new ReadonlyActionInfo_(OperationType.BE,
      OperationTargetType.ITEMS,
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
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItemCountLessThan(count) {
    this.tryInvoke_("withItemCountLessThan")
    this.requireType_()
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.LESS_THAN,
      OperationTargetType.ITEM_COUNT,
      count,
      input => input.length < count))

    return this
  }

  /**
   * Require item count to be greater than a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItemCountGreaterThan(count) {
    this.tryInvoke_("withItemCountGreaterThan")
    this.requireType_()
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.GREATER_THAN,
      OperationTargetType.ITEM_COUNT,
      count,
      input => input.length > count))

    return this
  }

  /**
   * Require item count to be less than or equal to a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItemCountLessThanOrEqualTo(count) {
    this.tryInvoke_("withItemCountLessThanOrEqualTo")
    this.requireType_()
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.LESS_THAN_OR_EQUAL_TO,
      OperationTargetType.ITEM_COUNT,
      count,
      input => input.length <= count))

    return this
  }

  /**
   * Require item count to be greater than or equal to a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItemCountGreaterThanOrEqualTo(count) {
    this.tryInvoke_("withItemCountGreaterThanOrEqualTo")
    this.requireType_()
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.GREATER_THAN_OR_EQUAL_TO,
      OperationTargetType.ITEM_COUNT,
      count,
      input => input.length >= count))

    return this
  }

  /**
   * Require item count to be equal to a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItemCountEqualTo(count) {
    this.tryInvoke_("withItemCountEqualTo")
    this.requireType_()
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.EQUAL_TO,
      OperationTargetType.ITEM_COUNT,
      count,
      input => input.length === count))

    return this
  }

  /**
   * Require item count not to be equal to a constant.
   * 
   * @param {number} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItemCountNotEqualTo(count) {
    this.requireType_()
    this.requireArrayType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_EQUAL_TO,
      OperationTargetType.ITEM_COUNT,
      count,
      input => input.length !== count))

    return this
  }

  /**
   * Require length to be within a range.
   * 
   * @param {number} from A lowest boundary.
   * @param {number} to A highest boundary.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItemCountInRange(from, to) {
    this.tryInvoke_("withItemCountInRange")
    this.requireType_()
    this.requireArrayType_()
    this.requireRange_(from, to)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.IN_RANGE,
      OperationTargetType.ITEM_COUNT,
      [from, to],
      input => input.length >= from && input.length <= to))

    return this
  }

  /**
   * Require length to be outside of a range.
   * 
   * @param {number} from A lowest boundary.
   * @param {number} to A highest boundary.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withItemCountNotInRange(from, to) {
    this.requireType_()
    this.requireArrayType_()
    this.requireRange_(from, to)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_IN_RANGE,
      OperationTargetType.ITEM_COUNT,
      [from, to],
      input => input.length < from || input.length > to))

    return this
  }

  /**
   * Inject specified property preprocessors which are used to convert arbitrary values to validators in
   * `withRequiredProperties` and `withOptionalProperties` methods.
   * 
   * @param {Array.<PropertyPreprocessor>} preprocessors Property preprocessors.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyPreprocessors(...preprocessors) {
    this.tryInvoke_("withPropertyPreprocessors")
    this.requireType_()
    this.requireObjectType_()
    BasicUtils.requireArray(preprocessors, "preprocessors")
    preprocessors.forEach((preprocessor, index) => BasicUtils.requireFunction(preprocessor, "preprocessors", index))

    this.propertyPreprocessors_ = preprocessors

    return this
  }

  /**
   * Require specified properties.
   * 
   * @param {Object.<string, UniversalValidator>} properties A constraint.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withRequiredProperties(properties) {
    this.tryInvoke_("withRequiredProperties")
    this.requireType_()
    this.requireObjectType_()
    BasicUtils.requireObject(properties, "properties")
    this.requirePublicProperties_(properties)
    this.requireNotReservedProperties_(properties)

    this.requiredPropertiesValidators_ = { ...properties }
    this.deleteValidatorPlaceholders_(this.requiredPropertiesValidators_)

    for (let requiredProperty in properties)
      this.requiredProperties_.push(requiredProperty)

    this.requireRequiredPropertiesAndOptionalNotIntersect_()

    this.actions_.push(new ReadonlyActionInfo_(OperationType.BE,
      OperationTargetType.REQUIRED_PROPERTIES,
      properties,
      input => {
        for (let requiredProperty in properties) {
          if (!input.hasOwnProperty(requiredProperty))
            return false

          let validator = this.preprocessValue_(properties[requiredProperty])

          if (typeof validator !== "boolean") {
            BasicUtils.requireValidator(validator, "validator")

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
   * @param {Object.<string, UniversalValidator>} properties A constraint.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withOptionalProperties(properties) {
    this.tryInvoke_("withOptionalProperties")
    this.requireType_()
    this.requireObjectType_()
    BasicUtils.requireObject(properties, "properties")
    this.requirePublicProperties_(properties)
    this.requireNotReservedProperties_(properties)

    this.optionalPropertiesValidators_ = { ...properties }
    this.deleteValidatorPlaceholders_(this.optionalPropertiesValidators_)

    for (let optionalProperty in properties)
      this.optionalProperties_.push(optionalProperty)

    this.requireRequiredPropertiesAndOptionalNotIntersect_()

    this.actions_.push(new ReadonlyActionInfo_(OperationType.BE,
      OperationTargetType.OPTIONAL_PROPERTIES,
      properties,
      input => {
        for (let optionalProperty in properties) {
          let validator = this.preprocessValue_(properties[optionalProperty])

          if (typeof validator !== "boolean") {
            BasicUtils.requireValidator(validator, "validator")

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
   * @param {UniversalValidator} properties A constraint.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withAdditionalProperties(properties) {
    this.tryInvoke_("withAdditionalProperties")
    this.requireType_()
    this.requireObjectType_()
    BasicUtils.requireValidator(properties, "properties")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.BE,
      OperationTargetType.ADDITIONAL_PROPERTIES,
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
   * @returns {UniversalValidator} The current validator.
   */
  withNotAdditionalProperties() {
    this.tryInvoke_("withNotAdditionalProperties")
    this.requireType_()
    this.requirePropertiesSet_()

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_HAVE,
      OperationTargetType.ADDITIONAL_PROPERTIES,
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
   * @param {BaseComparableType} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyCountLessThan(count) {
    this.tryInvoke_("withPropertyCountLessThan")
    this.requireType_()
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.LESS_THAN,
      OperationTargetType.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length < count))

    return this
  }

  /**
   * Require property amount to be greater than a constant.
   * 
   * @param {BaseComparableType} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyCountGreaterThan(count) {
    this.tryInvoke_("withPropertyCountGreaterThan")
    this.requireType_()
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.GREATER_THAN,
      OperationTargetType.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length > count))

    return this
  }

  /**
   * Require property amount to be less than or equal to a constant.
   * 
   * @param {BaseComparableType} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyCountLessThanOrEqualTo(count) {
    this.tryInvoke_("withPropertyCountLessThanOrEqualTo")
    this.requireType_()
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.LESS_THAN_OR_EQUAL_TO,
      OperationTargetType.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length <= count))

    return this
  }

  /**
   * Require property amount to be greater than or equal to a constant.
   * 
   * @param {BaseComparableType} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyCountGreaterThanOrEqualTo(count) {
    this.tryInvoke_("withPropertyCountGreaterThanOrEqualTo")
    this.requireType_()
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.GREATER_THAN_OR_EQUAL_TO,
      OperationTargetType.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length >= count))

    return this
  }

  /**
   * Require property amount to be equal to a constant.
   * 
   * @param {BaseComparableType} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyCountEqualTo(count) {
    this.tryInvoke_("withPropertyCountEqualTo")
    this.requireType_()
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.EQUAL_TO,
      OperationTargetType.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length === count))

    return this
  }

  /**
   * Require property amount not to be equal to a constant.
   * 
   * @param {BaseComparableType} count A constant.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyCountNotEqualTo(count) {
    this.requireType_()
    this.requireObjectType_()
    this.requireCount_(count, "count")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_EQUAL_TO,
      OperationTargetType.PROPERTY_COUNT,
      count,
      input => Object.keys(input).length !== count))

    return this
  }

  /**
   * Require property amount to be within a range.
   * 
   * @param {number} from A lowest boundary.
   * @param {number} to A highest boundary.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyCountInRange(from, to) {
    this.tryInvoke_("withPropertyCountInRange")
    this.requireType_()
    this.requireObjectType_()
    this.requireRange_(from, to)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.IN_RANGE,
      OperationTargetType.PROPERTY_COUNT,
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
   * @param {number} from A lowest boundary.
   * @param {number} to A highest boundary.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withPropertyCountNotInRange(from, to) {
    this.requireType_()
    this.requireObjectType_()
    this.requireRange_(from, to)

    this.actions_.push(new ReadonlyActionInfo_(OperationType.NOT_IN_RANGE,
      OperationTargetType.PROPERTY_COUNT,
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
   * @param {WherePredicate} predicate A predicate.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  where(predicate) {
    this.tryInvoke_("where")
    this.requireType_()
    BasicUtils.requireFunction(predicate, "predicate")
    this.requirePropertiesSet_()

    this.actions_.push(new ReadonlyActionInfo_(OperationType.BE,
      OperationTargetType.PROPERTIES,
      predicate,
      input => Object.values(predicate(input)).every(condition => condition === true)))

    return this
  }

  /**
   * Require value constraints.
   * 
   * @param {Predicate} predicate A predicate.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  whereValue(predicate) {
    this.tryInvoke_("whereValue")
    this.requireType_()
    BasicUtils.requireFunction(predicate, "predicate")

    this.actions_.push(new ReadonlyActionInfo_(OperationType.BE,
      OperationTargetType.VALUE,
      predicate,
      predicate))

    return this
  }

  /**
   * Require specified nested validators.
   * 
   * @param {Array.<UniversalValidator>} nestedValidators Nested validators.
   * 
   * @returns {UniversalValidator} The current validator.
   */
  withSubvalidators(...nestedValidators) {
    this.tryInvoke_("nestedValidators")
    nestedValidators.forEach((schema, index) => BasicUtils.requireValidator(schema, "nestedValidators", index))

    this.nestedValidators_ = nestedValidators

    return this
  }

  /**
   * Check whether an input value satisfies all conditions.
   * 
   * @param {any} input An input to validate.
   * 
   * @returns {boolean} Whether an input value satisfies all conditions.
   */
  validate(input) {
    if (typeof this.validatorType_ !== "undefined")
      return this.actions_.map(action => action.validation(input)).every(result => result === true)

    let results = this.nestedValidators_.map(validator => validator.validate(input))

    switch (this.mode_) {
      case JoinType.ANY_OF:
        return results.some(result => result === true)

      case JoinType.ONE_OF:
        return results.filter(result => result === true).length === 1

      case JoinType.ALL_OF:
        return results.every(result => result === true)
    }
  }

  /**
   * Converts object to string.
   * 
   * @returns {string} A string representation.
   */
  toString() {
    return JSON.stringify(this.toJSONSchema())
  }

  /**
   * Convert object to JSON schema (draft 07) representation.
   * 
   * @returns {object} JSON schema (draft 07) representation.
   */
  toJSONSchema() {
    return {
      $schema: "http://json-schema.org/draft-07/schema#",
      ...this.toJSONSchema_()
    }
  }

  /**
   * @returns {object}
   */
  toJSONSchema_() {
    if (typeof this.validatorType_ === "undefined") {
      let results = this.nestedValidators_.map(validator => validator.toJSONSchema_())
      let keyword = undefined

      switch (this.mode_) {
        case JoinType.ANY_OF:
          keyword = "anyOf"
          break

        case JoinType.ONE_OF:
          keyword = "oneOf"
          break
        case JoinType.ALL_OF:
          keyword = "allOf"
          break
      }

      return {
        [keyword]: results
      }
    }

    this.requireNotSymbolType_()

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
        case OperationTargetType.TYPE:
          schema.type = this.jsonType_
          break

        case OperationTargetType.VALUE:
          this.addValueConstraints_(schema, simpleSubschemas, action)
          break

        case OperationTargetType.LENGTH:
          this.addLengthConstraints_(schema, simpleSubschemas, action)
          break

        case OperationTargetType.ITEM_COUNT:
          this.addItemCountConstraints_(schema, simpleSubschemas, action)
          break

        case OperationTargetType.PROPERTY_COUNT:
          this.addPropertyCountConstraints_(schema, simpleSubschemas, action)
          break

        case OperationTargetType.ITEMS:
          schema.type = "array"
          schema.items = action.value.toJSONSchema_()
          break

        case OperationTargetType.REQUIRED_PROPERTIES:
          this.addProperties_(schema, action)
          schema.required = Object.keys(action.value)
          break

        case OperationTargetType.OPTIONAL_PROPERTIES:
          this.addProperties_(schema, action)
          break

        case OperationTargetType.ADDITIONAL_PROPERTIES:
          switch (action.operation) {
            case OperationType.BE:
              schema.additionalProperties = action.value.toJSONSchema_()
              break
            case OperationType.NOT_HAVE:
              schema.additionalProperties = false
              break
          }
          break

        case OperationTargetType.PROPERTIES:
          schema.$comment = "This schema doesn't contain validations performed in JavaScript as they can't expressed within JSON schema (predicate-based validation is omitted)"
          break
      }
    })

    if (simpleSubschemas.length > 0)
      schema.allOf = simpleSubschemas

    return schema
  }
}
