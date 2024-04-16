/**
 * Check whether two arrays are equal.
 * 
 * @param {Array} first A first array.
 * @param {Array} second A second array.
 * 
 * @returns {boolean} Whether two arrays are equal.
*/
function arraysEqual_(first, second) {
  Basic.requireArray(first, "first")
  Basic.requireArray(second, "second")
  Basic.requireExisting(first, "first")
  Basic.requireExisting(second, "second")

  if (first.length !== second.length)
    return false

  for (let i = 0; i < first.length; i++)
    if (first[i] !== second[i])
      return false
  
  return true
}