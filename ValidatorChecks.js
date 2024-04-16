/**
 * Check whether value satisfies all conditions.
 * 
 * @param {any} input An input.
 * @param {Validator} validator A validator.
 * 
 * @returns {boolean} Whether value satisfies all conditions.
 */
function checkWhether(input, validator) {
  Basic.requireValidator(validator, "validator")

  return validator.validate(input)
}

/**
 * Check whether value satisfies all conditions and print error in case.
 * 
 * @param {any} input An input.
 * @param {Validator} validator A validator.
 * @param {string} message A message.
 */
function throwOnFailure(input, validator, message) {
  Basic.requireValidator(validator, "validator")

  if (!validator.validate(input))
    if (typeof message === "undefined")
      throw new Error(`Expected object that: ${JSON.stringify(validator.toJSONSchema_())}`)
    else
      throw new Error(`Expected ${message}`)
}