'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToppingSchema extends Schema {
  up() {
    this.create('toppings', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 80)
      table.references('id').inTable('size').notNullable()
    })
  }

  down() {
    this.drop('toppings')
  }
}

module.exports = ToppingSchema
