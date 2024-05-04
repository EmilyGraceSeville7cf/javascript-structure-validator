/**
 * Convert a validator to JSDoc representation.
 * 
 * @example
 * asJSDoc("Person", record({ name: str(), age: int() }))
 * 
 * @param {string} A type name.
 * @param {UniversalValidator} validator A validator.
 * 
 * @returns {string} The validator.
 */
function asJSDoc(name, validator) {
  return new JSDocGenerator(name, validator).toString()
}