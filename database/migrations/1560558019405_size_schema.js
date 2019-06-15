'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SizeSchema extends Schema {
  up () {
    this.create('sizes', table => {
      table.increments()
      table.timestamps()
      table
        .integer('topping_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('toppings')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title').notNullable()
      table.integer('price').notNullable()
    })
  }

  down () {
    this.drop('sizes')
  }
}

module.exports = SizeSchema
