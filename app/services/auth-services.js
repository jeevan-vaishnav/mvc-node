const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {appKey,tokenExpiresIN} = require('../../config/app')
const Tokenizer = require('../modules/tokenizer')
class AuthServices {
    
    async isPasswordAMatch(attempted,original){
        return await bcrypt.compare(attempted,original)
    }

    async generateTokens(payload){
        return {
            accessToken:Tokenizer.generateAccessToken(payload),
            refreshToken:Tokenizer.generateRefreshToken(64)

        }
    }
}


module.exports = new AuthServices()