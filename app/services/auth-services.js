const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const {appKey,tokenExpiresIN} = require('../../config/app')
class AuthServices {
    
    async isPasswordAMatch(attempted,original){
        return await bcrypt.compare(attempted,original)
    }

    async generateToken(payload){
        return jwt.sign(payload,appKey,{expiresIn:tokenExpiresIN})
    }
}


module.exports = new AuthServices()