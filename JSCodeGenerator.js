/**
 * A JS code generator that creates simple JS code from a validator.
 * 
 * @summary Generates JS code.
 */
class JSCodeGenerator {
  /**
   * @param {object} properties
   */
  filterPropertyDescriptions_(properties) {
    return ObjectUtils.filterProperties(properties, property => BasicUtils.isArray(property))
  }

  /**
   * @param {string} type
   * @param {string} name
   * @param {string} description
   */
  toParameterDefinition_(type, name, description) {
    return ` * @param {${type}} ${name} ${description}`
  }

  /**
   * @example
   * new JSCodeGenerator("newPerson", "Creates a person", record({ name: str(), age: int() }))
   * 
   * @param {string} name A function name.
   * @param {UniversalValidator} validator A validator.
   */
  constructor(name, validator) {
    BasicUtils.requireValidator(validator, "validator")

    throwOnFailure(name, isString({ from: 1 }).matching(/^[a-zA-Z_][a-zA-Z0-9_]*$/), "a function name")

    if (!ArrayUtils.equal(validator.typesData, ["object"]))
      throw new TypeError("Argument validator expected to be an object validator")

    this.name_ = name
    this.validator_ = validator
  }

  /**
   * Converts object to string.
   * 
   * @example
   * new JSCodeGenerator("Person", record({ name: str(), age: int() })).toString()
   * 
   * @returns {string} A string representation.
   */
  toString() {
    const requiredParameters = Object.keys(this.filterPropertyDescriptions_(this.validator_.requiredPropertiesData))
    const optionalParameters = Object.keys(this.filterPropertyDescriptions_(this.validator_.optionalPropertiesData))

    let parameters = requiredParameters.join(", ")
    if (optionalParameters.length !== 0)
      parameters += `, ${optionalParameters.join(", ")}`
    
    parameters = parameters.replace(/^, /, "")

    return `function ${this.name_}(${parameters}) {}`
  }
}