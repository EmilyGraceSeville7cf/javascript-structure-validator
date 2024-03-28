/**
 * Complex validator mode.
 */
let ComplexValidatorMode = Object.freeze({
  ANY_OF: Symbol("any of"),
  ONE_OF: Symbol("one of"),
  ALL_OF: Symbol("all of")
})

/**
 * Action constraint mode.
 */
let ActionMode = Object.freeze({
  LESS_THAN: Symbol("less than"),
  GREATER_THAN: Symbol("greater than"),
  LESS_THAN_OR_EQUAL_TO: Symbol("less than or equal to"),
  GREATER_THAN_OR_EQUAL_TO: Symbol("greater than or equal to"),
  EQUAL_TO: Symbol("equal to"),
  NOT_EQUAL_TO: Symbol("not equal to"),
  IN_RANGE: Symbol("in range"),
  NOT_IN_RANGE: Symbol("not in range"),
  MATCH: Symbol("matching"),
  NOT_MATCH: Symbol("not matching"),
  BE: Symbol("be"),
  NOT_HAVE: Symbol("not have")
})

/**
 * Action target mode.
 */
let ActionTargetMode = Object.freeze({
  TYPE: Symbol("type"),
  VALUE: Symbol("value"),
  LENGTH: Symbol("length"),
  ITEM_COUNT: Symbol("item count"),
  PROPERTY_COUNT: Symbol("property count"),
  ITEMS: Symbol("items"),
  PROPERTIES: Symbol("properties"),
  REQUIRED_PROPERTIES: Symbol("required properties"),
  OPTIONAL_PROPERTIES: Symbol("optional properties"),
  ADDITIONAL_PROPERTIES: Symbol("additional properties")
})