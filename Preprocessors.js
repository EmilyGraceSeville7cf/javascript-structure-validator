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
 * @param {Array.<number>} range
 * 
 * @returns {UniversalValidator}
 */
function rangePreprocessor_(range) {
  const schema = isArray().withItemCountEqualTo(2).withItems(isNumber())

  if (!schema.validate(range))
    return null

  return isNumber().inRange(range[0], range[1])
}

/**
 * @param {object} options
 * 
 * @returns {UniversalValidator}
 */
function negativeRegexPreprocessor_(options) {
  const schema = isObject().withRequiredProperties({
    not: isObject()
  }).withNotAdditionalProperties()

  if (!schema.validate(options))
    return null
  
  if (!BasicUtils.isRegExp(options.not))
    return null

  return isString().notMatching(options.not)
}

/**
 * @param {object} options
 * 
 * @returns {UniversalValidator}
 */
function negativeRangePreprocessor_(options) {
  const schema = isObject().withRequiredProperties({
    not: isArray().withItemCountEqualTo(2).withItems(isNumber())
  }).withNotAdditionalProperties()

  if (!schema.validate(options))
    return null

  return isNumber().notInRange(options.not[0], options.not[1])
}
