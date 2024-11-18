const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { appKey, tokenExpiresIN } = require("../../../config/app");
const UserRepository = require("../../repositories/user-repository");
const AuthServices = require("../../services/auth-services");
const nodemailer = require("nodemailer");
const mailConfig = require("../../../config/mail");

const InvalidCredentialException = require("../../exceptions/invalid-credentials-exceptions");
const mail = require("../../../config/mail");

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    // const user = await User.findOne({where :{email}})

    const user = await UserRepository.findByEmail(email);

    // if(!user){
    //   throw new InvalidCredentialException('Invalid credentials');
    // }

    if (!(await AuthServices.isPasswordAMatch(password, user.password))) {
      throw new InvalidCredentialException("Invalid credentials");
    }
    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    // const key = require('crypto').randomBytes(64).toString('hex');
    // console.log(key);
    const tokens = await AuthServices.generateTokens(payload);

    res.send({ user, ...tokens });
  }

  async register(req, res) {
    const { firstName, lastName, email, password } = req.body;
    // const data = {firstName,lastName,email,password}
    // const user = await UserRepository.create(data)
    // const tokens = await AuthServices.generateTokens(data);

    const transporter = nodemailer.createTransport({
      host: mailConfig.smtp.host,
      port: mailConfig.smtp.port,
      auth: mailConfig.smtp.auth,
    });

    const message = {
      from: mailConfig.from,
      to: email,
      subject: "Email verification",
      html: "<div><h1>Please verify your email</h1>button>Verify email</button></div>",
    };

    await transporter.sendMail(message);

    res.send("Works");
    // res.send({user,...tokens});
  }
}

module.exports = new AuthController();
