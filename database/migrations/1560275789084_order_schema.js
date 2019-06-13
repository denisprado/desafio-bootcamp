'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      table.timestamps()
      table.references('id').inTable('product').notNullable()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
