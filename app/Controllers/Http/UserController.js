'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserController {
  async index () {
    const users = await User.all()

    return users
  }

  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const adresses = request.input('adresses')

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)
    await user.adresses().createMany(adresses, trx)
    await trx.commit()

    return user
  }
}

module.exports = UserController
