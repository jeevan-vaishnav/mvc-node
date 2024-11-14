const { User} =  require('../../models')

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
      return res.status(403).send('Invalid login credentials!')
    }

    if(password !== user.password){
      return res.status(403).send('Invalid login credentials!')
    }



    res.send(user);
  }

  async register(req, res) {
    res.send("Register");
  }
}

module.exports = new AuthController();
