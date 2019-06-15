'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  topping () {
    return this.belongsTo('App/Models/Topping')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Size
