'use strict'

const Size = use('App/Models/Size')

class SizeController {
  async index ({ params }) {
    const sizes = await Size.query()
      .where('topping_id', params.toppings_id)
      .with('topping')
      .fetch()

    return sizes
  }

  async store ({ params, request }) {
    const data = request.only(['title', 'price', 'file_id', 'topping_id'])

    const size = await Size.create({
      ...data,
      topping_id: params.toppings_id
    })

    return size
  }
}

module.exports = SizeController
