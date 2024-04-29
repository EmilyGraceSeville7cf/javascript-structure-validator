/**
 * @param {any} value
 * 
 * @returns {UniversalValidator}
 */
function validatorFromValueType_(value) {
  if (BasicUtils.isBoolean(value))
    return isBoolean()
  if (BasicUtils.isInteger(value))
    return isInteger()
  if (BasicUtils.isNumber(value))
    return isNumber()
  if (BasicUtils.isString(value))
    return isString()
  if (BasicUtils.isBigint(value))
    return isBigint()
  if (BasicUtils.isSymbol(value))
    return isSymbol()
  if (BasicUtils.isArray(value))
    return isArray()
  if (BasicUtils.isObject(value))
    return isObject()
}

/**
 * @param {RegExp} regex
 * 
 * @returns {UniversalValidator}
 */
function regexPreprocessor_(regex) {
  if (!BasicUtils.isRegExp(regex, "regex"))
    return null

  return isString().matching(regex)
}

/**
 * @param {Array.<any>} values
 * 
 * @returns {UniversalValidator}
 */
function enumPreprocessor_(values) {
  const schema = isArray({ from: 1 })

  if (!schema.validate(values))
    return null

  const validator = validatorFromValueType_(values[0])
  return validator.withValueOneOf(...values)
}

/**
 * @param {Object.<string, number>} range
 * 
 * @returns {UniversalValidator}
 */
function rangePreprocessor_(range) {
  const schema = isObject({ from: 1 }).withOptionalProperties({
    from: isNumber(),
    to: isNumber()
  }).whereValue(range => {
    const closedRange = typeof range.from !== "undefined" && typeof range.to !== "undefined"
    return closedRange ? range.from <= range.to : true
  }).withNotAdditionalProperties()

  if (!schema.validate(range))
    return null

  let property = range.from
  if (typeof range.from === "undefined")
    property = range.to

  const validator = validatorFromValueType_(property)
  if (typeof range.from !== "undefined" && typeof range.to !== "undefined")
    return validator.inRange(range.from, range.to)
  if (typeof range.from !== "undefined")
    return validator.greaterThanOrEqualTo(range.from)
  if (typeof range.to !== "undefined")
    return validator.lessThanOrEqualTo(range.to)
}

/**
 * @param {Object.<string, RegExp>} regexOptions
 * 
 * @returns {UniversalValidator}
 */
function negativeRegexPreprocessor_(regexOptions) {
  const schema = isObject().withRequiredProperties({
    not: isObject()
  }).where(options => BasicUtils.isRegExp(options.not))
    .withNotAdditionalProperties()

  if (!schema.validate(regexOptions))
    return null

  return isString().notMatching(regexOptions.not)
}

/**
 * @param {object} valuesOptions
 * 
 * @returns {UniversalValidator}
 */
function negativeEnumPreprocessor_(valuesOptions) {
  const schema = isObject().withRequiredProperties({
    not: isArray({ from: 1 })
  }).withNotAdditionalProperties()

  if (!schema.validate(valuesOptions))
    return null

  const validator = validatorFromValueType_(valuesOptions.not[0])
  return validator.withValueNotOneOf(...valuesOptions.not)
}

/**
 * @param {object} rangeOptions
 * 
 * @returns {UniversalValidator}
 */
function negativeRangePreprocessor_(rangeOptions) {
  const schema = isObject().withRequiredProperties({
    not: isObject({ from: 1 }).withOptionalProperties({
      from: isNumber(),
      to: isNumber()
    }).whereValue(range => {
      const closedRange = typeof range.from !== "undefined" && typeof range.to !== "undefined"
      return closedRange ? range.from <= range.to : true
    }).withNotAdditionalProperties()
  }).withNotAdditionalProperties()

  if (!schema.validate(rangeOptions))
    return null

  rangeOptions = rangeOptions.not
  let property = rangeOptions.from
  if (typeof rangeOptions.from === "undefined")
    property = rangeOptions.to

  const validator = validatorFromValueType_(property)
  if (typeof rangeOptions.from !== "undefined" && typeof rangeOptions.to !== "undefined")
    return validator.notInRange(rangeOptions.from, rangeOptions.to)
  if (typeof rangeOptions.from !== "undefined")
    return validator.lessThan(rangeOptions.from)
  if (typeof rangeOptions.to !== "undefined")
    return validator.greaterThan(rangeOptions.to)
}
