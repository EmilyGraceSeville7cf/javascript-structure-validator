/**
 * Copy an object deeply.
 * 
 * @param {object} value An object.
 * 
 * @returns {Array.<string>} A deep copy.
*/
function deepCopy_(value) {
  return JSON.parse(JSON.stringify(value))
}

/**
 * Merge several objects deeply together.
 * 
 * @param {object} first A first object.
 * @param {object} second A second object.
 * 
 * @returns {object} A deep merge.
*/
function deepMerge_(first, second) {
  Basic.requireObject(first, "first")
  Basic.requireObject(second, "second")

  if (!Basic.isExisting(first) || Object.getOwnPropertyNames(first).length === 0)
    return deepCopy_(second)
  if (!Basic.isExisting(second) || Object.getOwnPropertyNames(second).length === 0)
    return deepCopy_(first)

  const result = {}

  for (let property in first)
    if (typeof first[property] !== "object" || first[property] === null)
      result[property] = first[property]

  for (let property in second) {
    if (Basic.isObject(first[property]) && Basic.isObject(second[property]))
      result[property] = deepMerge_(first[property], second[property])
    else
      result[property] = second[property]
  }

  return result
}

/**
 * Get object's property names.
 * 
 * @param {object} value A first object.
 * @param {string} prefix A prefix.
 * 
 * @returns {Array.<string>} Property names.
*/
function propertyNames_(value, prefix = "") {
  Basic.requireObject(value, "value")

  prefix = prefix.replace(/^\./, "")
  let properties = []

  for (let property in value) {
    let path = `${prefix}.${property}`.replace(/^\./, "")
    if (typeof value[property] !== "object")
      properties.push(path)
    else
      properties = [path, ...propertyNames_(value[property], path)]
  }

  return properties
}

