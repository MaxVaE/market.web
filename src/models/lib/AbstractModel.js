import Joi from 'joi'

export default class AbstractModel {
  constructor (data, schema, options = {}) {
    try {
      const { error, value } = Joi.validate(
        (data instanceof Function) ? data(this) : data,
        (schema instanceof Function) ? schema() : schema,
        options
      )
      if (error) {
        throw new Error(`${error}`)
      }
      Object.assign(this, value)
    } catch (e) {
      throw e
    }
  }
}
