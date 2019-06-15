'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User')
Route.get('/users', 'UserController.index')

Route.post('/sessions', 'SessionController.store').validator('Session')

Route.post('/passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('/passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.post('/files', 'FileController.store')
  Route.get('/files', 'FileController.store')
  Route.resource('products', 'ProductController')
    .apiOnly()
    .validator(new Map([[['products.store'], ['Product']]]))
  Route.resource('products.toppings', 'ToppingController')
    .apiOnly()
    .validator(new Map([[['products.toppings.store'], ['Topping']]]))
  Route.resource('toppings.sizes', 'SizeController').apiOnly()
}).middleware(['auth'])
