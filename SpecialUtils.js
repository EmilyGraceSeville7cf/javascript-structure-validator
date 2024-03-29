const urlRegex_ = new RegExp("^https?://")

/**
 * @param {string} url
 * 
 * @returns {boolean}
 */
function isExistingUrl_(url) {
  try {
    return UrlFetchApp.fetch(url, {
      muteHttpExceptions: true
    }).getResponseCode() === 200
  } catch {
    return false
  }
}

/**
 * Check whether object is true.
 *  
 * @returns {Validator} - Check whether object is true.
 */
function isTrue() {
  return isBoolean().equalTo(true)
}

/**
 * Check whether object is false.
 *  
 * @returns {Validator} - Check whether object is false.
 */
function isFalse() {
  return isBoolean().equalTo(false)
}

/**
 * Check whether object is a positive number.
 *  
 * @returns {Validator} - Check whether object is a positive number.
 */
function isPositive() {
  return isNumber().greaterThan(0)
}

/**
 * Check whether object is a negative number.
 *  
 * @returns {Validator} - Check whether object is a negative number.
 */
function isNegative() {
  return isNumber().lessThan(0)
}

/**
 * Check whether object is a number in range.
 * 
 * @param {BaseComparableType} from - A lowest constraint.
 * @param {BaseComparableType} to - A highest constraint.
 * 
 * @returns {Validator} - Check whether object is a number in range.
 */
function isIn(from, to) {
  return isNumber().inRange(from, to)
}

/**
 * Check whether object is an empty string.
 *  
 * @returns {Validator} - Check whether object is an empty string.
 */
function isEmptyString() {
  return isString().withLengthEqualTo(0)
}

/**
 * Check whether object is not an empty string.
 *  
 * @returns {Validator} - Check whether object is not an empty string.
 */
function isNotEmptyString() {
  return isString().withLengthGreaterThan(0)
}

/**
 * Check whether object is a string matching regular expression.
 * 
 * @param {RegExp} regex - A regular expression.
 *  
 * @returns {Validator} - Check whether object is a string matching regular expression.
 */
function isMatching(regex) {
  return isString().matching(regex)
}

/**
 * Check whether object is a string not matching regular expression.
 * 
 * @param {RegExp} regex - A regular expression.
 *  
 * @returns {Validator} - Check whether object is a string not matching regular expression.
 */
function isNotMatching(regex) {
  return isString().notMatching(regex)
}

/**
 * Check whether object is a URL string.
 * 
 * @returns {Validator} - Check whether object is a URL string.
 */
function isUrl() {
  return isMatching(urlRegex_).where(url => [isExistingUrl_(url)])
}

/**
 * Check whether object is not a URL string.
 * 
 * @returns {Validator} - Check whether object is not a URL string.
 */
function isNotUrl() {
  return isNotMatching(urlRegex_)
}

/**
 * Check whether object is a 2D vector.
 * 
 * @returns {Validator} - Check whether object is a 2D vector.
 */
function isVector2D() {
  return isObject().with({
    x: isNumber(),
    y: isNumber(),
  }).andNothingElse()
}

/**
 * Check whether object is a 3D vector.
 * 
 * @returns {Validator} - Check whether object is a 3D vector.
 */
function isVector3D() {
  return isObject().withRequiredProperties({
    x: isNumber(),
    y: isNumber(),
    z: isNumber()
  }).withNotAdditionalProperties()
}

/**
 * Check whether object is a range.
 * 
 * @returns {Validator} - Check whether object is a range.
 */
function isRange() {
  return isObject().withRequiredProperties({
    from: isNumber(),
    to: isNumber(),
  }).where(range => [range.from <= range.to])
    .withNotAdditionalProperties()
}

/**
 * Check whether object is a stepped range.
 * 
 * @returns {Validator} - Check whether object is a stepped range.
 */
function isSteppedRange() {
  return isObject().withRequiredProperties({
    from: isNumber(),
    to: isNumber(),
    step: isNumber().greaterThan(0)
  }).where(range => [range.from <= range.to])
    .withNotAdditionalProperties()
}

/**
 * Check whether object is a 2D size.
 * 
 * @returns {Validator} - Check whether object is a 2D size.
 */
function isSize2D() {
  return isObject().withRequiredProperties({
    width: isNumber().greaterThan(0),
    height: isNumber().greaterThan(0)
  }).withNotAdditionalProperties()
}

/**
 * Check whether object is a 3D size.
 * 
 * @returns {Validator} - Check whether object is a 3D size.
 */
function isSize3D() {
  return isObject().withRequiredProperties({
    width: isNumber().greaterThan(0),
    height: isNumber().greaterThan(0),
    depth: isNumber().greaterThan(0)
  }).withNotAdditionalProperties()
}

/**
 * Check whether object is a color.
 * 
 * @returns {Validator} - Check whether object is a color.
 */
function isColor() {
  return isObject().withRequiredProperties({
    red: isNumber().inRange(0, 255),
    green: isNumber().inRange(0, 255),
    blue: isNumber().inRange(0, 255)
  }).withNotAdditionalProperties()
}
