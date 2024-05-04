/**
 * Require a value to be a boolean.
 * 
 * @example
 * record({ visible: bool() })
 * 
 * @returns {UniversalValidator} The validator.
 */
function bool() {
  return isBoolean()
}

/**
 * Require a value to be a number.
 * 
 * @example
 * record({ from: num(), to: num() })
 * 
 * @returns {UniversalValidator} The validator.
 */
function num() {
  return isNumber()
}

/**
 * Require a value to be an integer.
 * 
 * @example
 * record({ from: int(), to: int() })
 * 
 * @returns {UniversalValidator} The validator.
 */
function int() {
  return isInteger()
}

/**
 * Require a value to be a string.
 * 
 * @example
 * record({ name: str() })
 * 
 * @returns {UniversalValidator} The validator.
 */
function str() {
  return isString()
}

/**
 * Require a value to be an object with just required properties and nothing else.
 * 
 * @example
 * record({ name: str(), age: int() })
 * 
 * @param {Object.<string, UniversalValidator>} Record properties.
 * 
 * @returns {UniversalValidator} The validator.
 */
function record(properties) {
  return isObject().withRequiredProperties(properties)
    .withNotAdditionalProperties()
}
