const ProductController = require('../../app/controllers/api/product-controller')
const {auth} = require('../../app/middleware/auth')
module.exports = {
    group:{
        prefix:'/products',
        middleware:[auth]
    },
    routes:[{
        method:'get',
        path:'/',
        middleware:[auth],
        handler:ProductController.index
    }]
}