'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SizeSchema extends Schema {
  up() {
    this.create('sizes', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 80).unique().notNullable()
    })
  }

  down() {
    this.drop('sizes')
  }
}

module.exports = SizeSchema
