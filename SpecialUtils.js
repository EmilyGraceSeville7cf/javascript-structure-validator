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
 * @param {BaseComparableType} fromConstraint - A lowest constraint.
 * @param {BaseComparableType} toConstraint - A highest constraint.
 * 
 * @returns {Validator} - Check whether object is a number in range.
 */
function isIn(fromConstraint, toConstraint) {
  return isNumber().inRange(fromConstraint, toConstraint)
}

/**
 * Check whether object is not an empty string.
 *  
 * @returns {Validator} - Check whether object is not an empty string.
 */
function isNotEmptyString() {
  return isString().longerThan(0)
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
  return isObject().with({
    x: isNumber(),
    y: isNumber(),
    z: isNumber()
  }).andNothingElse()
}

/**
 * Check whether object is a range.
 * 
 * @returns {Validator} - Check whether object is a range.
 */
function isRange() {
  return isObject().with({
    from: isNumber(),
    to: isNumber(),
  }).andNothingElse()
}

/**
 * Check whether object is a stepped range.
 * 
 * @returns {Validator} - Check whether object is a stepped range.
 */
function isSteppedRange() {
  return isObject().with({
    from: isNumber(),
    to: isNumber(),
    step: isNumber().greaterThan(0)
  }).andNothingElse()
}

/**
 * Check whether object is a 2D size.
 * 
 * @returns {Validator} - Check whether object is a 2D size.
 */
function isSize2D() {
  return isObject().with({
    width: isNumber().greaterThan(0),
    height: isNumber().greaterThan(0)
  }).andNothingElse()
}

/**
 * Check whether object is a 3D size.
 * 
 * @returns {Validator} - Check whether object is a 3D size.
 */
function isSize3D() {
  return isObject().with({
    width: isNumber().greaterThan(0),
    height: isNumber().greaterThan(0),
    depth: isNumber().greaterThan(0)
  }).andNothingElse()
}

/**
 * Check whether object is a color.
 * 
 * @returns {Validator} - Check whether object is a color.
 */
function isColor() {
  return isObject().with({
    red: isNumber().inRange(0, 255),
    green: isNumber().inRange(0, 255),
    blue: isNumber().inRange(0, 255)
  }).andNothingElse()
}
