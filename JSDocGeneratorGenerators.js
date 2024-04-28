/**
 * Convert a validator to JSDoc representation.
 * 
 * @param {string} A type name.
 * @param {UniversalValidator} validator A validator.
 * 
 * @returns {string} The validator.
 */
function asJSDoc(name, validator) {
  return new JSDocGenerator(name, validator).toString()
}