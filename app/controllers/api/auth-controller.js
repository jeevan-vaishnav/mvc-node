const { User} =  require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {appKey,tokenExpiresIN} = require('../../../config/app')
const UserRepository = require('../../repositories/user-repository');
const AuthServices = require('../../services/auth-services')

const InvalidCredentialException = require('../../exceptions/invalid-credentials-exceptions')

class AuthController {
  async login(req, res) {
    const {email, password } = req.body;

    // const user = await User.findOne({where :{email}})
    
    const user  = await UserRepository.findByEmail(email);

    // if(!user){
    //   throw new InvalidCredentialException('Invalid credentials');
    // }

    if(!await AuthServices.isPasswordAMatch(password,user.password)){
      throw new InvalidCredentialException('Invalid credentials');
    }
    const payload = {id:user.id,email:user.email,firstName:user.firstName,lastName:user.lastName}
    // const key = require('crypto').randomBytes(64).toString('hex');
    // console.log(key);
    const accessToken = await AuthServices.generateToken(payload);

    res.send({user,...{accessToken}});
  }

  async register(req, res) {
    res.send("Register");

  }
}

module.exports = new AuthController();
