'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Topping extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }

  sizes () {
    return this.hasMany('App/Models/Size')
  }
}

module.exports = Topping
