class ProductController {
    async index(req,res){
        const user = req.user
        return res.send('Product Index!')
    }
}

module.exports = new ProductController();