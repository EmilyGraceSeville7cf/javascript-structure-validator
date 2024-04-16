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
  
  if (!Basic.isExisting(first))
    return second
  if (!Basic.isExisting(second))
    return first

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