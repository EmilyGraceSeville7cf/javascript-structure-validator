/**
 * A schema join type.
 * 
 * @type {JoinType_}
 */
const JoinType = Object.freeze({
  /**
   * Requires at least one of nested schemas to succeed.
   */
  ANY_OF: Symbol("any of"),

  /**
   * Requires at one of nested schemas to succeed.
   */
  ONE_OF: Symbol("one of"),

  /**
   * Requires all of nested schemas to succeed.
   */
  ALL_OF: Symbol("all of")
})

/**
 * An operation.
 * 
 * @type {OperationType_}
 */
const OperationType = Object.freeze({
  /**
   * Requires a value or its characteristic to be less than a constant.
   */
  LESS_THAN: Symbol("less than"),

  /**
   * Requires a value or its characteristic to be greater than a constant.
   */
  GREATER_THAN: Symbol("greater than"),

  /**
   * Requires a value or its characteristic to be less than or equal to a constant.
   */
  LESS_THAN_OR_EQUAL_TO: Symbol("less than or equal to"),

  /**
   * Requires a value or its characteristic to be greater than or equal to a constant.
   */
  GREATER_THAN_OR_EQUAL_TO: Symbol("greater than or equal to"),

  /**
   * Requires a value or its characteristic to be equal to a constant.
   */
  EQUAL_TO: Symbol("equal to"),

  /**
   * Requires a value or its characteristic to be not equal to a constant.
   */
  NOT_EQUAL_TO: Symbol("not equal to"),

  /**
   * Requires a value or its characteristic to be in a range.
   */
  IN_RANGE: Symbol("in range"),

  /**
   * Requires a value or its characteristic to be not in a range.
   */
  NOT_IN_RANGE: Symbol("not in range"),

  /**
   * Requires a value to be one of constants.
   */
  BE_ONE_OF: Symbol("be one of"),

  /**
   * Requires a value to be not one of constants.
   */
  NOT_BE_ONE_OF: Symbol("not be one of"),

  /**
   * Requires a value to match a regular expression.
   */
  MATCH: Symbol("matching"),

  /**
   * Requires a value not to match a regular expression.
   */
  NOT_MATCH: Symbol("not matching"),

  /**
   * Requires a value to be items or properties with specific characteristics.
   */
  BE: Symbol("be"),

  /**
   * Requires a value to not to have properties with specific characteristics.
   */
  NOT_HAVE: Symbol("not have")
})

/**
 * An operation target.
 * 
 * @type {OperationTargetType_}
 */
const OperationTargetType = Object.freeze({
  /**
   * Apply operation to a value type.
   */
  TYPE: Symbol("type"),

  /**
   * Apply operation to a value.
   */
  VALUE: Symbol("value"),

  /**
   * Apply operation to a value length.
   */
  LENGTH: Symbol("length"),

  /**
   * Apply operation to a value's item count.
   */
  ITEM_COUNT: Symbol("item count"),

  /**
   * Apply operation to a value's property count.
   */
  PROPERTY_COUNT: Symbol("property count"),

  /**
   * Apply operation to a value items.
   */
  ITEMS: Symbol("items"),

  /**
   * Apply operation to an value items.
   */
  PROPERTIES: Symbol("properties"),

  /**
   * Apply operation to an value's required properties.
   */
  REQUIRED_PROPERTIES: Symbol("required properties"),

  /**
   * Apply operation to an value's optional properties.
   */
  OPTIONAL_PROPERTIES: Symbol("optional properties"),

  /**
   * Apply operation to an value's additional properties.
   */
  ADDITIONAL_PROPERTIES: Symbol("additional properties")
})