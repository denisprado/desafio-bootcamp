'use strict'
const Antl = use('Antl')

class Product {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      title: 'required',
      description: 'required',
      time: 'required'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Product
