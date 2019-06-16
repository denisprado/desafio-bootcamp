'use strict'

const Topping = use('App/Models/Topping')
const Size = use('App/Models/Size')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with toppings
 */
class ToppingController {
  /**
   * Show a list of all toppings.
   * GET toppings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params }) {
    const toppings = await Topping.query()
      .where('product_id', params.products_id)
      .with('sizes')
      .fetch()

    return toppings
  }

  /**
   * Create/save a new topping.
   * POST toppings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request }) {
    const data = request.only(['title', 'file_id', 'size_id', 'description'])

    const topping = await Topping.create({
      ...data,
      product_id: params.products_id
    })

    return topping
  }

  /**
   * Display a single topping.
   * GET toppings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const topping = await Topping.findOrFail(params.id)
    return topping
  }

  /**
   * Update topping details.
   * PUT or PATCH toppings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const topping = await Topping.findOrFail(params.id)
    const data = request.only(['title', 'file_id'])
    topping.merge(data)

    await topping.save()

    return topping
  }

  /**
   * Delete a topping with id.
   * DELETE toppings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const topping = await Topping.findOrFail(params.id)
    await topping.delete()
  }
}

module.exports = ToppingController
