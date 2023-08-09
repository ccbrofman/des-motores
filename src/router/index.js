const usersController= require ('../users/controller.users')

const router = app =>{
    app.use ('/users', usersController)
    app.use ('/products', productsController)
} 

module.exports=router