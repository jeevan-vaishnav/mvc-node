const AuthController = require("../../app/controllers/api/auth-controller");
const  {validate} = require('../../app/middleware/validate')
const authRules = require('../../app/validators/auth/index')
module.exports = {
  group: {
    prefix: "/auth",
  },
  routes: [
    {
      method: "post",
      path: "/login",
      middleware:[authRules.login,validate],
      handler: AuthController.login,
    },
    {
      method: "post",
      path: "/register",
      middleware:[authRules.register,validate],
      handler: AuthController.register,
    },
  ],
};
