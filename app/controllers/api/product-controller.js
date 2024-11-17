class ProductController {
    async index(req,res){
        return res.send('Product Index!')
    }
}

module.exports = new ProductController();