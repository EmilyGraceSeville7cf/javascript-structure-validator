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
 * @typedef {"boolean" | "number" | "integer" | "string" | "bigint" | "symbol" } BaseComparableType
 */