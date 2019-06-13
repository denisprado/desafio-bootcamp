'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    topping() {
        return this.hasOne('App/Models/Topping')
    }

    size() {
        return this.hasOne('App/Models/Size')
    }
}

module.exports = Product
