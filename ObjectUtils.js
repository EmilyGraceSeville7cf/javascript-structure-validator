/**
 * Object utilities.
 */
class ObjectUtils {
  /**
   * Clone an object deeply.
   * 
   * @example
   * ObjectUtils.clone({ name: "Emily" })
   * 
   * @example
   * getObjectUtils().clone({ name: "Emily" })
   * 
   * @param {object} value An object.
   * 
   * @returns {object} A deep copy.
  */
  static clone(value) {
    BasicUtils.requireObject(value, "value")

    if (value === null)
      return null

    let result = {}

    Object.keys(value).forEach(property => {
      if (typeof value[property] !== "object")
        result[property] = value[property]
      else
        result[property] = this.clone(value[property])
    })

    return result
  }

  /**
   * Clone a `value` deeply.
   * 
   * @param {any} value A value.
   * 
   * @returns {any} A deep copy.
  */
  static cloneWhenObject_(value) {
    if (typeof value === "object" && !Array.isArray(value))
      return this.clone(value)
    else
      return value
  }

  /**
   * Merge two objects deeply.
   * 
   * @example
   * ObjectUtils.merge({ name: "Emily" }, { age: 28 })
   * 
   * @example
   * getObjectUtils().merge({ name: "Emily" }, { age: 28 })
   * 
   * @param {object} first A first object.
   * @param {object} second A second object.
   * 
   * @returns {object} A deep merge.
  */
  static merge(first, second) {
    BasicUtils.requireObject(first, "first")
    BasicUtils.requireObject(second, "second")

    if (first === null && second === null)
      return null

    if (first !== null && second === null)
      return this.clone(first)
    if (second !== null && first === null)
      return this.clone(second)

    let result = {}

    for (const property in first)
      if (!second.hasOwnProperty(property))
        result[property] = this.cloneWhenObject_(first[property])

    for (const property in second) {
      let temporary = this.cloneWhenObject_(second[property])

      if (!first.hasOwnProperty(property)) {
        result[property] = temporary
      }
      else {
        if (typeof first[property] !== typeof second[property])
          result[property] = temporary
        else {
          if (Array.isArray(first[property]) && Array.isArray(second[property]))
            result[property] = first[property].concat(second[property])
          else if (typeof first[property] === "object")
            result[property] = this.merge(first[property], second[property])
          else
            result[property] = temporary
        }
      }
    }

    return result
  }

  /**
   * Get object's property names.
   * 
   * @example
   * ObjectUtils.propertyNames({ name: "Emily" })
   * 
   * @example
   * getObjectUtils().propertyNames({ name: "Emily" })
   * 
   * @param {object} value An object.
   * @param {string} prefix A prefix.
   * 
   * @returns {Array.<string>} Property names.
  */
  static propertyNames(value, prefix = "") {
    BasicUtils.requireObject(value, "value")

    prefix = prefix.replace(/^\./, "")
    let properties = []

    for (let property in value) {
      let path = `${prefix}.${property}`.replace(/^\./, "")

      if (typeof value[property] !== "object" || Array.isArray(value[property]))
        properties.push(path)
      else
        properties = [path, ...this.propertyNames(value[property], path)]
    }

    return properties
  }

  /**
   * Map object's properties.
   * 
   * @example
   * ObjectUtils.mapProperties({ age: 24 }, value => value + 1)
   * 
   * @example
   * getObjectUtils().mapProperties({ age: 24 }, value => value + 1)
   * 
   * @param {object} value An object.
   * @param {Converter} converter A converter.
   * 
   * @returns {object} A new object.
  */
  static mapProperties(object, converter) {
    BasicUtils.requireObject(object, "object")
    BasicUtils.requireFunction(converter, "converter")

    const mapped = {}

    Object.entries(object).forEach(pair => {
      const [property, value] = pair
      mapped[property] = converter(value)
    })

    return mapped
  }
}



