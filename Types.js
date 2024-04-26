/**
 * A predicate.
 * 
 * @callback Predicate
 * @param {any} input An input.
 * 
 * @returns {boolean} Whether condition is true.
 */

/**
 * A where predicate.
 * 
 * @callback WherePredicate
 * @param {object} input An input.
 * 
 * @returns {Array.<boolean>} Whether conditions are true.
 */

/**
 * A basic type.
 * 
 * @typedef {"boolean" | "number" | "integer" | "string" | "bigint" | "symbol" | "array" | "object"} BaseType
 */

/**
 * A basic comparable type.
 * 
 * @typedef {"boolean" | "number" | "integer" | "string" | "bigint" | "symbol"} BaseComparableType
 */

/**
 * A schema join type.
 * 
 * @typedef JoinType_
 * 
 * @property {symbol} ANY_OF Requires at least one of nested schemas to succeed.
 * @property {symbol} ONE_OF Requires at one of nested schemas to succeed.
 * @property {symbol} ALL_OF Requires all of nested schemas to succeed.
 */

/**
 * An operation.
 * 
 * @typedef OperationType_
 * 
 * @property {symbol} LESS_THAN Requires a value or its characteristic to be less than a constant.
 * @property {symbol} GREATER_THAN Requires a value or its characteristic to be greater than a constant.
 * @property {symbol} LESS_THAN_OR_EQUAL_TO Requires a value or its characteristic to be less than or equal to a constant.
 * @property {symbol} GREATER_THAN_OR_EQUAL_TO Requires a value or its characteristic to be greater than or equal to a constant.
 * @property {symbol} EQUAL_TO Requires a value or its characteristic to be equal to a constant.
 * @property {symbol} NOT_EQUAL_TO Requires a value or its characteristic to be not equal to a constant.
 * @property {symbol} IN_RANGE Requires a value or its characteristic to be in a range.
 * @property {symbol} NOT_IN_RANGE Requires a value or its characteristic to be not in a range.
 * @property {symbol} BE_ONE_OF Requires a value to be one of constants.
 * @property {symbol} NOT_BE_ONE_OF Requires a value to be not one of constants.
 * @property {symbol} MATCH Requires a value to match a regular expression.
 * @property {symbol} NOT_MATCH Requires a value not to match a regular expression.
 * @property {symbol} BE Requires a value to be items or properties with specific characteristics.
 * @property {symbol} NOT_HAVE Requires a value to not to have properties with specific characteristics.
 */

/**
 * An operation.
 * 
 * @typedef OperationTargetType_
 * 
 * @property {symbol} TYPE Apply operation to a value type.
 * @property {symbol} VALUE Apply operation to a value.
 * @property {symbol} LENGTH Apply operation to a value length.
 * @property {symbol} ITEM_COUNT Apply operation to a value's item count.
 * @property {symbol} PROPERTY_COUNT Apply operation to a value's property count.
 * @property {symbol} ITEMS Apply operation to a value items.
 * @property {symbol} PROPERTIES Apply operation to an value items.
 * @property {symbol} REQUIRED_PROPERTIES Apply operation to an value's required properties.
 * @property {symbol} OPTIONAL_PROPERTIES Apply operation to an value's optional properties.
 * @property {symbol} ADDITIONAL_PROPERTIES Apply operation to an value's additional properties.
 */