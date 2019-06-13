'use strict'

const Cart = require('App/Models/Cart')

class CartController {
    show({ request }) {
        const cart = Cart.find(request.id)
        return cart
    }

    async store({ request }) {
        const user = request.only(['user_id'])

        const cart = await Cart.create(user)
        return cart
    }

}

module.exports = CartController
