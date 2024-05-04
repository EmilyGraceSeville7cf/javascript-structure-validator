

/**
 * @param {string} name
 * @param {UniversalValidator} validator
 * 
 * @returns {RecordEntry}
 */
function entry_(name, validator) {
  return new RecordEntry(name, validator)
}

/**
 * Create a record property of a boolean type.
 * 
 * @param {string} name A property name.
 * 
 * @returns {RecordEntry} The record data.
 */
function bool(name) {
  throwOnFailure(name, isString({ from: 1 }))

  return entry_(name, isBoolean())
}

/**
 * Create a record property of a number type.
 * 
 * @param {string} name A property name.
 * 
 * @returns {RecordEntry} The record data.
 */
function num(name) {
  throwOnFailure(name, isString({ from: 1 }))

  return entry_(name, isNumber())
}

/**
 * Create a record property of an integer type.
 * 
 * @param {string} name A property name.
 * 
 * @returns {RecordEntry} The record data.
 */
function int(name) {
  throwOnFailure(name, isString({ from: 1 }))

  return entry_(name, isInteger())
}

/**
 * Create a record property of a string type.
 * 
 * @param {string} name A property name.
 * 
 * @returns {RecordEntry} The record data.
 */
function str(name) {
  throwOnFailure(name, isString({ from: 1 }))

  return entry_(name, isString())
}

/**
 * Create a record from a record data.
 * 
 * @param {Array.<RecordEntry>} name Record properties data.
 * 
 * @returns {UniversalValidator} The validator.
 */
function record(...recordData) {
  BasicUtils.requireArray(recordData, "recordData")
  recordData.forEach((data, index) => BasicUtils.requireRecordEntry(data, "recordData", index))
  
  let properties = {}
  recordData.forEach(data => properties[data.name_] = data.validator_)

  return isObject().withRequiredProperties(properties).withNotAdditionalProperties()
}