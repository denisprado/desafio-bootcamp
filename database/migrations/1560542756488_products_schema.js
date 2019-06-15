'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', table => {
      table.increments()
      table.timestamps()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('time').notNullable()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
