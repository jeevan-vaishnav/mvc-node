/**Web pages */
const PageController = require('../../app/controllers/web/page-controller')

module.exports = {
  group: {
    prefix:'/'
  },
  routes: [
    {
      method: "get",
      path: "",
      handler: PageController.home
    },
    {
      method: "get",
      path: "about",
      handler: PageController.about
    },
    {
      method: "get",
      path: "contact",
      handler: PageController.contact
    },
  ],
};
