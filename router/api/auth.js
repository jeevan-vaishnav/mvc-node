const AuthController = require("../../app/controllers/api/auth-controller");
const  {validate} = require('../../app/middleware/validate')
const loginRules = require('../../app/validators/auth/login')

module.exports = {
  group: {
    prefix: "/auth",
  },
  routes: [
    {
      method: "post",
      path: "/login",
      middleware:[loginRules,validate],
      handler: AuthController.login,
    },
    {
      method: "post",
      path: "/register",
      handler: AuthController.register,
    },
  ],
};
