/**
 * A JSDoc generator that creates simple JSDoc from a validator.
 * 
 * @summary Generates JSDoc objects.
 */
class JSDocGenerator {
  /**
   * @param {object} value
   * @param {string} prefix
   * 
   * @returns {Object.<string, any>}
   */
  mapTypeData_(value, prefix = "") {
    BasicUtils.requireObject(value, "value")

    prefix = prefix.replace(/^\./, "")
    let properties = {}

    for (let property in value) {
      let path = `${prefix}.${property}`.replace(/^\./, "")

      if (BasicUtils.isArray(value[property]))
        properties[path] = value[property].join(" | ")
      else {
        properties = { ...properties, ...{ [path]: "object" }, ...this.mapTypeData_(value[property], path) }
      }
    }

    return properties
  }

  /**
   * @param {object} value
   * @param {string} prefix
   * 
   * @returns {Object.<string, any>}
   */
  mapDescriptionData_(value, prefix = "") {
    BasicUtils.requireObject(value, "value")

    prefix = prefix.replace(/^\./, "")

    if (prefix === "")
      this.description_ = value.$name

    let properties = {}

    for (let property in value) {
      if (property.startsWith("$"))
        continue

      let path = `${prefix}.${property}`.replace(/^\./, "")

      if (typeof value[property] !== "object")
        properties[path] = value[property]
      else {
        if (typeof value[property].$name !== "undefined")
          properties[path] = value[property].$name

        properties = { ...properties, ...this.mapDescriptionData_(value[property], path) }
      }
    }

    return properties
  }

  /**
   * @param {string} type
   * @param {string} name
   * @param {string} description
   */
  toPropertyDefinition_(type, name, description) {
    return ` * @property {${type}} ${name} ${description}`
  }

  /**
   * @param {string} A type name.
   * @param {UniversalValidator} validator A validator.
   */
  constructor(name, validator) {
    BasicUtils.requireString(name, "name")
    BasicUtils.requireValidator(validator, "validator")

    this.name_ = name
    this.validator_ = validator
    this.description_ = undefined
  }

  /**
   * Converts object to string.
   * 
   * @returns {string} A string representation.
   */
  toString() {
    const requiredProperties = this.mapTypeData_(this.validator_.requiredPropertiesData)
    const optionalProperties = this.mapTypeData_(this.validator_.optionalPropertiesData)

    const requiredPropertiesDescriptions = this.mapDescriptionData_(this.validator_.requiredPropertiesDescriptionsData)
    const optionalPropertiesDescriptions = this.mapDescriptionData_(this.validator_.optionalPropertiesDescriptionsData)

    let properties = []

    for (const property in requiredPropertiesDescriptions)
      properties.push(this.toPropertyDefinition_(requiredProperties[property], property, requiredPropertiesDescriptions[property]))
    for (const property in optionalPropertiesDescriptions)
      properties.push(this.toPropertyDefinition_(optionalProperties[property], property, optionalPropertiesDescriptions[property]))

    return `/**
 * @typedef ${this.name_} ${this.description_}
 *
${properties.join("\n")}
 */`
  }
}