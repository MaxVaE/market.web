import Joi from 'joi'
import AbstractModel from './AbstractModel'

const schemaFactory = () => ({
  id: Joi.string().required(),
  from: Joi.string().required(),
  text: Joi.string().required(),
  timestamp: Joi.date().required()
})

export default class MessageModel extends AbstractModel {
  constructor (data, options) {
    super(data, schemaFactory, options)
    Object.freeze(this)
  }

  static fromJson (data, context, options) {
    if (data == null) {
      return null
    }

    return new MessageModel({
      ...data,
      timestamp: new Date(data.timestamp)
    })
  }
}
