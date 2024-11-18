const {validationResult} = require('express-validator')

exports.validate = (req,res,next)=>{
    const errors = validationResult(req)
    
    console.log(errors)

    if(!errors.isEmpty()) return res.status(422).send({errors:errors.errors})

    next()
}