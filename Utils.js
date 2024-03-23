/**
 * Require value to be boolean.
 * 
 * @returns {Validator} - The validator.
 */
function isBoolean() {
  return new Validator("boolean")
}

/**
 * Require value to be number.
 * 
 * @returns {Validator} - The validator.
 */
function isNumber() {
  return new Validator("number")
}

/**
 * Require value to be string.
 * 
 * @returns {Validator} - The validator.
 */
function isString() {
  return new Validator("string")
}

/**
 * Require value to be bigint.
 * 
 * @returns {Validator} - The validator.
 */
function isBigint() {
  return new Validator("bigint")
}

/**
 * Require value to be object.
 * 
 * @returns {Validator} - The validator.
 */
function isObject() {
  return new Validator("object")
}

/**
 * Require value to be any of.
 * 
 * @returns {Array.<Validator | ComplexValidator>} - The validator.
 */
function isAnyOf(...validators) {
  let anyOfValidator = new ComplexValidator(Mode.ANY_OF)

  for (let validator of validators) 
    anyOfValidator.add(validator)
  
  return anyOfValidator
}

/**
 * Require value to be one of.
 * 
 * @returns {Array.<Validator | ComplexValidator>} - The validator.
 */
function isOneOf(...validators) {
  let anyOfValidator = new ComplexValidator(Mode.ONE_OF)

  for (let validator of validators) 
    anyOfValidator.add(validator)
  
  return anyOfValidator
}

/**
 * Require value to be all of.
 * 
 * @returns {Array.<Validator | ComplexValidator>} - The validator.
 */
function isAllOf(...validators) {
  let anyOfValidator = new ComplexValidator(Mode.ALL_OF)

  for (let validator of validators) 
    anyOfValidator.add(validator)
  
  return anyOfValidator
}

/**
 * Check whether value satisfies all conditions.
 * 
 * @param {any} input - An input.
 * @param {Validator | ComplexValidator} validator - A validator.
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
 * @param {Validator | ComplexValidator} validator - A validator.
 */
function throwOnFailure(input, validator) {
  if (!validator.validate(input))
    throw new Error(`Expected object that: ${validator.description}`)
}