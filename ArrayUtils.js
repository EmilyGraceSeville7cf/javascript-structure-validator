/**
 * Array utilities.
 */
class ArrayUtils {
  /**
   * Check whether two arrays are equal.
   * 
   * @param {Array} first A first array.
   * @param {Array} second A second array.
   * 
   * @returns {boolean} Whether two arrays are equal.
  */
  static equal(first, second) {
    BasicUtils.requireArray(first, "first")
    BasicUtils.requireArray(second, "second")
    BasicUtils.requireExisting(first, "first")
    BasicUtils.requireExisting(second, "second")

    if (first.length !== second.length)
      return false

    for (let i = 0; i < first.length; i++)
      if (first[i] !== second[i])
        return false

    return true
  }
}