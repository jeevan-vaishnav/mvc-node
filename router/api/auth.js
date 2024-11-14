const AuthController = require("../../app/controllers/api/auth-controller");

module.exports = {
  group: {
    prefix: "/auth",
  },
  routes: [
    {
      method: "post",
      path: "/login",
      handler: AuthController.login,
    },
    {
      method: "post",
      path: "/register",
      handler: AuthController.register,
    },
  ],
};
