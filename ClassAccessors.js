/**
 * Return `BasicUtils` class.
 * 
 * @example
 * getBasicUtils().isBoolean(true)
 * 
 * @returns {BasicUtils}
 */
function getBasicUtils() {
  return BasicUtils
}

/**
 * Return `ArrayUtils` class.
 * 
 * @example
 * getArrayUtils().equal([1], [1])
 * 
 * @returns {ArrayUtils}
 */
function getArrayUtils() {
  return ArrayUtils
}

/**
 * Return `ObjectUtils` class.
 * 
 * @example
 * getObjectUtils().clone({ name: "Emily" })
 * 
 * @returns {ObjectUtils}
 */
function getObjectUtils() {
  return ObjectUtils
}

/**
 * Return `UniversalValidator` class.
 * 
 * @example
 * new (getUniversalValidator())("boolean")
 * 
 * @returns {UniversalValidator}
 */
function getUniversalValidator() {
  return UniversalValidator
}

/**
 * Return `JSDocGenerator` class.
 * 
 * @example
 * new (getJSDocGenerator())("Person", record({ name: str(), age: int() }))
 * 
 * @returns {JSDocGenerator}
 */
function getJSDocGenerator() {
  return JSDocGenerator
}
