const UnauthenticatedException = require('../exceptions/unauthenticated-token-exceptions')
const jwt = require('jsonwebtoken')

const appConfig = require('../../config/app')
const UserRepository = require('../repositories/user-repository')
exports.auth = async(req,res,next) =>{
    const authHeader = req.headers.authorization
    // console.log(authHeader)
    const token  = authHeader && authHeader.split(' ')[1]

    if(!token) return next(new UnauthenticatedException())

    await jwt.verify(token,appConfig.appKey,async(err,user)=>{
        if(err) return next(new UnauthenticatedException())

        try {
            res.user = await UserRepository.findById(user.id)
            next();

        } catch (error) {
            return res.status(error.status || 401).send({message:'User not found'})
        }
    })

    console.log(token)
}