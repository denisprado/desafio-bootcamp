'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  toppings () {
    return this.hasMany('App/Models/Topping')
  }
}

module.exports = Product
