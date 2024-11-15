const { User} =  require('../../models')
const bcrypt = require('bcrypt')
const InvalidCredentialException = require('../../exceptions/invalid-credentials-exceptions')

class AuthController {
  async login(req, res) {

    // console.log(req.body)
    /**
     * req: Get req from client 
     * res: send response to client
     */
    //extract email and password
    const {email, password } = req.body;

    const user = await User.findOne({where :{email}})


   
    if(!user){
      throw new InvalidCredentialException('Invalid credentials');
    }



    if(!await bcrypt.compare(password,user.password)){
      throw new InvalidCredentialException('Invalid credentials');
    }



    res.send(user);
  }

  async register(req, res) {
    res.send("Register");

  }
}

module.exports = new AuthController();
