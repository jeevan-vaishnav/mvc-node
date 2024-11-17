const ProductController = require('../../app/controllers/api/product-controller')
module.exports = {
    group:{
        prefix:'/products'
    },
    routes:[{
        method:'get',
        path:'/',
        handler:ProductController.index
    }]
}