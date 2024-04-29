/**
 * A record entry that allows faster schema creation for simple cases.
 */
class RecordEntry {
  /**
    * @param {string} name A property name
    * @param {UniversalValidator} validator A validator
   */
  constructor(name, validator) {
    this.name_ = name
    this.validator_ = validator
    Object.freeze(this)
  }

  /**
   * Require property to be positive.
   * 
   * @type {RecordEntry}
   */
  get positive() {
    this.validator_.greaterThan(0)
    return this
  }

  /**
   * Require property to be zero.
   * 
   * @type {RecordEntry}
   */
  get zero() {
    this.validator_.equalTo(0)
    return this
  }

  /**
   * Require property to be negative.
   * 
   * @type {RecordEntry}
   */
  get negative() {
    this.validator_.lessThan(0)
    return this
  }

  /**
   * Require property not to be an empty string.
   * 
   * @type {RecordEntry}
   */
  get filled() {
    this.validator_.withLengthGreaterThan(0).matching(/[^ ]/)
    return this
  }
}