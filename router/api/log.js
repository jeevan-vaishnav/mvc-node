const LogController = require("../../app/controllers/api/log-controller");

const {auth} = require('../../app/middleware/auth')

module.exports = {
  group: {
    prefix: "/logs",
    middleware:[auth]
  },
  routes: [
    {
      method: "get",
      path: "/",
      handler: LogController.index,
    },
    {
        method:'get',
        path:'/:date',
        handler:LogController.show
    }
  ],
};
