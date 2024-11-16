const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {appKey,tokenExpiresIN} = require('../../config/app')
const Tokenizer = require('../modules/tokenizer')

const {RefreshToken} = require('../models')

class AuthServices {
    
    async isPasswordAMatch(attempted,original){
        return await bcrypt.compare(attempted,original)
    }

    async generateTokens(payload){

        const refreshToken = Tokenizer.generateRefreshToken(64)

        await RefreshToken.create({
            token:refreshToken,
            userId:payload.id
        })
        return {
            accessToken:Tokenizer.generateAccessToken(payload),
            refreshToken
        }
    }
}


module.exports = new AuthServices()