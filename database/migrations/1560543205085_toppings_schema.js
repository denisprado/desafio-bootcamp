'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToppingsSchema extends Schema {
  up () {
    this.create('toppings', table => {
      table.increments()
      table.timestamps()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
    })
  }

  down () {
    this.drop('toppings')
  }
}

module.exports = ToppingsSchema
