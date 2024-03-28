/**
 * Require value to be boolean.
 * 
 * @returns {SimpleValidator} - The validator.
 */
function isBoolean() {
  return new SimpleValidator("boolean")
}

/**
 * Require value to be number.
 * 
 * @returns {SimpleValidator} - The validator.
 */
function isNumber() {
  return new SimpleValidator("number")
}

/**
 * Require value to be string.
 * 
 * @returns {SimpleValidator} - The validator.
 */
function isString() {
  return new SimpleValidator("string")
}

/**
 * Require value to be bigint.
 * 
 * @returns {SimpleValidator} - The validator.
 */
function isBigint() {
  return new SimpleValidator("bigint")
}

/**
 * Require value to be array.
 * 
 * @returns {SimpleValidator} - The validator.
 */
function isArray() {
  return new SimpleValidator("array")
}

/**
 * Require value to be object.
 * 
 * @returns {SimpleValidator} - The validator.
 */
function isObject() {
  return new SimpleValidator("object")
}

/**
 * Require value to be any of.
 * 
 * @returns {Array.<SimpleValidator | ComplexValidator>} - The validator.
 */
function isAnyOf(...validators) {
  let anyOfValidator = new ComplexValidator(ComplexValidatorMode.ANY_OF)

  for (let validator of validators) 
    anyOfValidator.add(validator)
  
  return anyOfValidator
}

/**
 * Require value to be one of.
 * 
 * @returns {Array.<SimpleValidator | ComplexValidator>} - The validator.
 */
function isOneOf(...validators) {
  let anyOfValidator = new ComplexValidator(ComplexValidatorMode.ONE_OF)

  for (let validator of validators) 
    anyOfValidator.add(validator)
  
  return anyOfValidator
}

/**
 * Require value to be all of.
 * 
 * @returns {Array.<SimpleValidator | ComplexValidator>} - The validator.
 */
function isAllOf(...validators) {
  let anyOfValidator = new ComplexValidator(ComplexValidatorMode.ALL_OF)

  for (let validator of validators) 
    anyOfValidator.add(validator)
  
  return anyOfValidator
}

/**
 * Check whether value satisfies all conditions.
 * 
 * @param {any} input - An input.
 * @param {SimpleValidator | ComplexValidator} validator - A validator.
 * 
 * @returns {boolean} - Whether value satisfies all conditions.
 */
function checkWhether(input, validator) {
  return validator.validate(input)
}

/**
 * Check whether value satisfies all conditions and print error in case.
 * 
 * @param {any} input - An input.
 * @param {SimpleValidator | ComplexValidator} validator - A validator.
 */
function throwOnFailure(input, validator) {
  if (!validator.validate(input))
    throw new Error(`Expected object that: ${validator.description}`)
}